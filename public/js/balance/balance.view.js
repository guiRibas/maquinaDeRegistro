$(document).ready(function () {
    setTimeout(function () {
        setActualBalance();
        verifyCurrentBalance();
    }, 1000);
});

function setActualBalance() {
    var token = currentToken();

    var settingsToGetBalance = {
        "async": true,
        "crossDomain": true,
        "url": API_ROOT_PATH_BALANCE + "/saldo",
        "method": "GET",
        "headers": {
            "authorization": "Bearer " + token,
            "cache-control": "no-cache"
        }
    }

    $.ajax(settingsToGetBalance).done(function (response) {
        var url = "/user/balance/set/actual";

        var settingsToPutBalanceInSesssion = {
            "async": true,
            "crossDomain": true,
            "url": url,
            "method": "POST",
            "headers": {
                'X-CSRF-TOKEN': $("meta[name='csrf']").attr("content")
            },
            "data": {
                "balance": response
            }
        }

        $.ajax(settingsToPutBalanceInSesssion).done(function (response) {
        });

    }).fail(function (data) {
        console.log(data.responseText);
    });
}

function verifyCurrentBalance() {
    var url = "/user/balance/get/actual";

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf"]').attr('content')
        }
    });
    $.ajax({
        url: url,
        method: 'GET',
        success: function (result) {
            var element = '<meta name="currentBalance" content="';
            element += result.balance;
            element += '"/>';
            $("head").append(element);

            setBalanceInView(result.balance);
        }
    });
}

function setBalanceInView(balance) {
    var sentence = verifyQtdBalance(balance);

    $(".user-balance > .user-actual-balance > div > balance").empty();
    $(".user-balance > .user-actual-balance > div > balance").html("SALDO: " + balance + " " + sentence);
}

function verifyQtdBalance(balance) {
    if (balance < 2) {
        return "Crédito";
    } else {
        return "Créditos";
    }
}

function currentToken() {
    return $('meta[name="currentToken"]').attr('content');
}

function currentBalance() {
    return $('meta[name="currentBalance"]').attr('content');
}