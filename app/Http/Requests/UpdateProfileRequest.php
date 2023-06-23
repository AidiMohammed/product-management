<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email'=> 'bail|required|email:rfc,dns',
            'name'=> 'bail|required|min:4|max:30',
            'about'=> 'bail|max:1024',
            'hobbies'=> 'bail|max:250',
            'first_name'=> 'bail|max:100',
            'last_name'=> 'bail|max:100',
            'user_name'=> 'bail|max:100|required'
        ];
    }
}
