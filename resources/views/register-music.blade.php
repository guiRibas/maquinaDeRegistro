@extends('template.sidebar')
 
@section('title', 'Cadastrar Música')

@section('specify-css')
    <link rel="stylesheet" href="{{asset('css/chosen/chosen.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/register-music/style.css')}}">
@endsection()

@section('root-content')
  <div class="profile-content">
      <div id="mensagem" class="hide">Enviando...</div>
      <div class="card" style="margin-top: 3%;">
          <div class="card-body">
              <div id="statusOfSend" class="alert" style="display:none"></div>
              <form class="form-horizontal" id="formAdd" name="formAdd" novalidate>
                  <div class="form-group row">
                      <label class="col-sm-3 form-control-label">Nome da Música</label>
                      <div class="col-sm-9">
                          <input type="text" id="nameOfMusic" name="nameOfMusic" class="form-control" autofocus="" required="true" tabindex="1"><span class="help-block-none">Informe o nome da sua música.</span>
                      </div>
                  </div>

                  <div class="form-group row">
                      <label class="col-sm-3 form-control-label">Compositor</label>
                      <div class="col-sm-9">
                          <input type="text" id="composer" name="composer" class="form-control" required="true" tabindex="2"><span class="help-block-none">Informe o compositor da música.</span>
                      </div>
                  </div>

                  <div class="form-group row">
                      <label class="col-sm-3 form-control-label">Intérprete</label>
                      <div class="col-sm-9">
                          <input type="text" id="interpreter" name="interpreter" class="form-control" required="true" tabindex="3"><span class="help-block-none">Informe o intérprete da música.</span>
                      </div>
                  </div>

                  <div class="form-group row">
                      <label class="col-sm-3 form-control-label">Letra</label>
                      <div class="col-sm-9">
                          <textarea type="text" id="lyrics" name="lyrics" class="form-control" required="true" rows="9" tabindex="4"></textarea><span class="help-block-none">Informe a letra da música.</span>
                      </div>
                  </div>

                  <div class="form-group row">
                      <label class="col-sm-3 form-control-label">Gênero</label>
                      <div class="col-sm-9 select" required="true">
                          <select id="genre" class="chosen-select" data-placeholder="Selecione" tabindex="5">
                              <option value=""></option>
                              <optgroup label="Folk">
                                  <option>Folk Music</option>
                              </optgroup>
                              <optgroup label="Rock and Roll">
                                  <option>Heavy Metal</option>
                                  <option>Punk Rock</option>
                                  <option>Rock Progressivo</option>
                                  <option>Rock Psicodélico</option>
                                  <option>Rock Experimental</option>
                                  <option>Alternativo/Indie</option>
                                  <option>Pop Rock</option>
                                  <option>Foreign Language Rock</option>
                              </optgroup>
                          </select><span class="help-block-none">Selecione o Gênero da música.</span>
                      </div>
                  </div>

                  <div class="form-group row">
                      <label class="col-sm-3 form-control-label">Arquivo .MP3</label>
                      <div class="col-sm-9">
                          <input type="file" name="fileUpload" name="file" id="file" class="form-control" required tabindex="6"><span class="help-block-none">Selecione o arquivo .mp3 que contêm a sua música.</span>
                      </div>
                  </div>

                  <div class="line"></div>

                  <div class="form-group row">
                      <div class="col-md-8 col-md-offset-7 col-sm-8 col-sm-offset-7 col-lg-2 col-lg-offset-9">
                          <button type="reset" class="btn btn-secondary">Limpar</button>
                          <button type="submit" id="newMusic" name="newMusic" class="btn btn-success">Registrar!</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
@endsection

@section('js-view')
  <script src="{{asset('js/sidebar/sidebar.view.js')}}"></script>
  <script src="{{asset('js/sidebar/croppie.js')}}"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.blockUI/2.70/jquery.blockUI.js"></script>  
  <script src="{{asset('js/register-music/register-music.view.js')}}"></script>
  <script src="{{asset('js/chosen/chosen.jquery.min.js')}}"></script>
  <script src="{{asset('js/chosen/prism.js')}}"></script>
  <script src="{{asset('js/chosen/init.js')}}"></script>
@endsection