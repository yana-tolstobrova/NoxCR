<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = ['name', 'category', 'quantity', 'price', 'collection', 'detail'];

    public function photos(): HasMany
    {
        return $this->hasMany(Photo::class);
    }
    public function colors(): BelongsToMany
    {
        return $this->belongsToMany(Color::class);
    }

    static function search($query){
      $results = Product::where('name', 'LIKE', "%$query%")
                         ->orWhere('collection', 'LIKE', "%$query%")
                         ->get();
       return $results;
                            }

      Public function isFavorite()
      {
        return $this->belongsToMany(User::class);
      }

}

