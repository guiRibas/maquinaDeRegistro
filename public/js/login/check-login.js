var API_ROOT_PATH_TOKEN   = "http://maquinaderegistro.com.br:82/homolog/token";
var API_ROOT_PATH_PEOPLE  = "http://maquinaderegistro.com.br:82/homolog/api/pessoas";
var API_ROOT_PATH_MUSIC   = "http://maquinaderegistro.com.br:82/homolog/api/musicas";
var API_ROOT_PATH_BALANCE = "http://maquinaderegistro.com.br:82/homolog/api/contas";
var API_ROOT_PATH_VERIFY  = "http://maquinaderegistro.com.br:82/homolog/api/verificar";
var API_ROOT_PATH_PAYMENT = "http://maquinaderegistro.com.br:82/homolog/api/pagamentos";

$(document).ready(function () {

    verifyCurrentToken();
    verifyCurrentUserName();

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