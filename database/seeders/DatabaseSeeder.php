<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        if($this->command->confirm("You want to refresh the database",true))
        {
            $this->command->call('migrate:refresh');
            $this->command->info('database was refreshed !');
        }
        $this->call([
            UserTableSeeder::class,
            ProductTableSeeder::class
        ]);
    }
}
