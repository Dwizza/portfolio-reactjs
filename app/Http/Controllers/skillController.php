<?php

namespace App\Http\Controllers;

use App\Models\skills;
use Illuminate\Http\Request;

class skillController extends Controller
{
    public function index(){
        $skills = skills::all();
        return response()->json($skills);
    }
}
