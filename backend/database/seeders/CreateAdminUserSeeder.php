<?php

namespace Database\Seeders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;

class CreateAdminUserSeeder extends Seeder

{

    /**

     * Run the database seeds.

     */

    public function run(): void

    {

        $user = User::create([

            'name' => 'Admin', 

            'email' => 'admin@gmail.com',

            'password' => bcrypt('123456'),

            'subscription' => false,

        ]);

        $user->assignRole('Admin');

    }

}