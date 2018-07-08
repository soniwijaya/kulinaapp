<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\User_Review;

class crud extends Controller
{
    
	public function view(){

    	$user = User_Review::all();

    	return response()->json([ 'info' => 'Success Get Data' ,'data' => $user], 200);
    }

    public function create(Request $request){

    	$user = User_Review::create($request->all());

    	return response()->json([ 'info' => 'Success Create User' ,'data' => $user], 200);
    }

    public function update(Request $request, $id){

    	$user = User_Review::findOrFail($id);
    	$user->update($request->all());

    	return response()->json([ 'info' => 'Success Update User' ,'data' => $user], 200);

    }

    public function delete(Request $request, $id){
    	
    	$user = User_Review::findOrFail($id);
    	$user->delete();

    	return response()->json([ 'info' => 'Success Delete User' ,'data' => $user], 200);
    }
}
