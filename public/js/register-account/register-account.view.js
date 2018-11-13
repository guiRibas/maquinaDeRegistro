$(document).ready(function () {
    jQuery("#formAdd").submit(function () {
        return false;
    });

    statusFormAddress("toDisable");
});

$("[name=emailAccount]").focusout(function () {
    var statusEmail = isEmail(this.value, "emailAccount");

    if(statusEmail){
        isUniqueEmail(this.value, "emailAccount");
    }
});

$("[name=confirmEmail]").focusout(function () {
    if ($("#emailAccount").val() != "") {
        compareEmail();
    }
});

$("[name=confirmPassword]").blur(function () {
    if ($("#confirmPassword").val() != "") {
        comparePassword();
    }
});

$("[name=cpf]").blur(function () {
    if ($(".cpfInput").is(':visible')) {
        checkCPF(this.value, this.name);
    }
});

$("[name=cep]").blur(function () {
    findAddress();
});

var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    spOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };

$("#dateOfBirth").mask("00/00/0000", {placeholder: "dd/mm/aaaa"});
$("#exteriorDateOfBirth").mask("00/00/0000", {placeholder: "dd/mm/aaaa"});
$("#cpf").mask("000.000.000-00");
$("#cep").mask("00000-000");
$("#phone1").mask(SPMaskBehavior, spOptions);
$("#phone2").mask(SPMaskBehavior, spOptions);

$("[type=reset]").click(function () {
    cleanAllInputs();
});

//MOMENTO EM QUE O FORMULÁRIO É SUBMETIDO
$("[name=submitNewUser]").click(function (e) {
    e.preventDefault();

    var send = true;
    var position = 0;

    $("input").each(function () {
        var input = $(this).attr("id");

        if ($(this).val().length < 1) {
            if (input != "phone2" && input != "complementOfHouse" &&
                input != "userName" && input != "password") {

                if (position == 0) {
                    $(this).focus();
                }
                $(this).addClass("required");
                position = 1;

                send = false;
            }
        } else {
            $(this).removeClass("required");
        }
    });

    if (send) {
        var email = $("#emailAccount").val();
        var statusEmail = isEmail(email, "emailAccount");

        if(statusEmail){
            var uniqueEmail = isUniqueEmail(this.value, "emailAccount");

            console.log(uniqueEmail);

            if (!uniqueEmail) {
                $("#emailAccount").val("");
                $("#confirmEmail").val("");

                $("#emailAccount").addClass("required");
                $("#confirmEmail").addClass("required");
                send = false;
            }
        }
    }

    if (send) {
        if ($('#confirmEmail').val() != $('#emailAccount').val()) {
            var emailCompare = compareEmail();

            if (!emailCompare) {
                $("#emailAccount").addClass("required");
                $("#confirmEmail").addClass("required");
                send = false;
            }
        }
    }

    if (send) {
        comparePassword = comparePassword();

        if (!comparePassword) {
            $("#passwordAccount").addClass("required");
            $("#confirmPassword").addClass("required");
            send = false;
        }
    }

    if (send) {
        sendForm();
    }
});

//VERIFICANDO CADA INPUT REAL-TIME
$("input").blur(function () {
    input = $(this).attr("id");

    if ($(this).val() == "" && input != "phone2" && input != "complementOfHouse") {
        $(this).addClass("required");
    } else {
        $(this).removeClass("required");
    }
});

//------------- FUNÇÕES -------------

function checkCPF(strCPF, inputValue) {
    var sumCPF;
    var restCPF;
    sumCPF = 0;

    strCPF = removeCharacteres(strCPF);

    if (strCPF.length < 11 || strCPF == "" || strCPF == '11111111111' || strCPF == '22222222222'
        || strCPF == '33333333333' || strCPF == '44444444444' || strCPF == '55555555555'
        || strCPF == '66666666666' || strCPF == '77777777777' || strCPF == '88888888888'
        || strCPF == '99999999999' || strCPF == '00000000000' || strCPF == '01234567890') {
        msgErro('Erro! CPF inválido.', "spanCpf");
        $("#cpf").focus();
        checkInput(inputValue, "invalid");

        return false;
    }
    for (i = 1; i <= 9; i++) {
        sumCPF = sumCPF + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        restCPF = (sumCPF * 10) % 11;
    }
    if ((restCPF == 10) || (restCPF == 11)) {
        restCPF = 0;
    }
    if (restCPF != parseInt(strCPF.substring(9, 10))) {
        msgErro('Erro! CPF inv&aacute;lido.', "spanCpf");
        $("#cpf").focus();
        checkInput(inputValue, "invalid");

        return false;
    }

    sumCPF = 0;
    for (i = 1; i <= 10; i++) {
        sumCPF = sumCPF + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }

    restCPF = (sumCPF * 10) % 11;
    if ((restCPF == 10) || (restCPF == 11)) {
        restCPF = 0;
    }

    if (restCPF != parseInt(strCPF.substring(10, 11))) {
        msgErro('Erro! CPF inválido.', "spanCpf");
        $("#cpf").focus();
        checkInput(inputValue, "invalid");

        return false;
    } else {
        checkInput(inputValue, "");
        msgErro("Sucesso! CPF válido.", "spanCpf");
    }
}

