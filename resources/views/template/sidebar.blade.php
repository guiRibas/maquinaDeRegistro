@extends('template.layout-dash')
@section('css-view')
    <link rel="stylesheet" type="text/css" href="{{asset('css/perfil/style.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/perfil/croppie.css')}}">
@endsection
@yield('specify-css')
@section('content')
    <div id="container-margin" class="container-fluid">
        <div class="row profile">
            <div class="col-md-3">
                <div class="profile-sidebar">
                    <!-- SIDEBAR USERPIC -->
                    <div class="profile-userpic">
                        <img class="img-responsive" alt="">
                        <span class="imagem-mascara glyphicon glyphicon-camera"></span>
                    </div>
                    <!-- END SIDEBAR USERPIC -->
                    <!-- SIDEBAR USER TITLE -->
                    <div class="profile-usertitle">
                        <div class="profile-usertitle-name"></div>
                        <div class="profile-usertitle-job"></div>
                    </div>
                    <div class="user-balance">
                        <div class="user-actual-balance">
                            <div id="piggy-bank">
                                <img src="{!! asset('images/piggy-bank.png') !!}">
                            </div>
                            <div>
                                <balance></balance>
                            </div>
                        </div>
                        <div class="add-credits">
                            <a href="/adicionar-creditos">Adicionar</a>
                        </div>
                    </div>
                    <!-- END SIDEBAR USER TITLE -->
                    <!-- SIDEBAR BUTTONS -->
                    <!--div class="profile-userbuttons">
                      <button type="button" class="btn btn-success btn-sm">Follow</button>
                      <button type="button" class="btn btn-danger btn-sm">Message</button>
                    </div-->
                    <!-- END SIDEBAR BUTTONS -->
                    <!-- SIDEBAR MENU -->
                    <div class="profile-usermenu">
                        <ul class="nav">
                            <li class="item-menu">
                                <a href="/musicas">
                                    <i class="glyphicon glyphicon-music"></i>
                                    Minhas músicas </a>
                            </li>
                            <li class="item-menu">
                                <a href="/perfil">
                                    <i class="glyphicon glyphicon-user"></i>
                                    Meus dados </a>
                            </li>
                            <li class="item-menu">
                                <a href="/musica/nova">
                                    <i class="glyphicon glyphicon-pencil"></i>
                                    Cadastrar Música </a>
                            </li>
                            <li class="item-menu">
                                <a href="/conta-corrente">
                                    <i class="glyphicon glyphicon-usd"></i>
                                    Conta Corrente </a>
                            </li>
                            <li class="item-menu">
                                <a href="/adicionar-creditos">
                                    <i class="glyphicon glyphicon-plus"></i>
                                    Adicionar Créditos </a>
                            </li>
                            <li class="item-menu">
                                <a href="#">
                                    <i class="glyphicon glyphicon-question-sign"></i>
                                    Precisa de ajuda? </a>
                            </li>
                            <li id="logout" class="item-menu">
                                <a href="/logout">
                                    <i class="glyphicon glyphicon-off"></i>
                                    Sair </a>
                            </li>
                        </ul>
                    </div>
                    <!-- END MENU -->
                </div>
            </div>
            <div class="col-md-9">
                @yield('root-content')
            </div>
        </div>
        <!--div id="selectImageToUpload" class="modal" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h5 class="modal-title">Selecione uma nova foto para o seu perfil.</h5>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-6 col-md-offset-4">
                    <label id="choose_your_image" for='upload_image'>Selecionar foto &#187;</label>
                    <input type="file" name="upload_image" id="upload_image" accept="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div-->
        <input type="file" name="upload_image" id="upload_image" accept="image"/>
        <div id="uploadimageModal" class="modal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h5 class="modal-title">Alterar foto de perfil</h5>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-8 text-center">
                                <div id="imageDemo"></div>
                            </div>
                            <div id="confirmButton" class="col-md-4">
                                <button class="btn btn-success crop_image">Salvar nova foto!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
