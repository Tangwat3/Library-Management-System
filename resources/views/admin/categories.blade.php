@extends('layouts.master')


@section('title')
    Book Category
    
@endsection


@section('content')


<div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title"> Book Categories</h4>
         <button> <a href="{{route('book.categories.create')}}">Add New</a></button>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead class=" text-primary">
                <th>Name</th>
                <th>Action</th>
               
              </thead>
              <tbody>
                @foreach ($categories as $category)
                <tr>
                    <td>{{ $category->name }}</td>
                    <td><a>View</a><button>Delete</button></td>
                    
                  </tr>
                @endforeach
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
    
@endsection


@section('scripts')
    
@endsection