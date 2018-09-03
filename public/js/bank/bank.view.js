$(document).ready(function() {
  $("#formCreditsToBuyByTicket").submit(function(){
		return false;
  });

  $("#formCreditsToBuyByCard").submit(function(){
		return false;
	});

  $(".card-type-pgto").mouseenter(function(){
	  $(this).css("cursor", "pointer");
  });
  
  $(".card-type-pgto").click(function(){
    var typeOfPayment = $(this).attr("name");
    
    if (typeOfPayment == "credit-card"){
      verifyActualCredits("creditsToBuyByCard", "btnDownByCard", "btnUpByCard");
      totalCreditUpdate("creditsToBuyByCard", "totalByCard", "strongTotalByCard");
      $("#putYourDataToCreditCard").modal("show");
    }

    if (typeOfPayment == "ticket") {
      verifyActualCredits("creditsToBuyByTicket", "btnDownByTicket", "btnUpByTicket");
      totalCreditUpdate("creditsToBuyByTicket", "totalByTicket", "strongTotalByTicket");
      $("#putYourDataToTicket").modal("show");
    }
  });

  $("#creditsToBuyByCard").on("keyup change click focus", function(){
    if($(this).val() < 1){
      $(this).val(1);
    }

    if($(this).val() >= 100){
      $(this).val(100);
    }

    verifyActualCredits("creditsToBuyByCard", "btnDownByCard", "btnUpByCard");
    totalCreditUpdate("creditsToBuyByCard", "totalByCard", "strongTotalByCard");
  });

  $("#creditsToBuyByTicket").on("keyup change click focus", function(){
    if($(this).val() < 1){
      $(this).val(1);
    }

    if($(this).val() >= 100){
      $(this).val(100);
    }

    verifyActualCredits("creditsToBuyByTicket", "btnDownByTicket", "btnUpByTicket");
    totalCreditUpdate("creditsToBuyByTicket", "totalByTicket", "strongTotalByTicket");
  });

  $("#qtdOfPartsByCard").on("keyup change click focus", function(){
    if($(this).val() < 1){
      $(this).val(1);
    }

    if($(this).val() >= 6){
      $(this).val(6);
    }
  });

  $("#btnUpByCard").click(function(){
    var actualVal = $("#creditsToBuyByCard").val();
    var newVal = + actualVal + 1;

    $("#creditsToBuyByCard").val(newVal);

    verifyActualCredits("creditsToBuyByCard", "btnDownByCard", "btnUpByCard");
    totalCreditUpdate("creditsToBuyByCard", "totalByCard", "strongTotalByCard");
  });

  $("#btnDownByCard").click(function(){
    var actualVal = $("#creditsToBuyByCard").val();
    var newVal = actualVal - 1;

    $("#creditsToBuyByCard").val(newVal);

    verifyActualCredits("creditsToBuyByCard", "btnDownByCard", "btnUpByCard");
    totalCreditUpdate("creditsToBuyByCard", "totalByCard", "strongTotalByCard");
  });

  $("#btnUpByTicket").click(function(){
    var actualVal = $("#creditsToBuyByTicket").val();
    var newVal = + actualVal + 1;

    $("#creditsToBuyByTicket").val(newVal);

    verifyActualCredits("creditsToBuyByTicket", "btnDownByTicket", "btnUpByTicket");
    totalCreditUpdate("creditsToBuyByTicket", "totalByTicket", "strongTotalByTicket");
  });

  $("#btnDownByTicket").click(function(){
    var actualVal = $("#creditsToBuyByTicket").val();
    var newVal = actualVal - 1;

    $("#creditsToBuyByTicket").val(newVal);

    verifyActualCredits("creditsToBuyByTicket", "btnDownByTicket", "btnUpByTicket");
    totalCreditUpdate("creditsToBuyByTicket", "totalByTicket", "strongTotalByTicket");
  });

  $("#submitBuyCreditByTicket").click(function(){
    var completeName = $("#completeName").val();
    var cpf = $("#cpf").val();
    var email = $("#email").val();
    var total = $("#totalByTicket").val();

    modalLoading("formCreditsToBuyByTicket", "infoTicket", "Estamos gerando seu boleto, por gentileza aguarde...", "modalTicket");

    ticketMethod(completeName, cpf, email, total);
  });

  $("#submitBuyCreditByCard").click(function(){
    var email = $("#emailByCard").val();
    var total = $("#totalByCard").val();
    var qtdOfParts = $("#qtdOfPartsByCard").val();

    modalLoading("formCreditsToBuyByCard", "infoCreditCard", "Estamos enviando um e-mail para você, por gentileza aguarde...", "modalCard");

    creditCardMethod(email, total, qtdOfParts);
  });

  $("#cpf").mask("000.000.000-00");

  setTimeout(function(){
    loadHistory();
  }, 100);
});

