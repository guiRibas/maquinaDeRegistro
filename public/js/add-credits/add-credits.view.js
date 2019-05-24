$(document).ready(function () {
    $("#formCreditsToBuyByTicket").submit(function () {
        return false;
    });

    $("#formCreditsToBuyByCard").submit(function () {
        return false;
    });

    $(".pay-type").mouseenter(function () {
        $(this).css("cursor", "pointer");
    });

    $(".pay-type").click(function () {
        var payTypeName = $(this).attr("name");

        $("#info-choose-pay-type").slideUp(600);

        removeAllSuccessClass(payTypeName);
        addAllSuccessClass(payTypeName);
        enableInputs(payTypeName);
        disableInputs(payTypeName);
        enableCheckout();

        /*if (typeOfPayment == "credit-card") {
            verifyActualCredits("creditsToBuyByCard", "btnDownByCard", "btnUpByCard");
            totalCreditUpdate("creditsToBuyByCard", "totalByCard", "strongTotalByCard");
            $("#putYourDataToCreditCard").modal("show");
        }

        if (typeOfPayment == "ticket") {
            verifyActualCredits("creditsToBuyByTicket", "btnDownByTicket", "btnUpByTicket");
            totalCreditUpdate("creditsToBuyByTicket", "totalByTicket", "strongTotalByTicket");
            $("#putYourDataToTicket").modal("show");
        }*/
    });

    $("#creditsToBuyByCard").on("keyup change click focus", function () {
        if ($(this).val() < 1) {
            $(this).val(1);
        }

        if ($(this).val() >= 100) {
            $(this).val(100);
        }

        verifyActualCredits("creditsToBuyByCard", "btnDownByCard", "btnUpByCard");
        totalCreditUpdate("creditsToBuyByCard", "totalByCard", "strongTotalByCard");
    });

    $("#creditsToBuyByTicket").on("keyup change click focus", function () {
        if ($(this).val() < 1) {
            $(this).val(1);
        }

        if ($(this).val() >= 100) {
            $(this).val(100);
        }

        verifyActualCredits("creditsToBuyByTicket", "btnDownByTicket", "btnUpByTicket");
        totalCreditUpdate("creditsToBuyByTicket", "totalByTicket", "strongTotalByTicket");
    });

    $("#qtdOfPartsByCard").on("blur", function () {
        if ($(this).val() < 1) {
            $(this).val(1);
        }

        if ($(this).val() >= 6) {
            $(this).val(6);
        }
    });

    $("#btnUpByCard").click(function () {
        var actualVal = $("#creditsToBuyByCard").val();
        var newVal = +actualVal + 1;

        $("#creditsToBuyByCard").val(newVal);

        verifyActualCredits("creditsToBuyByCard", "btnDownByCard", "btnUpByCard");
        totalCreditUpdate("creditsToBuyByCard", "totalByCard", "strongTotalByCard");
    });

    $("#btnDownByCard").click(function () {
        var actualVal = $("#creditsToBuyByCard").val();
        var newVal = actualVal - 1;

        $("#creditsToBuyByCard").val(newVal);

        verifyActualCredits("creditsToBuyByCard", "btnDownByCard", "btnUpByCard");
        totalCreditUpdate("creditsToBuyByCard", "totalByCard", "strongTotalByCard");
    });

    $("#btnUpByTicket").click(function () {
        var actualVal = $("#creditsToBuyByTicket").val();
        var newVal = +actualVal + 1;

        $("#creditsToBuyByTicket").val(newVal);

        verifyActualCredits("creditsToBuyByTicket", "btnDownByTicket", "btnUpByTicket");
        totalCreditUpdate("creditsToBuyByTicket", "totalByTicket", "strongTotalByTicket");
    });

    $("#btnDownByTicket").click(function () {
        var actualVal = $("#creditsToBuyByTicket").val();
        var newVal = actualVal - 1;

        $("#creditsToBuyByTicket").val(newVal);

        verifyActualCredits("creditsToBuyByTicket", "btnDownByTicket", "btnUpByTicket");
        totalCreditUpdate("creditsToBuyByTicket", "totalByTicket", "strongTotalByTicket");
    });

    $("#submitBuyCreditByTicket").click(function () {
        var qtdCredits = $("#creditsToBuyByTicket").val();
        var completeName = $("#completeName").val();
        var cpf = $("#cpf").val();
        var email = $("#email").val();
        var total = $("#totalByTicket").val();

        modalLoading("formCreditsToBuyByTicket", "infoTicket", "Estamos gerando seu boleto, por gentileza aguarde...", "modalTicket");

        ticketMethod(qtdCredits, completeName, cpf, email, total);
    });

    $("#submitBuyCreditByCard").click(function () {
        var qtdCredits = $("#creditsToBuyByCard").val();
        var email = $("#emailByCard").val();
        var total = $("#totalByCard").val();
        var qtdOfParts = $("#qtdOfPartsByCard").val();

        modalLoading("formCreditsToBuyByCard", "infoCreditCard", "Estamos enviando um e-mail para você, por gentileza aguarde...", "modalCard");

        creditCardMethod(qtdCredits, email, total, qtdOfParts);
    });

    $("#cpf").mask("000.000.000-00");
});

