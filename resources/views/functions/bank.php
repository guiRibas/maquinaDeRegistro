<?php

newTicket($_POST['cpf'], $_POST['total'], $_POST['email'], $_POST['completeName']);

function newTicket($cpf, $total, $email, $completeName){
  $fullDeadLine = date('d/m/y');
  $fullActualDate = date('d/m/Y', strtotime('+3 days'));

  $headers = array('Authorization' => 'Basic cmVnaXN0cm9lbGV0cm9uaWNvQGJyYWluc29mdHNpc3RlbWFzLmNvbS5icjo2YmNjODNhYS0zMjgwLTQ3MDgtYmI5NC0yOTIzODRkODhlNjU=', 
                   'Content-Type' => 'application/x-www-form-urlencoded');
  $data = array('CPFCNPJSacado' => $cpf, 'Vencimento' => $fullDeadLine, 'Valor' => $total, 'Linha1' => 'Teste 1', 'Linha2' => 'Teste 2', 'Email' => $email, 'DataEnvioEmail' => $fullActualDate, 
                'Pdf' => 'true', 'Sacado' => $completeName);

  $body = Unirest\Request\Body::json($data);

  $response = Unirest\Request::post('https://sandbox.pagueveloz.com.br/api/v4/Boleto', $headers, $body);

  echo $response->raw_body;
}
?>