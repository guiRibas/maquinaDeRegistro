/* INITIAL - DOCUMENT READY*/ 
$(document).ready(function() {
  setTimeout(function(){
    loadProfilePhoto();
    userData();
    croppie();
  }, 500);

  $(".imagem-mascara").mouseenter(function(){
		$(this).css("cursor", "pointer");
	});

	$(".imagem-mascara").click(function(){
		//$('#selectImageToUpload').modal('show');
    $("#upload_image").click();
  });

  var hrefRaw = [location.pathname, location.search];
  var href = hrefRaw.toString().replace(',', '');
  $('.item-menu > a[href="' + href + '"]').parent().addClass('active');
});
/* FINAL - DOCUMENT READY */

/* INITIAL - CROPPIE FUNCTION*/
function croppie(){
  $image_crop = $('#imageDemo').croppie({
    enableExif: true,
    viewport: {
      width: 150,
      height: 150,
      type: 'circle'
    },
    boundary:{
      width: 300,
      height: 300
    }
  });

  $('#upload_image').on('change', function(){
    var reader = new FileReader();

    reader.onload = function (event) {
      $image_crop.croppie('bind', {
        url: event.target.result
      })
    }

    reader.readAsDataURL(this.files[0]);

    $('#selectImageToUpload').modal('hide');
    $('#uploadimageModal').modal('show');
  });

  $('.crop_image').click(function(event){
    $image_crop.croppie('result', {
      type: 'canvas',
      size: 'viewport'
    }).then(function(response){
      var token = currentToken();
      var rawBase64 = response;     

      var image_array_1 = rawBase64.split(",");
      var imageInBase64 = image_array_1[1];

      var settingsToSaveImage = {
        "async": true,
        "crossDomain": true,
        "url": "http://10.1.1.208:82/homolog/api/pessoas/SalvarImagemPerfil",
        "method": "POST",
        "headers": {
          "authorization": "Bearer " + token,
          "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
          "Base64Image": imageInBase64
        }
      }

      $.ajax(settingsToSaveImage).done(function(response){
        $('#uploadimageModal').modal('hide');
      }).fail(function (data) { 
        console.log(data.responseText); 
      });
		});
  })
}
/* FINAL - CROPPIE FUNCTION */

/* INITIAL - LOAD PROFILE PHOTO FUNCTION*/
function loadProfilePhoto(){
  var userName = currentUserName();

  var settingsToGetImage = {
    "async": true,
    "crossDomain": true,
    "url": "http://10.1.1.208:82/homolog/api/pessoas/imagem/" + userName,
    "method": "GET",
    "headers": {
      "content-type": "application/x-www-form-urlencoded"
    }
  }

  $.ajax(settingsToGetImage).done(function(response){
    $("body > div > div.row.profile > div.col-md-3 > div > div.profile-userpic > img").attr("src", "http://10.1.1.208:82/homolog/api/pessoas/imagem/" + userName);
  }).fail(function (data) { 
    $("body > div > div.row.profile > div.col-md-3 > div > div.profile-userpic > img").attr("src", "https://thumbs.dreamstime.com/b/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-46846325.jpg"); 
  });
}
/* FINAL - LOAD PROFILE PHOTO FUNCTION */

/* INITIAL - USERDATA FUNCTION*/ 
function userData(){
  var user = currentUserName();
  var token = currentToken();

  if (user != null){    
    var settingsToGetData = {
      "async": true,
      "crossDomain": true,
      "url": "http://10.1.1.208:82/homolog/api/pessoas/" + user,
      "method": "GET",
      "headers": {
        "authorization": "Bearer " + token
      }
    }

    $.ajax(settingsToGetData).done(function(response){    
      $(".profile-usertitle-name").html(response.nomeCompleto);
      $(".profile-usertitle-job").html("#"+response.nomeArtistico);

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
/* FINAL - USERDATA FUNCTION */

/* INITIAL - CURRENT USERNAME FUNCTION*/
function currentUserName(){
  return $('meta[name="currentUserName"]').attr('content');
}
/* FINAL - CURRENT USERNAME FUNCTION*/

/* INITIAL - CURRENT TOKEN FUNCTION*/
function currentToken(){
  return $('meta[name="currentToken"]').attr('content');
}
/* FINAL - CURRENT TOKEN FUNCTION */
