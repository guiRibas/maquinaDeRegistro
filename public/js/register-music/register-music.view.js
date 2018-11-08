$(document).ready(function () {

    $("#formAdd").submit(function () {
        return false;
    });

    setTimeout(function () {
        verifyBalanceToRegisterMusic();
    }, 1000);

    $(".chosen-container").addClass("block");
    $(".chosen-container").removeAttr("style");
    $(".chosen-search-input").attr("id", "inputGenre");
    $(".chosen-search-input").next().attr("id", "genre");

    $("[type=reset]").click(function () {
        cleanAllInputs();
    });

    //MOMENTO EM QUE O FORMULÁRIO É SUBMETIDO
    $("#newMusic").click(function (e) {
        e.preventDefault();

        var send = true;
        var position = 0;
        var order = 0;
        var count = 0;

        $("input").each(function () {
            if ($(this).attr("id") != "upload_image" && $(this).attr("id") != undefined) {
                isEmpty = verifyFields(this);

                if (isEmpty) {
                    if (position == 0) {
                        $(this).focus();
                        order = count;
                    }
                    position = 1;
                    send = false;
                }
                count++;
            }
        });

        $("textarea").each(function () {
            isEmpty = verifyFields(this);

            if (isEmpty) {
                if (order > 2 && count > 4) {
                    $(this).focus();
                }
                send = false;
            }
        });

        if (send) {
            sendForm();
        }
    });

    //VERIFICANDO CADA INPUT REAL-TIME
    $("input").bind("focus blur", function () {
        verifyFields(this);
    });

    $("textarea").blur(function () {
        verifyFields(this);
    });

    function verifyFields(field) {
        input = $(field).attr("id");

        if (input == "inputGenre") {
            if ($("#genre option:selected").html() == "") {
                $("#genre_chosen").addClass("required");

                return true;
            } else {
                $("#genre_chosen").removeClass("required");

                return false;
            }
        }

        if ($(field).val() == "") {
            $(field).addClass("required");

            return true;
        } else {
            $(field).removeClass("required");

            return false;
        }
    }

    function cleanAllInputs() {
        $("input").each(function () {
            input = $(this).attr("id");

            $("#" + input).removeClass("verified");
            $("#" + input).removeClass("required");
            $("#" + input).removeAttr("style");
        });

        $("#genre").parent().parent().removeClass("required");
        $("textarea").removeClass("required");
        $("#nameOfMusic").focus();
    }

    function sendForm() {
        $("#statusOfSend").empty();
        $.blockUI({message: "<img src='/images/carregando.gif'>Aguarde! Cadastrando música..."});

        var token = currentToken();
        var form = new FormData();
        form.append("Nome", $("#nameOfMusic").val());
        form.append("CompositorMusical", $("#composer").val());
        form.append("Interprete", $("#interpreter").val());
        form.append("Compositor", $("#autor-of-lyric").val());
        form.append("Letra", $("#lyrics").val());
        form.append("Genero", $("#genre option:selected").val());
        form.append("Arquivo", $("#file")[0].files[0]);

        var settingsToRegisterMusic = {
            "async": true,
            "crossDomain": true,
            "url": API_ROOT_PATH_MUSIC + "/registrar",
            "method": "POST",
            "headers": {
                "authorization": "Bearer " + token
            },
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        }

        $.ajax(settingsToRegisterMusic).done(function (response) {
            $.unblockUI();

            if (response.indexOf('sucesso') != -1) {
                $("#statusOfSend").slideDown();
                $("#statusOfSend").addClass('alert-success');
                $("#statusOfSend").append("<strong>Sucesso!</strong> Música cadastrada com sucesso. Aguarde seu certificado.");

                cleanAllInputs();
            } else {
                $("#statusOfSend").slideDown();
                $("#statusOfSend").addClass('alert-danger');
                $("#statusOfSend").append("<strong>Erro!</strong> Ocorreu um problema ao cadastrar a música. Por gentileza tente novamente! </br>");
            }

            $('html, body').animate({scrollTop: 0}, 'slow');
        }).fail(function (data) {
            console.log(data.responseText);
        });
        ;
    };

    function currentToken() {
        return $('meta[name="currentToken"]').attr('content');
    }
});

function verifyBalanceToRegisterMusic() {
    var actualBalance = currentBalane();
    console.log(actualBalance);

    if (actualBalance > 0) {
        $("#sad").remove();
        $(".card").show();
    } else {
        $("#sad").append("<img src='../images/sad.png'>");
        $(".profile-content")
            .append("<p class='center'>Saldo insuficiente! Infelizmente até o momento você não possui créditos. <a href='/adicionar-creditos'>Adquira aqui!</a> e registre suas músicas!</p>");
    }
}

function currentBalane() {
    return $('meta[name="currentBalance"]').attr('content');
}