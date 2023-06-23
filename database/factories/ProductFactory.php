<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'price' => rand(30,150),
            'quantity' => rand(10,200),
            'description' => $this->faker->realText(),
            'enable' => rand(0,1),
            'created_at'=> $this->faker->dateTimeBetween('-2 days')
        ];
    }
}
