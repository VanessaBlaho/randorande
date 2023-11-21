<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Entry;
use App\Models\Rande;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EntryController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'rande_id' => 'required',
        ]);

        $user = Auth::user();
        $journal = $user->journal;

        //create variable entries to find this relationship
        //if there is an entry where journal id and rande id are already connected
        $entries = Entry::where(['journal_id' => $journal->id, 'rande_id' => $request->rande_id])->get();
        
        //then return message below

        if(count($entries)){
            return ['message2' => 'rande already exists in the journal'];
        }
    
        $entry = new Entry;

        $entry->rande_id = $request->rande_id;
        $entry->journal_id = $journal->id;
        $entry->date = $request->date;
        $entry->location = $request->location;
        $entry->entry_text = $request->entry_text;
        $entry->save();

        return [
            'message' => 'Added to journal successfully!'
        ];
    }
    
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

    // public function store(Request $request, $entry_id)
    // {
    //     $entry = Entry::find($entry_id);

    //     if (!$entry) {
    //         return [
    //             'message' => 'Journal record not found :('
    //         ];
    //     }
    //     $user = Auth::user();
    //     $journal = $user->journal;

    //     if ($journal)

    //     $entry->date = $request->input('date');
    //     $entry->location = $request->input('location');
    //     $entry->entry_text = $request->input('entry_text');
    //     $entry->save();


    //     return [
    //         'message' => 'Journal updated successfully!'
    //     ];
    // }
    
}

