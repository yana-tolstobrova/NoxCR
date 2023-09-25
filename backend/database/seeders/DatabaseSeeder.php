<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ProductsTableSeeder::class,
        ]);


        //\App\Models\Product::factory(50)->create();
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call([
            ProductsTableSeeder::class,
        ]);
        $this->call([
            PermissionTableSeeder::class,
        ]);
        $this->call([
            CreateAdminUserSeeder::class,
        ]);
    }
}
