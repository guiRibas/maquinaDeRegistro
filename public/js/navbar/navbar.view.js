$(document).ready(function() {

  if(!$('#btnLogin').is(':visible')){
    verifyCurrentToken();
    verifyCurrentUserName();
  }

	$("#loginForm").submit(function(){
		return false;
	});

	$("#btnDoLogin").click(function(){
		var userName = $("#userName").val();
		var password = $("#password").val();

		var settingsToAuth = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://www.brainsoftsistemas.com.br/Teste/token",
		  "method": "POST",
		  "headers": {
		    "content-type": "application/x-www-form-urlencoded"
		  },
		  "data": {
		    "grant_type": "password",
		    "username": ""+userName+"",
		    "password": ""+password+""
		  }
		}

		$.ajax(settingsToAuth).done(function(response){
			var token = response.access_token;
			var userName = response.userName;
			var cpf = response.cpf;
			var completeName = response.nome;
			var email = response.email;

      var url = "/maquinaDeRegistro/login";
      
      var settingsToPutInSesssion = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "headers": {
          'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        },
        "data": {
          "token": token,
					"userName": userName,
					"cpf": cpf,
					"completeName": completeName,
					"email": email
        }
      }

      $.ajax(settingsToPutInSesssion).done(function(response){
				window.location.replace("/musicas");
      }).fail(function(data) { 
        if(data.responseText.indexOf("Usuário ou Senha inválido") != -1){
          $("#statusOfLogin").slideDown();
          $("#statusOfLogin").addClass('alert-danger');
          $("#statusOfLogin").append("<strong>Erro!</strong> Usuário ou Senha inválido!");
          document.getElementById("userName").style.boxShadow = "0 0 5px #ff0000"; 
          document.getElementById("userName").style.border = "1px solid #ff0000";
          document.getElementById("password").style.boxShadow = "0 0 5px #ff0000"; 
          document.getElementById("password").style.border = "1px solid #ff0000";
        }
      });

			/*$.ajaxSetup({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
				}
			});
			$.ajax({
				url: url,
				method: 'POST',
				data: {
					token: token,
					userName: userName,
					cpf: cpf,
					completeName: completeName,
					email: email
				},
				success: function(result){
					window.location.replace("/musicas");
				},
				error: function (request, status, erro) {
					alert("Problema ocorrido: " + status + "\nDescrição: " + erro);
					//Abaixo está listando os header do conteudo que você requisitou, só para confirmar se você setou os header e dataType corretos
					alert("Informações da requisição: \n" + request.getAllResponseHeaders());
				}*/
		}).fail(function(data) { 
      if(data.responseText.indexOf("Usuário ou Senha inválido") != -1){
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
		if($('#login-dp').is(':visible')){
			$('#login-dp').slideUp("slow");
		} else{
			$('#login-dp').slideDown("slow");
		}
	});
	$('#btnLogin').click(function(e){
		e.stopPropagation();
	});
	$('#email').click(function(e){
		e.stopPropagation();
	});
	$('#password').click(function(e){
		e.stopPropagation();
	});
	$('#login-dp').click(function(e){
		e.stopPropagation();
	});
	$('body').click(function(){
		$('#login-dp').slideUp("slow");
	});

	$("#guestAlert").fadeTo(5000, 500).slideDown(500, function(){
		if(!$('#login-dp').is(':visible')){
			$('#login-dp').slideDown("slow");
		}
		$("#guestAlert").slideUp("slow");
	});

	function verifyCurrentToken(){
		var url = "/user/auth/token/current";
	
		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
			}
		});
		$.ajax({
			url: url,
			method: 'GET',
			success: function(result){
				var element = '<meta name="_currentToken" content="';
				element += result.token;
				element += '"/>';
				$("head").append(element);
			}
		});
  }
  
  function verifyCurrentUserName(){
    var url = "/user/auth/username/current";

    $.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
			}
		});
		$.ajax({
			url: url,
			method: 'GET',
			success: function(result){
				var element = '<meta name="_currentUserName" content="';
				element += result.userName;
				element += '"/>';
				$("head").append(element);
			}
		});
  }

});