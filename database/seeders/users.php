<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class users extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'oussama errahili',
            'email' => 'oussamaerrahili124@gmail.com',
            'password' => '00000000',
            'profile_picture' => 'https://example.com/profile.jpg',
            'bio' => 'Software developer with a passion for coding.',
            'location' => 'Morocco',
            'phone' => '+212 123456789',
            'cv_url' => 'https://example.com/cv.pdf',
            'github_url' => 'https://github.com/Dwizza',
            'linkedin_url' => 'https://www.linkedin.com/in/oussama-errahili-280553331/',
        ]);
    }
}
