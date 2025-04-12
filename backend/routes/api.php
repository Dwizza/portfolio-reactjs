<?php

use App\Http\Controllers\projectController;
use App\Http\Controllers\skillController;
use App\Http\Controllers\userController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/users',[userController::class,'index']);
Route::get('/projects',[projectController::class,'index']);
Route::get('/skills',[skillController::class,'index']);
