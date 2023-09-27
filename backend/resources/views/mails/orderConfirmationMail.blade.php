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

<body font-family = 'Noto Sans'>
    <img width="150rem" class="logo" src="{{asset('storage/images/Nox.jpg')}}" alt="logo">

    <h1>Confirmación de orden de compra</h1>

    <p> Resumen de pedido:</p>

    
         <ul>
         <li> Precio Total: {{ $order->price }}</li>
         <li> Precio Total: {{ $order->price }}</li>
         <li> Precio Total: {{ $order->price }}</li>
        <li> Precio Total: {{ $order->price }}</li>
        </ul>

    
   <h4>Adicionalmente, aprovechamos este correo para recordarte que la salud 
    y bienestar de tu vista es lo primordial para NoxCR!
    Por eso te recomendamos que, antes de recibir tu pedido, hagas <a href="/cuidados-nox.pdf" target="_blank" rel="noopener noreferrer"
          download= "cuidados-noxcr.pdf"> click AQUI </a>  para que descargar y leer cuidadosamente
    todas las normas de uso, higiene y mantenimiento de tus lentes de contacto noxCR.
    
    Si tienes cualquier pregunta,sugerencia o inquietud, no dudes en contactarnos por cualquiera de 
    nuestras redes sociales, nuestro <a href="http://wa.me/50684993726" target="_blank">wasapp</a> o por correo a noxcrlentes@gmail.com </h4>

     
    <p>Gracias por confiar en NoxCR!!</p>
    <img src="" alt="">
</body>
</html>