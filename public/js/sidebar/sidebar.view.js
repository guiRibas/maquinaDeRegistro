$(document).ready(function () {

    showMessage();

    setTimeout(function () {
    }, 1500);

    setTimeout(function () {
        loadProfilePhoto();
        userData();
        //croppie();
    }, 700);

    $(".imagem-mascara").mouseenter(function () {
        $(this).css("cursor", "pointer");
    });

    $(".imagem-mascara").click(function () {
        $("#upload_image").click();
    });

    var hrefRaw = [location.pathname, location.search];
    var href = hrefRaw.toString().replace(',', '');
    var targetPath = '#accordionSidebar > li.nav-item > a[href="' + href + '"]';

    $(targetPath).parent().addClass('active');
});

function loadProfilePhoto() {
    var userName = currentUserName();

    var settingsToGetImage = {
        "async": true,
        "crossDomain": true,
        "url": API_ROOT_PATH_PEOPLE + "/imagem/" + userName,
        "method": "GET",
        "headers": {
            "content-type": "application/x-www-form-urlencoded"
        }
    }

    $.ajax(settingsToGetImage).done(function (response) {
        $("#container-margin > div.row.profile > nav > div.profile-userpic > img").attr("src", API_ROOT_PATH_PEOPLE + "/imagem/" + userName);
    }).fail(function (data) {
        $("#container-margin > div.row.profile > nav > div.profile-userpic > img").attr("src", "https://thumbs.dreamstime.com/b/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-46846325.jpg");
    });
}

function userData() {
    var user = currentUserName();
    var token = currentToken();

    if (user != null) {
        var settingsToGetData = {
            "async": true,
            "crossDomain": true,
            "url": API_ROOT_PATH_PEOPLE + "/" + user,
            "method": "GET",
            "headers": {
                "authorization": "Bearer " + token
            }
        }

        $.ajax(settingsToGetData).done(function (response) {
            $(".profile-usertitle-name").html(response.nomeCompleto);
            $(".profile-usertitle-job").html("#" + response.nomeArtistico);

            $("#emailAccount").val(response.email);
            $("#phone1").val(response.telefonePrincipal);
            $("#phone2").val(response.telefoneSecundario);
            $("#cep").val(response.cep);
            $("#address").val(response.rua);
            $("#numberOfHouse").val(response.numero);
            $("#complementOfHouse").val(response.complemento);
            $("#neighborhood").val(response.bairro);
            $("#city").val(response.cidade);
            $("#state").val(response.estado);
        }).fail(function (data) {
            console.log(data.responseText);
        });
    }
}

function setChangePhoto(status, message){
    var url = "/user/message/set/status";

    var statusOfChangePhotoToPutInSesssion = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "headers": {
            'X-CSRF-TOKEN': $("meta[name='csrf']").attr("content")
        },
        "data": {
            "statusMessage": status,
            "textMessage": message
        }
    }

    $.ajax(statusOfChangePhotoToPutInSesssion).done(function (response) {
        window.location.replace("/musicas");
    }).fail(function (data) {
        console.log(data);
    });
}

function showMessage(){
    $("#message").fadeIn(700);

    setTimeout(function() {
        $('#message').fadeOut(300, function(){
            $(this).remove();
        });
    }, 4300);
}

function currentUserName() {
    return $('meta[name="currentUserName"]').attr('content');
}

function currentToken() {
    return $('meta[name="currentToken"]').attr('content');
}
