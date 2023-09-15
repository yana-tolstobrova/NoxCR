<!DOCTYPE html>
<html>
<head>
    <title>NoxCR.com</title>
</head>
<body>
    <h1>Confirmación de orden de compra</h1>

    <p></p>
    <p> Tu compra se ha realizado exitosamente!. Estos son los datos de tu transacción:</p>

    <ul>
        <li>{{ $orderData['pedido'] }} </li>
        <li> {{ $orderData['producto'] }}</li>
        <li> {{ $orderData['cantidad'] }}</li>
        <li> {{ $orderData['precio'] }}</li>
        <li> {{ $orderData['total'] }}</li>
    </ul>
  
     
    <p>Gracias por confiar en NoxCR</p>
</body>
</html>