@extends('layouts.layout')

@section('page-title', 'Página Inicial')

@section('css-view')
    <link rel="stylesheet" type="text/css" href="{{asset('css/home/style.css')}}">
    <link href="https://fonts.googleapis.com/css?family=Poppins:700" rel="stylesheet">
@endsection

@section('content')
    <section id="banner" class="section-padding">
        @if (session()->exists('guest.message'))
            <div class="container-fluid">
                <div class="alert alert-warning" id="guestAlert"
                     role="alert"><?php echo session()->get('guest.message'); session()->forget('guest.message'); ?></div>
            </div>
        @endif
        <div class="container cont-banner">
            <div class="row">
                <div class="col-lg-7 header-section">
                    <h2 id="header-title">Registre a sua obra.</h2>
                    <p class="header-subtitle">Grave. Registre. Publique.</p>
                    <input type="hidden" value="{{$_SERVER['REMOTE_ADDR']}}">
                </div>
            </div>
        </div>
    </section>

    <section id="who-are-we">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 col-lg-8 col-lg-offset-1">
                    <div id="text-who-are-we" class="header-section">
                        <h1 id="header-title">Quais as vantagens de usar a Máquina?</h1>
                        <p class="header-subtitle">Músicas e poesias registradas de forma simples e segura;</p>
                        <p class="header-subtitle">Sistema de pagamento através da PagueVeloz;</p>
                        <p class="header-subtitle">Primeiro sistema de registro de obras musicais do Brasil com
                            protocolos registrados no cartório de títulos e documentos;</p>
                    </div>
                </div>
                <div class="col-md-4 col-lg-2 hidden-xs hidden-sm img-bg-who-are-we">
                    <img src="images/mini-logo.png" alt="">
                </div>
            </div>
        </div>
    </section>

    <section id="our-differential">
        <div class="container-fluid">
            <div class="row specialRow">
                <div class="col-md-8 col-lg-6 bg">
                    <div class="left">
                        <div id="text-our-differential" class="header-section">
                            <h1 id="header-title">Nosso Diferencial</h1>
                            <p class="header-subtitle">
                                Somos uma empresa com 18 anos de atuação no segmento de cartórios, com presença em 12
                                estados do Brasil
                                e contando com mais de 300 cartórios em nossa carta de clientes;
                            </p>
                            <p class="header-subtitle">
                                Plataforma de tecnologia desenvolvida em ambiente mantido por profissionais de alto
                                expertise;
                            </p>
                            <p class="header-subtitle">
                                Suporte técnico permanente ao usuário.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-6 hidden-xs hidden-sm img-bg"></div>
            </div>
        </div>
    </section>

    <section id="warranty">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-lg-3 hidden-xs hidden-sm img-bg-warranty text-center">
                    <img src="images/medalha.png" alt="">
                </div>
                <div class="col-md-9 col-lg-9">
                    <div class="right">
                        <div id="text-warranty" class="header-section">
                            <h1 id="header-title">Quais garantias eu tenho na Máquina?</h1>
                            <p class="header-subtitle">
                                Atuamos desde 2001 oferecendo soluções tecnológicas para cartórios de todo o Brasil na
                                área notarial e de registros públicos;
                            </p>
                            <p class="header-subtitle">
                                Os arquivos enviados para os nossos servidores ficam armazenados em servidores
                                redundantes;
                            </p>
                            <p class="header-subtitle">
                                Suas obras ficarão registradas e gravadas para sempre;
                            </p>
                            <p class="header-subtitle">
                                O certificado digital de registro com carimbo do tempo padrão ICP-Brasil garante e
                                testemunha o registro temporal da obra.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="certificate">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3">
                    <div class="left">
                        <div id="text-certificate" class="header-section">
                            <h1 id="header-title">O nosso certificado</h1>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 hidden-xs hidden-sm hidden-md img-bg-certificate">
                    <img src="images/certificado.jpg" alt="">
                </div>
                <div class="col-lg-3">
                    <div class="right">
                        <div id="text-certificate" class="header-section">
                            <p class="header-subtitle">
                                Arquivo em PDF-A
                            </p>
                            <p class="header-subtitle">
                                Assinatura em padrão ICP-Brasil
                            </p>
                            <p class="header-subtitle">
                                Arquivo eletrônico com criptografia de 128bits e XXXX
                            </p>
                            <p class="header-subtitle">
                                Controle de Hash: ZeusUnicode - XXYYY e o ZZZLLL
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="who-use">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div id="text-who-use" class="header-section">
                        <h1 id="header-title">Quem usa a Máquina de Registro?</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 col-md-4 col-lg-4 img-bg-who-use">
                    <img class="img-responsive" src="images/user1.png" alt="">
                    <div class="col-xs-8 col-lg-9 col-xs-offset-2 col-lg-offset-2 mt-1">
                        <p>Á máquina de registro é fantástica, simples, rápida, minha obra está registrada.</p>
                        <p><strong>Rodriggo Vivazs</strong></p>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4 col-lg-4 img-bg-who-use">
                    <img class="img-responsive" src="images/user2.png" alt="">
                    <div class="col-xs-8 col-lg-9 col-xs-offset-2 col-lg-offset-2 mt-1">
                        <p>Á máquina de registro é fantástica, simples, rápida, minha obra está registrada.</p>
                        <p><strong>Rodriggo Vivazs</strong></p>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4 col-lg-4 img-bg-who-use">
                    <img class="img-responsive" src="images/user3.png" alt="">
                    <div class="col-xs-8 col-lg-9 col-xs-offset-2 col-lg-offset-2 mt-1">
                        <p>Á máquina de registro é fantástica, simples, rápida, minha obra está registrada.</p>
                        <p><strong>Rodriggo Vivazs</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="our-price">
        <div class="container-fluid">
            <div class="row noPB">
                <div class="col-lg-12">
                    <div id="text-our-price" class="header-section">
                        <h1 id="header-title">Nossos Preços</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 img-bg-our-price">
                    <img class="img-responsive" src="images/moeda1.jpg" alt="">
                    <h1 class="our-price-qtd noMT noMB"><strong>1</strong> crédito</h1>
                    <h1 class="our-price-cost noMT noMB"><strong>R$</strong> 9
                        <strong class="our-price-comma">,90</strong></h1>
                </div>
                <div class="col-lg-4 col-md-4 img-bg-our-price">
                    <img class="img-responsive" src="images/moeda3.jpg" alt="">
                    <h1 class="our-price-qtd noMT noMB"><strong>3</strong> créditos</h1>
                    <h1 class="our-price-cost noMT noMB"><strong>R$</strong> 26<strong
                                class="our-price-comma">,90</strong></h1>
                </div>
                <div class="col-lg-4 col-md-4 img-bg-our-price">
                    <img class="img-responsive" src="images/moeda5.jpg" alt="">
                    <h1 class="our-price-qtd noMT noMB"><strong>5</strong> créditos</h1>
                    <h1 class="our-price-cost noMT noMB"><strong>R$</strong> 41<strong
                                class="our-price-comma">,90</strong></h1>
                </div>
            </div>
        </div>
    </section>

    <section id="panel-works">
        <div class="container-fluid">
            <div class="row specialRow">
                <div class="col-md-8 col-lg-6 bg">
                    <div class="left">
                        <div id="text-panel-works" class="header-section">
                            <h1 id="header-title">Painel de Obras</h1>
                            <h5>Estas são as músicas mais acessadas na Máquina no momento.</h5>
                            <h5>Clique para ouvir.</h5>
                        </div>
                    </div>
                </div>
                <div id="musicsInTop" class="col-md-4 col-lg-6">
                </div>
            </div>
        </div>
    </section>

    <section id="talk-with-us">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div id="text-talk-with-us" class="header-section">
                        <h1 id="header-title">Fale Conosco</h1>
                        <h5>Nosso suporte técnico estará sempre à disposição em nossos canais de atendimento.</h5>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-offset-2 col-md-offset-3 col-lg-offset-3 col-xs-4 col-md-3 col-lg-3" style="text-align: center">
                    <img class="img-responsive" src="images/email.png" alt="">
                </div>
                <div class="col-xs-4 col-md-3 col-lg-3" style="text-align: center">
                    <img class="img-responsive" src="images/balao.png" alt="">
                </div>
            </div>
        </div>
    </section>

    <section id="come-to">
        <div class="container-fluid">
            <!--div class="row">
              <div class="col-lg-12">
                <div id="text-composers-panel" class="header-section">
                  <h1 id="header-title">Venha para a Máquina</h1>
                  <h5>Venha para a Máquina de Registro e conheça o método mais rápido e eficaz para o registro de obras.</h5>
                </div>
              </div>
            </div-->
            <div class="row">
                <div class="col-sm-3 col-lg-3 text-center text-center-horizon">
                    <img id="logo-pague-veloz" class="img-responsive" src="images/pague-veloz.png" alt="">
                </div>
                <div class="col-sm-1 col-lg-1 text-center text-center-horizon">
                    <img id="logo-bry" class="img-responsive" src="images/bry.png" alt=""></div>
                <div id="img-come-to" class="col-sm-4 col-lg-4 text-center">
                    <img id="logo-machine" class="img-responsive" src="images/logo.png" alt=""></div>
                <div class="col-sm-1 col-lg-1 text-center text-center-horizon">
                    <img id="logo-siatech" class="img-responsive" src="images/logo-siatech.png" alt="">
                </div>
                <div class="col-sm-3 col-lg-3 text-center text-center-horizon">
                    <img id="logo-brain" class="img-responsive" src="images/logo-brain.png" alt="">
                </div>
            </div>
        </div>
    </section>
@endsection

@section('js-view')
    <script src="{{asset('js/home/home.view.js')}}"></script>
@endsection
