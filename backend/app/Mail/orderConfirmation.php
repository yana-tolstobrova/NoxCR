<?php
  
namespace App\Mail;
  
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Illuminate\Mail\Mailables\Attachment;
use Symfony\Component\Mime\Part\TextPart;
use Symfony\Component\Mime\Part\File;
use App\Models\Order;
use App\Models\OrderLine;
use App\Models\User;

  
class orderConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $order;
     public $orderLine;
  
    /**
     * Create a new message instance.
     */
    public function __construct($order, $orderLine, $user)
    { 
        $this->order=$order;
        $this->orderLine=$orderLine;
        $this->user=$user;
    }
  
    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'NoxCR: Orden de compra',
        );
    }
  
    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mails.orderConfirmationMail',

            with:[

                'orderName' => $this->order->name,
                'orderPrice' => $this->order->price,

                
               
                $user = [
                'name' => 'Sylvia Llorente',
                'email' => 'sylviall81@gmail.com',
                'password' => 'SylviaLL2023*',
                'subscription' => false];
                
                $order = ['order_id' => "1",
                'product_id' => "3",
                'name' => 'Lentes de Contacto',
                'quantity' => "2", 
                'price' => "20.00"];
                
                $orderLine = [
        
                        'order_id' => "1",
                        'product_id' => "3",
                        'name' => "Lente Natural de Cuarzo Jade",
                        'quantity' => "1",
                        'price' => "20.00"
                    
                    ];
            ]
        );
    }
  
    /**
     * Get the attachments for the message.
     *
     * @return array

     */
    public function attachments(): array
    {
        return [
               
        ];
    }
}