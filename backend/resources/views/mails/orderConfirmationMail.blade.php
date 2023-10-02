<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> NoxCR| Orden de Compra</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap" rel="stylesheet">
<style>

body {
font-family:  'Noto Sans', sans-serif;
}
</style>
</head>

<body>
    <img width="150rem" class="logo" src="{{'Nox.jpg'}}" alt="logo">

    <h2>Confirmación de Pedido</h2>

    <h4>Datos del cliente:</h4>
    <ul>
    <li>Nombre: {{$orderData['name']}}</li>
    <li>Documento de Identificación: {{$orderData['cedula']}}</li>
    <li>Dirección de entrega: {{ $orderData['address'] }}</li>
    <h4>Tipo de envío: {{ $orderData['shipping_type'] }}</h4>
    </ul>
    <h4>Recuerda que previo a la aceptacion de tu pedido, has confirmado:</h4>
    <ul>
        <li>✅Ser Mayor de edad</li>
        <li>✅Conocer los cuidados, precauciones y medidas de limpieza de tus lentes de contacto</li>
        <li>✅Tener la solución multipropósito para desinfectarlos adecuadamente</li>          
    </ul>
        
   <h4> Desde NoxCR queremos reiterarte que tu salud visual es nuestra prioridad!
   Por eso te recomendamos que -antes de recibir tu pedido- hagas <a href="/cuidados-nox.pdf" target="_blank" rel="noopener noreferrer"
          download= "cuidados-noxcr.pdf"> click AQUI </a>  para que descargar y leer cuidadosamente
    todas las normas de uso, higiene y mantenimiento de tus lentes de contacto noxCR.

    <h4>Detalle de pedido: </h4>
    <?php
    foreach (json_decode($orderData['products']) as $item)
    {?>
        <li>Categoría de Producto: {{$item->product->category}}</li>
        <li>Nombre del producto: {{$item->product->name}}</li>
        <li>Cantidad: {{$item->quantity}}</li>
        <li>Precio unitario: ₡{{$item->product->price}}</li>
        <br>
<?php
    }
    ?>  <h3>Precio Total: ₡{{$orderData['total_amount']}}</h3>
        
    Si tienes cualquier pregunta,sugerencia o inquietud, no dudes en contactarnos por cualquiera de 
    nuestras redes sociales, nuestro <a href="http://wa.me/50684993726" target="_blank">whatsapp</a> o por correo a noxcrlentes@gmail.com </h4>
    <h3>Gracias por confiar en NoxCR!!</h3>
    
</body>
</html>