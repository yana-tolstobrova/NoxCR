<?php

namespace Tests\Feature\Api;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AuthTest extends TestCase
{
    /**
     * A basic feature test example.
     */

     use RefreshDatabase;

    public function test_user_can_register(): void
    {

        $response = $this->postJson('api/register', [
            'name' => 'Elena',
            'email'=>'ele@mail.com',
            'password' => 'Elena1998*',
            'password_confirmation' => 'Elena1998*'
        ]);

        $response->assertStatus(200);
        $this->assertCount(1, User::all());
        $response->assertJsonStructure([
            'user' => [
                'id',
                'name',
                'email',
                'created_at',
                'updated_at'
            ],
        ]);
        
    }

    public function test_user_can_login(): void
    {

        $user = User::factory()->create([
            'password' => Hash::make('Abcdefg1999*')

        ]);

        $response = $this->postJson('api/login', [
            'email' => $user->email,
            'password' => 'Abcdefg1999*'
        ]);

        $response -> assertStatus(200);
        $response -> assertJsonFragment(['message' => 'User succesfully logged In!']);
    }
}