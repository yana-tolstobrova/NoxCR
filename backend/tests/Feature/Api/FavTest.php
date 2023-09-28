<?php

namespace Tests\Feature;


use App\Models\User;
use App\Models\Product;
use Laravel\Sanctum\Sanctum;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\AuthController;
use Tests\TestCase;
use Spatie\Permission\Models\Role;

class FavTest extends TestCase
{
    /**
     * A basic feature test example.
     */

     use RefreshDatabase; 

     public function setUp(): void
    {
        parent::setUp();

        // Ejecuta el Seeder de roles y permisos antes de cada prueba.
        $this->seed(RolesAndPermissionsSeeder::class);
    }


    public function test_auth_user_can_add_favorite(): void
    {
        $this->withoutExceptionHandling();

        $userRole = User::factory()->create([
            'id' => 1
        ]);

        

        Sanctum::actingAs($userRole);
        $product = Product::factory()->create([
            'id' => 1,
        ]);

        $response = $this->postJson("api/products/add-favorite/{$product->id}");

        $response->assertStatus(200)
                 ->assertJsonFragment(['res'=> true,
                'msg' => 'el producto se ha añadido a tu lista de favoritos']);
        $this->assertTrue($product->isFavorite->contains($userRole));

    }

     public function test_auth_user_can_remove_favorite(): void
     {
         $this->withoutExceptionHandling();

        // $user = User::factory()->create([
        //     'id' => 1
        // ]);

        $userRole = Role::create(['name' => 'User']);

        Sanctum::actingAs($userRole);
        $product = Product::factory()->create([
            'id' => 1,
        ]);

        $favorite = $product->isFavorite()->attach($user);

        $response = $this->postJson("api/products/remove-favorite/{$product->id}");

        $response->assertJsonFragment(['res'=> false,
        'msg' => 'el producto se ha retirado de tu lista de favoritos'])
        ->assertStatus(200);
        $this->assertFalse($product->isFavorite->contains($user));

     }

    public function test_auth_user_can_see_favorites_products(): void
    {
        $this->withoutExceptionHandling();

        $user = User::factory()->create([
            'id' => 1
        ]);

        Sanctum::actingAs($user);
        $product = Product::factory()->create([
            'name' => "Lente color gris",
        ]);


        $product->isFavorite()->attach($user);

        $response = $this->getJson("api/products/favorites");

        
        $response->assertStatus(200)
                ->assertJsonCount(1)
                ->assertJsonFragment(['name'=> "Lente color gris"]);
                
        //$this->assertTrue($product->isFavorite->contains($user));

    }


}
