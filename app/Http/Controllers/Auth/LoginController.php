<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth; // Fix the typo in 'support'

class LoginController extends Controller
{
    use AuthenticatesUsers;


    // Correct the syntax for declaring a variable
    protected $redirectTo = '/home';

    // Correct the method syntax and remove semicolon
    protected function redirectTo()
    {
        if (Auth::user()->usertype == 'admin') 
         {
            return 'dashboard'; // Fix typo in 'dashboard'
        } 
        else 
        {
            return 'home';
        }
    }

    // Remove unnecessary characters in the method name
    public function __construct()
    {
        $this->middleware('guest')->except('logout'); // Fix the typo in 'logout'
    }
}
 