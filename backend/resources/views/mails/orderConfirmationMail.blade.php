<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> NoxCR| Orden de Compra</title>
    <!--<link rel="stylesheet" href="backend/resources/css/orderConfirmation.css">-->
</head>

<body>
<img src="" alt="Logo NoxCR en blanco y negro">
    <h1>Confirmación de orden de compra</h1>

    <p> Resumen de pedido:</p>

   <table>
    <tr>
         <ul>
            <li>{{ $orderData['pedido'] }} </li>
            <li> {{ $orderData['producto'] }}</li>
            <li> {{ $orderData['cantidad'] }}</li>
            <li> {{ $orderData['precio'] }}</li>
            <li> Precio Total: {{ $order->price }}</li>
        </ul>
    </tr>
    <tr>
        <img class="foto-producto" src="https://scontent.fbcn14-1.fna.fbcdn.net/v/t39.30808-6/308644573_462528075899212_471812872364256153_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=813123&_nc_ohc=3Ieg4ICX-LsAX9WhEoJ&_nc_ht=scontent.fbcn14-1.fna&oh=00_AfCvy5yGrAjqnx5H1hH34BlfLFZ2orqGeRjIL7ZC7kEAQg&oe=650940C4" alt="">
    </tr>
   </table>

   <h4>Adicionalmente, aprovechamos este correo para recordarte que la salud 
    y bienestar de tu vista es lo primordial para NoxCR por eso te invitamos 
    a que antes de recibir tu pedido accedas a este enlace y leas cuidadosamente
    todas las <a href="http://localhost:3000/#cuidados">normas de uso, higiene y mantenimiento de tus lentes noxCR</a>.
    
    Si tienes cualquier pregunta,sugerencia o inquietud, no dudes en contactarnos por cualquiera de 
    nuestras redes sociales, nuestro <a href="http://wa.me/50684993726">wasapp</a> o por correo a noxcrlentes@gmail.com </h4>

     
    <p>Gracias por confiar en NoxCR</p>
    <img src="" alt="">
</body>
</html>