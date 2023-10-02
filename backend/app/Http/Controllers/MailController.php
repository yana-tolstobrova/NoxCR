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
       
        $adminMail = 'noxcr.mailing@gmail.com';

    //     order_id: orderId,
    //   name: formData.name_complete,
    //   cedula: formData.cedula,
    //   address: formData.address,
    //   total_amount: formData.total_amount,
    //   shipping_type:formData.shipping_type,
    //   cart: cart

    $user = Auth::user();

    $itemList = "";
    // foreach ($request->cart as $item)
    // {
        
    //     itemlist .= $item->product->name . " ";
    //     itemlist .= $item->quantity . " ";
    //     itemlist .= $item->product->price . " ";
    //     itemlist .= "</br>";
    // }

        
       $orderData= [
                'order_id'=> $request->order_id, 
                'name' => $request->name, 
                'cedula' => $request->cedula,
                'adress' => $request->adress,
                'products' => $itemList,
                'total_amount' => $request->total_amount, 
                'shipping_type' => $request->shipping_type,
                'data'=>$request->cart         
            ];

            Mail::to($user->email)
                    ->cc($adminMail)
                    ->send(new orderConfirmation($orderData));

         dd ("Email is sent successfully.");
    }

}