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
}
