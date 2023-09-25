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
                // Obtener una orden de ejemplo (cambia esto según tus necesidades)
                $order = Order::find(1);

                // Obtener un producto de ejemplo (cambia esto según tus necesidades)
                $product = Product::find(1);
        
                // Crear una línea de pedido de ejemplo asociada a la orden y al producto
                OrderLine::create([
                    'order_id' => $order->id,
                    'product_id' => $product->id,
                    'name' => $product->name,
                    'quantity' => 2, // Cantidad deseada
                    'price' => $product->price,
                ]);
        
                // Puedes crear más líneas de pedido aquí si es necesario.
        
                $this->command->info('Order lines seeded successfully.');
    }
}
