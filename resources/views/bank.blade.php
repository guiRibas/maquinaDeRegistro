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
                        <a class="nav-link" href="#first-tab" data-toggle="tab">Histórico</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#second-tab" data-toggle="tab">Balanço</a>
                    </li>
                </ul>

                <div class="tab-content" style="margin-top: 2%">
                    <div class="tab-pane active in" id="first-tab">
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

                    <div class="tab-pane" id="second-tab">
                        <table id="history" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Quando utilizou</th>
                                <th>Quantidade de Créditos</th>
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
