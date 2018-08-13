<!DOCTYPE html>
	<html lang="pt-br">
	<head id="teste">
		<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="_token" content="{{csrf_token()}}" />
    <title>Brainsoft Sistemas - @yield('title')</title>
		    
		<!--link rel="shortcut icon" type="image/png" href="img/brain_icon.png"/-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans|Candal|Alegreya+Sans"> 
    <link rel="stylesheet" href="{{asset('css/font-awesome.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="stylesheet" href="{{asset('css/custom.css')}}">
    <link rel="stylesheet" href="{{asset('css/template-dash/style.css')}}">

    @yield('css-view')
	</head>
	<body>
    <header>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" id="btn-toggle" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
                <img class="img-responsive" id="logo-navbar" src="/images/logo.jpg" alt="logo">
            </a>
          </div>
  
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse our-navbar" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <!--VERIFICANDO SE EXISTE TOKEN NA SESSÃO-->
              @if (!session()->exists('user.token'))
                <li class="dropdown">
                  <a id="btnLogin" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">LOGIN <span class="caret"></span></a>
                  <ul id="login-dp" class="dropdown-menu">
                    <li>
                      <div class="row">
                        <div class="col-md-12">
                          <div id="statusOfLogin" class="alert" style="display:none"></div>
                          <form id="loginForm" name="loginForm" class="form" role="form" accept-charset="UTF-8" id="login-nav">
                            <div class="form-group">
                              <label for="userName">Usuário</label>
                              <input type="text" class="form-control" id="userName" name="userName" placeholder="Informe seu usuário" required>
                            </div>
                            <div class="form-group">
                              <label for="password">Senha</label>
                              <input type="password" class="form-control" id="password" name="password" placeholder="Informe sua senha" required>
                            <div class="help-block text-right"><a href="">Esqueceu sua senha?</a></div>
                            </div>
                            <div class="form-group">
                              <button type="submit" class="btn btn-primary btn-block" id="btnDoLogin">Entrar</button>
                            </div>
                          </form>
                        </div>
                        <div class="bottom text-center">
                          Novo aqui? <a href="usuario/novo"><b>Crie sua conta!</b></a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              @else
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">MINHA CONTA<span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="/musicas">Minhas Músicas</a></li>
                    <li><a href="/musica/nova">Cadastrar Música</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="/logout">Sair</a></li>
                  </ul>
                </li>
              @endif
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
        </div>
      </div>
    </footer>
    <!--/ Footer-->
        
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="{{asset('js/navbar/navbar.view.js')}}"></script>
    <script src="{{asset('js/jquery.easing.min.js')}}"></script>
    <script src="{{asset('js/jquery.mask.js')}}"></script>
      
    @yield('js-view')
  </body>
</html>