<?php

namespace App\Actions\Fortify;

<<<<<<< HEAD
use App\Models\User;
use Illuminate\Support\Facades\Hash;
=======
use App\Models\Journal;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
>>>>>>> 91739e77deba324c29fe1ed0a5387a23fb27fb8c
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
<<<<<<< HEAD
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
=======
        $validator = Validator::make($input, [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
>>>>>>> 91739e77deba324c29fe1ed0a5387a23fb27fb8c
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
<<<<<<< HEAD
            'password' => $this->passwordRules(),
        ])->validate();

        return User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);
=======
            'username' => [
                'required',
                'string',
                'max:255',
                Rule::unique(User::class),
            ], 
            'password' => $this->passwordRules(),
            'age_confirmation' => [
                'required'
            ],
        ], [
            'first_name.required' => 'First name is required.',
            'last_name.required' => 'Last name is required.',
            'email.required' => 'Email is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'This email is already in use.',
            'username.required' => 'Username is required.',
            'username.unique' => 'This username is already in use.',
            'password.required' => 'Password is required.',
            'age_confirmation.required' => 'Please confirm your age.',
        ])->validate();

        // Log validation errors
        // if ($validator->fails()) {
        //     Log::error('Validation Errors: ' . json_encode($validator->errors()));
            
        //     // You can return a response or throw an exception here
        //     // For example, return response()->json(['error' => $validator->errors()], 422);
        //     // Or throw new \Illuminate\Validation\ValidationException($validator);
        // }

        // Validation passed, create the user
        $user = User::create([
            'first_name' => $input['first_name'],
            'last_name' => $input['last_name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
            'username' => $input['username']
        ]);

        $journal = Journal::create([
            'user_id' => $user->id,
        ]);

        return $user;
>>>>>>> 91739e77deba324c29fe1ed0a5387a23fb27fb8c
    }
}
