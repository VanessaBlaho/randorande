<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
    use HasFactory;

    public function journal()
    {
        return $this->belongsTo(Journal::class);
    }

    public function rande()
    {
        return $this->belongsTo(Rande::class);
    }
}
