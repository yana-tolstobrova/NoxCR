<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Order extends Model
{
    protected $fillable = ['user_id', 'address', 'phone', 'date_ordered', 'total_amount', 'shipping_type'];

    public function orderLines()
    {
        return $this->hasMany(OrderLine::class, 'order_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
