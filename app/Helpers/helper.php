<?php
namespace App\Helpers;

class Helper{
    public static function verifyToken()
    {
        if (session()->exists('user.token')) {
            return true;
        } else {
            return false;
        }
    }
}