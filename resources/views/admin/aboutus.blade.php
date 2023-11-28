@extends('layouts.master')


@section('title')
    Dashboard I FCEP E-LIBRARY
    
@endsection


@section('content')


<div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">About Us</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead class=" text-primary">
                <th>Id</th>
                <th>Title</th>
                <th>Subtitle</th>
                <th>Description</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </thead>
              <tbody>
                <tr>  
                    <td>Dakota Rice</td>     
                    <td>Dakota Rice</td>  
                    <td>Dakota Rice</td>  
                    <td>Dakota Rice</td>  
                    <td>
                        <a href="#" class="btn btn-success">EDIT</a>
                    </td>   
                    <td>
                        <a href="#" class="btn btn-danger">DELETE</a>
                    </td>  
                </tr>
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