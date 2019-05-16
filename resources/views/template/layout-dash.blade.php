<!DOCTYPE html>
<html lang="pt-br">
<head id="teste">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Brainsoft Sistemas - @yield('title')</title>

    <!--link rel="shortcut icon" type="image/png" href="img/brain_icon.png"/-->
    <link rel="stylesheet" href="/css/bootstrap/bootstrap-4-3-1.min.css">
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
                <a class="navbar-brand" href="/">
                    <img class="img-responsive" id="logo-navbar-dashboard" src="/images/logo.jpg" alt="logo">
                </a>
            </div>
        </div><!-- /.container-fluid -->
    </nav>
</header>

@yield('content')

<!--Footer-->
<footer id="footer" class="footer mt-auto py-3">
    <div class="container text-center">
        <span class="text-muted">Desenvolvido por: Brainsoft Sistemas | Rua Dezessete de Julho, 1051 - Trianon - Guarapuava - PR | (42) 3622-6733 |
                www.brainsoftsistemas.com.br</span>
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
