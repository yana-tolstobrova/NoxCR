<?php
  
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
use Mail;
use App\Mail\DemoMail;
use App\Mail\orderConfirmation;
use App\Models\User;
use Symfony\Component\Mime\Part\TextPart;
use Symfony\Component\Mime\Part\File;
use App\Models\Order;
use App\Models\OrderLine;


  
class MailController extends Controller
{
    /**
     * Write code on Method
     *
     * @return response()
     * 
     * 
     */

   
     

    public function orderConfirmation()
    {
        $adminMail = 'noxcr.mailing@gmail.com';


        $orderData= [
                'order_id'=> "1",
                'name' => 'Sylvia Suarez',
                'adress' => "Carretera el Limón, No. 43",
                'product_name' => "Lente Natural de Cuarzo Jade",
                'quantity' => "1",
                'price' => "20.00",
                'total_amount' => "40.00"            
            ];

            Mail::to('sylviall81@gmail.com')
                    ->cc($adminMail)
                    ->send(new orderConfirmation($orderData));

         dd ("Email is sent successfully.");
        
       
    }

}