@extends('template.sidebar')
 
@section('title', 'Minhas Músicas')

@section('specify-css')
  <link rel="stylesheet" type="text/css" href="{{asset('css/my-musics/style.css')}}">
@endsection

@section('root-content')
  <div class="profile-content">
    <div class="card">
      <div class="row filters">
        <div class="col-lg-3">
          <select class="form-control" id="showQtd">
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>Todas</option>
          </select>
          <span>Exibir por página</span>
        </div>
        <div class="col-lg-offset-4 col-lg-5">
          <input type="text" id="searchMusic" autofocus style="width: 100%"/>
          <span>Pesquisa</span>
        </div>
      </div>
      <div class="card-body">
        <table id="example" class="table table-striped table-bordered" style="width:100%">
          <div id="loading"></div>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Compositor</th>
              <th>Música</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div id="pagination"></div>
        <div id="music-controls">
          <div id="div-audio" class="col-lg-12">
            <audio id="audio" autoplay="autoplay" preload="none" controls="controls"></audio>
          </div>
          <span id="tempo_atual">00:00:00</span>
          <span id="tempo_total">00:00:00</span>
        </div>
      </div>
    </div>
  </div>
@endsection

@section('js-view')
  <script src="{{asset('js/sidebar/sidebar.view.js')}}"></script>
  <script src="{{asset('js/sidebar/croppie.js')}}"></script>
  <script src="{{asset('js/my-musics/my-musics.view.js')}}"></script>
@endsection