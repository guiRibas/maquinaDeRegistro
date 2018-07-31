<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MusicController extends Controller{
    //FUNÇÃO PARA VERIFICAR QUE SE O USUÁRIO ESTÁ LOGADO PARA QUE POSSA ACESSAR A PÁGINA PARA REGISTRO DE MÚSICAS
    public function register(){
        if(session()->exists('user.token')){
            return view('register-music');
        } else{
            session(['guest.message' => "Alerta! Você precisa acessar o sistema para registrar sua música!"]);
            return redirect('/');
        }
    }

    //FUNÇÃO PARA VERIFICAR QUE SE O USUÁRIO ESTÁ LOGADO PARA QUE POSSA ACESSAR A PÁGINA DAS SUAS MÚSICAS
    public function userMusics(){
        if(session()->exists('user.token')){
            return view("my-musics")->with('currentToken', session()->get('user.token'));
        } else{
            session(['guest.message' => "Alerta! Você precisa acessar o sistema para visualizar suas músicas!"]);
            return redirect('/');
        }
    }
}
