<?php

namespace App\Http\Controllers;

use App\Models\projects;
use App\Models\skills;
use App\Models\User;
use Illuminate\Http\Request;

class userController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }
}
