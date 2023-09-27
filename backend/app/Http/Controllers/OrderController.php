<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;
use Mail;
use App\Mail\orderConfirmation;

class OrderController extends Controller
{
    public function show()
    {
        $orders = Order::all();
        return response()->json($orders);
    }

    public function store(Request $request)
    {
        
        $user = Auth::user();
        $adminMail = 'noxcr.mailing@gmail.com';

        try {
            $request->validate([
                'address' => 'required|string|max:255',
                'phone' => 'required|string|max:20',
                'total_amount' => 'required|numeric|min:0',
            ]);

            $order = Order::create([
                'user_id'=> $user->id,
                'address' => $request->address, 
                'phone' => $request->phone,
                'date_ordered' => now(),
                'total_amount' => $request->total_amount,
            ]);

            Mail::to($request->user())
                ->cc($adminMail)
                ->send(new OrderShipped($order));
            
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



















// namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
// use App\Models\Order;
// use Illuminate\Support\Facades\DB; 

// class OrderController extends Controller
// {
//     public function store(Request $request)
//     {
//         $user = Auth::user();
//         try {
//             $request->validate([
//                 'address' => 'required|string|max:255',
//                 'phone' => 'required|string|max:20',
//                 'total_amount' => 'required|numeric|min:0',
//             ]);

//             // Inicia una transacción de base de datos
//             DB::beginTransaction();

//             $order = Order::create([
//                 'user_id' => $user->id,
//                 'address' => $request->address,
//                 'phone' => $request->phone,
//                 'date_ordered' => now(),
//                 'total_amount' => $request->total_amount,
//             ]);

//             // Llama al controlador OrderLineController para crear las líneas de orden
//             app(OrderLineController::class)->store($request);

//             // Completa la transacción
//             DB::commit();

//             return response()->json(['success' => true, 'message' => '¡Orden creada exitosamente!']);
//         } catch (\Exception $e) {
//             // En caso de error, revierte la transacción
//             DB::rollback();

//             return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
//         }
//     }
// }