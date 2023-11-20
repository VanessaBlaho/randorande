<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Entry;
use App\Models\Rande;
use Illuminate\Http\Request;

class EntryController extends Controller
{
    public function show($entry_id)
    {

        $entry = Entry::select('entries.*', 'randes.name as rande_name', 'randes.description as rande_description')
            ->join('randes', 'entries.rande_id', '=', 'randes.id')
            ->find($entry_id);

        return $entry;
    }

    public function edit($entry_id)
    {

        $entry = Entry::select('entries.*', 'randes.name as rande_name')
            ->join('randes', 'entries.rande_id', '=', 'randes.id')
            ->find($entry_id);

        return $entry;
    }

    public function store(Request $request, $entry_id)
    {
        $request->validate([
            'date' => 'required',
            'location' => 'required',
        ]);

        $entry = Entry::find($entry_id);

        if (!$entry) {
            return [
                'message' => 'Journal record not found :('
            ];
        }


        $entry->date = $request->input('date');
        $entry->location = $request->input('location');
        $entry->entry_text = $request->input('entry_text');
        $entry->save();


        return [
            'message' => 'Journal updated successfully!'
        ];
    }
}
