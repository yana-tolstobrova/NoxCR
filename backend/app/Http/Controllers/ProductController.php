<?php

namespace App\Http\Controllers;

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Photo;
use App\Models\Color;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use Cloudinary\Configuration\Configuration;
use Cloudinary\Api\Upload\UploadApi;
use Illuminate\Support\Facades\Auth;

Configuration::instance([
    'cloud' => [
      'cloud_name' =>  env('CLOUDINARY_CLOUD_NAME'), 
      'api_key' => env('CLOUDINARY_API_KEY'), 
      'api_secret' => env('CLOUDINARY_API_SECRET'),],
    'url' => [
      'secure' => true]]);

class ProductController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('checkUserRole', ['except' => ['index', 'search', 'show', 'editQuantity', 'addFavorite','removeFavorite','showFavorites', 'getPhoto', 'getColor', 'showColors', 'deletePhoto']]);
    //       } 

    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }
    public function getPhoto()
    {
        $photos = Photo::all();
        return response()->json($photos);
    }
    public function getColor()
    {
        $colors = Color::all();
        return response()->json($colors);
    }
    public function showColors($productId)
    {
        $product = Product::findOrFail($productId);
        $colors = $product->colors; 

        return response()->json($colors);
    }
    public function store(Request $request): JsonResponse
{
    try {
        $request->validate([
            'name' => 'required',
            'category' => 'required',
            'quantity' => 'required|integer|min:0',
            'price' => 'required|numeric|min:0',
            'collection' => 'nullable',
            'colors' => 'nullable',
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
            'detail' => 'required',
        ]);

        $product = Product::create([
            'name' => $request->input('name'),
            'category' => $request->input('category'),
            'quantity' => $request->input('quantity'),
            'price' => $request->input('price'),
            'collection' => $request->input('collection'),
            'detail' => $request->input('detail'),
        ]);
        $selectedColorValues = json_decode($request->input('colors'));
        $colorIds = [];
        foreach ($selectedColorValues as $colorValue) {
            $color = Color::firstOrCreate(['name' => $colorValue]);
            $colorIds[] = $color->id;
        }
        $product->colors()->sync($colorIds);

        $imageUrls = [];

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $imageFile) {
                $uploadedFile = $imageFile->getRealPath();

                $uploadApi = new UploadApi();

                $cloudinaryUpload = $uploadApi->upload($uploadedFile);

                $imagePath = $cloudinaryUpload['secure_url'];

                $photo = Photo::create([
                    'url' => $imagePath, 
                    'product_id' => $product->id,
                ]);

                $imageUrls[] = $imagePath;
            }
        }

        return response()->json(['success' => true, 'message' => '¡Producto agregado exitosamente!', 'image_urls' => $imageUrls]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
    }
}

    public function show($id)
    {
        $user = Auth::user();
        try {
            $product = Product::findOrFail($id);
            return response()->json($product);
        } catch (\Exception $e) {
            return response()->json(['error' => 'El producto no se encontró.'], 404);
        }
    }
    public function edit($id): JsonResponse
    {
        $user = Auth::user();
        try {
            $product = Product::findOrFail($id);
        
            return response()->json($product);
        } catch (\Exception $e) {
            return response()->json(['error' => 'El producto no se encontró.'], 404);
        }
    }

    public function editQuantity(Request $request, $id): JsonResponse
    {
        try {
            $product = Product::findOrFail($id);

            $request->validate([
                'quantity' => 'required|integer|min:0',
            ]);

            $newQuantity = $request->input('quantity');
    
            if ($newQuantity < 0) {
                return response()->json(['error' => 'La nueva cantidad debe ser mayor o igual a cero.'], 400);
            }

            $product->quantity = $newQuantity;
            $product->save();

            return response()->json(['success' => true, 'message' => '¡Cantidad del producto actualizada exitosamente!']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }
    

    public function update(Request $request, $id): JsonResponse
{
    try {
        $product = Product::findOrFail($id);

        $request->validate([
            'name' => 'required',
            'category' => 'required',
            'quantity' => 'required|integer|min:0',
            'price' => 'required|numeric|min:0',
            'collection' => 'nullable',
            'colors' => 'nullable',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg',
            'detail' => 'required',
        ]);
        
        $selectedColorValues = json_decode($request->input('colors'));
        $colorIds = [];
        foreach ($selectedColorValues as $colorValue) {
            $color = Color::firstOrCreate(['name' => $colorValue]);
            $colorIds[] = $color->id;
        }

        $imageUrls = [];

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $imageFile) {
                $uploadedFile = $imageFile->getRealPath();

                $uploadApi = new UploadApi(); 

                $cloudinaryUpload = $uploadApi->upload($uploadedFile);

                $imagePath = $cloudinaryUpload['secure_url'];

                $photo = Photo::create([
                    'url' => $imagePath, 
                    'product_id' => $product->id,
                ]);

                $imageUrls[] = $imagePath;
            }
        }

        $product->update([
            'name' => $request->input('name'),
            'category' => $request->input('category'),
            'quantity' => $request->input('quantity'),
            'price' => $request->input('price'),
            'collection' => $request->input('collection'),
            'detail' => $request->input('detail'),
        ]);        

        $product->colors()->sync($colorIds);

        return response()->json([
            'success' => true,
            'message' => '¡Producto actualizado exitosamente!',
            'image_urls' => $imageUrls,
        ]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
    }
}
    public function destroy($id): JsonResponse
{
    try {
        $product = Product::findOrFail($id);

        if ($product->photo) {

            $product->photo->delete();
        }

        $product->delete();

        return response()->json(['success' => true, 'message' => '¡Producto eliminado exitosamente!']);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
    }
}
public function deletePhoto($id): JsonResponse
{
    try {
        $photo = Photo::findOrFail($id);

        $photo->delete();

        return response()->json(['success' => true, 'message' => '¡Imagen eliminada exitosamente!']);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
    }
}
    public function search(Request $request)
    {
        $searchTerm = $request->input('term');

        $products = Product::where(function ($query) use ($searchTerm) {
            $query->where('name', 'LIKE', "%$searchTerm%")
                ->orWhere('collection', 'LIKE', "%$searchTerm%");
        })->get();

        return response()->json($products);
    }


    // Metodos Favorites ---> 2.User can add Favorite Place

    public function addFavorite($id)
    {
        $user = Auth::user();
        $product=Product::find($id);

        $product->isFavorite()->attach($user);

        return response()->json([
            'res' => true,
            'msg' => 'el producto se ha añadido a tu lista de favoritos'
        ], 200);

    }

     // Metodos Favorites ---> 2.User puede ver todos sus favoritos
        public function showFavorites(){
            
            $user = Auth::user();
            
            $userFavorites=$user->isFavorite()->get();
    
            return response()->json(
                $userFavorites
            , 200);
            }


 // Metodos Favorites ---> 2.Usuario puede desmarcar/retirar un favorito de la lista     
        public function removeFavorite($id){
            
            $user = Auth::user();
            $product=Product::find($id);
    
            $product->isFavorite()->detach($user);
        
                return response()->json([
                    'res' => false,
                    'msg' => 'el producto se ha retirado de tu lista de favoritos'
                ], 200);

                }

}