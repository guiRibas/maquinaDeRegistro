<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AccountController extends Controller{
    public function index(){
        if(session()->exists('user.token')){
            return view('perfil');
        } else{
            session(['guest.message' => "Alerta! Você precisa acessar o sistema para visualizar seu perfil!"]);
            return redirect('/');
        }
    }

    public function register(){
        return view('register-account');
    }

    public function bank(){
        if(session()->exists('user.token')){
            return view('bank');
        } else{
            session(['guest.message' => "Alerta! Você precisa acessar o sistema para consultar seus créditos!"]);
            return redirect('/');
        }
    }
}
