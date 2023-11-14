<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Rande;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search()
    {
        //taking search query parameters from GET
        $budget_id = request('budget');
        $winter = request('winter');
        $spring = request('spring');
        $summer = request('summer');
        $fall = request('fall');
        $indoors = request('indoors');

        $results = Rande::inRandomOrder()
            ->where('budget_id', $budget_id)
            ->orWhere('winter', $winter)
            ->orWhere('spring', $spring)
            ->orWhere('summer', $summer)
            ->orWhere('fall', $fall)
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
