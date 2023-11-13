<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Rande extends Model
{
    use HasFactory;

    public function budgets()
    {
        return $this->hasOne(Budget::class);
    }

    public function entries()
    {
        return $this->hasMany(Entry::class);
    }
}
