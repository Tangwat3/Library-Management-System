<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;

use App\Http\Controllers\AdminController;

use App\Http\Controllers\Admin\BookController;


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
Route::get("/admin", [AdminController::class,"index"]);
Route::get("/dashboard",[AdminController::class,"index"]);



    Route::prefix('admin')->group(function () {
    Route::get('/books', [BookController::class, 'index'])->name('admin.books.index');
    Route::get('/books/create', [BookController::class, 'create'])->name('admin.books.create');
    Route::post('/books/store', [BookController::class, 'store'])->name('admin.books.store');
    Route::get('/books/{id}', [BookController::class, 'show'])->name('admin.books.show');
    Route::get('/books/{id}/edit', [BookController::class, 'edit'])->name('admin.books.edit');
    Route::put('/books/{id}/update', [BookController::class, 'update'])->name('admin.books.update');
    Route::delete('/books/{id}/delete', [BookController::class, 'destroy'])->name('admin.books.destroy');
});

Route::prefix('admin')->group(function () {
    // Existing routes...

    Route::get('/pages/create', [PageController::class, 'create'])->name('admin.pages.create');
    Route::post('/pages/store', [PageController::class, 'store'])->name('admin.pages.store');
});

  


require __DIR__.'/auth.php';




