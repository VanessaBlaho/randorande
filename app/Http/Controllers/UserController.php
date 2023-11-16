<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\Models\User;

class UserController extends Controller
{
    public function show(User $user)
    {  return response ()->json([
            'username' => $user->username,
            'profile_photo' => $user->image_path,]);
        
    }
}