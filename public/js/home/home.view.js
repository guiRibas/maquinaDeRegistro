$(document).ready(function () {

    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 600) { //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
            $("#bs-example-navbar-collapse-1").removeClass("our-navbar");
            $(".navbar-header").attr("style", "padding:0;");
            $("#logo-navbar").attr("style", "margin-top:0; width:225px;");
            $("#menu").attr("style", "margin-top: 0.8em!important;");
        } else {
            $("#bs-example-navbar-collapse-1").addClass("our-navbar");
            $(".navbar-header").removeAttr("style");
            $("#logo-navbar").removeAttr("style");
            $("#menu").removeAttr("style");
        }
    });

    $('.navbar-nav li a').click(function () {
        if (!this.hash == "") {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 80)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        }
    });
    // Outras Animações
    // linear, swing, jswing, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInElastic, easeInBack, easeInBounce, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutElastic, easeOutBack, easeOutBounce, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutElastic, easeInOutBack, easeInOutBounce

    setTimeout(function () {
        //getAllMusicTop();
        makeRoundBubble();
    }, 400);
});

function getAllMusicTop() {
    var token = currentToken();

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": API_ROOT_PATH_MUSIC + "?numeroPagina=1&registrosPorPagina=7",
        "method": "GET",
        "headers": {
            "authorization": "Bearer " + token,
            "content-type": "application/x-www-form-urlencoded"
        }
    }

    $.ajax(settings).done(function (response) {

        $.each(response, function(i) {
            var div = '<div class="cod-md-12 col-lg-12">';
            div += '<div class="col-lg-2"><img class="img-composer-of-music" src="images/banner.jpg" alt=""></div>';
            div += '<div class="col-lg-offset-1 col-lg-9">';
            div += '<audio autoplay="autoplay" preload="none" controls="controls"></audio>';
            div += '</div>';
            div += '</div>';

            $("#musicsInTop").append(div);

            console.log(i);
        });
    }).fail(function (data) {
        console.log(data.responseText);
    });
}

function makeRoundBubble() {
    minTop = Math.ceil(0);
    maxTop = Math.floor(250);

    var tamanho = [40, 50, 70, 75, 80, 85, 90, 95, 100, 115, 130, 150];

    for (var i = 1; i < 9; i++) {
        switchElements($('.bloc' + i), $('.bloc' + (Math.floor(Math.random() * 10) + 1)));
    }

    for (var i = 1; i < 11; i++) {
        tam = tamanho[Math.floor(Math.random() * 11)];

        $(".bloc" + i).css("height", tam + "px");
        $(".bloc" + i).css("width", tam + "px");
        $(".bloc" + i).css("marginTop", Math.floor(Math.random() * (maxTop - minTop)));
    }
}

function switchElements($ele1, $ele2) {
    $ele1.after($ele2);
}
