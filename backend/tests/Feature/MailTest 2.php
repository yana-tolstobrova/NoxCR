<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Mail\orderConfirmation;
use Illuminate\Support\Facades\Mail;
use App\Models\User;

class MailTest extends TestCase
{
    /**
     * A basic feature test example.
     */
  
    use RefreshDatabase;

//     public function test_orderConfirmation_can_be_sent(): void
//    {
       
//     $this->withExceptionHandling();
    
//         Mail::fake();

//        // Assert that no mailables were sent...
//        Mail::assertNothingSent();

//        // Assert that a mailable was sent...
//        Mail::assertSent(OrderConfirmation::class);

//        // Assert a mailable was sent twice...
//        Mail::assertSent(OrderConfirmation::class, 2);

//        // Assert a mailable was not sent...
//        Mail::assertNotSent(AnotherMailable::class);

//        // Assert 3 total mailables were sent...
//        Mail::assertSentCount(3);
//    }

//    public function test_mailable_content(): void
// {
//    $user = User::factory()->create();



//    $orderData = [
//                'order_id'=> 5,
//                'name' => 'Pedro Sanchez',
//                'cedula' => '15409452',
//                'address' => 'calle las acacias, No. 22',
//                'products' => 'Lentillas NaturalGra',
//                'total_amount' => '1',
//                'shipping_type' => 'correo',
//                'data' => 'Gracias por su pedido'
                     
//    ];

//    $mailable = new orderConfirmation($orderData);
//    $adminMail = 'noxcr.mailing@gmail.com';

//    $mailable->assertFrom('noxcr.mailing@gmail.com');
//    $mailable->assertTo($UserMail);
//    $mailable->assertHasCc($adminMail);
//    $mailable->assertHasReplyTo('noxcr.mailing@gmail.com');
//    $mailable->assertHasSubject('NoxCR: Confirmación de Pedido');
   

//    $mailable->assertSeeInHtml($user->email);
//    $mailable->assertSeeInHtml('Confirmación de Pedido');
//    $mailable->assertSeeInOrderInHtml(['Confirmación de Pedido', 'Gracias por confiar en NoxCR!!']);

//    $mailable->assertSeeInText($user->email);
//    $mailable->assertSeeInOrderInText(['Confirmación de Pedido', 'Gracias por confiar en NoxCR!!']);

// }
}
