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


  
class MailController extends Controller
{
    /**
     * Write code on Method
     *
     * @return response()
     * 
     * 
     */

    public $user= Auth::user;
    public $order = Order::find(1);
     public $orderLine = OrderLine::find(1);
     

    public function orderConfirmation($order,$orderLine,$user)
    {
      
         
        
        dd("Email is sent successfully.");
    }

}