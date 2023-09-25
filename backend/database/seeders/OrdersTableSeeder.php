<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Order;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
                // Obtener un usuario de ejemplo (cambia esto según tus necesidades)
                $user = User::find(1);

                // Crear una orden de ejemplo
                $order = Order::create([
                    'user_id' => $user->id, // ID del usuario
                    'address' => 'Dirección de ejemplo',
                    'phone' => '1234567890',
                    'date_ordered' => now(),
                    'total_amount' => 100, // Total de la orden
                ]);
        
                // Puedes crear más órdenes aquí si es necesario.
        
                $this->command->info('Orders seeded successfully.');
    }
}