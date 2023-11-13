<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Journal extends Model
{
    use HasFactory;

    public function entries() 
    {
        return $this->hasMany(Entry::class);
    }

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
