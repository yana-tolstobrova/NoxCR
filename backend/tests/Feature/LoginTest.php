<?php

namespace Tests\Feature;

use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    // public function test_example(): void
    // {
    //     $response = $this->get('/login');

    //     $response->assertStatus(200)
    //              ->assertSee('Login');
    // }

    public function test_it_visits_login_page(): void
    {
        $this->get('/login')
        ->assertStatus(200)
        ->assertSee('Login');
    }

    /*usuario autenticado*/
    public function test_authenticated_to_a_user()
    {
        $user = create('App\User', [
            "email" => "user@mail.com"
        ]);

        $this->get('/login')->assertSee('Login');
        $credentials = [
            "email" => "user@mail.com",
            "password" => "secret"
        ];

        $response = $this->post('/login', $credentials);
        $response->assertRedirect('/home');
        $this->assertCredentials($credentials);
    }

    
}
