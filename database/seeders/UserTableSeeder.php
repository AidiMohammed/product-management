<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = (int)$this->command->ask('How many users you want to create ??',10);
        if($users < 1)
        {
            $this->command->info("You cannot create {$users} user . By default 10 users will be created");
            $users = 10;
        }

        //User::factory()->count(20)->make();
        User::factory($users)->create();
    }
}
