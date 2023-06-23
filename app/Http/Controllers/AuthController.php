<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Requests\UpdateProfileRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use LDAP\Result;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->only('logout','updateProfile');
    }
    public function login(AuthRequest $request){
        $user = User::where('email',$request->email)->first();
        if(!$user||!Hash::check($request->password,$user->password))
        {
            throw ValidationException::withMessages([
                'message' => ['The provided credentials are incorrect.'],
            ]);

        }
        return response()->json(['auth_token' => $user->createToken('api_tken')->plainTextToken,'user' => new UserResource($user)]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([]);
    }

    public function register(RegisterRequest $request)
    {
        $user = new User();
        $request['password'] = Hash::make($request->password);
        $user->create($request->all());

        return response()->json([
            "message" => "user created",
        ]);
    }

    public function updateProfile(UpdateProfileRequest $request)
    {
        $request->user()->update($request->all());
        return new UserResource($request->user());
    }
  
    

}

