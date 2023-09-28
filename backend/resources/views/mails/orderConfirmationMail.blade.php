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

    <h1>Confirmación de Pedido</h1>

    <h3>Datos del cliente:</h3>

    <ul>
    <li> Nombre: {{$orderData['name']}}</li>
        <li> Dirección de entrega: {{ $orderData['adress'] }}</li>
        
         <li> Nombre del Producto: {{ $orderData['product_name'] }}</li>
         <li> Cantidad: {{ $orderData['quantity']}}</li>
         <li> Precio {{ $orderData['price']}}</li>     

         <li> Nombre del Producto: {{ $orderData['product_name'] }}</li>
         <li> Cantidad: {{ $orderData['quantity']}}</li>
         <li> Precio {{ $orderData['price']}}</li>   
         
         
        <li> Precio Total: {{ $orderData['total_amount']}}</li>
        </ul>


    <h4>Recuerda que previo a la aceptacion de tu pedido, has confirmado:    </h4>
    <ul>
        <li>✅Ser Mayor de edad</li>
        <li>✅Conocer los cuidados, precauciones y medidas de limpieza de tus lentes de contacto</li>
        <li>✅Tener la solución multipropósito para desinfectarlos adecuadamente?</li>
          
    </ul>
        
   <h4> Adicionalmente, aprovechamos este correo para recordarte que la salud 
    y bienestar de tu vista es lo primordial para NoxCR!  Por eso te recomendamos que, antes de recibir tu pedido, hagas <a href="/cuidados-nox.pdf" target="_blank" rel="noopener noreferrer"
          download= "cuidados-noxcr.pdf"> click AQUI </a>  para que descargar y leer cuidadosamente
    todas las normas de uso, higiene y mantenimiento de tus lentes de contacto noxCR.
    
    Si tienes cualquier pregunta,sugerencia o inquietud, no dudes en contactarnos por cualquiera de 
    nuestras redes sociales, nuestro <a href="http://wa.me/50684993726" target="_blank">wasapp</a> o por correo a noxcrlentes@gmail.com </h4>

     
    <p>Gracias por confiar en NoxCR!!</p>
    
</body>
</html>