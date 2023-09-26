<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderLine;

class OrderLineController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                'order_id' => 'required|integer|exists:orders,id',
                'product_id' => 'required|integer|exists:products,id',
                'name' => 'required|string|max:255',
                'quantity' => 'required|integer|min:1',
                'price' => 'required|numeric|min:0',
            ]);

            $orderLine = OrderLine::create([
                'order_id' => $request->input('order_id'),
                'product_id' => $request->input('product_id'),
                'name' => $request->input('name'),
                'quantity' => $request->input('quantity'),
                'price' => $request->input('price'),
            ]);

            return response()->json(['success' => true, 'message' => '¡Línea de orden creada exitosamente!']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }
}
