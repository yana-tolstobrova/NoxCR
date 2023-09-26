<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Order;
use App\Models\Product;
use App\Models\OrderLine;

class OrderLinesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

                $order = Order::find(1);

                $product = Product::find(1);
        
                OrderLine::create([
                    'order_id' => $order->id,
                    'product_id' => $product->id,
                    'name' => $product->name,
                    'quantity' => 2, 
                    'price' => $product->price,
                ]);
        
        
                $this->command->info('Order lines seeded successfully.');
    }
}
