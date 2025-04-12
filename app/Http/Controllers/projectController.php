<?php

namespace App\Http\Controllers;

use App\Models\projects;
use Illuminate\Http\Request;

class projectController extends Controller
{
    public function index(){
        $projects = projects::all();
        return response()->json($projects);


    }
}
