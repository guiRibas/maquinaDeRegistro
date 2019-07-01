@extends('layouts.layout-dash')

@section('page-title', 'Adicionar Créditos')

@section('specify-css')
    <link rel="stylesheet" type="text/css" href="{{asset('css/bank/style.css')}}">
@endsection

@section('content')
<div class="profile-content">
    <div id="info-choose-pay-type" class="alert alert-info" role="alert">
        Selecione um método de pagamento: <strong>CARTÃO DE CRÉDITO</strong> ou <strong>BOLETO</strong>.
    </div>
    <div class="row mr-0">
        <div class="col-md-8 pl-30">
            <div class="row">
                <div name="credit-card" class="card mb-3 pay-type">
                    <div class="card-header">
                        Cartão de Crédito
                    </div>
                    <div class="row no-gutters">
                        <div class="d-flex align-items-center col-md-4 p-3">
                            <img src="/images/credit-card.png" class="card-img" alt="...">
                        </div>
                        <div class="d-flex align-items-center col-md-8 p-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-8 offset-md-2">
                                        <div class="form-group row">
                                            <input type="number" id="qtdOfPartsByCard" name="qtdOfPartsByCard"
                                                   class="form-control" required="true" value="1" min="1"
                                                   max="6" disabled><small
                                                    class="form-text text-muted">Quantidade de parcelas <strong>(máximo 6)</strong>.</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div name="barcode" class="card mb-3 pay-type">
                    <div class="card-header">
                        Boleto Bancário
                    </div>
                    <div class="row no-gutters">
                        <div class="d-flex align-items-center col-md-4 p-3">
                            <img src="/images/barcode.png" class="card-img" alt="...">
                        </div>
                        <div class="d-flex align-items-center col-md-8 p-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-8 offset-md-2 text-center">
                                        <div class="form-group row">
                                            <input type="text" id="completeName" name="completeName"
                                                   class="form-control" required="true"
                                                   @if (session()->exists('user.completeName'))
                                                   value="{{session()->get('user.completeName')}}" @endif disabled><small
                                                    class="form-text text-muted">* Nome Completo.</small>
                                        </div>
                                        <div class="form-group row">
                                            <input type="text" id="cpf" name="cpf" class="form-control"
                                                   required="true" @if (session()->exists('user.cpf'))
                                                   value="{{session()->get('user.cpf')}}" @endif disabled><small
                                                    class="form-text text-muted">* CPF (somente números).</small>
                                        </div>
                                        <small id="infoTicket">*Confira seus dados, pois estes estarão presentes no
                                            Boleto.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 pr-0">
            <div name="checkout" class="card">
                <div class="card-header">
                    Meu Pedido
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <div class="form-group row">
                                <div class="col-sm-8">
                                    <input type="number" id="creditsToBuyByCard"
                                           name="creditsToBuy" class="form-control"
                                           required="true" value="1" disabled><small class="form-text text-muted">Créditos.</small>
                                </div>
                                <div class="col-sm-4">
                                    <button id="btnUpByCard" class="btn btn-success btn-action-up" disabled>+
                                    </button>
                                    <button id="btnDownByCard"
                                            class="btn btn-secondary btn-action-down" disabled>-
                                    </button>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <input type="hidden" id="totalByCard" name="totalByCard">
                            </div>
                            <div class="form-group row">
                                <input type="text" id="emailByCard" name="emailByCard"
                                       class="form-control" required="true"
                                       @if (session()->exists('user.email'))
                                       value="{{session()->get('user.email')}}" @endif disabled><small
                                        class="form-text text-muted">E-mail para prosseguir com o pagamento.</small>
                            </div>
                            <p id="pTotalOrderByCard">Total do pedido: <strong>R$9,90</strong><strong
                                        id="strongTotalByCard"></strong></p>
                            <p class="totalDiscount"></p>
                            <div class="form-group row">
                                <div class="col-md-12" id="divSubmitBuyCreditByCard">
                                    <img class="sale" src="images/promo.png" alt="">
                                    <button type="submit" id="submitBuyCreditByCard"
                                            name="submitBuyCreditByCard" class="btn btn-success" disabled>
                                        <span class="glyphicon glyphicon-credit-card"></span>Finalizar
                                        Pedido!
                                    </button>
                                </div>
                            </div>
                            <p id="infoCreditCard">*Confira seus dados, para prosseguir com o
                                pagamento.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('js-view')
<script src="{{asset('js/sidebar/sidebar.view.js')}}"></script>
<script src="{{asset('js/add-credits/moment.min.js')}}"></script>
<script src="{{asset('js/add-credits/add-credits.view.js')}}"></script>
@endsection
