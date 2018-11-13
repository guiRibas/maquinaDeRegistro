$(document).ready(function () {
    setTimeout(function () {
        loadPaymentHistory();
        loadUseOfCredits();
    }, 1000);
});

function loadPaymentHistory() {
    var token = currentToken();

    var settingsToLoadPaymentHistory = {
        "async": true,
        "crossDomain": true,
        "url": API_ROOT_PATH_BALANCE + "/pagamentos",
        "method": "GET",
        "headers": {
            "authorization": "Bearer " + token
        }
    }

    $.ajax(settingsToLoadPaymentHistory).done(function (response) {
        $.each(response, function (i) {
            var payd = "";
            if(response[i].pago){
                payd = "Pago";
            } else{
                payd = "Em aberto";
            }

            var totalValue = response[i].valor;
            totalValue = totalValue.toString() + "0";

            var newRow = $("<tr id='" + i + "'>");
            var cols = "";

            cols += '<td>';
            cols += payd;
            cols += '</td>';

            cols += '<td>';
            cols += response[i].tipo;
            cols += '</td>';

            cols += '<td>';
            cols += response[i].quantidadeCreditos;
            cols += '</td>';

            cols += '<td>';
            cols += 'R$ ' + totalValue.replace(".", ",");
            cols += '</td>';

            cols += '<td>';
            cols += response[i].quantidadeDeParcelas;
            cols += '</td>';

            cols += '<td>';
            cols += response[i].dataEmissao;
            cols += '</td>';

            if (response[i].tipo == "BOLETO") {
                cols += '<td>';
                cols += response[i].dataVencimento;
                cols += '</td>';

                cols += '<td>';
                cols += '<a href="';
                cols += response[i].urlBoleto;
                cols += '"download="Boleto Máquina de Registro">Boleto</a>';
                cols += '</td>';
            } else {
                cols += '<td></td>';
                cols += '<td></td>';
            }

            newRow.append(cols);

            $("#payment-history").append(newRow);
        })
    }).fail(function (data) {
        console.log(data.responseText);
    });
}

function loadUseOfCredits() {
    var token = currentToken();

    var settingsToUseOfCredits = {
        "async": true,
        "crossDomain": true,
        "url": API_ROOT_PATH_BALANCE + "/transacoes",
        "method": "GET",
        "headers": {
            "authorization": "Bearer " + token
        }
    }

    $.ajax(settingsToUseOfCredits).done(function (response) {
        console.log(response);
        $.each(response, function (i) {
            var theStyle = "";
            if(response[i].valor > 0){
                theStyle = "background-color: #D2ECDA;";
            } else{
                theStyle = "background-color: #FFF1CF";
            }

            var newRow = $("<tr id='" + i + "' style='" + theStyle + "'>");
            var cols = "";

            cols += '<td>';
            cols += response[i].tipo;
            cols += '</td>';

            cols += '<td>';
            cols += response[i].data;
            cols += '</td>';

            cols += '<td>';
            cols += response[i].valor;
            cols += '</td>';

            newRow.append(cols);

            $("#use-of-credits").append(newRow);
        })
    }).fail(function (data) {
        console.log(data.responseText);
    });
}

function currentToken() {
    return $('meta[name="currentToken"]').attr('content');
}