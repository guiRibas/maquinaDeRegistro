<!DOCTYPE html>
<html lang="pt-br">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Brainsoft Sistemas">

    <title>Máquina de Registro | @yield('page-title')</title>

    <!-- Custom fonts for this layouts-->
    <link href="{{asset('template/dashboard/assets/fonts/awesome/css/all.min.css')}}" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="{{asset('template/dashboard/assets/css/template.css')}}" rel="stylesheet">
    <link href="{{asset('css/sidebar/style.css')}}" rel="stylesheet">
    @yield('specify-css')

</head>

<body id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">
        @include('includes.sidebar')
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
                @include('includes.topbar')
                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">@yield('page-title')</h1>
                    </div>
                    @yield('content')
                </div>
            </div>
            @include('includes.footer')
        </div>
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ei! É muito cedo para ir embora.</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Aproveite nossas promoções e registre suas músicas.</div>
                <div class="modal-footer">
                    <button class="btn btn-primary" type="button" data-dismiss="modal">Ver promoções</button>
                    <a class="btn btn-secondary" href="/logout">Sair</a>
                </div>
            </div>
        </div>
    </div>

    <script src="{{asset('js/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('js/bootstrap/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('js/jquery-easing/jquery.easing.min.js')}}"></script>
    <script src="{{asset('js/login/check-login.js')}}"></script>
    <script src="{{asset('js/sidebar/sidebar.view.js')}}"></script>
    <script src="{{asset('template/dashboard/assets/js/template.js')}}"></script>

    @yield('js-view')
</body>
</html>
