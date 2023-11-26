<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;

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

Route::get('/admin', function () {
    return view('admin.dashboard');
});

   

Route::prefix('admin')->group(function () {
    // Existing routes...

    Route::get('/pages/create', [PageController::class, 'create'])->name('admin.pages.create');
    Route::post('/pages/store', [PageController::class, 'store'])->name('admin.pages.store');
});

  


require __DIR__.'/auth.php';




