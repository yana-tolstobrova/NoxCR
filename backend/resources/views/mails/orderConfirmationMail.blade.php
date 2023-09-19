<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> NoxCR| Confirmación de compra</title>
    <!--<link rel="stylesheet" href="backend/resources/css/orderConfirmation.css">-->
</head>

<body>
    <h1>Confirmación de orden de compra</h1>

    <p></p>
    <p> Tu compra se ha realizado exitosamente!. Estos son los datos de tu transacción:</p>

   <table>
    <tr>
         <ul>
            <li>{{ $orderData['pedido'] }} </li>
            <li> {{ $orderData['producto'] }}</li>
            <li> {{ $orderData['cantidad'] }}</li>
            <li> {{ $orderData['precio'] }}</li>
            <li> {{ $orderData['total'] }}</li>
        </ul>
    </tr>
    <tr>
        <img class="foto-producto" src="https://scontent.fbcn14-1.fna.fbcdn.net/v/t39.30808-6/308644573_462528075899212_471812872364256153_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=813123&_nc_ohc=3Ieg4ICX-LsAX9WhEoJ&_nc_ht=scontent.fbcn14-1.fna&oh=00_AfCvy5yGrAjqnx5H1hH34BlfLFZ2orqGeRjIL7ZC7kEAQg&oe=650940C4" alt="">
    </tr>
   </table>

   <h4>Adicionalmente, aprovechamos este correo para recordarte que tu salud 
    y tu bienestar es lo mas importante para nosotros, por eso hemos incluido 
    un archivo adjunto con todas las normas de uso, higiene y cuidado para tus lentes noxCR.
    Por favor, descárgalo y leelo cuidadosamente antes de usar el producto y, si tienes cualquier pregunta, 
    sugerencia o inquietud, no dudes en contactarnos por cualquiera de 
    nuestras redes sociales, nuestro <a href="http://wa.me/50684993726">wasapp</a> o por correo a noxcrlentes@gmail.com </h4>


   

  
     
    <p>Gracias por confiar en NoxCR</p>
</body>
</html>