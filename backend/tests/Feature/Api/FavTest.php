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

class FavTest extends TestCase
{
    /**
     * A basic feature test example.
     */

     use RefreshDatabase; 

    public function test_auth_user_likes_a_product(): void
    {
        $this->withoutExceptionHandling();

        $user = User::factory()->create([
            'id' => 1
        ]);

        //Sanctum::actingAs($user);
        $product = Product::factory()->create([
            'id' => 1,
        ]);

        $response = $this->postJson("api/products/favorites/{$product->id}");

        $response->assertJsonFragment(['res'=> true])
        ->assertStatus(200);
        $this->assertTrue($product->isFavorite->contains($user));

    }

    public function test_auth_user_can_unlike_product(): void
    {
        // $this->withoutExceptionHandling();

        // $user = User::factory()->create([
        //     'id' => 1
        // ]);

        // //Sanctum::actingAs($user);
        // $product = Product::factory()->create([
        //     'id' => 5,
        // ]);

        // $response = $this->getJson("api/products/favorites");

        
        // $response->assertStatus(201)
        //         ->assertJsonCount(1)
        //         ->assertJsonFragment(["product_id: 5"]);
        // //$this->assertTrue($product->isFavorite->contains($user));

    }

    public function test_auth_user_can_see_favorites_products(): void
    {
        $this->withoutExceptionHandling();

        $user = User::factory()->create([
            'id' => 1
        ]);

        //Sanctum::actingAs($user);
        $product = Product::factory()->create([
            'id' => 5,
        ]);

        $response = $this->getJson("api/products/favorites");

        
        $response->assertStatus(201)
                ->assertJsonCount(1)
                ->assertJsonFragment(["product_id: 5"]);
        //$this->assertTrue($product->isFavorite->contains($user));

    }


}
