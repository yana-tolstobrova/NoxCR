<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\UserDetails;


class UserDetailsController extends Controller
{
    public function index()
    {
        $userDetails = UserDetails::all();
        $userDetailsInfo = [];
    
        foreach ($userDetails as $userDetail) {
            $userDetailInfo = [
                'user_id' => $userDetail->user_id,
                'name_complete'=> $userDetail->name_complete,
                'cedula'=> $userDetail->cedula,
                'address' => $userDetail->address,
                'birth_date' => $userDetail->birth_date, 
                'phone' => $userDetail->phone,
            ];
    
            $userDetailsInfo[] = $userDetailInfo;
        }
    
        return response()->json(['user-details' => $userDetailsInfo]);
    }
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
                'name_complete'=> 'required|string|max:255',
                'cedula'=> 'required|string|max:255',
                'address' => 'required|string|max:255',
                'birth_date' => 'required|date', 
                'phone' => 'required|string|max:20',
            ]);

            $userDetails = UserDetails::create([
                'user_id' => $user->id,
                'name_complete'=> $request->name_complete,
                'cedula'=> $request->cedula,
                'address' => $request->address,
                'birth_date' => $request->birth_date, 
                'phone' => $request->phone,
            ]);

            return response()->json(['success' => true, 'data' => $userDetails]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }

}
