$(document).ready(function () {

    $('#search').hideseek({
        nodata: 'Nenhuma música encontrada!'
    });

});

function pagination(numberOfPage) {
    $("#loading").html("<img src='images/carregando.gif'>Aguarde! Carregando músicas...");

    var token = currentToken();
    var user = currentUserName();
    var qtdPerPage = $("#showQtd option:selected").val();

    if (token != null) {
        $("#example > tbody > tr:nth-child(1)").hide();

        var settingsToGetAllMusics = {
            "async": true,
            "crossDomain": true,
            "url": API_ROOT_PATH_MUSIC + "?username=" + user + "&numeroPagina=" + numberOfPage + "&registrosPorPagina=" + qtdPerPage,
            "method": "GET",
            "headers": {
                "authorization": "Bearer " + token
            }
        }

        $.ajax(settingsToGetAllMusics).done(function (response) {
            if (response.length < 1) {
                $("#loading").hide();
                $("#showQtd").prop("disabled", true);
                $("#searchMusic").prop("disabled", true);

                $("#content > div > div.profile-content > div > div.card-body" +
                    "")
                    .append("<p class='center'>Você ainda não possui músicas registradas. <a href='/musica/nova'>Registre aqui</a>, a primeira de muitas!</p>");
            } else {
                $("#example").show();
                $("#pagination").show();
                $("#music-controls").show();

                $("#loading").hide();
                $("#example tbody").empty();

                $.each(response, function (i) {
                    var newRow = $("<tr id='" + response[i].id + "'>");
                    var cols = "";

                    cols += '<td>';
                    cols += response[i].nome;
                    cols += '</td>';
                    cols += '<td>';
                    cols += response[i].compositor;
                    cols += '</td>';

                    cols += '<td>';
                    cols += '<button onClick="loadMusic(this)">Ouvir!</button>';
                    if (response[i].id == $("#current_played_music").attr("value")) {
                        cols += '<img class="speaker" src="/images/speaker.png"></img>';
                    }
                    cols += '</td>';

                    newRow.append(cols);

                    $("#example").append(newRow);
                });
            }
        }).fail(function (data) {
            console.log(data.responseText);
        });

        var settingsToGetTotal = {
            "async": true,
            "crossDomain": true,
            "url": API_ROOT_PATH_MUSIC + "/total/" + user,
            "method": "GET",
            "headers": {
                "authorization": "Bearer " + token
            }
        }

        $.ajax(settingsToGetTotal).done(function (response) {
            var rawLinksPage = response.message / qtdPerPage;
            var totalLinksPage = Math.ceil(rawLinksPage);
            $("#pagination").empty();
            $("#showQtd").children().last().val(response.message);

            var btnFirst = "<button onClick='pagination(1)'>Primeira</button>";
            var btnLast = "<button onClick='pagination(" + totalLinksPage + ")'>Última</button>";
            $("#pagination").append(btnFirst);

            for (let index = 1; index <= totalLinksPage; index++) {
                var button = "<button onClick='pagination(" + index + ")'>" + index + "</button>";
                $("#pagination").append(button);
            }

            $("#pagination").append(btnLast);
        }).fail(function (data) {
            console.log(data.responseText);
        });
    } else {
        console.log("Token Error!");
    }
}

function loadMusic(button) {
    var audio = $("audio");
    var idMusic = $(button).parent().parent().attr("id");
    var mp3ToPlay = API_ROOT_PATH_MUSIC + "/" + idMusic;

    audio.attr("autoplay", "autoplay");
    audio.attr("src", mp3ToPlay);

    var audio = document.getElementById('audio');

    addOrRemoveEvent(0);
    addSpeaker(button);
}

function loadFirstMusicInPlayer() {
    var audio = $("audio");
    var idMusic = $("#example").children().eq(1).children().eq(0).attr("id");

    var mp3ToPlay = API_ROOT_PATH_MUSIC + "/" + idMusic;

    audio.attr("src", mp3ToPlay);

    var audio = document.getElementById('audio');
    audio.addEventListener('play', addRealejo, false);
    addOrRemoveEvent(1);
    audio.addEventListener('pause', removeRealejo, false);
    audio.addEventListener('timeupdate', atualizar, false);
}

function atualizar() {
    document.getElementById('tempo_atual').innerHTML = secToStr(audio.currentTime);
    document.getElementById('tempo_total').innerHTML = secToStr(audio.duration);
}

function secToStr(sec_num) {
    sec_num = Math.floor(sec_num);
    var horas = Math.floor(sec_num / 3600);
    var minutos = Math.floor((sec_num - (horas * 3600)) / 60);
    var segundos = sec_num - (horas * 3600) - (minutos * 60);

    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    var tempo = horas + ':' + minutos + ':' + segundos;

    return tempo;
}

function addOrRemoveEvent(status) {
    if (status == 1) {
        audio.addEventListener('play', toSpeaker, false);
    } else {
        audio.removeEventListener('play', toSpeaker, false);
    }
}

function toSpeaker() {
    var button = $("#example").children().eq(1).children().eq(0).children().eq(2).children();

    addSpeaker(button);
}

function addSpeaker(button) {
    if ($(".speaker").is(":visible")) {
        $(".speaker").remove();
    }

    var buttonP = $(button).parent();
    var speaker = '<img class="speaker" src="/images/speaker.png"></img>';

    buttonP.append(speaker);

    $("#playing").removeAttr("style");
    var idMusic = $(button).parent().parent().attr("id");
    var nameOfMusic = $(button).parent().parent().children().eq(0).html();
    $("#current_played_music").html(nameOfMusic);
    $("#current_played_music").attr("value", idMusic);
}

function addRealejo() {
    $("#div-realejo").remove();

    var div = '<div id="div-realejo" class="col-lg-1">';
    div += '<img id="realejo" src="/images/realejo.gif">';
    div += '</div>';

    $("#music-controls").prepend(div);

    $("#div-audio").removeClass("col-lg-12");
    $("#div-audio").addClass("col-lg-11");
}

function removeRealejo() {
    $("#div-realejo").remove();

    $("#div-audio").removeClass("col-lg-11");
    $("#div-audio").addClass("col-lg-12");
}

function currentToken() {
    return $('meta[name="currentToken"]').attr('content');
}

function currentUserName() {
    return $('meta[name="currentUserName"]').attr('content');
}