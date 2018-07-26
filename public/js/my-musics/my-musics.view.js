$(document).ready(function() {

  $("#searchMusic").keyup(function(){		
		var index = $(this).parent().index();
		var nth = "#example td:nth-child("+(index).toString()+")";
		var valor = $(this).val().toUpperCase();
		$("#example tbody tr").show();
		$(nth).each(function(){
			if($(this).text().toUpperCase().indexOf(valor) < 0){
				$(this).parent().hide();
			}
		});
	});

	$("#searchMusic").blur(function(){
		$(this).val("");
  });

  setTimeout(function(){
    pagination(1);
  }, 100);

  $("#showQtd").change(function(){
    pagination(1);
  });
});

function pagination(numberOfPage){
  $("#loading").html("<img src='images/carregando.gif'>Aguarde! Carregando músicas..."); 

  var token = currentToken();
  var user = currentUserName();
  var qtdPerPage = $("#showQtd option:selected").val();

  if (token != null){
    $("#example > tbody > tr:nth-child(1)").hide();
    
    var settingsToGetAllMusics = {
      "async": true,
      "crossDomain": true,
      "url": "http://www.brainsoftsistemas.com.br/Teste/api/musica?username="+user+"&numeroPagina="+numberOfPage+"&registrosPorPagina="+qtdPerPage,
      "method": "GET",
      "headers": {
        "authorization": "Bearer " + token
      }
    }

    $.ajax(settingsToGetAllMusics).done(function(response){    
      if(response.length < 1){
        $("#example").hide();
        $("#pagination").hide();
        $("#music-controls").hide();
        $("#showQtd").prop("disabled", true);
        $("#searchMusic").prop("disabled", true);

        $("body > div > div.row.profile > div.col-md-9 > div > div > div.card-body").append("<p class='center'>Você ainda não possui músicas registradas. <a href='/musica/nova'>Registre aqui</a>, a primeira de muitas!</p>");
      }

      $("#loading").hide();     
      $("#example tbody").empty();

      $.each(response, function(i){
        var newRow = $("<tr id='"+response[i].id+"'>");
        var cols = "";

        cols += '<td>';
        cols += response[i].nome;
        cols += '</td>';
        cols += '<td>';
        cols += response[i].compositor;
        cols += '</td>';

        cols += '<td>';
        cols += '<button onClick="loadMusic(this)">Ouvir!</button>';
        cols += '</td>';
      
        newRow.append(cols);

        $("#example").append(newRow);
      })
    }).fail(function (data) { 
      console.log(data.responseText); 
    });

    var settingsToGetTotal = {
      "async": true,
      "crossDomain": true,
      "url": "http://www.brainsoftsistemas.com.br/Teste/api/musica/total?username="+user,
      "method": "GET",
      "headers": {
        "authorization": "Bearer " + token
      }
    }

    $.ajax(settingsToGetTotal).done(function(response){ 
      var rawLinksPage = response.message / qtdPerPage;
      var totalLinksPage = Math.ceil(rawLinksPage);
      $("#pagination").empty();
      $("#showQtd").children().last().val(response.message);
      
      var btnFirst = "<button onClick='pagination(1)'>Primeira</button>";
      var btnLast = "<button onClick='pagination("+totalLinksPage+")'>Última</button>";
      $("#pagination").append(btnFirst);

      for (let index = 1; index <= totalLinksPage; index++) {
        var button = "<button onClick='pagination("+index+")'>"+index+"</button>";
        $("#pagination").append(button);
      }

      $("#pagination").append(btnLast);
    }).fail(function (data) { 
      console.log(data.responseText); 
    });
  }
}

function loadMusic(button){
  var audio = $("audio");
  var idMusic = $(button).parent().parent().attr("id");
  var mp3ToPlay = "http://www.brainsoftsistemas.com.br/Teste/api/musica/" + idMusic;

  audio.attr("src", mp3ToPlay);
}

function currentToken(){
  return $('meta[name="_currentToken"]').attr('content');
}

function currentUserName(){
  return $('meta[name="_currentUserName"]').attr('content');
}

function setCookie(name, exdays){    //função universal para criar cookie
  var value;

  value = "profileImagePath";
  document.cookie = name+"="+value+"; path=/";
}

function getCookie(){
  var c_name = document.cookie; // listando o nome de todos os cookies
  
  if(c_name!=undefined && c_name.length > 0){ // verificando se o mesmo existe
    var posCookie = c_name.indexOf(cookieSeuNome); // checando se existe o cookieSeuNome 
    
    if (posCookie >= 0){ //se existir o cookie mostra um alert no browser
      alert("Cookie Existe!!!");
    } else{
      alert("Cookie não existe!!!");
    }
  }
}