<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Entry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class JournalController extends Controller
{
    //display randes in my journal main page
    public function show()
    {
        $user = Auth::user();

        $entries = $user->journal->entries->load('rande');

        return $entries;
    }

   
}
