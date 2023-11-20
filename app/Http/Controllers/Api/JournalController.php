<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Entry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class JournalController extends Controller
{
    //display randes in my journal main page
    public function show($journal_id)
    {
        //$journal_entries = Entry::where('journal_id', $journal_id)->join('randes', 'entries.rande_id', '=', 'randes.id')->get();

        $journal_entries = Entry::where('journal_id', $journal_id)
            ->join('randes', 'entries.rande_id', '=', 'randes.id')
            ->select('entries.id as entry_id', 'randes.name as rande_name')
            ->get();

        return $journal_entries;
    }

    public function edit($entry_id)
    {
        $entry = Entry::findOrFail($entry_id);

        return $entry;
    }

    public function store(Request $request)
    {

        $request->validate([
            'rande_id' => 'required',
        ]);

        $user = Auth::user();
        $journal = $user->journal;

        $entry = new Entry;

        $entry->rande_id = $request->rande_id;
        $entry->journal_id = $journal->id;
        $entry->date = $request->date;
        $entry->location = $request->location;
        $entry->entry_text = $request->entry_text;
        $entry->save();

        return [
            'message' => 'Journal updated successfully!'
        ];
    }
}
