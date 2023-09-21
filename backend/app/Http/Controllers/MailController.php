<?php
  
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
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
   
    public function orderConfirmation()
    {
     
            $userMail = 'sylviall81@gmail.com';
            $adminMail = 'noxcr.mailing@gmail.com';
        
        $orderData = [
            'pedido' => 'Tu Orden de compra No. xxxx se ha procesado exitosamente',
            'producto' => 'Lentillas Natural Zafiro Gris',
            'cantidad' => "1 par",
            'precio' => "20$",
            'total' => "20$ + taxes = 22.50$"
        ];
         
        //correo de aviso a comprador
        Mail::to($userMail)->send(new orderConfirmation($orderData));
        //correo de aviso a Admin
        Mail::to($adminMail)->send(new orderConfirmation($orderData));
        

        dd("Email is sent successfully.");
    }





}