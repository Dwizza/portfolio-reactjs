<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class projects extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('projects')->insert([
            'title' => 'Project 1',
            'description' => 'Description of Project 1',
            'images' => 'https://example.com/image1.jpg',
            'technologies' => json_encode(['PHP', 'JavaScript']),
            'github_url' => 'https://example.com/project1',
            'user_id' => 1,

        ]);

        \DB::table('projects')->insert([
            'title' => 'Project 2',
            'description' => 'Description of Project 2',
            'images' => 'https://example.com/image1.jpg',
            'technologies' => json_encode(['PHP', 'JavaScript']),
            'github_url' => 'https://example.com/project2',
            'user_id' => 1,
        ]);
        \DB::table('projects')->insert([
            'title' => 'Project 3',
            'description' => 'Description of Project 3',
            'images' => 'https://example.com/image1.jpg',
            'technologies' => json_encode(['PHP', 'JavaScript']),
            'github_url' => 'https://example.com/project3',
            'user_id' => 1,
        ]);
    }
}
