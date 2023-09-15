<?php
  
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
use Mail;
use App\Mail\DemoMail;
use App\Mail\orderConfirmation;
  
class MailController extends Controller
{
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function index()
    {
        $mailData = [
            'title' => 'Test Mail',
            'body' => 'This is for testing email using smtp.'
        ];
         
        Mail::to('sylviall81@gmail.com')->send(new DemoMail($mailData));
           
        dd("Email is sent successfully.");
    }

    public function orderConfirmation()
    {
        $mailData = [
            'pedido' => 'Tu Orden de compra No. xxxx se ha procesado exitosamente',
            'producto' => 'Lentillas Natural Zafiro Gris',
            'cantidad' => "1 par",
            'precio' => "20$",
            'total' => "20$ + taxes = 22.50$"
        ];
         
        Mail::to('sylviall81@gmail.com')->send(new orderConfirmation($mailData));
           
        dd("Email is sent successfully.");
    }





}