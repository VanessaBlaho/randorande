<?php

namespace App\Http\Requests;

use Laravel\Fortify\Fortify;
use Laravel\Fortify\Http\Requests\LoginRequest as FortifyLoginRequest;

class LoginRequest extends FortifyLoginRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            Fortify::username() => 'required|string',
            'password' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            
        ];
    }
}
