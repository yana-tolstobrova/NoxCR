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
        $user = Auth::user();
        if (!$user->hasRole('Admin')) {
                return response()->json(['error' => 'No tienes permiso para ver todos los usuarios.'], 403);
        } 
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
    
    //      public function show($id)
    //      {
    //           $user = User::findOrFail($id);
    //           return response()->json(['user' => $user], 200);
    //      }
    
    //     public function edit($id){
    //     $user = User::findOrFail($id);
    
    //     return response()->json(['user' => $user], 200);
    // }
    
    
    public function update(Request $request, $id)
    {

        $user = User::findOrFail($id);
    
        $this->validate($request, [
            'email' => 'required|email|unique:users,email,' . $id,
            'password' => 'nullable', 
        ]);
    
        $input = [
            'email' => $request->input('email'),
        ];
        
        if (!empty($request->input('password'))) {
            $input['password'] = Hash::make($request->input('password'));
        }
    
        $user->update($input);
    
        return response()->json(['message' => 'User updated successfully'], 200);
    }
    
        public function destroy(Request $request, $id)
        {
            $user = Auth::user();
            
            if (!$user->hasRole('User')) {
                    return response()->json(['error' => 'No tienes permiso para eliminar la cuenta.'], 403);
            }  

            if ((int)$id !== (int)Auth::id()) {
                return response()->json(['error' => 'No tienes permiso para eliminar esta cuenta.'], 403);
            }
            $user = User::findOrFail($id);
            $user->delete();
            $request->user()->currentAccessToken()->delete();

            $cookie = cookie()->forget('token');
    
            return response()->json(['message' => 'User deleted successfully'], 200)->withCookie($cookie);
        }

 }
