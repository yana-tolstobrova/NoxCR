<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = ['name', 'category', 'quantity', 'price', 'collection', 'color', 'image', 'detail'];

    public function photos(): HasMany
    {
        return $this->hasMany(Photo::class);
    }

    static function search($query){
      $results = Product::where('name', 'LIKE', "%$query%")
                         ->orWhere('collection', 'LIKE', "%$query%")
                         ->orWhere('color', 'LIKE', "%$query%")
                         ->get();
       return $results;
                            }
}

