<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all();
        $ordersInfo = [];
    
        foreach ($orders as $order) {
            $orderInfo = [
                'id' => $order->id,
                'user_id' => $order->user_id,
                'total_amount' => $order->total_amount,
                'shipping_type' => $order->shipping_type,
                'created_at' => $order->created_at,
                'address' => $order->address,
                'phone' => $order->phone,
            ];
    
            $ordersInfo[] = $orderInfo;
        }
    
        return response()->json(['orders' => $ordersInfo]);
    }
    public function show()
    {
        $orders = Order::all();
        return response()->json($orders);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        try {
            $request->validate([
                'address' => 'required|string|max:255',
                'phone' => 'required|string|max:20',
                'total_amount' => 'required|numeric|min:0',
                'shipping_type'=> 'required|string|max:30',
            ]);

            $order = Order::create([
                'user_id'=> $user->id,
                'address' => $request->address, 
                'phone' => $request->phone,
                'date_ordered' => now(),
                'total_amount' => $request->total_amount,
                'shipping_type' => $request->shipping_type,
            ]);

            return response()->json(['success' => true, 'data' => $order]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }
    public function showOrderDetails($id)
    {
        try {
            $order = Order::findOrFail($id);
            return response()->json($order);
        } catch (\Exception $e) {
            return response()->json(['error' => 'La orden no se encontró.'], 404);
        }
    }

}

