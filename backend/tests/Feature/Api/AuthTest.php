<?php

namespace Tests\Feature\Api;

use App\Models\User;
use Laravel\Sanctum\Sanctum;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;



class AuthTest extends TestCase
{ 


    use RefreshDatabase;

    public function test_user_can_register(): void
    {

        $userData = [
            'name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'password' => 'Password2023*',
            'password_confirmation' => 'Password2023*',
            'subscription' => false
        ];

       
        $response = $this->json('POST', '/api/register', $userData);

     
        $response->assertStatus(422);

        
        $this->assertDatabaseHas('users', [
            'email' => $userData['email'],
        ]);

       
        $user = User::where('email', $userData['email'])->first();
        $this->assertTrue($user->hasRole('User'));

        
        $response->assertCookie('token');
    }


    public function test_the_name_is_required_for_registration(): void
    {
        $response = $this->postJson('api/register',[
            'name' => null,
            'email' => 'zara@gmail.com',
            'email_verified_at' => '04/10/2023', 
            'password'=> 'Zara123456*',
            'password_confirmation'=> 'Zara123456*'
        ]);

        $response -> assertStatus(422);
        $response -> assertJsonFragment(['message' => 'The name field is required.']);

    }

    public function test_the_email_is_required_for_registration(): void
    {
        $response = $this->postJson('api/register',[
            'name' => 'Marina',
            'email' => null,
            'password'=> 'Mari123456*',
            'password_confirmation'=> 'Mari123456*'
        ]);

        $response -> assertStatus(422);
        $response -> assertJsonFragment(['message' => 'The email field is required.']);

    }

    public function test_the_email_is_unique(): void
    {
        $user = User::factory()->create([
            'password' => Hash::make('Abcdefg1999*')

        ]);

        $response = $this->postJson('api/register',[
            'name' => 'Marina',
            'email' => $user->email,
            'password'=> 'Mari123456*',
            'password_confirmation'=> 'Mari123456*'
        ]);

        $response -> assertStatus(422);
        $response -> assertJsonFragment(['message' => "The email has already been taken."]);

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
        //$response -> assertJsonFragment(['message' => 'Usuario conectado correctamente!']);
    }

    public function test_failed_login_invalid_password() {

        $user = User::factory()->create([
            'password' => Hash::make('Abcdefg1999*')

        ]);

        $response = $this->postJson('api/login', [
            'email' => $user->email,
            'password' => 'incorrectpassword'
        ]);

        $response -> assertStatus(401);
        $response -> assertJsonFragment([ 'message' => 'El correo electrónico o la contraseña son incorrectos.']);

    }

    public function test_email_is_required_for_auth() {

        $user = User::factory()->create([
            'password' => Hash::make('Abcdefg1999*')

        ]);

        $response = $this->postJson('api/login', [
            'email' => '',
            'password' => 'Abcdefg1999*'
        ]);

        $response -> assertStatus(422);
        $response -> assertJsonFragment([ 'message' => 'The email field is required.']);
               
    }

    public function test_password_is_required_for_auth() {

        $user = User::factory()->create([
            'password' => Hash::make('Abcdefg1999*')
        ]);

        $response = $this->postJson('api/login', [
            'email' => $user->email,
            'password' => ''
        ]);

        $response -> assertStatus(422);
        $response -> assertJsonFragment([ 'message' => 'The password field is required.']);
               
    }
    public function test_user_can_logout(){

            $user = User::factory()->create([
            'password' => Hash::make('Abcdefg1999*')
        ]);
        
        $response = $this->postJson('api/login', [
            'email' => $user->email,
            'password' => 'Abcdefg1999*'
        ]);

        Sanctum::actingAs($user, ['*']);
       $response = $this->postJson('/api/logout');
       $response -> assertJsonFragment([ 'message' => 'Se ha desconectado correctamente!']);
        
               
    }









}
    /**
     * A basic feature test example.
     */

     

    


    
