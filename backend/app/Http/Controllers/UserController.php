<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('checkUserRole');
          } 

    public function index(Request $request)
    {  
        $users = User::all();
        $usersInfo = [];
    
        foreach ($users as $user) {
            $userInfo = [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'subscription' => $user->subscription,
                'created_at' => $user->created_at,
            ];
    
            $usersInfo[] = $userInfo;
        }
    
        return response()->json(['users' => $usersInfo]);
    }

 }