function modalLoading(form, info, message, modal) {
    $("#" + form).hide();
    $("#" + info).hide();

    var loading = "<div style='text-align: center;'>";
    loading += "<img id='sending-information' src='images/carregando.gif'></img>";
    loading += "<p id='info-sending-information'>" + message + "</p>";
    loading += "</div>";

    $("#" + modal + " > div > div.modal-body > div > div").append(loading);
}

function formatReal(int) {
    var tmp = int + '';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6)
        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return tmp;
}

function verifyActualCredits(input, btnDown, btnUp) {
    if ($("#" + input).val() <= 1) {
        $("#" + btnDown).prop("disabled", true);
    } else {
        $("#" + btnDown).prop("disabled", false);
    }

    if ($("#" + input).val() >= 100) {/*59171*/
        $("#" + btnUp).prop("disabled", true);
    } else {
        $("#" + btnUp).prop("disabled", false);
    }
}

function totalCreditUpdate(input, inputTotal, strong) {
    var total;
    var totalToPrintTicket;

    $(".totalDiscount").html("");

    if ($("#" + input).val() == 3) {
        total = 2690;
        totalToPrintTicket = 26.90;
        $(".sale").show();
        $(".totalDiscount").append("Econômia de: R$2,80");
        $(".totalDiscount").show();

        $("#submitBuyCreditByCard").css("margin-top", "-30");
        $("#submitBuyCreditByTicket").css("margin-top", "-30");
    } else if ($("#" + input).val() == 5) {
        total = 4190;
        totalToPrintTicket = 41.90;
        $(".sale").show();
        $(".totalDiscount").append("Econômia de: R$7,60");
        $(".totalDiscount").show();

        $("#submitBuyCreditByCard").css("margin-top", "-30");
        $("#submitBuyCreditByTicket").css("margin-top", "-30");
    } else {
        total = $("#" + input).val() * 990;
        totalToPrintTicket = $("#" + input).val() * 9.90;
        $(".sale").hide();
        $(".totalDiscount").hide();
        $("#submitBuyCreditByCard").css("margin-top", "0");
        $("#submitBuyCreditByTicket").css("margin-top", "0");
    }

    $("#" + inputTotal).val(parseFloat(totalToPrintTicket.toFixed(2)));

    $("#" + strong).html(formatReal(total));
}

