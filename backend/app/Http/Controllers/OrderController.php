<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderController extends Controller
{
        /**
     * Crea una nueva orden.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|integer',
            'address' => 'required|string',
            'phone' => 'required|string',
        ]);

        try {
            $order = Order::create([
                'user_id' => $request->input('user_id'),
                'address' => $request->input('address'),
                'phone' => $request->input('phone'),
            ]);

            return response()->json([
                'message' => 'Orden creada con éxito',
                'data' => $order,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al crear la orden',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
