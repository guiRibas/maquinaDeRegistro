<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'IndexController@index');

Route::get('/perfil', 'AccountController@index');
Route::get('/usuario/novo', 'AccountController@register');

Route::get('/conta-corrente/creditos/adicionar', 'BankController@add');
Route::get('/conta-corrente/historico', 'BankController@history');
Route::get('/conta-corrente/extrato', 'BankController@statement');

Route::get('/musicas', 'MusicController@userMusics');
Route::get('/musica/nova', 'MusicController@register');

Route::post('/login', 'SessionController@login');
Route::get('/logout', 'SessionController@logout');

Route::get('/user/auth/token/current', 'SessionController@getCurrentToken');
Route::get('/user/auth/username/current', 'SessionController@getCurrentUserName');
Route::post('/user/balance/set/actual', 'SessionController@setCurrentBalance');
Route::get('/user/balance/get/actual', 'SessionController@getCurrentBalance');

Route::post('/user/message/set/status', 'SessionController@setMessageStatus');