function checkInput(inputValue, status) {
    var element = document.getElementById(inputValue);
    var input = document.formAdd.elements[inputValue].value;

    if (input == "" || status == "invalid") {
        element.style.boxShadow = "0 0 5px #ff0000";
        element.style.border = "1px solid #ff0000";
    } else {
        if (!$("#" + inputValue).hasClass("verified")) {
            $("#" + inputValue).addClass("verified");
        }
        element.removeAttribute("style");
    }
}

function msgErro(msg, span) {
    $("#" + span).html(msg);
}

function removeCharacteres(strValor) {
    strTemp = strValor.replace(".", "");
    strTemp = strTemp.replace(".", "");
    strTemp = strTemp.replace(".", "");
    strTemp = strTemp.replace("-", "");
    strTemp = strTemp.replace("-", "");

    return strTemp;
}

function cleanFormAddress() {
    $("#address").val("");
    $("#neighborhood").val("");
    $("#city").val("");
    $("#state").val("");
}

function statusFormAddress(toStatus) {
    if (toStatus == "toDisable") {
        $('#address').attr("disabled", true);
        $('#neighborhood').attr("disabled", true);
        $('#city').attr("disabled", true);
        $('#state').attr("disabled", true);
    } else {
        $('#address').attr("disabled", false);
        $('#neighborhood').attr("disabled", false);
        $('#city').attr("disabled", false);
        $('#state').attr("disabled", false);
    }
}

function findAddress() {
    var element = document.getElementById("cep");
    var dadElement = $("#cep").parent();

    msgErro("", "spanCep");

    $("#address").val("buscando...");
    $("#neighborhood").val("buscando...");
    $("#city").val("buscando...");
    $("#state").val("buscando..");

    if ($.trim($("#cep").val()) != "") {
        $.getJSON("https://viacep.com.br/ws/" + $("#cep").val() + "/json?callback=?", function (dados) {
            if (!("erro" in dados)) {
                $("#address").val(dados.logradouro);
                $("#address").removeClass("required");
                $("#neighborhood").val(dados.bairro);
                $("#neighborhood").removeClass("required");
                $("#city").val(dados.localidade);
                $("#city").removeClass("required");
                $("#state").val(dados.uf);
                $("#state").removeClass("required");

                $("#numberOfHouse").focus();

                msgErro("Sucesso! Dados encontrados.", "spanCep");

                dadElement.addClass("col-sm-4");
                dadElement.removeClass("col-sm-9");

                if (!$("#cep").hasClass("verified")) {
                    $("#cep").addClass("verified");
                }
                $("#cep").removeAttr("style");

                statusFormAddress("toEnable");

                return true;
            } else {
                cleanFormAddress();

                msgErro("Alerta! Dados n&atilde;o encontrados. Favor preencha os campos abaixo.", "spanCep");

                dadElement.addClass("col-sm-9");
                dadElement.removeClass("col-sm-4");

                element.style.boxShadow = "0 0 5px #ffd149";
                element.style.border = "1px solid #ffd149";
                element.style.width = "200px";

                $("#address").addClass("required");
                $("#neighborhood").addClass("required");
                $("#city").addClass("required");
                $("#state").addClass("required");

                statusFormAddress("toEnable");
                $("#address").focus();

                return false;
            }
        });
    } else {
        msgErro("Erro! Por favor informe seu CEP.", "spanCep");

        dadElement.addClass("col-sm-4");
        dadElement.removeClass("col-sm-9");

        element.style.boxShadow = "0 0 3px #ff0000";
        element.style.border = "1px solid #ff0000";

        $("#cep").focus();
    }
}

function callBackResponse(response){
}

function isUniqueEmail(email, input) {
    $.ajax({
        url: API_ROOT_PATH_VERIFY + "/email",
        data: "email=" + email,
        success: function(response){
            if(response){
                var status = $.trim(response);

                callBackResponse(status);
            }
        },
    });
    /*var settingsToVerifyIfEmailIsUnique = {
        "async": true,
        "crossDomain": true,
        "url":
        "method": "GET"
    };

    $.ajax(settingsToVerifyIfEmailIsUnique).done(function (response) {
        var status = "";
        if (response) {
            msgErro("Erro! E-mail inválido e/ou já está em uso.", "spanEmail");
            document.getElementById(input).style.boxShadow = "0 0 5px #ff0000";
            document.getElementById(input).style.border = "1px solid #ff0000";
            $("#" + input + "").focus();

            status = 0;
        } else {
            msgErro("Sucesso! E-mail válido.", "spanEmail");
            document.getElementById(input).style.boxShadow = "0 0 5px #179e27";
            document.getElementById(input).style.border = "1px solid #179e27";

            status = 1;
        }

        returnResponse(response);
    }).fail(function (data) {
        console.log(data.responseText);
    });*/
}

