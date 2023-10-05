<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;



class OrderControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testStore()
    {
        // Crea un usuario ficticio para la prueba
        $user = factory(User::class)->create();

        // Simula una solicitud HTTP POST con datos válidos
        $response = $this->actingAs($user)
                         ->json('POST', '/api/orders', [
                             'address' => '123 Main St',
                             'phone' => '555-123-4567',
                             'total_amount' => 100.00,
                             'shipping_type' => 'Standard',
                         ]);

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'success',
                     'data' => [
                         'id',
                         'user_id',
                         'address',
                         'phone',
                         'date_ordered',
                         'total_amount',
                         'shipping_type',
                     ],
                 ]);

        // Verifica que la orden se haya almacenado en la base de datos
        $this->assertDatabaseHas('orders', [
            'user_id' => $user->id,
            'address' => '123 Main St',
            'phone' => '555-123-4567',
            'total_amount' => 100.00,
            'shipping_type' => 'Standard',
        ]);
    }

    public function testShowOrderDetails()
    {
        // Crea una orden ficticia para la prueba
        $order = factory(Order::class)->create();

        // Simula una solicitud HTTP GET para mostrar detalles de la orden
        $response = $this->json('GET', "/api/orders/{$order->id}");

        $response->assertStatus(200)
                 ->assertJson([
                     'id' => $order->id,
                     'user_id' => $order->user_id,
                     'address' => $order->address,
                     'phone' => $order->phone,
                     'total_amount' => $order->total_amount,
                     'shipping_type' => $order->shipping_type,
                 ]);
    }
}
