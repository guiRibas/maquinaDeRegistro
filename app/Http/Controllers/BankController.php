<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\Helper;

class BankController extends Controller
{
    public function add(){
        if (Helper::verifyToken()) {
            return view('add-credits');
        } else {
            session(['guest.message' => "Alerta! Você precisa acessar o sistema para adicionar créditos!"]);
            return redirect('/');
        }
    }

    public function history(){
        if (Helper::verifyToken()) {
            return view('bank-account/history');
        } else {
            session(['guest.message' => "Alerta! Você precisa acessar o sistema para consultar seu histórico bancário!"]);
            return redirect('/');
        }
    }

    public function statement(){
        if (Helper::verifyToken()) {
            return view('bank-account/statement');
        } else {
            session(['guest.message' => "Alerta! Você precisa acessar o sistema para consultar seu extrato bancário!"]);
            return redirect('/');
        }
    }
}