function isEmail(email, input) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var test = re.test(email);

    if (!test) {
        msgErro("Erro! E-mail inválido.", "spanEmail");
        document.getElementById(input).style.boxShadow = "0 0 5px #ff0000";
        document.getElementById(input).style.border = "1px solid #ff0000";
        $("#" + input + "").focus();

        return false;
    } else {
        return true;
    }
}

function compareEmail() {
    var email = $("#emailAccount").val();
    var confirmEmail = $("#confirmEmail").val();

    if (confirmEmail != email) {
        msgErro('Erro! Os emails devem ser iguais.', "spanConfirmEmail");
        document.getElementById("confirmEmail").style.boxShadow = "0 0 5px #ff0000";
        document.getElementById("confirmEmail").style.border = "1px solid #ff0000";
        $("#confirmEmail").focus();

        return false;
    } else {
        msgErro('Sucesso! Os emails são iguais.', "spanConfirmEmail");

        document.getElementById("confirmEmail").style.boxShadow = "0 0 5px #179e27";
        document.getElementById("confirmEmail").style.border = "1px solid #179e27";

        return true;
    }
}

function comparePassword() {
    var password = $("#passwordAccount").val();
    var confirmPassword = $("#confirmPassword").val();

    if (confirmPassword != password) {
        msgErro('Erro! As senhas devem ser iguais.', "spanConfirmPassword");
        document.getElementById("confirmPassword").style.boxShadow = "0 0 5px #ff0000";
        document.getElementById("confirmPassword").style.border = "1px solid #ff0000";
        $("#confirmPassword").focus();

        return false;
    } else {
        msgErro('Sucesso! As senhas s&atilde;o iguais.', "spanConfirmPassword");

        document.getElementById("confirmPassword").style.boxShadow = "0 0 5px #179e27";
        document.getElementById("confirmPassword").style.border = "1px solid #179e27";

        return true;
    }
}

function cleanAllInputs() {
    $("input").each(function () {
        input = $(this).attr("id");

        $("#" + input).removeClass("verified");
        $("#" + input).removeClass("required");
        $("#" + input).removeAttr("style");
        $("#" + input).val("");
    });
}

function sendForm() {
    $("#statusOfSend").empty();
    $.blockUI({message: "<img src='/images/carregando.gif'>Um momento! Estamos criando sua conta..."});

    // pegando os campos do formulário
    var name = $("#name").val();
    var artisticName = $("#artisticName").val();
    var email = $("#emailAccount").val();
    var password = $("#passwordAccount").val();
    var cpf = $("#cpf").val();
    var dateOfBirth = $("#dateOfBirth").val();
    var phone1 = $("#phone1").val();
    var phone2 = $("#phone2").val();
    var cep = $("#cep").val();
    var address = $("#address").val();
    var numberOfHouse = $("#numberOfHouse").val();
    var complementOfHouse = $("#complementOfHouse").val();
    var neighborhood = $("#neighborhood").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var userName = $("#userNameProfile").val();

    // tipo dos dados, url do documento, tipo de dados, campos enviados
    // para GET mude o type para GET
    var settingsToRegister = {
        "async": true,
        "crossDomain": true,
        "url": API_ROOT_PATH_PEOPLE + "/registrar",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        "data": {
            "NomeCompleto": "" + name + "",
            "NomeArtistico": "" + artisticName + "",
            "UserName": "" + userName + "",
            "Email": "" + email + "",
            "Senha": "" + password + "",
            "CPF": "" + cpf + "",
            "DataDeNascimento": "" + dateOfBirth + "",
            "TelefonePrincipal": "" + phone1 + "",
            "TelefoneSecundario": "" + phone2 + "",
            "CEP": "" + cep + "",
            "Rua": "" + address + "",
            "Numero": "" + numberOfHouse + "",
            "Complemento": "" + complementOfHouse + "",
            "Bairro": "" + neighborhood + "",
            "Cidade": "" + city + "",
            "Estado": "" + state + ""
        }
    }

    $.ajax(settingsToRegister).done(function (response) {
        $.unblockUI();

        if (response.indexOf('Usuário criado') != -1) {
            $("#statusOfSend").slideDown();
            $("#statusOfSend").addClass('alert-success');
            $("#statusOfSend").append("<strong>Sucesso!</strong> Cadastro realizado com sucesso. Por gentileza verifique seu e-mail.");

            cleanAllInputs();
        } else {
            $("#statusOfSend").slideDown();
            $("#statusOfSend").addClass('alert-danger');
            $("#statusOfSend").append("<strong>Erro!</strong> Ocorreu um problema ao cadastrar. Por gentileza tente novamente! </br>");
        }

        $('html, body').animate({scrollTop: 0}, 'slow');
    }).fail(function (data) {
        console.log(data.responseText);
    });
}