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

    public function test_store_product(): void
    {
        $this->withoutExceptionHandling();

        // //$user = User::factory()->create([
        //     'id' => 1
        // ]);

        //Sanctum::actingAs($user);

        $product = Product::create([
                'name' => 'Solución multipropósito',
                'category' => 'Lentes de Contacto',
                'quantity' => 5,
                'price' => 4000,
                'collection' => 'Product',
                'color' => 'Negro',
                'image' => 'https://farmapalacio.com/wp-content/uploads/2020/06/7506306205079-1-160.jpg',
                'detail' => 'Las soluciones multipropósito para lentes de contacto son líquidos con dos propósitos: limpian y también desinfectan los lentes. Las soluciones multipropósito para lentes de contacto están diseñadas para limpiar, enjuagar, almacenar y renovar sus lentes de contacto.'
            ]);

        $this->assertInstanceOf(Product::class, $product);
        $this->assertDatabaseHas('products', ['name' => 'Solución multipropósito']);
    }



 }
