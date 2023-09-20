<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

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
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images'), $imageName);
                $imagePath = 'images/' . $imageName;
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
}
