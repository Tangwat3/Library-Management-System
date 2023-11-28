<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BookCategoryController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Admin\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get("/home",[HomeController::class,"index"])->name('home');
Route::get("/about",[HomeController::class,"about"])->name('about');
Route::get("/categories",[HomeController::class,"categories"])->name('categories');
Route::get("/books",[HomeController::class,"books"])->name('books');

Route::group(['middleware' => ['auth', 'admin']], function() {
    Route::get('/admin', function () {
        return view('admin.dashboard');
    });

    Route::get('/role-register', [DashboardController::class, 'registered']);
    Route::get('/role-edit/{id}', [DashboardController::class, 'registeredit']);
    Route::put('/role-register-update/{id}', [DashboardController::class, 'registerupdate']);
    Route::delete('/role-delete/{id}', [DashboardController::class, 'registerdelete']);
});

Route::group(['middleware' => ['auth']], function () {
    Route::prefix('admin')->group(function () {
        
        Route::get('/book-categories','Admin\BookController@index');
    });
});

require __DIR__.'/auth.php';
