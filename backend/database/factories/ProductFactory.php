<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //

            'name' => "producto".rand(1,999),
            'category' => 'Lentes de Contacto',
            'quantity' => rand(1,30),
            'price' => $this->faker->randomFloat(2,16,80),
            'collection' => "Sclera",
            'detail' => 'Bienvenido al mundo de la fantasía y el asombro con nuestros lentes de contacto'
        ];
    }
}
