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
            
                $user = User::find(1);

        
                $order = Order::create([
                    'user_id' => $user->id, 
                    'address' => 'Dirección de ejemplo',
                    'phone' => '1234567890',
                    'date_ordered' => now(),
                    'total_amount' => 100, 
                    'shipping_type' => 'correos'
                ]);
        
        
                $this->command->info('Orders seeded successfully.');
    }
}