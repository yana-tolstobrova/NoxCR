<?php

namespace App\Http\Controllers;

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use Cloudinary\Configuration\Configuration;
use Cloudinary\Api\Upload\UploadApi;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
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
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif',
                'detail' => 'required',
            ]);

            $imagePath = null;

            if ($request->hasFile('image')) {
                $uploadedFile = $request->file('image')->getRealPath();
    
                Configuration::instance([
                    'cloud' => [
                      'cloud_name' => 'noxcr', 
                      'api_key' => '711534858381223', 
                      'api_secret' => 'LqQSOZX4HD8h7T2_1r0q7p0Np3U'],
                    'url' => [
                      'secure' => true]]);
    
                $uploadApi = new UploadApi();
    
                $cloudinaryUpload = $uploadApi->upload($uploadedFile);

                $imagePath = $cloudinaryUpload['secure_url'];
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


    // Metodos Favorite ---> 1.User can add Favorite Place

    public function isFavorite($id)
    {
        $user = Auth::user();
        Product::find($id);

        return response()->json([
            'res' => true
        ], 200);


       
    }




}
