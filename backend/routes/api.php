<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderLineController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('send-order', [MailController::class, 'orderConfirmation']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    Route::resource('/orders', OrderController::class);
    Route::get('/orders/{id}/details', [OrderController::class, 'showOrderDetails']);
    Route::post('/order-lines', [OrderLineController::class, 'store']);
    Route::post('/user-details', [UserDetailsController::class, 'store']);
    Route::get('/user-details/{userDetail}', [UserDetailsController::class, 'show']);

    Route::post("/products/add-favorite/{id}", [ProductController::Class, 'addFavorite']);
    Route::post("/products/remove-favorite/{id}", [ProductController::Class, 'removeFavorite']);
    Route::get("/products/favorites/", [ProductController::Class, 'showFavorites']);

    // Route::get('send-order', [MailController::class, 'orderConfirmation']);
});



Route::resource('products', ProductController::class);
Route::get('/search', [ProductController::class, 'search']);
Route::apiResource('/users', UserController::class);



