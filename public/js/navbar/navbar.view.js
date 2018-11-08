var API_ROOT_PATH_TOKEN = "http://maquinaderegistro.com.br:82/homolog/token";
var API_ROOT_PATH_PEOPLE = "http://maquinaderegistro.com.br:82/homolog/api/pessoas";
var API_ROOT_PATH_MUSIC = "http://maquinaderegistro.com.br:82/homolog/api/musicas";
var API_ROOT_PATH_PAYMENT = "http://maquinaderegistro.com.br:82/homolog/api/pagamentos";
var API_ROOT_PATH_BALANCE = "http://maquinaderegistro.com.br:82/homolog/api/contas";

$(document).ready(function () {
    /*SLIDE MENU*/
    var slidebar_width = 290; //slidebar width + padding size
    var slide_bar = $(".side-menu-wrapper"); //slidebar
    var slide_open_btn = $(".slide-menu-open"); //slidebar close btn
    var slide_close_btn = $(".menu-close"); //slidebar close btn
    var overlay = $(".side-menu-overlay"); //slidebar close btn

    slide_open_btn.click(function (e) {
        e.preventDefault();
        slide_bar.css({"right": "0px"}); //change to "right" for right positioned menu
        overlay.css({"opacity": "1", "width": "100%"});
        $("#userName").focus();
    });
    slide_close_btn.click(function (e) {
        e.preventDefault();
        slide_bar.css({"right": "-" + slidebar_width + "px"}); //change to "right" for right positioned menu
        overlay.css({"opacity": "0", "width": "0"});
    });
    overlay.click(function (e) {
        e.preventDefault();
        slide_bar.css({"right": "-" + slidebar_width + "px"}); //change to "right" for right positioned menu
        overlay.css({"opacity": "0", "width": "0"});
    });

    if (!$('#btnLogin').is(':visible')) {
        verifyCurrentToken();
        verifyCurrentUserName();
    }

    $("#loginForm").submit(function () {
        return false;
    });

    $("#btnDoLogin").click(function () {
        var userName = $("#userName").val();
        var password = $("#password").val();

        var settingsToAuth = {
            "async": true,
            "crossDomain": true,
            "url": API_ROOT_PATH_TOKEN,
            "method": "POST",
            "headers": {
                'content-type': "application/x-www-form-urlencoded"
            },
            "data": {
                "grant_type": "password",
                "username": userName,
                "password": password
            }
        }

        $.ajax(settingsToAuth).done(function (response) {
            var token = response.access_token;
            var userName = response.userName;
            var cpf = response.cpf;
            var completeName = response.nome;
            var email = response.email;

            var url = "/login";

            var settingsToPutInSesssion = {
                "async": true,
                "crossDomain": true,
                "url": url,
                "method": "POST",
                "headers": {
                    'X-CSRF-TOKEN': $("meta[name='csrf']").attr("content")
                },
                "data": {
                    "token": token,
                    "userName": userName,
                    "cpf": cpf,
                    "completeName": completeName,
                    "email": email
                }
            }

            $.ajax(settingsToPutInSesssion).done(function (response) {
                window.location.replace("/musicas");
            }).fail(function (data) {
                if (data.responseText.indexOf("Usuário ou Senha inválido") !== -1) {
                    $("#statusOfLogin").slideDown();
                    $("#statusOfLogin").addClass('alert-danger');
                    $("#statusOfLogin").append("<strong>Erro!</strong> Usuário ou Senha inválido!");
                    document.getElementById("userName").style.boxShadow = "0 0 5px #ff0000";
                    document.getElementById("userName").style.border = "1px solid #ff0000";
                    document.getElementById("password").style.boxShadow = "0 0 5px #ff0000";
                    document.getElementById("password").style.border = "1px solid #ff0000";
                }
            });
        }).fail(function (data) {
            console.log(data.responseText);
            if (data.responseText.indexOf("Usuário ou senha incorreto") !== -1) {
                $("#statusOfLogin").empty();

                $("#statusOfLogin").slideDown();
                $("#statusOfLogin").addClass('alert-danger');
                $("#statusOfLogin").append("<strong>Erro!</strong> Usuário ou Senha inválido!");
                document.getElementById("userName").style.boxShadow = "0 0 5px #ff0000";
                document.getElementById("userName").style.border = "1px solid #ff0000";
                document.getElementById("password").style.boxShadow = "0 0 5px #ff0000";
                document.getElementById("password").style.border = "1px solid #ff0000";
            }
        });
    });

    $('#btnLogin').on('scroll', function () {
        $('#login-dp').slideUp("slow");
    });
    $('#btnLogin').on('click', function () {
        if ($('#login-dp').is(':visible')) {
            $('#login-dp').slideUp("slow");
        } else {
            $('#login-dp').slideDown("slow");
        }
    });
    $('#btnLogin').click(function (e) {
        e.stopPropagation();
    });
    $('#email').click(function (e) {
        e.stopPropagation();
    });
    $('#password').click(function (e) {
        e.stopPropagation();
    });
    $('#login-dp').click(function (e) {
        e.stopPropagation();
    });
    $('body').click(function () {
        $('#login-dp').slideUp("slow");
    });

    $("#guestAlert").fadeTo(5000, 500).slideDown(500, function () {
        if (!$('#login-dp').is(':visible')) {
            $('#login-dp').slideDown("slow");
        }
        $("#guestAlert").slideUp("slow");
    });

    function verifyCurrentToken() {
        var url = "/user/auth/token/current";

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf"]').attr('content')
            }
        });
        $.ajax({
            url: url,
            method: 'GET',
            success: function (result) {
                var element = '<meta name="currentToken" content="';
                element += result.token;
                element += '"/>';
                $("head").append(element);
            }
        });
    }

    function verifyCurrentUserName() {
        var url = "/user/auth/username/current";

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf"]').attr('content')
            }
        });
        $.ajax({
            url: url,
            method: 'GET',
            success: function (result) {
                var element = '<meta name="currentUserName" content="';
                element += result.userName;
                element += '"/>';
                $("head").append(element);
            }
        });
    }
});

function currentToken(){
    return $('meta[name="currentToken"]').attr('content');
}
