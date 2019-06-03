<!DOCTYPE html>
<html lang="pt-br">
<head id="teste">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="_csrf" content="{{csrf_token()}}"/>
    <title>Brainsoft Sistemas - @yield('title')</title>

    <!--link rel="shortcut icon" type="image/png" href="img/brain_icon.png"/-->
    <link rel="stylesheet" type="text/css"
          href="https://fonts.googleapis.com/css?family=Open+Sans|Candal|Alegreya+Sans">
    <link rel="stylesheet" href="{{asset('css/bootstrap/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('template/main/assets/fonts/awesome/css/fontawesome.min.css')}}">
    <link rel="stylesheet" href="{{asset('template/main/assets/css/style.css')}}">
    <link rel="stylesheet" href="{{asset('template/main/assets/css/custom.css')}}">
    <link rel="stylesheet" href="{{asset('css/template/style.css')}}">

    @yield('css-view')
</head>
<body>
<header>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid logo">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="col-sm-12 col-md-3 col-lg-3 navbar-header">
                <button type="button" id="btn-toggle" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/"><img class="img-responsive" id="logo-navbar" src="/images/logo.png"
                                                      alt="logo"></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse our-navbar" id="bs-example-navbar-collapse-1">
                <ul id="menu" class="col-sm-12 col-md-9 col-lg-9 nav navbar-nav">
                    @if ($_SERVER["REQUEST_URI"] == "/usuario/novo")
                        <li class="menu"><a href="/#who-are-we">QUEM SOMOS</a></li>
                        <li class="menu"><a href="/#our-differential">NOSSO DIFERENCIAL</a></li>
                        <li class="menu"><a href="/#certificate">CONHEÇA O CERTIFICADO</a></li>
                        <li class="menu"><a href="/#talk-with-us">FALE CONOSCO</a></li>
                    @else
                        <li class="menu"><a href="#who-are-we">QUEM SOMOS</a></li>
                        <li class="menu"><a href="#our-differential">NOSSO DIFERENCIAL</a></li>
                        <li class="menu"><a href="#certificate">CONHEÇA O CERTIFICADO</a></li>
                        <li class="menu"><a href="#talk-with-us">FALE CONOSCO</a></li>
                    @endif

                    @if (!session()->exists('user.token'))
                        <li class="menu"><a href="usuario/novo">CADASTRE-SE</a></li>
                    @endif

                    <!--VERIFICANDO SE EXISTE TOKEN NA SESSÃO-->
                    @if (!session()->exists('user.token'))
                        <li class="menu"><a href="#" class="slide-menu-open">ENTRAR</a></li>
                    @else
                        <li class="menu"><a href="/musicas" class="slide-menu-open-account">MINHA CONTA</a></li>
                    @endif

                    <div class="side-menu-overlay" style="width: 0px; opacity: 0;"></div>
                    <div class="side-menu-wrapper">
                        <a href="#" class="menu-close">&times;</a>
                        <div class="row">
                            <div class="col-md-12">
                                <div id="statusOfLogin" class="alert" style="display:none"></div>
                                <form id="loginForm" name="loginForm" class="form" role="form" accept-charset="UTF-8"
                                      id="login-nav" method="POST" novalidate>
                                    @csrf
                                    <div class="form-group">
                                        <label for="userName">Usuário</label>
                                        <input type="text" class="form-control" id="userName" name="userName"
                                               placeholder="Informe seu usuário" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Senha</label>
                                        <input type="password" class="form-control" id="password" name="password"
                                               placeholder="Informe sua senha" required>
                                        <div class="help-block text-right"><a href="">Esqueceu sua senha?</a></div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary btn-block" id="btnDoLogin">Entrar
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="bottom text-center">
                                Novo aqui? <a href="usuario/novo"><b>Crie sua conta!</b></a>
                            </div>
                        </div>
                    </div>
                <!--FIM DA VERIFICAÇÃO-->
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</header>

@yield('content')

<!--Footer-->
<footer id="footer" class="footer">
    <div class="container text-center">
        <div class="top-bar">
            <p>Brainsoft Sistemas | Rua Dezessete de Julho, 1051 - Trianon - Guarapuava - PR | (42) 3622-6733 |
                www.brainsoftsistemas.com.br</p>
        </div>
    </div>
</footer>
<!--/ Footer-->

<script src="{{asset('js/jquery/jquery.min.js')}}"></script>
<script src="{{asset('js/bootstrap/bootstrap.min.js')}}"></script>
<script src="{{asset('js/login/check-login.js')}}"></script>
<script src="{{asset('js/navbar/navbar.view.js')}}"></script>
<script src="{{asset('js/jquery-easing/jquery.easing.min.js')}}"></script>
<script src="{{asset('js/jquery.mask.js')}}"></script>
@yield('js-view')
</body>
</html>
