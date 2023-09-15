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
            'pedido' => 'Test Mail',
            'producto' => 'This is for testing email using smtp.',
            'cantidad' => "1 par"
        ];
         
        Mail::to('sylviall81@gmail.com')->send(new DemoMail($mailData));
           
        dd("Email is sent successfully.");
    }





}