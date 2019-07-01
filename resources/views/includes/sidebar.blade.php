        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            @if (session()->exists('user.statusMessage'))
                <div id="message" style="display: none; position: fixed; top: 0; left: 20%; right: 20%; width: 60%; padding-top: 10px; z-index: 9999">
                    <div class="alert alert-{{session()->get('user.statusMessage')}}" style="margin: 0 auto; margin-top: 160px!important; box-shadow: 1px 1px 5px black;">
                        <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
                        {{session()->get('user.textMessage')}}
                    </div>
                </div>
                {{session()->forget('user.statusMessage')}}
            @endif

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon">
                    <img src="{{asset('images/logo-icon.png')}}" class="img-fluid" alt="">
                </div>
                <div class="sidebar-brand-text mx-3 align-top"><img src="{{asset('images/logo-text.png')}}" class="img-fluid" alt=""></div>
            </a>

            <li class="nav-item">
                <a class="nav-link" href="/musicas">
                    <i class="fas fa-fw fa-music"></i>
                    <span>Minhas músicas</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="/musica/nova">
                    <i class="fas fa-fw fa-plus"></i>
                    <span>Cadastrar Música</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-wallet"></i>
                    <span>Conta Corrente</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="/conta-corrente/historico">Histórico</a>
                        <a class="collapse-item" href="/conta-corrente/extrato">Extrato</a>
                    </div>
                </div>
            </li>

            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <a class="nav-link" href="/conta-corrente/creditos/adicionar">
                    <i class="fas fa-fw fa-dollar-sign"></i>
                    <span>Adicionar Créditos</span>
                </a>
            </li>

            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline" id="btn-toggle-sidebar">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
        <!-- End of Sidebar -->


        <!--div id="container-margin" class="container-fluid">
            <div class="row profile mt-9">

                <nav class="nav flex-column col-md-2">
                    <div class="profile-userpic">
                        <img class="img-responsive" alt="">
                        <span class="imagem-mascara glyphicon glyphicon-camera"></span>
                    </div>
                    <div class="profile-usertitle">
                        <div class="profile-usertitle-name"></div>
                        <div class="profile-usertitle-job"></div>
                    </div>
                    <div class="user-balance">
                        <div class="user-actual-balance">
                            <div id="piggy-bank">
                                <img src="{#!! asset('images/piggy-bank.png') !!}">
                            </div>
                            <div>
                                <balance></balance>
                            </div>
                        </div>
                        <div class="add-credits">
                            <a href="/adicionar-creditos">Adicionar</a>
                        </div>
                    </div>

                    <a href="/perfil" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-start align-items-center">
                            <span class="fas fa-user fa-fw mr-3"></span>
                            <span class="menu-collapsed">Meus Dados</span>
                        </div>
                    </a>

                    <a href="/musicas" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-start align-items-center">
                            <span class="fas fa-music fa-fw mr-3"></span>
                            <span class="menu-collapsed">Minhas Músicas</span>
                        </div>
                    </a>

                    <a href="/musica/nova" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-start align-items-center">
                            <span class="fas fa-pencil-alt fa-fw mr-3"></span>
                            <span class="menu-collapsed">Cadastrar Música</span>
                        </div>
                    </a>

                    <a href="/conta-corrente" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-start align-items-center">
                            <span class="fas fa-dollar-sign fa-fw mr-3"></span>
                            <span class="menu-collapsed">Conta Corrente</span>
                        </div>
                    </a>

                    <a href="/adicionar-creditos" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-start align-items-center">
                            <span class="fas fa-plus fa-fw mr-3"></span>
                            <span class="menu-collapsed">Adicionar Créditos</span>
                        </div>
                    </a>

                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-start align-items-center">
                            <span class="fas fa-question-circle fa-fw mr-3"></span>
                            <span class="menu-collapsed">Precisa de ajuda?</span>
                        </div>
                    </a>

                    <div class="line"></div>

                    <a href="/logout" id="logout" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-start align-items-center">
                            <span class="fas fa-power-off fa-fw mr-3"></span>
                            <span class="menu-collapsed">Sair</span>
                        </div>
                    </a>
                </nav>

                <div class="col-md-10">
                    @#yield('root-content')
                </div>
            </div>
            <input type="file" name="upload_image" id="upload_image" accept="image"/>
            <div id="uploadimageModal" class="modal" role="dialog" data-keyboard="false">
                <div class="modal-dialog">
                    <div class="modal-content" style="height: 500px;">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h5 class="modal-title">Alterar foto de perfil</h5>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div id="imageDemo"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <button class="btn btn-success crop_image">Salvar nova foto!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div-->
