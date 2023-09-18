<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class AuthTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    // public function test_example(): void
    // {
    //     $response = $this->get('/');

    //     $response->assertStatus(200);
    // }

    public function testRegisterSuccess()
    {
        $userData = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => '12345678Aa*'
            /*'password' => '12345678Aa*',*/
        ];

        $response = $this->post('/register', $userData);

        $response->assertStatus(200);
        $this->assertDatabaseHas('users', ['email' => 'john@example.com']);
    }





}