function modalLoading(form, info, message, modal){
  $("#"+form).hide();
  $("#"+info).hide();

  var loading = "<div style='text-align: center;'>";
  loading += "<img id='sending-information' src='images/carregando.gif'></img>";
  loading += "<p id='info-sending-information'>"+message+"</p>";
  loading += "</div>";

  $("#"+modal+" > div > div.modal-body > div > div").append(loading);
}

function formatReal(int){
  var tmp = int + '';
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
  if( tmp.length > 6 )
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  return tmp;
}

function verifyActualCredits(input, btnDown, btnUp){
  if($("#"+input).val() <= 1){
    $("#"+btnDown).prop("disabled", true);
  } else {
    $("#"+btnDown).prop("disabled", false);
  }

  if($("#"+input).val() >= 100){/*59171*/
    $("#"+btnUp).prop("disabled", true);
  } else {
    $("#"+btnUp).prop("disabled", false);
  }
}

function totalCreditUpdate(input, inputTotal, strong){
  var total = $("#"+input).val() * 1690;
  var totalToPrintTicket = $("#"+input).val() * 16.90;

  $("#"+inputTotal).val(parseFloat(totalToPrintTicket.toFixed(2)));
    
  $("#"+strong).html(formatReal(total));
}

function ticketMethod(completeName, cpf, email, total){
  var now = new Date();
  now.setMonth(now.getMonth() + 1);
  var fullActualDate = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();

  var deadline = new Date();
  deadline.setDate(now.getDate() + 3);
  deadline.setMonth(deadline.getMonth() + 1);
  var fullDeadline = deadline.getDate() + "/" + deadline.getMonth() + "/" + deadline.getFullYear();  

  var settingsTicketMethod = {
    "async": true,
    "crossDomain": true,
    "url": "https://sandbox.pagueveloz.com.br/api/v4/Boleto",
    "method": "POST",
    "headers": {
      "Authorization": "Basic cmVnaXN0cm9lbGV0cm9uaWNvQGJyYWluc29mdHNpc3RlbWFzLmNvbS5icjo2YmNjODNhYS0zMjgwLTQ3MDgtYmI5NC0yOTIzODRkODhlNjU=",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
      "CPFCNPJSacado": cpf,
      "Vencimento": fullDeadline,
      "Valor": total,
      "Linha1": "teste 1",
      "Email": email,
      "DataEnvioEmail": fullActualDate,
      "Pdf": "true",
      "Sacado": completeName,
      "Linha2": "teste 2"
    }
  }

  $.ajax(settingsTicketMethod).done(function(response){ 
    $("#sending-information").hide();
    $("#info-sending-information").hide();

    $("#modalTicket > div > div.modal-body > div > div").removeClass("col-md-8 col-md-offset-2");
    $("#modalTicket > div > div.modal-body > div > div").addClass("col-md-10 col-md-offset-1");

    var checked = "<div style='text-align: center;'>";
    checked += "<div class='row'>";
    checked += "<img src='images/checked.png' alt=''>";
    checked += "</div>";
    checked += "<div class='row'>";
    checked += "<a href='"+response.Url+"' download='Boleto'><button style='margin-top:15px; color:black;'>Baixe seu boleto!</button></a>";
    checked += "</div>";
    checked += "<div class='row'>";
    checked += "<p id='infoTicket'>*Uma cópia do boleto foi enviada no seu e-mail.</p>";
    checked += "</div>";
    checked += "</div>";

    $("#modalTicket > div > div.modal-body > div > div").append(checked);

    registerPurchase(response.Id, 1, total, fullDeadline, fullActualDate, response.Url);
  }).fail(function(data) { 
    console.log(data.responseText); 

    if(data.responseText.indexOf("Documento inválido") != -1){
      $("#sending-information").remove();
      $("#info-sending-information").remove();

      $("#cpf").addClass("required");
      $("#formCreditsToBuyByTicket").show();
      $("#infoTicket").show();
    } else {
      $("#cpf").removeClass("required");
    }

    if(data.responseText.indexOf("Email") != -1){
      $("#sending-information").remove();
      $("#info-sending-information").remove();

      $("#email").addClass("required");
      $("#formCreditsToBuyByTicket").show();
      $("#infoTicket").show();
    } else {
      $("#email").removeClass("required");
    }

    if(data.responseText.indexOf("The Sacado field is required.") != -1){
      $("#sending-information").remove();
      $("#info-sending-information").remove();

      $("#completeName").addClass("required");
      $("#formCreditsToBuyByTicket").show();
      $("#infoTicket").show();
    } else {
      $("#completeName").removeClass("required");
    }
  });
}