function ticketMethod(qtdCredits, completeName, cpf, email, total) {
    var now = new Date();
    now.setMonth(now.getMonth() + 1);
    var fullActualDate = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();

    const agora = moment();

    var fullDeadline = agora.add(3, "days").format("DD/MM/YYYY");

    var settingsTicketMethod = {
        "async": true,
        "crossDomain": true,
        "url": "https://sandbox2.pagueveloz.com.br/api/v4/Boleto",
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

    $.ajax(settingsTicketMethod).done(function (response) {
        $("#sending-information").hide();
        $("#info-sending-information").hide();

        $("#modalTicket > div > div.modal-body > div > div").removeClass("col-md-8 col-md-offset-2");
        $("#modalTicket > div > div.modal-body > div > div").addClass("col-md-10 col-md-offset-1");

        var checked = "<div style='text-align: center;'>";
        checked += "<div class='row'>";
        checked += "<img src='images/checked.png' alt=''>";
        checked += "</div>";
        checked += "<div class='row'>";
        checked += "<a href='" + response.Url + "' download='Boleto'><button style='margin-top:15px; color:black;'>Baixe seu boleto!</button></a>";
        checked += "</div>";
        checked += "<div class='row'>";
        checked += "<p id='infoTicket'>*Uma cópia do boleto foi enviada no seu e-mail.</p>";
        checked += "</div>";
        checked += "</div>";

        $("#modalTicket > div > div.modal-body > div > div").append(checked);

        registerPurchase(qtdCredits, response.Id, 1, total, 1, fullDeadline, fullActualDate, response.Url);
    }).fail(function (data) {
        console.log(data.responseText);

        /*if (data.responseText.indexOf("Documento inválido") != -1) {
            $("#sending-information").remove();
            $("#info-sending-information").remove();

            $("#cpf").addClass("required");
            $("#formCreditsToBuyByTicket").show();
            $("#infoTicket").show();
        } else {
            $("#cpf").removeClass("required");
        }

        if (data.responseText.indexOf("Email") != -1) {
            $("#sending-information").remove();
            $("#info-sending-information").remove();

            $("#email").addClass("required");
            $("#formCreditsToBuyByTicket").show();
            $("#infoTicket").show();
        } else {
            $("#email").removeClass("required");
        }

        if (data.responseText.indexOf("The Sacado field is required.") != -1) {
            $("#sending-information").remove();
            $("#info-sending-information").remove();

            $("#completeName").addClass("required");
            $("#formCreditsToBuyByTicket").show();
            $("#infoTicket").show();
        } else {
            $("#completeName").removeClass("required");
        }*/
    });
}

function creditCardMethod(qtdCredits, email, total, qtdOfParts) {
    var now = new Date();
    now.setMonth(now.getMonth() + 1);
    var fullActualDate = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();

    var settingsCreditCardMethod = {
        "async": true,
        "crossDomain": true,
        "url": "https://sandbox2.pagueveloz.com.br/api/v1/PagamentoCartao/Solicitar",
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

    $.ajax(settingsCreditCardMethod).done(function (response) {
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

        registerPurchase(qtdCredits, response.Id, 0, total, qtdOfParts, fullActualDate, fullActualDate, "");
    }).fail(function (data) {
        console.log(data.responseText);

        if (data.responseText.indexOf("Email") != -1) {
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

function registerPurchase(qtdCredits, idPagueVeloz, type, value, qtdOfParts, deadline, actualDate, url) {
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
            "QuantidadeCreditos": qtdCredits,
            "Valor": value,
            "QuantidadeDeParcelas": qtdOfParts,
            "DataVencimento": deadline,
            "DataEmissao": actualDate,
            "UserName": username,
            "urlBoleto": url
        }
    }

    $.ajax(settingsToRegiterPurchase).done(function (response) {
        console.log(response);
    }).fail(function (data) {
        console.log(data.responseText);
    });
}

function removeAllSuccessClass(currentPayTypeName) {
    if (currentPayTypeName == "credit-card") {
        $("[name=barcode]").removeClass("border-success");
        $("[name=barcode] > .card-header").removeClass("text-white bg-success");
    } else {
        $("[name=credit-card]").removeClass("border-success");
        $("[name=credit-card] > .card-header").removeClass("text-white bg-success");
    }
}

function addAllSuccessClass(currentPayTypeName) {
    $("[name=" + currentPayTypeName + "]").addClass("border-success");
    $("[name=" + currentPayTypeName + "] > .card-header").addClass("text-white bg-success");
}

function enableInputs(currentPayTypeName) {
    var inputs = $("[name=" + currentPayTypeName + "]").find("input");

    inputs.each(function (index, element) {
        $(element).removeAttr("disabled");
    });
}

function disableInputs(currentPayTypeName) {
    var inputs;

    if (currentPayTypeName == "credit-card") {
        inputs = $("[name=barcode]").find("input");
    } else {
        inputs = $("[name=credit-card]").find("input");
    }

    inputs.each(function (index, element) {
        $(element).attr("disabled", true);
    });
}

function enableCheckout() {
    var inputs = $("[name=checkout]").find("input");
    var buttons = $("[name=checkout]").find("button");

    inputs.each(function (index, element) {
        $(element).removeAttr("disabled");
    });

    buttons.each(function (index, element) {
        $(element).removeAttr("disabled");
    });
}

function currentToken() {
    return $('meta[name="currentToken"]').attr('content');
}

function currentUserName() {
    return $('meta[name="currentUserName"]').attr('content');
}
