@extends('layouts.layout-dash')

@section('page-title', 'Minhas Músicas')

@section('specify-css')
    <link rel="stylesheet" href="https://cdn.plyr.io/3.5.3/plyr.css" />
    <link href="{{asset('css/my-musics/player.css')}}" rel="stylesheet">
    <link href="{{asset('css/my-musics/style.css')}}" rel="stylesheet">
@endsection

@section('content')
    <div class="container-player bg-highlight-brain">
        <div class="column add-bottom">
            <div class="input-group mb-3 pl-3 pr-3">
                <input id="search" name="search" placeholder="Informe o nome da música..." type="text" data-list=".list" class="form-control" autocomplete="off">
                <div class="input-group-append">
                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                </div>
            </div>
            <div id="mainwrap">
                <div id="plwrap">
                    <ul class="list" id="plList"></ul>
                </div>
            </div>
        </div>
        <div class="fixed-bottom bg-gray-brain">
            <div class="copyright text-center my-auto">
                <div id="audiowrap">
                    <div id="nowPlay">
                        <span id="npAction" title="Situação">Pausado...</span>
                        <a id="btnPrev" title="Anterior">&larr;</a>
                        <a id="btnNext" title="Próxima">&rarr;</a>
                        <span id="npTitle" title="Música atual"></span>
                    </div>
                    <div id="audio0">
                        <audio id="audio1" preload controls>Your browser does not support HTML5 Audio! 😢</audio>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('js-view')
    <script src="{{asset('js/hideseek/hideseek.js')}}"></script>
    <script src="https://cdn.plyr.io/3.5.3/plyr.js"></script>
    <script src="{{asset('js/my-musics/player.js')}}"></script>
    <script src="{{asset('js/my-musics/my-musics.view.js')}}"></script>
@endsection