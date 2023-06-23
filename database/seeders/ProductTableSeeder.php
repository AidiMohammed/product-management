<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;

use Illuminate\Database\Seeder;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::all();
        $products = (int)$this->command->ask("How many product you want to create ??",30);
        if($products < 1)
            $this->command->info("You cannot create {$products} products by defalt 30 products will be created !");

        Product::factory($products)->make()->each(function($product,$index)use($users){
            $product->user_id = $users->random()->id;
            $product->save();   
            $this->command->info("($index) product name : $product->name");
        });
    }
}
