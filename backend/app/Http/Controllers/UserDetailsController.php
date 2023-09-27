<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\UserDetails;


class UserDetailsController extends Controller
{
    public function show()
    {
        $userDetails = UserDetails::all();
        return response()->json($userDetails);
    }
    public function store(Request $request)
    {
        $user = Auth::user(); 

        try {
            $request->validate([
                'address' => 'required|string|max:255',
                'phone' => 'required|string|max:20',
                'birth_date' => 'required|date', 
            ]);

            $userDetails = UserDetails::create([
                'user_id' => $user->id,
                'address' => $request->address,
                'phone' => $request->phone,
                'birth_date' => $request->birth_date, 
            ]);

            return response()->json(['success' => true, 'data' => $userDetails]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }

}
