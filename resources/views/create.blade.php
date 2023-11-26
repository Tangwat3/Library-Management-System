@extends('layouts.admin')

@section('content')
    <h1>Create a New Page</h1>

    @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    <form action="{{ route('admin.pages.store') }}" method="post">
        @csrf

        <label for="title">Title:</label>
        <input type="text" name="title" id="title" value="{{ old('title') }}" required>
        @error('title')
            <p class="text-danger">{{ $message }}</p>
        @enderror

        <label for="content">Content:</label>
        <textarea name="content" id="content" required>{{ old('content') }}</textarea>
        @error('content')
            <p class="text-danger">{{ $message }}</p>
        @enderror

        <!-- Add more form fields as needed -->

        <button type="submit">Create Page</button>
    </form>
@endsection
