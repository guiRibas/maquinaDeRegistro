@extends('layouts.layout-dash')
 
@section('page-title', 'Meus Dados')

@section('content')
  <div class="profile-content">
    <div class="card">
        <div class="card-body">
            <div id="statusOfChange" class="alert" style="display:none"></div>

            <ul class="nav nav-tabs menu-users">
                <li class="nav-item active">
                    <a class="nav-link" href="#first-tab" data-toggle="tab">Notificações</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#second-tab" data-toggle="tab">Acesso</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#third-tab" data-toggle="tab">Contato e Endereço</a>
                </li>
            </ul>
                   
            <div class="tab-content" style="margin-top: 2%">
                <div id="statusOfSend" class="alert" style="display:none"></div>
                <div class="tab-pane active in" id="first-tab">
                    <form class="form-horizontal" id="formChangeEmail" name="formChangeEmail" novalidate>
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
        
                        <div class="form-group row">
                            <div class="col-md-4 col-md-offset-8 col-lg-1 col-lg-offset-10">
                                <button type="submit" id="submitNewEmail" name="submitNewEmail" class="btn btn-success">Alterar!</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="tab-pane" id="second-tab">
                    <form class="form-horizontal" id="formChangePassword" name="formChangePassword" novalidate>   
                        <div class="form-group row">
                            <label class="col-sm-3 form-control-label">Senha atual</label>
                            <div class="col-sm-9">
                                <input type="password" id="actualPasswordAccount" name="actualPasswordAccount" class="form-control" required="true"><span id="spanActualPassword" class="help-block-none">Informe sua senha atual.</span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3 form-control-label">Nova Senha</label>
                            <div class="col-sm-9">
                                <input type="password" id="newPasswordAccount" name="newPasswordAccount" class="form-control" required="true"><span id="spanPassword" class="help-block-none">Crie uma nova senha.</span>
                            </div>
                        </div>
                        
                        <div class="form-group row">
                            <label class="col-sm-3 form-control-label">Confirme sua Nova Senha</label>
                            <div class="col-sm-9">
                                <input type="password" id="confirmNewPasswordAccount" name="confirmNewPasswordAccount" class="form-control" required="true"><span id="spanConfirmPassword" class="help-block-none">Informe novamente a sua nova senha para confirma-la.</span>
                            </div>
                        </div>

                        <div class="line"></div>
        
                        <div class="form-group row">
                            <div class="col-md-4 col-md-offset-8 col-lg-1 col-lg-offset-10">
                                <button type="submit" id="submitNewPassword" name="submitNewPassword" class="btn btn-success">Alterar!</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="tab-pane" id="third-tab">
                    <form class="form-horizontal" id="formChangeContact" name="formChangeContact" novalidate>   
                        <div class="form-group row">
                            <label class="col-sm-3 form-control-label">Telefone 1</label>
                            <div class="col-sm-4">
                                <input type="text" id="phone1" name="phone1" class="form-control" required="true"><span class="help-block-none">(somente n&uacute;meros).</span>
                            </div>
                        
                            <label class="col-sm-2 form-control-label">Telefone 2</label>
                            <div class="col-sm-3">
                                <input type="text" id="phone2" name="phone2" class="form-control" required="true"><span class="help-block-none">(somente n&uacute;meros).</span>
                            </div>
                        </div>
        
                        <div class="line"></div>
        
                        <div class="form-group row">
                            <label class="col-sm-3 form-control-label">CEP</label>
                            <div class="col-sm-9">
                                <input type="text" id="cep" name="cep" class="form-control" maxlength="8" style="width: 200px" required="true"><span id="spanCep" class="help-block-none"></span>
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
                            <div class="col-md-4 col-md-offset-8 col-lg-1 col-lg-offset-10">
                                <button type="submit" id="submitNewContact" name="submitNewContact" class="btn btn-success">Alterar!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('js-view')
  <script src="{{asset('js/sidebar/sidebar.view.js')}}"></script>
  <script src="{{asset('js/perfil/perfil.view.js')}}"></script>
@endsection