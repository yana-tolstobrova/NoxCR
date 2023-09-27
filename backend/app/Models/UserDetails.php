<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetails extends Model
{
    protected $fillable = ['user_id', 'address', 'birth_date', 'phone'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
