<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Entry;
use App\Models\Journal;
use Illuminate\Http\Request;

class JournalController extends Controller
{
    public function show($journal_id)
    {
        $journal_entries = Entry::where('journal_id', $journal_id)->join('randes', 'entries.rande_id', '=', 'randes.id')->get();

        return $journal_entries;
    }
}
