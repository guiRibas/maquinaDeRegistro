<!DOCTYPE html>
<html lang="pt-br">
<head id="teste">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Brainsoft Sistemas - @yield('title')</title>

    <!--link rel="shortcut icon" type="image/png" href="img/brain_icon.png"/-->
    <link rel="stylesheet" href="/css/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" type="text/css"
          href="https://fonts.googleapis.com/css?family=Open+Sans|Candal|Alegreya+Sans">
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
                <button type="button" id="btn-toggle" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/musicas">
                    <img class="img-responsive" id="logo-navbar" src="/images/logo.jpg" alt="logo">
                </a>
            </div>
        </div><!-- /.container-fluid -->
    </nav>
</header>

@yield('content')

<!--Footer-->
<footer id="footer" class="footer">
    <div class="container text-center">
        <div class="top-bar">
            <p>Desenvolvido por: Brainsoft Sistemas | Rua Dezessete de Julho, 1051 - Trianon - Guarapuava - PR | (42) 3622-6733 |
                www.brainsoftsistemas.com.br</p>
        </div>
    </div>
</footer>
<!--/ Footer-->

<script src="/js/jquery/jquery.min.js"></script>
<script src="/js/bootstrap/bootstrap.min.js"></script>
<script src="{{asset('js/balance/balance.view.js')}}"></script>
<script src="{{asset('js/sidebar/croppie.js')}}"></script>
<script src="{{asset('js/navbar/navbar.view.js')}}"></script>
<script src="{{asset('js/jquery.easing.min.js')}}"></script>
<script src="{{asset('js/jquery.mask.js')}}"></script>

@yield('js-view')
</body>
</html>
