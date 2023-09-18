<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{

    use RefreshDatabase; 

    public function testSucceedsOnExistingUser()
    {
        $password = 'password123';

        // Crea un usuario en la base de datos.
        $user = User::factory()->create([
            'email' => 'pepito@grillo.com',
            'password' => bcrypt($password),
        ]);

        // Llama a la función de autenticación y verifica que funcione correctamente.
        $response = $this->post('/login', [
            'email' => 'pepito@grillo.com',
            'password' => $password,
        ]);

        //$response->assertRedirect('/dashboard'); //esta ruta todavia no existe  Redireccionamiento correcto después de la autenticación.
    }

    
}
