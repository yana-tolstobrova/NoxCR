<?php
  
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Mail;
use App\Mail\DemoMail;
use App\Mail\orderConfirmation;
use App\Models\User;
use Symfony\Component\Mime\Part\TextPart;
use Symfony\Component\Mime\Part\File;
  
class MailController extends Controller
{
    /**
     * Write code on Method
     *
     * @return response()
     */

    public function sendConfirmationEmail(Request $request)
    {
        // $order = Order::create([
        //     'user_id'=> $user->id,
        //     'address' => $request->address, 
        //     'phone' => $request->phone,
        //     'date_ordered' => now(),
        //     'total_amount' => $request->total_amount,
        //     'shipping_type' => $request->shipping_type,
        // ]);
    
        $adminMail = 'noxcr.mailing@gmail.com';

    //     order_id: orderId,
    //   name: formData.name_complete,
    //   cedula: formData.cedula,
    //   address: formData.address,
    //   total_amount: formData.total_amount,
    //   shipping_type:formData.shipping_type,
    //   cart: cart

    $user = Auth::user();

       $orderData= [
                'order_id'=> $request->order_id, 
                'name' => $request->name, 
                'adress' => $request->adress,
                'product_name' => "",
                'quantity' => "",
                'price' => "",
                'total_amount' => $request->total_amount,          
            ];

            Mail::to($user->email)
                    ->cc($adminMail)
                    ->send(new orderConfirmation($orderData));

         dd ("Email is sent successfully.");
    }

}