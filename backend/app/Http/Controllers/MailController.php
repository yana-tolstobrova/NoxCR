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

    public function orderConfirmation(Order $order)
    {
      
        $order = [
            'pedido' => 'Tu Orden de compra No. xxxx se ha procesado exitosamente',
            'producto' => 'Lentillas Natural de color XXXXXX',
            'cantidad' => "XX par",
            'precio' => "XXX ₡",
            'total' => "XX₡ + taxes = XX,xx ₡"
        ];
         
        
        dd("Email is sent successfully.");
    }

}