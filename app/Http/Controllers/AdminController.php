<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\controller;

class BookController extends Controller
{
    public function index ()
    {
        return view("admin.services.index"); 

    }
}
