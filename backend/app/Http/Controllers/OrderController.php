<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;

class OrderController extends Controller
{
    
    public function store(Request $request)
    {
        $user = Auth::user();
        try {
            $request->validate([
                // 'user_id' => 'required|integer|exists:users,id',
                'address' => 'required|string|max:255',
                'phone' => 'required|string|max:20',
                'total_amount' => 'required|numeric|min:0',
            ]);

            $order = Order::create([
                // 'user_id' => Auth::user()->id,
                // 'user_id' => $request->input('user_id'),
                'user_id'=> $user->id,
                'address' => $request->address, 
                'phone' => $request->phone,
                'date_ordered' => now(),
                'total_amount' => $request->total_amount,
            ]);

            return response()->json(['success' => true, 'message' => '¡Orden creada exitosamente!']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }

}
