<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::apiResource('/products',ProductController::class);
Route::get('/search-Product',[ProductController::class,'searchProduct'])->name('product-search');
Route::get('/filter',[ProductController::class,'filter'])->name('product-filter');


Route::delete('/logout',[AuthController::class,'logout'])->name('logout');
Route::post('/register',[AuthController::class,'register'])->name('register');
Route::post('/login',[AuthController::class,'login'])->name('login.user');
Route::put('/update-profile',[AuthController::class,'updateProfile'])->name('update-profile');
