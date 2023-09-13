<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación de Compra</title>
</head>
<body>
    <h1>Confirmación de Compra</h1>

    <p>¡Gracias por tu compra en nuestra tienda en línea!</p>

    <p>Detalles de la compra:</p>
    <ul>
        <li>Producto: {{ $order->product_name }}</li>
        <li>Precio: ${{ $order->product_price }}</li>
        <li>Cantidad: {{ $order->quantity }}</li>
        <li>Total: ${{ $order->total }}</li>
    </ul>

    <p>Fecha de compra: {{ $order->created_at }}</p>

    <p>Te enviaremos otro correo cuando tu pedido sea enviado.</p>

    <p>¡Gracias por elegir nuestra tienda!</p>

    <p>Atentamente,<br>
    Tu Tienda en Línea</p>
</body>
</html>
