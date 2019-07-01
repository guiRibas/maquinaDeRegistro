<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller {
  public function index() {
    return view('home');
  }

  public function doLogin(Request $request) {
    return session(['user.token' => $request->token]);
    //return response()->json(['success'=>'Data is successfully added']);
  }
}
