<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=> $this->id,
            'email'=> $this->email,
            'name' => $this->name,
            'status' => $this->enable,
            'created' => $this->created_at,
            'about' => $this->about,
            'hobbies' => $this->hobbies,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'web_site' => $this->wed_site,
            'street' => $this->street,
            'city' => $this->city,
            'state' => $this->state,
            'user_name' => $this->user_name
        ];
    }
}
