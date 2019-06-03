@extends('layouts.layout')
 
@section('title', 'Cadastro')

@section('css-view')
 
@section('content')        
    <div class="container-fluid">
        <header>
            <div class="row registerTitle">
                <h1>Cadastro</h1>
            </div>
        </header>

        <div class="row rowForm">
            <div class="col-xs-10 col-sm-10 col-md-8 col-lg-8">
                <div class="card" style="margin-top: 3%;">
                    <div class="card-body">
                        <div id="statusOfSend" class="alert" style="display:none"></div>
                        <form class="form-horizontal" id="formAdd" name="formAdd" method="POST" novalidate>
                            <div class="form-group row">
                                <label class="col-sm-3 form-control-label">Nome Completo</label>
                                <div class="col-sm-9">
                                    <input type="text" id="name" name="name" class="form-control" autofocus="" required="true"><span class="help-block-none">Informe seu nome completo.</span>
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label class="col-sm-3 form-control-label">Nome Art&iacute;stico</label>
                                <div class="col-sm-9">
                                    <input type="text" id="artisticName" name="artisticName" class="form-control" required="true"><span class="help-block-none">Informe seu nome art&iacute;stico.</span>
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label class="col-sm-3 form-control-label">E-mail</label>
                                <div class="col-sm-9">
                                    <input type="text" id="emailAccount" name="emailAccount" class="form-control" required="true"><span id="spanEmail" class="help-block-none">Informe seu email v&aacute;lido.</span>
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label class="col-sm-3 form-control-label">Confirme seu E-mail</label>
                                <div class="col-sm-9">
                                    <input type="text" id="confirmEmail" name="confirmEmail" class="form-control" required="true"><span id="spanConfirmEmail" class="help-block-none">Confirme seu email v&aacute;lido.</span>
                                </div>
                            </div>
                            
                            <div class="line"></div>
                            
                            <div class="form-group row cpfInput">
                                <label class="col-sm-3 form-control-label">CPF</label>
                                <div class="col-sm-4">
                                    <input type="text" id="cpf" name="cpf" class="form-control" maxlength="11" style="width: 200px" required="true"><span id="spanCpf" class="help-block-none">(somente n&uacute;meros).</span>
                                </div>
                            
                                <label class="col-sm-2 form-control-label">Nascimento</label>
                                <div class="col-sm-3">
                                    <input type="text" id="dateOfBirth" name="dateOfBirth" class="form-control" maxlength="10" required="true">
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label class="col-sm-3 form-control-label">Telefone 1</label>
                                <div class="col-sm-4">
                                    <input type="text" id="phone1" name="phone1" class="form-control" required="true"><span class="help-block-none">(somente n&uacute;meros).</span>
                                </div>
                            
                                <label class="col-sm-2 form-control-label">Telefone 2</label>
                                <div class="col-sm-3">
                                    <input type="text" id="phone2" name="phone2" class="form-control"><span class="help-block-none">(somente n&uacute;meros).</span>
                                </div>
                            </div>
                            
                            <div class="line"></div>
                            
                            <div class="form-group row">
                                <label class="col-sm-3 form-control-label">CEP</label>
                                <div class="col-sm-9">
                                    <input type="text" id="cep" name="cep" class="form-control" maxlength="8" style="width: 200px" required="true"><span id="spanCep" class="help-block-none">Informe seu CEP atual.</span>
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label class="col-sm-3 form-control-label">Rua / Avenida</label>
                                    <div class="col-sm-5">
                                <input type="text" id="address" name="address" class="form-control" required="true">
                            </div>
                            
                            <label class="col-sm-2 form-control-label">N&uacute;mero</label>
                                <div class="col-sm-2">
                                    <input type="text" id="numberOfHouse" name="numberOfHouse" class="form-control" required="true">
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label class="col-sm-3 form-control-label">Complemento</label>
                                <div class="col-sm-4">
                                    <input type="text" id="complementOfHouse" name="complementOfHouse" class="form-control" required="true" style="width: 200px">
                                </div>
                            
                                <label class="col-sm-1 form-control-label">Bairro</label>
                                <div class="col-sm-4">
                                    <input type="text" id="neighborhood" name="neighborhood" class="form-control" required="true">
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label class="col-sm-3 form-control-label">Cidade</label>
                                <div class="col-sm-4">
                                    <input type="text" id="city" name="city" class="form-control" required="true">
                                </div>
                            
                                <label class="col-sm-1 form-control-label">Estado</label>
                                <div class="col-sm-4">
                                    <input type="text" id="state" name="state" class="form-control" required="true">
                                </div>
                            </div>
                            
                            <div class="line"></div>

                            <div class="form-group row">
                                <label class="col-sm-3 form-control-label">Usuário</label>
                                <div class="col-sm-9">
                                    <input type="text" id="userNameProfile" name="userNameProfile" class="form-control" required="true"><span id="spanuserNameProfile" class="help-block-none">Crie um nome de usuário.</span>
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label class="col-sm-3 form-control-label">Senha</label>
                                <div class="col-sm-9">
                                    <input type="password" id="passwordAccount" name="passwordAccount" class="form-control" required="true"><span id="spanPassword" class="help-block-none">Crie uma senha.</span>
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label class="col-sm-3 form-control-label">Confirme sua Senha</label>
                                <div class="col-sm-9">
                                    <input type="password" id="confirmPassword" name="confirmPassword" class="form-control" required="true"><span id="spanConfirmPassword" class="help-block-none">Informe sua senha novamente para confirma-la.</span>
                                </div>
                            </div>
                            
                            <div class="line"></div>
                            
                            <div class="form-group row">
                                <div class="col-md-4 col-md-offset-8">
                                    <button type="reset" class="btn btn-secondary">Limpar</button>
                                    <button type="submit" id="submitNewUser" name="submitNewUser" class="btn btn-success">Cadastrar!</button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection()

@section('js-view')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.blockUI/2.70/jquery.blockUI.js"></script>
    <script src="{{asset('js/register-account/register-account.view.js')}}"></script>
@endsection()