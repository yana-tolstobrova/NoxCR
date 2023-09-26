<?php

namespace App\Models;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;

    protected $table = 'photos';

    protected $fillable = ['product_id', 'url', 'public_id'];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

}