function creditCardMethod(email, total, qtdOfParts){
  var now = new Date();
  now.setMonth(now.getMonth() + 1);
  var fullActualDate = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();

  var settingsCreditCardMethod = {
    "async": true,
    "crossDomain": true,
    "url": "https://sandbox.pagueveloz.com.br/api/v1/PagamentoCartao/Solicitar",
    "method": "POST",
    "headers": {
      "Authorization": "Basic cmVnaXN0cm9lbGV0cm9uaWNvQGJyYWluc29mdHNpc3RlbWFzLmNvbS5icjo2YmNjODNhYS0zMjgwLTQ3MDgtYmI5NC0yOTIzODRkODhlNjU=",
      "con": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
      "Email": email,
      "AssuntoEmail": "Máquina de Registro - Solicitação de Pagamento",
      "Valor": total,
      "Descricao": "Adicionar saldo",
      "ParcelasDe": "1",
      "ParcelasAte": qtdOfParts
    }
  }

  $.ajax(settingsCreditCardMethod).done(function(response){ 
    console.log(response);

    $("#sending-information").hide();
    $("#info-sending-information").hide();

    $("#modalCard > div > div.modal-body > div > div").removeClass("col-md-8 col-md-offset-2");
    $("#modalCard > div > div.modal-body > div > div").addClass("col-md-10 col-md-offset-1");

    var checked = "<div style='text-align: center;'>";
    checked += "<div class='row'>";
    checked += "<img src='images/checked.png' alt=''>";
    checked += "</div>";
    checked += "<div class='row'>";
    checked += "<p id='infoTicket'>*E-mail enviado com sucesso, por gentileza verifique sua caixa de entrada.</p>";
    checked += "</div>";
    checked += "</div>";

    $("#modalCard > div > div.modal-body > div > div").append(checked);

    registerPurchase(response.Id, 0, total, qtdOfParts, fullActualDate, fullActualDate, "");
  }).fail(function(data) { 
    console.log(data.responseText); 

    if(data.responseText.indexOf("Email") != -1){
      $("#sending-information").remove();
      $("#info-sending-information").remove();

      $("#emailByCard").addClass("required");
      $("#formCreditsToBuyByCard").show();
      $("#infoCreditCard").show();
    } else {
      $("#email").removeClass("required");
    }
  });
}

function registerPurchase(idPagueVeloz, type, value, qtdOfParts, deadline, actualDate, url){
  var username = currentUserName();
  var token = currentToken();

  var settingsToRegiterPurchase = {
    "async": true,
    "crossDomain": true,
    "url": API_ROOT_PATH_PAYMENT,
    "method": "POST",
    "headers": {
      "authorization": "Bearer " + token
    },
    "data": {
      "PagueVelozId": idPagueVeloz,
      "Tipo": type,
      "Valor": value,
      "QuantidadeDeParcelas": qtdOfParts,
      "DataVencimento": deadline,
      "DataEmissao": actualDate,
      "UserName": username,
      "urlBoleto": url
    }
  }

  $.ajax(settingsToRegiterPurchase).done(function(response){ 
    console.log(response); 
  }).fail(function(data) { 
    console.log(data.responseText); 
  });
}

function loadHistory(){
  var username = currentUserName();
  var token = currentToken();

  var settingsToLoadHistory = {
    "async": true,
    "crossDomain": true,
    "url": API_ROOT_PATH_PAYMENT + "/" + username,
    "method": "GET",
    "headers": {
      "authorization": "Bearer " + token
    }
  }

  $.ajax(settingsToLoadHistory).done(function(response){  
    console.log(response);  
    $.each(response, function(i){
      var newRow = $("<tr id='"+response[i].id+"'>");
      var cols = "";

      cols += '<td>';
      cols += 'teste';
      cols += '</td>';

      cols += '<td>';
      cols += response[i].tipo;
      cols += '</td>';

      cols += '<td>';
      cols += 'R$ ' + response[i].valor;
      cols += '</td>';

      cols += '<td>';
      cols += response[i].valor/16.90;
      cols += '</td>';

      cols += '<td>';
      cols += response[i].dataEmissao;
      cols += '</td>';
    
      if(response[i].tipo == "BOLETO"){
        cols += '<td>';
        cols += response[i].dataVencimento;
        cols += '</td>';

        cols += '<td>';
        cols += '<a href="';
        cols += response[i].urlBoleto;
        cols += '"download="Boleto Máquina de Registro">Boleto</a>';
        cols += '</td>';
      } else{
        cols += '<td></td>';

        cols += '<td></td>';          
      }

      newRow.append(cols);

      $("#history").append(newRow);
    })
  }).fail(function (data) { 
    console.log(data.responseText); 
  });
}

function currentToken(){
  return $('meta[name="_currentToken"]').attr('content');
}

function currentUserName(){
  return $('meta[name="_currentUserName"]').attr('content');
}