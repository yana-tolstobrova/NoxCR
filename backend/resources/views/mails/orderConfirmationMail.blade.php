<!DOCTYPE html>
<html>
<head>
    <title>NoxCR.com</title>
</head>
<body>
    <h1>Confirmación de orden de compra</h1>
    <p>Tu compra se ha realizado exitosamente. Estos son los datos de tu transacción:</p>

    <ul>
        <li>{{ $mailData['pedido'] }} </li>
        <li> {{ $mailData['producto'] }}</li>
        <li> {{ $mailData['cantidad'] }}</li>
        <li> {{ $mailData['precio'] }}</li>
        <li> {{ $mailData['total'] }}</li>
    </ul>
  
     
    <p>Gracias por confiar en NoxCR</p>
</body>
</html>