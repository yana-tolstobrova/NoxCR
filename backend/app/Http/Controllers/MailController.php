<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\TestMail;

class MailController extends Controller
{
    //
public function index(){

    $newOrder = [

        'title' => 'Orden de compra',
        'body' => 'prueba de email'
    ];

    Mail::to('sylviall81@gmail.com')->send (new TestMail($newOrder));

    dd('email enviado con éxito');


}




}
