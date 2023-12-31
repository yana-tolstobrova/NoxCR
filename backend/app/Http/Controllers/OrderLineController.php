<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\OrderLine;
use App\Models\Order;

class OrderLineController extends Controller
{
    public function index()
    {
        $orderLines = OrderLine::all();
        $orderLinesInfo = [];
    
        foreach ($orderLines as $orderLine) {
            $orderLineInfo = [
                'id' => $orderLine->id,
                'order_id' => $orderLine->order_id,
                'name' => $orderLine->name,
                'quantity' => $orderLine->quantity,
                'price' => $orderLine->price,
            ];
    
            $orderLinesInfo[] = $orderLineInfo;
        }
    
        return response()->json(['order-lines' => $orderLinesInfo]);
    }
    public function show()
    {
        $orderLines = OrderLine::all();
        return response()->json($orderLines);
    }
    public function store(Request $request)
    {
        $user = Auth::user();
        try {
            $request->validate([
                'order_id' => 'required|integer|exists:orders,id',
                'product_id' => 'required|integer|exists:products,id',
                'name' => 'required|string|max:255',
                'quantity' => 'required|integer|min:1',
                'price' => 'required|numeric|min:0',
            ]);

            $orderLine = OrderLine::create([
                // 'user_id'=> $user->id,
                'order_id' => $request->order_id,
                'product_id' => $request->product_id,
                'name' => $request->name,
                'quantity' => $request->quantity,
                'price' => $request->price,
            ]);

            return response()->json(['success' => true, 'message' => '¡Línea de orden creada exitosamente!']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }
}
