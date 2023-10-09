<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class OrderConfirmationControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    use RefreshDatabase;
    /**
     * Test para sendConfirmationEmail.
     */
    public function testSendConfirmationEmail()
    {
        
        $user = factory(User::class)->create();

        
        $requestData = [
            'order_id' => 123,
            'name' => 'John Doe',
            'cedula' => '1234567890',
            'address' => '123 Main St',
            'products' => ['Product 1, Product 2'],
            'total_amount' => 100.00,
            'shipping_type' => 'Express',
            'cart' => ['item1', 'item2'],
        ];

        // Actúa como si la solicitud se hubiera realizado al controlador
        $response = $this->actingAs($user)
            ->post('/send-order-confirmation-email', $requestData);

        // Verifica que se haya enviado un correo electrónico
        Mail::assertSent(orderConfirmation::class, function ($mail) use ($user, $requestData) {
            return $mail->hasTo($user->email)
                && $mail->hasCc('noxcr.mailing@gmail.com')
                && $mail->orderData === $requestData;
        });

        $response->assertStatus(200);
    }
}
