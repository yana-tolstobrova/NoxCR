<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Lente natural de cuarzo jade',
            'quantity' => 10,
            'price' => 20000.00,
            'collection' => 'Natural',
            'color' => 'Verde',
            'image' => 'https://media.istockphoto.com/id/483596343/es/foto/extreme-close-up-of-compuesto-digital-de-ojos.jpg?s=2048x2048&w=is&k=20&c=1FnCN635J8DPV1AMBvO_512acZwVIjh7f8v-pvQE-JQ=',
            'detail' => 'Este es un producto de prueba con detalles adicionales.',
        ]);
        Product::create([
            'name' => 'Lente color azul',
            'quantity' => 5,
            'price' => 16000.00,
            'collection' => 'Natural',
            'color' => 'Azul',
            'image' => 'https://media.istockphoto.com/id/1208383718/es/foto/primer-plano-de-un-ojo-femenino-con-iris-azul.webp?s=612x612&w=is&k=20&c=67ZapEaLuAe9UeEIj8f0fLj9ZD9naiW46aGFye5oNZU=',
            'detail' => 'Este es otro producto de prueba con detalles adicionales.',
        ]);
        Product::create([
            'name' => 'Lente color gris',
            'quantity' => 5,
            'price' => 18000.00,
            'collection' => 'Natural',
            'color' => 'Gris',
            'image' => 'https://media.istockphoto.com/id/450664975/es/foto/blue-eye-macro-con-mucha-informaci%C3%B3n-aislado-en-blanco.webp?s=612x612&w=is&k=20&c=tFk9Ws50XOFVTEWmmF4qk_c3yNYyjYRTQSMYoAgHeOw=',
            'detail' => 'Este es otro producto de prueba con detalles adicionales.',
        ]);
        Product::create([
            'name' => 'Lente color gris claro',
            'quantity' => 5,
            'price' => 20000.00,
            'collection' => 'Natural',
            'color' => 'Gris',
            'image' => 'https://i0.wp.com/diariosanrafael.com.ar/wp-content/uploads/2022/10/lentes-esclerales.jpg?fit=1024%2C683&ssl=1',
            'detail' => 'Este es otro producto de prueba con detalles adicionales.',
        ]);
        Product::create([
            'name' => 'Lente color azul oscuro',
            'quantity' => 5,
            'price' => 18000.00,
            'collection' => 'Natural',
            'color' => 'Azul',
            'image' => 'https://media.istockphoto.com/id/1139654622/es/foto/alta-tecnolog%C3%ADa-en-el-futuro-ojo-de-mujer-joven-y-concepto-de-alta-tecnolog%C3%ADa-pantalla-de.webp?s=612x612&w=is&k=20&c=7TUUu86BTwdX-ruxk-5qKyYWXxNlNtTIxZJyHxNuN6w=',
            'detail' => 'Este es otro producto de prueba con detalles adicionales.',
        ]);
        Product::create([
            'name' => 'Lente color verde',
            'quantity' => 5,
            'price' => 18000.00,
            'collection' => 'Natural',
            'color' => 'Verde',
            'image' => 'https://media.istockphoto.com/id/1369558934/es/foto/retrato-de-mujer-rubia-natural-con-pecas-y-pelo-largo-chica-mirando-a-la-c%C3%A1mara.webp?s=612x612&w=is&k=20&c=ltoVhIM5e9rzFULyO-g3IRrMHOWeSNIfD_0C2uEnN98=',
            'detail' => 'Este es otro producto de prueba con detalles adicionales.',
        ]);
        Product::create([
            'name' => 'Lente colección crazzy',
            'quantity' => 5,
            'price' => 25000.00,
            'collection' => 'Crazzy',
            'color' => 'Azul',
            'image' => 'https://media.istockphoto.com/id/1464101157/es/foto/jovencita-poniendo-colirios.webp?s=612x612&w=is&k=20&c=KehRwY8DPLBVpGkz633KteqqLkXw4PsdYVbShsgc-HA=',
            'detail' => 'Este es otro producto de prueba con detalles adicionales.',
        ]);
        Product::create([
            'name' => 'Lente colección crazzy',
            'quantity' => 5,
            'price' => 25000.00,
            'collection' => 'Crazzy',
            'color' => 'Azul',
            'image' => 'https://media.istockphoto.com/id/1322220448/es/foto/ojo-futurista-digital-abstracto.webp?s=612x612&w=is&k=20&c=pLk88p8-Y7T2-Yv2FjD2RemhFP_Py67rMWn2HlUV_Z0=',
            'detail' => 'Este es otro producto de prueba con detalles adicionales.',
        ]);
        Product::create([
            'name' => 'Lente colección crazzy',
            'quantity' => 5,
            'price' => 35000.00,
            'collection' => 'Crazzy',
            'color' => 'Marron',
            'image' => 'https://oftalmologiaofa.com/wp-content/uploads/2018/08/lentes-esclerales2.jpg',
            'detail' => 'Este es otro producto de prueba con detalles adicionales.',
        ]);
        Product::create([
            'name' => 'Lente colección esclera',
            'quantity' => 5,
            'price' => 25000.00,
            'collection' => 'Esclera',
            'color' => 'Azul',
            'image' => 'https://media.istockphoto.com/id/467101670/es/foto/detalle-del-ojo-colorido-arco-iris.jpg?s=2048x2048&w=is&k=20&c=uKPTIlgACA2dDNYnfToTRX_aBKLxJVJOaauhz1ZIn30=',
            'detail' => 'Este es otro producto de prueba con detalles adicionales.',
        ]);
        Product::create([
            'name' => 'Lente colección esclera',
            'quantity' => 5,
            'price' => 25000.00,
            'collection' => 'Esclera',
            'color' => 'Azul',
            'image' => 'https://media.istockphoto.com/id/1545390915/es/foto/el-retrato.jpg?s=2048x2048&w=is&k=20&c=X-D2pYxEInkoiS9z8eC9vIk5CTepVwIOLsge-Mz4jJk=',
            'detail' => 'Este es otro producto de prueba con detalles adicionales.',
        ]);
        Product::create([
            'name' => 'Lente colección esclera',
            'quantity' => 5,
            'price' => 60000.00,
            'collection' => 'Esclera',
            'color' => 'Negro',
            'image' => 'https://p.globalsources.com/IMAGES/PDT/B1183678931/Contactos-esclerotica.jpg',
            'detail' => 'Este es otro producto de prueba con detalles adicionales.',
        ]);
        Product::create([
            'name' => 'Lente colección esclera',
            'quantity' => 5,
            'price' => 50000.00,
            'collection' => 'Esclera',
            'color' => 'Negro',
            'image' => 'https://m.media-amazon.com/images/I/51i3ecR6SnL.jpg',
            'detail' => 'Este es otro producto de prueba con detalles adicionales.',
        ]);

    }
}


// php artisan db:seed --class=ProductsTableSeeder
