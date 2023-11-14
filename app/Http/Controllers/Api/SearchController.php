<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Rande;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search()
    {
        //we don't have ideas for such parameters, please try agian

        //destructure search query parameters from GET
        $budget_id = request('budget');
        $winter = request('winter');
        $spring = request('spring');
        $summer = request('summer');
        $fall = request('fall');
        $indoors = request('indoors');

        // if ($search_term) {
        //     $results = Rande::where('budget_id', 1)
        //         ->where('winter', 1)
        //         ->where('indoors', 1)
        //         ->limit(3)
        //         ->get();
        // }
        $results = Rande::where('budget_id', $budget_id)
            ->where('winter', $winter)
            ->where('spring', $spring)
            ->where('summer', $summer)
            ->where('fall', $fall)
            ->where('indoors', $indoors)
            ->limit(3)
            ->get();


        return $results ?? [];
    }

    public function show($rande_id)
    {
        $rande = Rande::findOrFail($rande_id);

        return $rande;
    }
}
