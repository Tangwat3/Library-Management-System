<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Page;

class PageController extends Controller
{
    public function create()
    {
        return view('admin.pages.create');
    }

    public function store(Request $request)
    {
        // Validation logic
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            // Add more validation rules as needed
        ]);

        // Create a new page
        Page::create([
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            // Add more fields as needed
        ]);

        return redirect()->route('admin.dashboard')->with('success', 'Page created successfully.');
    }
}

