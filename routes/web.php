<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\BookCategoryController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DashboardController;

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

Route::get("/home",[Homecontroller::class,"index"])->name('home');
Route::get("/about",[HomeController::class,"about"])->name('about');
Route::get("/categories",[HomeController::class,"categories"])->name('categories');
Route::get("/books",[HomeController::class,"books"])->name('books');

Route::controller(BookCategoryController::class)->group(function (){
    Route::prefix('admin')->group(function(){
        Route::get("/book-categories","index")->name('book.categories.index');
        Route::get("/book-categories-create","create")->name('book.categories.create');
        Route::get("/book/{bookcategories}", [\App\Http\Controllers\BookCategoryController::class, 'show']);
    });

    Route::group(['middleware' => ['auth', 'admin']], function() {
        
        Route::get('/admin', function () {
            return view('admin.dashboard');
    });
        Route::get('/role-register', 
        [App\Http\Controllers\Admin\DashboardController::class, 'registered']);
       });
});

require __DIR__.'/auth.php';
