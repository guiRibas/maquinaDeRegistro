$(document).ready(function () {
    $("#formChangeEmail").submit(function () {
        return false;
    });

    $("#formChangePassword").submit(function () {
        return false;
    });

    $("#formChangeContact").submit(function () {
        return false;
    });

    $("[name=submitNewEmail]").click(function (e) {
        changeEmail();
    });

    $("[name=submitNewPassword]").click(function (e) {
        changePassword();
    });

    $("[name=submitNewContact]").click(function (e) {
        changeContact();
    });

    applyMask();
});

function changeEmail() {
    var send = true;

    if (send) {
        var email = $("#emailAccount").val();
        var emailValidate = isEmail(email, "emailAccount");

        if (!emailValidate) {
            $("#emailAccount").val("");
            $("#confirmEmail").val("");

            $("#emailAccount").addClass("required");
            $("#confirmEmail").addClass("required");
            send = false;
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
        var email = $("#emailAccount").val();
        var token = currentToken();
        var user = currentUserName();

        if (user != null && token != null) {
            var settingsToChangeEmail = {
                "async": true,
                "crossDomain": true,
                "url": API_ROOT_PATH_PEOPLE + "/alterar/email",
                "method": "POST",
                "headers": {
                    "authorization": "Bearer " + token
                },
                "data": {
                    "userName": "" + user + "",
                    "email": "" + email + ""
                }
            }

            $.ajax(settingsToChangeEmail).done(function (response) {
                $("#statusOfChange").slideDown();
                $("#statusOfChange").addClass('alert-success');
                $("#statusOfChange").append("<strong>Sucesso!</strong> E-mail alterado com sucesso! Por gentileza verifique seu e-mail.");
            }).fail(function (data) {
                console.log(data.responseText);
            });
        }
    }
}

function changePassword() {
    var send = true;

    $("input").each(function () {
        input = $(this).attr("id");

        if (input == "actualPasswordAccount" || input == "newPasswordAccount" || input == "confirmNewPasswordAccount") {
            if ($(this).val().length < 1) {
                $(this).addClass("required");
                send = false;
            } else {
                $(this).removeClass("required");
            }
        }
    })

    if (send) {
        var password = $("#newPasswordAccount").val();
        var confirmNewPassword = $("#confirmNewPasswordAccount").val();

        if (confirmNewPassword != password) {
            msgErro('Erro! As senhas devem ser iguais.', "spanconfirmNewPassword");
            document.getElementById("confirmNewPasswordAccount").style.boxShadow = "0 0 5px #ff0000";
            document.getElementById("confirmNewPasswordAccount").style.border = "1px solid #ff0000";
            $("#confirmNewPasswordAccount").focus();

            $("#newPasswordAccount").addClass("required");
            $("#confirmNewPasswordAccount").addClass("required");
            send = false;
        } else {
            msgErro('Sucesso! As senhas são iguais.', "spanconfirmNewPassword");
            document.getElementById("newPasswordAccount").style.boxShadow = "0 0 5px #179e27";
            document.getElementById("newPasswordAccount").style.border = "1px solid #179e27";
            document.getElementById("confirmNewPasswordAccount").style.boxShadow = "0 0 5px #179e27";
            document.getElementById("confirmNewPasswordAccount").style.border = "1px solid #179e27";
        }
    }

    if (send) {
        var actualPass = $("#actualPasswordAccount").val();
        var newPass = $("#newPasswordAccount").val();
        var confirmNewPass = $("#confirmNewPasswordAccount").val();

        var token = currentToken();
        var user = currentUserName();

        if (user != null && token != null) {
            var settingsToChangePassword = {
                "async": true,
                "crossDomain": true,
                "url": API_ROOT_PATH_PEOPLE + "/alterar/senha",
                "method": "POST",
                "headers": {
                    "authorization": "Bearer " + token
                },
                "data": {
                    "userName": "" + user + "",
                    "SenhaAtual": "" + actualPass + "",
                    "SenhaNova": "" + newPass + "",
                    "ConfirmarSenhaNova": "" + confirmNewPass + ""
                }
            }

            $.ajax(settingsToChangePassword).done(function (response) {
                $("#statusOfChange").slideDown();
                $("#statusOfChange").addClass('alert-success');
                $("#statusOfChange").append("<strong>Sucesso!</strong> Senha alterada com êxito!");
            }).fail(function (data) {
                console.log(data.responseText);
                if (data.responseText.indexOf("Incorrect password") != -1) {
                    msgErro("Erro! Senha atual não confere.", "spanActualPassword");
                    document.getElementById("actualPasswordAccount").style.boxShadow = "0 0 5px #ff0000";
                    document.getElementById("actualPasswordAccount").style.border = "1px solid #ff0000";
                    $("#actualPasswordAccount").focus();
                }
            });
        }
    }
}

function changeContact() {
    var send = true;

    $("input").each(function () {
        input = $(this).attr("id");

        if (input == "phone1" || input == "cep" || input == "address" || input == "numberOfHouse" ||
            input == "neighborhood" || input == "city" || input == "state") {
            if ($(this).val().length < 1) {
                $(this).addClass("required");
                send = false;
            } else {
                $(this).removeClass("required");
            }
        }
    })

    if (send) {
        var phone1 = $("#phone1").val();
        var phone2 = $("#phone2").val();
        var cep = $("#cep").val();
        var address = $("#address").val();
        var numberOfHouse = $("#numberOfHouse").val();
        var complementOfHouse = $("#complementOfHouse").val();
        var neighborhood = $("#neighborhood").val();
        var city = $("#city").val();
        var state = $("#state").val();

        var token = currentToken();
        var user = currentUserName();

        if (user != null && token != null) {
            var settingsToChangeContact = {
                "async": true,
                "crossDomain": true,
                "url": API_ROOT_PATH_PEOPLE + "/alterar/endereco",
                "method": "POST",
                "headers": {
                    "authorization": "Bearer " + token
                },
                "data": {
                    "userName": "" + user + "",
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

            $.ajax(settingsToChangeContact).done(function (response) {
                $("#statusOfChange").slideDown();
                $("#statusOfChange").addClass('alert-success');
                $("#statusOfChange").append("<strong>Sucesso!</strong> Seus dados foram atualizados com êxito!");
            }).fail(function (data) {
                console.log(data.responseText);
            });
        }
    }
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
        msgErro("Sucesso! E-mail válido.", "spanEmail");
        document.getElementById(input).style.boxShadow = "0 0 5px #179e27";
        document.getElementById(input).style.border = "1px solid #179e27";

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

function applyMask() {
    var SPMaskBehavior = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        spOptions = {
            onKeyPress: function (val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };

    $("#cep").mask("00000-000");
    $("#phone1").mask(SPMaskBehavior, spOptions);
    $("#phone2").mask(SPMaskBehavior, spOptions);
}

function msgErro(msg, span) {
    $("#" + span).html(msg);
}

function currentUserName() {
    return $('meta[name="currentUserName"]').attr('content');
}

function currentToken() {
    return $('meta[name="currentToken"]').attr('content');
}
