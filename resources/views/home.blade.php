@extends('template.layout')
 
@section('title', 'Home')

@section('css-view')
    <link rel="stylesheet" type="text/css" href="{{asset('css/home/style.css')}}">
@endsection
 
@section('content')
  <section id="banner" class="section-padding">
    <div class="container cont-banner">
      <div class="row">
        <div class="col-lg-5 header-section">
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
            <p class="header-subtitle">Primeiro sistema de registro de obras musicais do Brasil com protocolos registrados no cartório de títulos e documentos;</p>
          </div>
        </div>
        <div class="col-md-4 col-lg-2 hidden-xs hidden-sm img-bg-who-are-we">
          <img src="/images/mini-logo.png" alt="">
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
                Somos uma empresa com 18 anos de atuação no segmento de cartórios, com presença em 12 estados do Brasil
                e contando com mais de 300 cartórios em nossa carta de clientes;
              </p>
              <p class="header-subtitle">
                Plataforma de tecnologia desenvolvida em ambiente mantido por profissionais de alto expertise;
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
        <div class="col-md-3 col-lg-2 hidden-xs hidden-sm img-bg-warranty">
          <img src="/images/mini-logo.png" alt="">
        </div>
        <div class="col-md-9 col-lg-9">
          <div class="right">
            <div id="text-warranty" class="header-section">
              <h1 id="header-title">Quais garantias eu tenho na Máquina?</h1>
              <p class="header-subtitle">
                Atuamos desde 2001 oferecendo soluções tecnológicas para cartórios de todo o Brasil na área notarial e de registros públicos;
              </p>
              <p class="header-subtitle">
                Os arquivos enviados para os nossos servidores ficam armazenados em servidores redundantes;
              </p>
              <p class="header-subtitle">
                Suas obras ficarão registradas e gravadas para sempre;
              </p>
              <p class="header-subtitle">
                O certificado digital de registro com carimbo do tempo padrão ICP-Brasil garante e testemunha o registro temporal da obra.
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
        <div class="col-lg-4">
          <div class="left">
            <div id="text-certificate" class="header-section">
              <h1 id="header-title">O nosso certificado</h1>
            </div>
          </div>
        </div>
        <div class="col-lg-4 hidden-xs hidden-sm hidden-md img-bg-certificate">
          <img src="/images/mini-logo.png" alt="">
        </div>
        <div class="col-lg-4">
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
        <div class="col-lg-4 img-bg-who-use">
          <img src="/images/mini-logo.png" alt="">
          <div class="col-lg-6 col-lg-offset-3">
            <p>Á máquina de registro é fantástica, simples, rápida, minha obra está registrada.</p>
            <p><strong>Rodriggo Vivazs</strong></p>
          </div>
        </div>
        <div class="col-lg-4 img-bg-who-use">
          <img src="/images/mini-logo.png" alt="">
          <div class="col-lg-6 col-lg-offset-3">
            <p>Á máquina de registro é fantástica, simples, rápida, minha obra está registrada.</p>
            <p><strong>Rodriggo Vivazs</strong></p>
          </div>
        </div>
        <div class="col-lg-4 img-bg-who-use">
          <img src="/images/mini-logo.png" alt="">
          <div class="col-lg-6 col-lg-offset-3">
            <p>Á máquina de registro é fantástica, simples, rápida, minha obra está registrada.</p>
            <p><strong>Rodriggo Vivazs</strong></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="our-price">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div id="text-our-price" class="header-section">
            <h1 id="header-title">Nossos Preços</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 hidden-xs hidden-sm hidden-md img-bg-our-price">
          <img src="/images/mini-logo.png" alt="">
        </div>
        <div class="col-lg-4 hidden-xs hidden-sm hidden-md img-bg-our-price">
          <img src="/images/mini-logo.png" alt="">
        </div>
        <div class="col-lg-4 hidden-xs hidden-sm hidden-md img-bg-our-price">
          <img src="/images/mini-logo.png" alt="">
        </div>
      </div>
    </div>
  </section>

  <section id=" ">
    <div class="container-fluid">
      <div class="row noPB">
        <div class="col-lg-12">
          <div id="text-composers-panel" class="header-section">
            <h1 id="header-title">Painel dos Compositores</h1>
            <h5>Estes são os artistas mais acessados na Máquina até o momento.</h5>
            <h5>Clique para explorar o seu acervo.</h5>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
          <div class="cloud" style="height: 400px; display: flex;">
            <div class="round bloc1" style="flex:1 1 auto;">
              <a href="#" title="Teste1">
                <div style="background-image: url('http://f.i.uol.com.br/fotografia/2014/11/28/461482-970x600-1.jpeg');"></div>
              </a>
            </div>
    
            <div class="round bloc2" style="flex:1 1 auto;">
              <a href="#" title="Teste1">
                <div style="background-image: url('http://static1.purepeople.com.br/articles/0/73/76/0/@/1006610-cantor-faleceu-no-dia-24-de-junho-950x0-2.jpg');"></div>
              </a>
            </div>
            <div class="round bloc3" style="flex:1 1 auto;">
              <a href="#" title="Teste1">
                <div style="background-image: url('http://musica.culturamix.com/blog/wp-content/gallery/cantores-solo-de-rock-5/cantores-solo-de-rock-13.jpg');"></div>
              </a>
            </div>
    
            <div class="round bloc4" style="flex:1 1 auto;;">
              <a href="#" title="Teste1">
                <div style="background-image: url('https://www.blink102.com.br/wp-content/uploads/2016/04/eduardo-costa.jpg');"></div>
              </a>
            </div>
            <div class="round bloc5" style="flex:1 1 auto;">
              <a href="#" title="Teste1">
                <div style="background-image: url('http://cdn.ofuxico.com.br/img/upload/noticias/2016/08/30/273816_36.jpg');"></div>
              </a>
            </div>
    
            <div class="round bloc6" style="flex:1 1 auto;">
              <a href="#" title="Teste1">
                <div style="background-image: url('http://www.todosinstrumentosmusicais.com.br/wp-content/uploads/2013/08/Cantora-Famosa-4.jpg');"></div>
              </a>
            </div>
            <div class="round bloc7" style="flex:1 1 auto;">
              <a href="#" title="Teste1">
                <div style="background-image: url('https://www.otvfoco.com.br/wp-content/uploads/2017/07/simone-e-simaria2.jpg');"></div>
              </a>
            </div>
    
            <div class="round bloc8" style="flex:1 1 auto;">
              <a href="#" title="Teste1">
                <div style="background-image: url('http://www.blogdomarioadolfo.com.br/wp-content/uploads/2017/12/Captura-de-Tela-2017-12-19-%C3%A0s-11.09.49.png');"></div>
              </a>
            </div>
            <div class="round bloc9" style="flex:1 1 auto;">
              <a href="#" title="Teste1">
                <div style="background-image: url('https://lista10.org/wp-content/uploads/2015/09/cantores-queridos-7.jpg');"></div>
              </a>
            </div>
    
            <div class="round bloc10" style="flex:1 1 auto;">
              <a href="#" title="Teste1">
                <div style="background-image: url('http://cdn.gunsnroses.com/site/chamber-logo.png');"></div>
              </a>	
            </div>
          </div>
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
        <div class="col-md-4 col-lg-6">
          <div class="cod-md-12 col-lg-12">
            <div class="col-lg-2"><img class="img-composer-of-music" src="/images/banner.jpg" alt=""></div>
            <div class="col-lg-10"><audio autoplay="autoplay" preload="none" controls="controls"></audio></div>
          </div>
          <div class="cod-md-12 col-lg-12">
            <div class="col-lg-2"><img class="img-composer-of-music" src="/images/banner.jpg" alt=""></div>
            <div class="col-lg-10"><audio autoplay="autoplay" preload="none" controls="controls"></audio></div>
          </div>
          <div class="cod-md-12 col-lg-12">
            <div class="col-lg-2"><img class="img-composer-of-music" src="/images/banner.jpg" alt=""></div>
            <div class="col-lg-10"><audio autoplay="autoplay" preload="none" controls="controls"></audio></div>
          </div>
          <div class="cod-md-12 col-lg-12">
            <div class="col-lg-2"><img class="img-composer-of-music" src="/images/banner.jpg" alt=""></div>
            <div class="col-lg-10"><audio autoplay="autoplay" preload="none" controls="controls"></audio></div>
          </div>
          <div class="cod-md-12 col-lg-12">
            <div class="col-lg-2"><img class="img-composer-of-music" src="/images/banner.jpg" alt=""></div>
            <div class="col-lg-10"><audio autoplay="autoplay" preload="none" controls="controls"></audio></div>
          </div>
          <div class="cod-md-12 col-lg-12">
            <div class="col-lg-2"><img class="img-composer-of-music" src="/images/banner.jpg" alt=""></div>
            <div class="col-lg-10"><audio autoplay="autoplay" preload="none" controls="controls"></audio></div>
          </div>
          <div class="cod-md-12 col-lg-12">
            <div class="col-lg-2"><img class="img-composer-of-music" src="/images/banner.jpg" alt=""></div>
            <div class="col-lg-10"><audio autoplay="autoplay" preload="none" controls="controls"></audio></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="come-to">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div id="text-composers-panel" class="header-section">
            <h1 id="header-title">Venha para a Máquina</h1>
            <h5>Venha para a Máquina de Registro e conheça o método mais rápido e eficaz para o registro de obras.</h5>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3 col-lg-3 text-center text-center-horizon"><img class="img-responsive" src="/images/pague-veloz.png" alt=""></div>
        <div class="col-sm-1 col-lg-1 text-center text-center-horizon"><img class="img-responsive" src="/images/bry.png" alt=""></div>
        <div id="img-come-to" class="col-sm-4 col-lg-4 text-center"><img class="img-responsive" src="/images/logo.jpg" alt=""></div>
        <div class="col-sm-1 col-lg-1 text-center text-center-horizon"><img class="img-responsive" src="/images/bry.png" alt=""></div>
        <div class="col-sm-3 col-lg-3 text-center text-center-horizon"><img class="img-responsive" src="/images/logo-brain.png" alt=""></div>
      </div>
    </div>
  </section>

  @if (session()->exists('guest.message'))
    <div class="container-fluid">
      <div class="alert alert-warning" id="guestAlert" role="alert"><?php echo session()->get('guest.message'); session()->forget('guest.message'); ?></div>
    </div>
  @endif
@endsection

@section('js-view')
  <script src="{{asset('js/home/home.view.js')}}"></script>
@endsection