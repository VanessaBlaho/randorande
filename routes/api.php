<?php

use App\Http\Controllers\Api\EntryController;
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

//my journal endpoint
Route::get('/my-journal', [JournalController::class, 'show']);

//show entry with rande name endpoint
Route::get('/entries/{entry_id}/show', [EntryController::class, 'show']);
//update entry in journal
Route::post('/entries/{entry_id}/store', [EntryController::class, 'store']);
//create entry from revealed date
Route::post('/entries/create', [EntryController::class, 'create']);
//image upload for entry
Route::post('/entries/upload-photo', [EntryController::class, 'uploadPhoto']);
