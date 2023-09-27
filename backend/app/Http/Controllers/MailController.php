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

        $user = [
        'name' => 'Sylvia Llorente',
        'email' => 'sylviall81@gmail.com',
        'password' => 'SylviaLL2023*',
        'subscription' => false];
        
        $order = ['order_id' => "1",
        'product_id' => "3",
        'name' => 'Lentes de Contacto',
        'quantity' => "2", 
        'price' => "20.00"];
        
        $orderLine = [

                'order_id' => "1",
                'product_id' => "3",
                'name' => "Lente Natural de Cuarzo Jade",
                'quantity' => "1",
                'price' => "20.00"
            
            ];

            Mail::to('sylviall81@gmail.com')
                    ->cc($adminMail)
                    ->send(new orderConfirmation());
        
       
    }

}