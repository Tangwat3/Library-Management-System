<?php

namespace App\Http\Controllers\Admin;

use App\Models\User; // Make sure to use the correct namespace for the User model
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function registered()
    {
        $users = User::all();
        return view('admin.register', ['users' => $users]); // Use an associative array for better readability
    }

    public function registeredit(Request $request, $id)
{
    $users = User::findOrfail($id);
    return view('admin.register-edit')->with('users',$users);
}

    public function registerupdate(Request $request, $id)
    {
        $users = user:: find($id);
        $users->name = $request->input('username');
        $users->usertype = $request->input('usertype');
        $users->update();

        return redirect('/role-register')->with('status', 'Your Data is updated');
    }

        public function registerdelete($id)
        {
            $users=User::findOrFail($id);
            $users->delete();
            return redirect('/role-register')->with('status', 'Your Data is Deleted');
        }
}