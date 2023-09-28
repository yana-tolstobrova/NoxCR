<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Models\User;

class RoleAndPermissionSeeder extends Seeder
{
    
    public function run(): void
    {
        // Permission::create(['name' => 'product-create']);
        // Permission::create(['name' => 'product-edit']);
        // Permission::create(['name' => 'product-delete']);

        $adminRole = Role::create(['name' => 'Admin']);
        $userRole = Role::create(['name' => 'User']);

        // $adminRole->givePermissionTo([
        //     'create-travels',
        //     'edit-travels',
        //     'delete-travels',
        //     'like-travels',
        // ]);

        $adminRole->givePermissionTo([
            'product-create',
 
            'product-edit',
 
            'product-delete'
        ]);
    }
}
