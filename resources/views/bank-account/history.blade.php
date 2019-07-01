@extends('layouts.layout-dash')

@section('page-title', 'Histórico Bancário')

@section('specify-css')
    <link rel="stylesheet" type="text/css" href="{{asset('css/bank/style.css')}}">
    <link href="{{asset('template/dashboard/data-tables/dataTables.bootstrap4.css')}}" rel="stylesheet">
@endsection

@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card shadow mb-4">
                <div class="card-body">
                    <div id="statusOfChange" class="alert" style="display:none"></div>
                    <div class="table-responsive">
                        <table id="payment-history" class="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>Situação</th>
                                <th>Método</th>
                                <th>Créditos</th>
                                <th>Valor</th>
                                <th>Parcelas</th>
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
    <script src="{{asset('template/dashboard/data-tables/jquery.dataTables.js')}}"></script>
    <script src="{{asset('template/dashboard/data-tables/dataTables.bootstrap4.min.js')}}"></script>
    <script src="{{asset('js/bank/bank.view.js')}}"></script>
@endsection
