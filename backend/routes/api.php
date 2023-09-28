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
Route::get('send-orderConfirmation', [MailController::class, 'orderConfirmation']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    Route::resource('/orders', OrderController::class);
    Route::get('/orders/{id}/details', [OrderController::class, 'showOrderDetails']);
    Route::post('/order-lines', [OrderLineController::class, 'store']);
    Route::post('/user-details', [UserDetailsController::class, 'store']);
    Route::get('/user-details/{userDetail}', [UserDetailsController::class, 'show']);
    Route::apiResource('/users', UserController::class);
    Route::post("/products/add-favorite/{id}", [ProductController::Class, 'addFavorite']);
    Route::post("/products/remove-favorite/{id}", [ProductController::Class, 'removeFavorite']);
    Route::get("/products/favorites/", [ProductController::Class, 'showFavorites']);
    Route::delete('products/{id}', [ProductController::Class, 'destroy', 'update']);
    Route::get('products/{id}', [ProductController::Class, 'edit', 'update']);
    Route::put('products/{id}', [ProductController::Class, 'update']);
    Route::post('products', [ProductController::Class, 'store']);
});
Route::get('products', [ProductController::Class, 'index']);
Route::get('/search', [ProductController::class, 'search']);




