<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\Order;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'address' => $faker->address,
             'phone' => $faker->phoneNumber,
            'total_amount' => $faker->randomFloat(2, 10, 1000),
            'shipping_type' => $faker->word,


            
            //
        ];
    }
}
