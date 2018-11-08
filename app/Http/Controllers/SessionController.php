<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
class SessionController extends Controller{
    public function getCurrentToken(){
        return response()->json(['token'=>session()->get('user.token')]);
    }

    public function getCurrentUserName(){
        return response()->json(['userName'=>session()->get('user.userName')]);
    }

    public function getCurrentCPF(){
        return response()->json(['cpf'=>session()->get('user.cpf')]);
    }

    public function getCurrentCompleteName(){
        return response()->json(['completeName'=>session()->get('user.completeName')]);
    }

    public function getCurrentEmail(){
        return response()->json(['email'=>session()->get('user.email')]);
    }

    public function getCurrentBalance(){
        return response()->json(['balance'=>session()->get('user.balance')]);
    }

    public function setCurrentBalance(Request $request){
        session(['user.balance' => $request->balance]);
        return;
    }

    public function login(Request $request){
        session(['user.token' => $request->token]);
        session(['user.userName' => $request->userName]);
        session(['user.cpf' => $request->cpf]);
        session(['user.completeName' => $request->completeName]);
        session(['user.email' => $request->email]);
        return;
        //return response()->json(['success'=>'Data is successfully added']);
    }

    public function logout(){
        session()->forget('user.userName');
        session()->forget('user.token');
        session()->forget('user.cpf');
        session()->forget('user.completeName');
        session()->forget('user.email');
        return redirect('/');
    }
}
