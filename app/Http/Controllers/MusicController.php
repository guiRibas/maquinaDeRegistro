<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MusicController extends Controller{
    public function register(){
        if(session()->exists('user.token')){
            return view('register-music');
        } else{
            session(['guest.message' => "Alerta! Você precisa acessar o sistema para registrar sua música!"]);
            return redirect('/');
        }
    }

    public function userMusics(){
        if(session()->exists('user.token')){
            return view("my-musics")->with('currentToken', session()->get('user.token'));
        } else{
            session(['guest.message' => "Alerta! Você precisa acessar o sistema para visualizar suas músicas!"]);
            return redirect('/');
        }
    }
}
