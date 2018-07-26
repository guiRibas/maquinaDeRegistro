@extends('template.sidebar')
 
@section('title', 'Meus Dados')

@section('specify-css')
  <link rel="stylesheet" type="text/css" href="{{asset('css/bank/style.css')}}">
@endsection

@section('root-content')
  <div class="profile-content">
    <div class="card">
        <div class="card-body">
            <div id="statusOfChange" class="alert" style="display:none"></div>

            <ul class="nav nav-tabs menu-users">
              <li class="nav-item active">
                <a class="nav-link" href="#first-tab" data-toggle="tab">Créditos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#second-tab" data-toggle="tab">Histórico</a>
              </li>
            </ul>
                   
            <div class="tab-content" style="margin-top: 2%">
              <div id="putYourDataToCreditCard" class="modal" role="dialog">
                <div id="modalCard" class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h5 class="modal-title">Método de Pagamento: CARTÃO DE CRÉDITO</h5>
                    </div>
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                          <form class="form-horizontal" id="formCreditsToBuyByCard" name="formCreditsToBuyByCard" novalidate>
                            <div class="form-group row">
                              <div class="col-sm-8">
                                <input type="number" id="creditsToBuyByCard" name="creditsToBuyByCard" class="form-control" required="true" value="1"><span class="help-block-none">Créditos.</span>
                              </div>
                              <div class="col-sm-4">
                                <button id="btnUpByCard">+</button>
                                <button id="btnDownByCard">-</button>
                              </div>
                            </div>
                            <hr>       
                            <div class="form-group row">
                              <input type="hidden" id="totalByCard" name="totalByCard">
                            </div>
                            <div class="form-group row">
                              <input type="text" id="emailByCard" name="emailByCard" class="form-control" required="true" @if (session()->exists('user.email')) value="{{session()->get('user.email')}}" @endif><span class="help-block-none">E-mail para prosseguir com o pagamento.</span>
                            </div>
                            <div class="form-group row">
                              <input type="number" id="qtdOfPartsByCard" name="qtdOfPartsByCard" class="form-control" required="true" value="1"><span class="help-block-none">Quantidade de parcelas.</span>
                            </div>
                            <p id="pTotalOrderByCard">Total do pedido: <strong>R$</strong><strong id="strongTotalByCard"></strong></p>
                            <div class="form-group row">
                              <div class="col-md-12" id="divSubmitBuyCreditByCard">
                                <button type="submit" id="submitBuyCreditByCard" name="submitBuyCreditByCard" class="btn btn-success">Finalizar Pedido!</button>
                              </div>
                            </div>
                          </form>
                          <p id="infoCreditCard">*Confira seus dados, para prosseguir com o pagamento.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="putYourDataToTicket" class="modal" role="dialog">
                <div id="modalTicket" class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h5 class="modal-title">Método de Pagamento: BOLETO BANCÁRIO</h5>
                    </div>
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                          <form class="form-horizontal" id="formCreditsToBuyByTicket" name="formCreditsToBuyByTicket" novalidate>
                            <div class="form-group row">
                              <div class="col-sm-8">
                                <input type="number" id="creditsToBuyByTicket" name="creditsToBuyByTicket" class="form-control" required="true" value="1"><span class="help-block-none">Créditos.</span>
                              </div>
                              <div class="col-sm-4">
                                <button id="btnUpByTicket">+</button>
                                <button id="btnDownByTicket">-</button>
                              </div>
                            </div>
                            <hr>       
                            <div class="form-group row">
                              <input type="text" id="completeName" name="completeName" class="form-control" required="true" @if (session()->exists('user.completeName')) value="{{session()->get('user.completeName')}}" @endif><span class="help-block-none">Nome Completo.</span>
                            </div>
                            <div class="form-group row">
                              <input type="text" id="cpf" name="cpf" class="form-control" required="true" @if (session()->exists('user.cpf')) value="{{session()->get('user.cpf')}}" @endif><span class="help-block-none">CPF (somente números).</span>
                              <input type="hidden" id="totalByTicket" name="totalByTicket">
                            </div>
                            <div class="form-group row">
                              <input type="text" id="email" name="email" class="form-control" required="true" @if (session()->exists('user.email')) value="{{session()->get('user.email')}}" @endif><span class="help-block-none">E-mail para cópia do boleto.</span>
                            </div>
                            <p id="pTotalOrderByTicket">Total do pedido: <strong>R$</strong><strong id="strongTotalByTicket"></strong></p>
                            <div class="form-group row">
                              <div class="col-md-12" id="divSubmitBuyCreditByTicket">
                                <button type="submit" id="submitBuyCreditByTicket" name="submitBuyCreditByTicket" class="btn btn-success">Finalizar Pedido!</button>
                              </div>
                            </div>
                          </form>
                          <p id="infoTicket">*Confira seus dados, pois estes estarão presentes no Boleto.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  

              <div id="statusOfSend" class="alert" style="display:none"></div>
              <div class="tab-pane active in" id="first-tab">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="card-type-pgto" name="credit-card">
                      <img src="images/credit-card.png" alt="Pagar com cartão de crédito">
                      <div class="container">
                        <h4><b>Cartão de Crédito</b></h4> 
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6">
                      <div class="card-type-pgto" name="ticket">
                        <img src="images/boleto.png" alt="Pagar via boleto bancário">
                        <div class="container">
                          <h4><b>Boleto Bancário</b></h4> 
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="tab-pane" id="second-tab">
                <table id="history" class="table table-striped table-bordered" style="width:100%">
                  <thead>
                    <tr>
                      <th>Situação</th>
                      <th>Método de Pagamento</th>
                      <th>Valor</th>
                      <th>Quantidade de Créditos</th>
                      <th>Solicitado em</th>
                      <th>Vencimento em</th>
                      <th>Arquivo</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('js-view')
  <script src="{{asset('js/sidebar/sidebar.view.js')}}"></script>
  <script src="{{asset('js/sidebar/croppie.js')}}"></script>
  <script src="{{asset('js/bank/bank.view.js')}}"></script>
@endsection