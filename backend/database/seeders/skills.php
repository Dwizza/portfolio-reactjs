<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class skills extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('skills')->insert([
            'name' => 'PHP',
            'description' => 'A popular general-purpose scripting language that is especially suited to web development.',
        ]);

        \DB::table('skills')->insert([
            'name' => 'JavaScript',
            'description' => 'A programming language that conforms to the ECMAScript specification.',
        ]);

        \DB::table('skills')->insert([
            'name' => 'Python',
            'description' => 'An interpreted, high-level and general-purpose programming language.',
        ]);
    }
}
