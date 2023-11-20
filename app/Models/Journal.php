<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Journal extends Model
{
    use HasFactory;

      protected $fillable = [
        'user_id'
    ];

    public function entries() 
    {
        return $this->hasMany(Entry::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
