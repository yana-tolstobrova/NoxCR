<?php

namespace App\Http\Controllers;

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Photo;
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
    public function __construct()
    {
        $this->middleware('checkUserRole', ['except' => ['index', 'search', 'show', 'editQuantity', 'addFavorite','removeFavorite','showFavorites']]);
          } 

    public function index()
    {
        $products = Product::all();
        return response()->json($products);
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
                'color' => 'nullable',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg',
                'detail' => 'required',
            ]);

            $imagePath = null;
            $imageId = null;

            if ($request->hasFile('image')) {
                $uploadedFile = $request->file('image')->getRealPath();
    
                $uploadApi = new UploadApi();
    
                $cloudinaryUpload = $uploadApi->upload($uploadedFile);

                $imagePath = $cloudinaryUpload['secure_url'];
                $imageId = $cloudinaryUpload['public_id'];
            }
            $product = Product::create([
                'name' => $request->input('name'),
                'category' => $request->input('category'),
                'quantity' => $request->input('quantity'),
                'price' => $request->input('price'),
                'collection' => $request->input('collection'),
                'color' => $request->input('color'),
                'image' => $imagePath,
                'detail' => $request->input('detail'),
            ]);
            $photo = Photo::create([
                'url' => $imagePath,
                'public_id' => $imageId,
                'product_id' => $product->id,
            ]);

            return response()->json(['success' => true, 'message' => '¡Producto agregado exitosamente!']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        try {
            $product = Product::findOrFail($id);
            return response()->json($product);
        } catch (\Exception $e) {
            return response()->json(['error' => 'El producto no se encontró.'], 404);
        }
    }
    public function edit($id): JsonResponse
    {
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
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif',
                'collection' => 'nullable',
                'color' => 'nullable',
                'detail' => 'required',
            ]);

            $imagePath = $product->image;

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->storeAs('public/images', $imageName);
                $imagePath = 'images/' . $imageName;

                if ($product->image) {
                    Storage::delete('public/' . $product->image);
                }
            }

            $product->update([
                'name' => $request->input('name'),
                'category' => $request->input('category'),
                'quantity' => $request->input('quantity'),
                'price' => $request->input('price'),
                'image' => $imagePath,
                'collection' => $request->input('collection'),
                'color' => $request->input('color'),
                'detail' => $request->input('detail'),
            ]);

            return response()->json(['success' => true, 'message' => '¡Producto actualizado exitosamente!']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }

    public function destroy($id): JsonResponse
{
    try {
        $product = Product::findOrFail($id);

        if ($product->image) {
            Storage::delete('public/' . $product->image);
        }
        
        // Check if the product has an associated photo
        if ($product->photo) {
            $publicId = $product->photo->public_id;
            

            // Initialize the Cloudinary API client
            // $uploadApi = new UploadApi();
            // $uploadApi->destroy($publicId);
            Cloudinary::destroy($publicId);

            $product->photo->delete();
        }

        $product->delete();

        return response()->json(['success' => true, 'message' => '¡Producto eliminado exitosamente!']);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
    }
}

    public function search(Request $request)
    {
        $searchTerm = $request->input('term');

        $products = Product::where(function ($query) use ($searchTerm) {
            $query->where('name', 'LIKE', "%$searchTerm%")
                ->orWhere('collection', 'LIKE', "%$searchTerm%")
                ->orWhere('color', 'LIKE', "%$searchTerm%");
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
