<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Rande;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        //taking search query parameters from GET
        $budget_id = request('budget');
        $season = request('season');
        $indoors = request('locality');

        $results = Rande::inRandomOrder()
            ->where('budget_id', $budget_id)
            ->where($season, true)
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
