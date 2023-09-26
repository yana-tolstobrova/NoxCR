<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    
    public function store(Request $request)
    {
        try {
            $request->validate([
                'user_id' => 'required|integer|exists:users,id',
                'address' => 'required|string|max:255',
                'phone' => 'required|string|max:20',
                'birthday' => 'required|date',
                'total_amount' => 'required|numeric|min:0',
            ]);

            $order = Order::create([
                // 'user_id' => auth()->user()->id,
                'user_id' => $request->input('user_id'),
                'address' => $request->input('address'),
                'phone' => $request->input('phone'),
                'birthday' => $request->input('birthday'),
                'date_ordered' => now(),
                'total_amount' => $request->input('total_amount'),
            ]);

            return response()->json(['success' => true, 'message' => '¡Orden creada exitosamente!']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }

}
