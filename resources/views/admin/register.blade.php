@extends('layouts.master')


@section('title')
    Registered Roles I FCEP E-LIBRARY
    
@endsection


@section('content')


<div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">  Registered Roles</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead class=" text-primary">
                <th>Name</th>
                <th>Matric</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Level</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </thead>
              <tbody>
                <tr>   
                    <td>name</td>    
                    <td>fcep/2019/csc/0200</td> 
                    <td>tangwat3@gmail.com</td> 
                    <td>08137359211</td> 
                    <td>computer</td>        
                    <td>400</td>  
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