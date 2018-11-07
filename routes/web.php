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
Route::get('/conta-corrente', 'AccountController@bank');
Route::get('/adicionar-creditos', 'AccountController@addCredits');

Route::get('/musicas', 'MusicController@userMusics');
Route::get('/musica/nova', 'MusicController@register');

Route::post('/login', 'SessionController@login');
Route::get('/logout', 'SessionController@logout');
Route::get('/user/auth/token/current', 'SessionController@getCurrentToken');
Route::get('/user/auth/username/current', 'SessionController@getCurrentUserName');