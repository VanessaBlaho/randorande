<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Entry;
use Illuminate\Http\Request;

class JournalController extends Controller
{
    public function find($entry_id)
    {
        $entry = Entry::findOrFail($entry_id)->get();

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
        $entry->text = $request->input('text');
        $entry->save();

        return [
            'message' => 'Journal record updated successfully!'
        ];
    }
}
