@extends('template.sidebar')
 
@section('title', 'Minhas Músicas')

@section('css-view')

@section('root-content')
  <div class="profile-content">
    <div class="card">
      <div class="row filters">
        <div class="col-lg-2">
          <select class="form-control" id="showQtd">
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>Todas</option>
          </select>
          <span>Exibir por página</span>
        </div>
        <div class="col-lg-offset-5 col-lg-3">
          <input type="text" id="searchMusic" autofocus style="width: 480px;"/>
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
          <audio id="audio" autoplay="autoplay" preload="none" controls="controls"></audio>
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