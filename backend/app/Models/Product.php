<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = ['name', 'quantity', 'price', 'image', 'collection', 'color', 'description'];

    static function search($query){
      $results = Product::where('name', 'LIKE', "%$query%")
                         ->orWhere('collection', 'LIKE', "%$query%")
                         ->orWhere('color', 'LIKE', "%$query%")
                         ->get();
       return $results;
                            }
}