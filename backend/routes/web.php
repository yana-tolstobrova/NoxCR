<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
use App\Mail\orderConfirmation;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

 Route::get('/', function () {
     return view('welcome');
 });

  
Route::get('send-mail', [MailController::class, 'index']);
Route::get('send-orderConfirmation', [MailController::class, 'orderConfirmation']);

Route::get('/mailable', function () {
    $order = App\Models\Order::find(1);
 
    return new App\Mail\orderConfirmation($order);
});





