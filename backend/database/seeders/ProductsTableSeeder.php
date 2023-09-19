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
            'category' => 'Lentes de Contacto',
            'quantity' => 10,
            'price' => 20000,
            'collection' => 'Natural',
            'color' => 'Verde',
            'image' => 'https://media.istockphoto.com/id/483596343/es/foto/extreme-close-up-of-compuesto-digital-de-ojos.jpg?s=2048x2048&w=is&k=20&c=1FnCN635J8DPV1AMBvO_512acZwVIjh7f8v-pvQE-JQ=',
            'detail' => 'El verde jade ofrece un matiz de verde exquisito que aporta profundidad y misterio a tus ojos. Se adapta a una amplia gama de tonos de piel y estilos, desde lo cotidiano hasta lo más glamoroso. Fabricados con materiales de silicona de alta calidad, estos lentes son suaves, flexibles y cómodos de llevar durante 10horas. La silicona permite una transmisión óptima del oxígeno a tus ojos, manteniéndolos frescos y saludables, será como si no los sintieras.',
        ]);
        Product::create([
            'name' => 'Lente color azul',
            'category' => 'Lentes de Contacto',
            'quantity' => 5,
            'price' => 16000,
            'collection' => 'Natural',
            'color' => 'Azul',
            'image' => 'https://media.istockphoto.com/id/1208383718/es/foto/primer-plano-de-un-ojo-femenino-con-iris-azul.webp?s=612x612&w=is&k=20&c=67ZapEaLuAe9UeEIj8f0fLj9ZD9naiW46aGFye5oNZU=',
            'detail' => 'Experimenta un cambio impactante en tu apariencia con nuestros Lentes de Contacto de Silicona en un deslumbrante y profundo tono de azul. Estos lentes no solo realzarán tus ojos, sino que también te sumergirán en un océano de elegancia y estilo.Nuestros lentes están hechos de silicona de alta calidad que proporciona una comodidad excepcional. La silicona permite una transpiración adecuada de tus ojos, manteniéndolos frescos y saludables.',
        ]);
        Product::create([
            'name' => 'Lente color gris',
            'category' => 'Lentes de Contacto',
            'quantity' => 5,
            'price' => 18000,
            'collection' => 'Natural',
            'color' => 'Gris',
            'image' => 'https://media.istockphoto.com/id/450664975/es/foto/blue-eye-macro-con-mucha-informaci%C3%B3n-aislado-en-blanco.webp?s=612x612&w=is&k=20&c=tFk9Ws50XOFVTEWmmF4qk_c3yNYyjYRTQSMYoAgHeOw=',
            'detail' => 'Descubre la sofisticación y la versatilidad con nuestros Lentes de Contacto de Silicona en un elegante y atemporal color gris. Estos lentes no solo realzan tus ojos, sino que también te permiten expresar tu estilo con confianza y distinción. Con un diseño de borde delgado, estos lentes se insertan y se retiran de manera sencilla. Son adecuados tanto para usuarios experimentados como para principiantes.',
        ]);
        Product::create([
            'name' => 'Lente color gris claro',
            'category' => 'Lentes de Contacto',
            'quantity' => 5,
            'price' => 20000,
            'collection' => 'Natural',
            'color' => 'Gris',
            'image' => 'https://i0.wp.com/diariosanrafael.com.ar/wp-content/uploads/2022/10/lentes-esclerales.jpg?fit=1024%2C683&ssl=1',
            'detail' => ' El color gris es un clásico que nunca pasa de moda. Aporta un toque de seriedad y misterio a tu mirada, lo que lo convierte en una elección ideal tanto para ocasiones formales como informales.os lentes están diseñados para proporcionar una visión nítida y sin distorsiones. Ya sea que los uses para corregir tu visión o para un cambio de estilo, disfrutarás de una visión excepcional en todo momento.',
        ]);
        Product::create([
            'name' => 'Lente color azul oscuro',
            'category' => 'Lentes de Contacto',
            'quantity' => 5,
            'price' => 18000,
            'collection' => 'Natural',
            'color' => 'Azul',
            'image' => 'https://media.istockphoto.com/id/1139654622/es/foto/alta-tecnolog%C3%ADa-en-el-futuro-ojo-de-mujer-joven-y-concepto-de-alta-tecnolog%C3%ADa-pantalla-de.webp?s=612x612&w=is&k=20&c=7TUUu86BTwdX-ruxk-5qKyYWXxNlNtTIxZJyHxNuN6w=',
            'detail' => 'Este deslumbrante tono de azul te brinda una mirada profunda y misteriosa. Es una elección perfecta para quienes desean llamar la atención y destacar en cualquier ocasión.Los lentes de contacto de silicona son resistentes y duraderos, lo que significa que te acompañarán con confiabilidad a lo largo de tu día.',
        ]);
        Product::create([
            'name' => 'Lente color verde',
            'category' => 'Lentes de Contacto',
            'quantity' => 5,
            'price' => 18000,
            'collection' => 'Natural',
            'color' => 'Verde',
            'image' => 'https://media.istockphoto.com/id/1369558934/es/foto/retrato-de-mujer-rubia-natural-con-pecas-y-pelo-largo-chica-mirando-a-la-c%C3%A1mara.webp?s=612x612&w=is&k=20&c=ltoVhIM5e9rzFULyO-g3IRrMHOWeSNIfD_0C2uEnN98=',
            'detail' => ' Los lentes verdes se adapta a una amplia gama de tonos de piel y estilos, desde lo cotidiano hasta lo más glamoroso. Los lentes de contacto de silicona son duraderos y resistentes al desgaste diario, lo que los convierte en una inversión confiable en tu apariencia y comodidad visual.',
        ]);
        Product::create([
            'name' => 'Lente colección crazzy',
            'category' => 'Lentes de Contacto',
            'quantity' => 5,
            'price' => 25000,
            'collection' => 'Crazy',
            'color' => 'Azul',
            'image' => 'https://media.istockphoto.com/id/1464101157/es/foto/jovencita-poniendo-colirios.webp?s=612x612&w=is&k=20&c=KehRwY8DPLBVpGkz633KteqqLkXw4PsdYVbShsgc-HA=',
            'detail' => '¡Prepárate para una experiencia visual completamente única y divertida con nuestros Lentes de Contacto Crazy! Estos lentes extravagantes están diseñados para llevar tu estilo y creatividad al siguiente nivel, permitiéndote expresarte de manera audaz y original.Nuestra colección de Lentes de Contacto Crazy ofrece una amplia variedad de diseños y patrones únicos que van desde colores intensos hasta motivos impresionantes. Puedes encontrar opciones que se adaptan a cualquier ocasión o disfraz.Estos lentes son perfectos para eventos especiales, fiestas temáticas, disfraces de Halloween o simplemente para añadir un toque de diversión a tu rutina diaria. ',
        ]);
        Product::create([
            'name' => 'Lente colección crazzy',
            'category' => 'Lentes de Contacto',
            'quantity' => 5,
            'price' => 25000,
            'collection' => 'Crazy',
            'color' => 'Azul',
            'image' => 'https://media.istockphoto.com/id/1322220448/es/foto/ojo-futurista-digital-abstracto.webp?s=612x612&w=is&k=20&c=pLk88p8-Y7T2-Yv2FjD2RemhFP_Py67rMWn2HlUV_Z0=',
            'detail' => '¡Prepárate para una experiencia visual completamente única y divertida con nuestros Lentes de Contacto Crazy! Estos lentes extravagantes están diseñados para llevar tu estilo y creatividad al siguiente nivel, permitiéndote expresarte de manera audaz y original.Nuestra colección de Lentes de Contacto Crazy ofrece una amplia variedad de diseños y patrones únicos que van desde colores intensos hasta motivos impresionantes. Puedes encontrar opciones que se adaptan a cualquier ocasión o disfraz.Estos lentes son perfectos para eventos especiales, fiestas temáticas, disfraces de Halloween o simplemente para añadir un toque de diversión a tu rutina diaria. ',
        ]);
        Product::create([
            'name' => 'Lente colección crazzy',
            'category' => 'Lentes de Contacto',
            'quantity' => 5,
            'price' => 35000,
            'collection' => 'Crazy',
            'color' => 'Marron',
            'image' => 'https://oftalmologiaofa.com/wp-content/uploads/2018/08/lentes-esclerales2.jpg',
            'detail' => '¡Prepárate para una experiencia visual completamente única y divertida con nuestros Lentes de Contacto Crazy! Estos lentes extravagantes están diseñados para llevar tu estilo y creatividad al siguiente nivel, permitiéndote expresarte de manera audaz y original.Nuestra colección de Lentes de Contacto Crazy ofrece una amplia variedad de diseños y patrones únicos que van desde colores intensos hasta motivos impresionantes. Puedes encontrar opciones que se adaptan a cualquier ocasión o disfraz.Estos lentes son perfectos para eventos especiales, fiestas temáticas, disfraces de Halloween o simplemente para añadir un toque de diversión a tu rutina diaria. ',
        ]);
        Product::create([
            'name' => 'Lente colección esclera',
            'category' => 'Lentes de Contacto',
            'quantity' => 5,
            'price' => 25000,
            'collection' => 'Sclera',
            'color' => 'Azul',
            'image' => 'https://media.istockphoto.com/id/467101670/es/foto/detalle-del-ojo-colorido-arco-iris.jpg?s=2048x2048&w=is&k=20&c=uKPTIlgACA2dDNYnfToTRX_aBKLxJVJOaauhz1ZIn30=',
            'detail' => 'Bienvenido al mundo de la fantasía y el asombro con nuestros Lentes de Contacto Sclera. Estos lentes extremadamente impactantes y versátiles están diseñados para transformar por completo tu mirada y transportarte a mundos de ensueño y creatividad. A pesar de su apariencia llamativa, nuestros Lentes de Contacto Sclera están fabricados con materiales de alta calidad y son seguros para su uso. La comodidad es una prioridad para que puedas disfrutar de tu transformación sin preocupaciones.',
        ]);
        Product::create([
            'name' => 'Lente colección esclera',
            'category' => 'Lentes de Contacto',
            'quantity' => 5,
            'price' => 25000,
            'collection' => 'Sclera',
            'color' => 'Azul',
            'image' => 'https://media.istockphoto.com/id/1545390915/es/foto/el-retrato.jpg?s=2048x2048&w=is&k=20&c=X-D2pYxEInkoiS9z8eC9vIk5CTepVwIOLsge-Mz4jJk=',
            'detail' => 'Bienvenido al mundo de la fantasía y el asombro con nuestros Lentes de Contacto Sclera. Estos lentes extremadamente impactantes y versátiles están diseñados para transformar por completo tu mirada y transportarte a mundos de ensueño y creatividad. A pesar de su apariencia llamativa, nuestros Lentes de Contacto Sclera están fabricados con materiales de alta calidad y son seguros para su uso. La comodidad es una prioridad para que puedas disfrutar de tu transformación sin preocupaciones.',
        ]);
        Product::create([
            'name' => 'Lente colección esclera',
            'category' => 'Lentes de Contacto',
            'quantity' => 5,
            'price' => 60000,
            'collection' => 'Sclera',
            'color' => 'Negro',
            'image' => 'https://p.globalsources.com/IMAGES/PDT/B1183678931/Contactos-esclerotica.jpg',
            'detail' => 'Bienvenido al mundo de la fantasía y el asombro con nuestros Lentes de Contacto Sclera. Estos lentes extremadamente impactantes y versátiles están diseñados para transformar por completo tu mirada y transportarte a mundos de ensueño y creatividad. A pesar de su apariencia llamativa, nuestros Lentes de Contacto Sclera están fabricados con materiales de alta calidad y son seguros para su uso. La comodidad es una prioridad para que puedas disfrutar de tu transformación sin preocupaciones.',
        ]);
        Product::create([
            'name' => 'Lente colección esclera',
            'category' => 'Lentes de Contacto',
            'quantity' => 5,
            'price' => 50000,
            'collection' => 'Sclera',
            'color' => 'Negro',
            'image' => 'https://m.media-amazon.com/images/I/51i3ecR6SnL.jpg',
            'detail' => 'Bienvenido al mundo de la fantasía y el asombro con nuestros Lentes de Contacto Sclera. Estos lentes extremadamente impactantes y versátiles están diseñados para transformar por completo tu mirada y transportarte a mundos de ensueño y creatividad. A pesar de su apariencia llamativa, nuestros Lentes de Contacto Sclera están fabricados con materiales de alta calidad y son seguros para su uso. La comodidad es una prioridad para que puedas disfrutar de tu transformación sin preocupaciones.Cada diseño está cuidadosamente elaborado para capturar incluso los detalles más pequeños. Los colores y patrones son realistas y cautivadores, lo que garantiza que tu mirada se destaque con fuerza.',
        ]);

    }
}


// php artisan db:seed --class=ProductsTableSeeder
