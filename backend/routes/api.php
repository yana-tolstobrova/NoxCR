<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderLineController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserDetailsController;
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
//Route::post('send-confirmation-email', [MailController::class, 'sendConfirmationEmail']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    Route::resource('/orders', OrderController::class);
    Route::get('/orders/{id}/details', [OrderController::class, 'showOrderDetails']);
    Route::post('/order-lines', [OrderLineController::class, 'store']);
    Route::get('/order-lines', [OrderLineController::class, 'index']);
    Route::get('/order-lines/{id}', [OrderLineController::class, 'show', 'index']);
    Route::post('/user-details', [UserDetailsController::class, 'store']);
    Route::get('/user-details/{userDetail}', [UserDetailsController::class, 'show']);
    Route::get('/user-details', [UserDetailsController::class, 'index']);
    Route::post("/products/add-favorite/{id}", [ProductController::class, 'addFavorite']);
    Route::post("products/remove-favorite/{id}", [ProductController::class, 'removeFavorite']);
    Route::get("/products/favorites", [ProductController::class, 'showFavorites']);
    // Route::apiResource('/users', UserController::class);
    //Route::put('/users/{id}', UserController::class, 'update');
    Route::delete('products/{id}', [ProductController::class, 'destroy']);
    Route::get('products/{id}', [ProductController::class, 'edit']);
    Route::put('products/{id}', [ProductController::class, 'update']);
    Route::post('products', [ProductController::class, 'store']);
    Route::post('/send-confirmation-email', [MailController::class, 'sendConfirmationEmail']);
});
Route::get('products', [ProductController::class, 'index']);
Route::get('products/{id}', [ProductController::class, 'show']);
Route::get('/search', [ProductController::class, 'search']);
Route::get('/photos', [ProductController::class, 'getPhoto']);
Route::get('colors', [ProductController::class, 'getColor']);
Route::get('products/{id}/colors', [ProductController::class, 'showColors']);
Route::delete('/photos/{id}', [ProductController::class, 'deletePhoto']);
Route::apiResource('/users', UserController::class);
Route::put('products/change-quantity/{id}', [ProductController::class, 'editQuantity']);

