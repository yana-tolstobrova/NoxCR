<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Product;
use Laravel\Sanctum\Sanctum;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class ProductTest extends TestCase
{

    use RefreshDatabase;
    /**
     * Should test get all products
     */
    public function test_user_no_auth_can_see_all_products(): void
    {
       $this->withExceptionHandling();

       Product::factory()->create();

       $response = $this-> getJson('api/products');

       $response->assertJsonCount(1);

        
    }

    public function testIndex()
{
    $response = $this->json('GET', '/api/products'); // Cambia la URL a la correcta

    $response->assertStatus(200) // Verifica que la respuesta sea un código 200 OK
             ->assertJsonStructure([ // Verifica la estructura del JSON de respuesta
                 '*' => [
                     'id',
                     'name',
                     'category',
                 ]
             ]);
}

// public function testShow()
// {
//     $product = factory(Product::class)->create(); // Crea un producto ficticio para la prueba

//     $response = $this->json('GET', "/api/products/{$product->id}");

//     $response->assertStatus(200)
//              ->assertJsonStructure([
//                  'id',
//                  'name',
//                  'category',
//                  // Agrega más campos aquí según la estructura de tu respuesta
//              ])
//              ->assertJson([
//                  'id' => $product->id,
//                  'name' => $product->name,
//                  'category' => $product->category,
//                  // Agrega más campos aquí y verifica sus valores según el producto ficticio
//              ]);
// }
}








