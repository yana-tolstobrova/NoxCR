<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckUserRole
{
    // public function handle($request, Closure $next)
    // {
    //     if (Auth::check() && Auth::user()->hasRole('Admin')) {
    //         return $next($request);
    //     }

    //     return response()->json(['error' => 'Unauthorized. Only users with the "Admin" role can perform this action.'], 403);
    // }
}
