<?php

use App\Http\Controllers\Api\SearchController as ApiSearchController;
use App\Http\Controllers\Api\JournalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//search results endpoint
Route::get('/date-search/results', [ApiSearchController::class, 'search']);
//rande detail endpoint
Route::get('/randes/{rande_id}', [ApiSearchController::class, 'show']);

//find entry endpoint
Route::get('/entries/{entry_id}/edit', [JournalController::class, 'edit']);
//update entry in journal
Route::post('/entries/{entry_id}/store', [JournalController::class, 'store']);
//my journal endpoint
Route::get('/my-journal/{id}', [JournalController::class, 'show']);
