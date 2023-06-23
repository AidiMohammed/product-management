<?php

namespace App\Http\Controllers;

use App\Http\Requests\FilterRequest;
use App\Http\Requests\ProductRequest;
use App\Http\Requests\SearchProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Image;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $products = Product::where('user_id',$request->user()->id)->paginate($request->input('perpage'));

        return ProductResource::collection($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(User $user,ProductRequest $request)
    {
       $user = User::findOrFail($request->user()->id);
        $product = $user->products()->save(Product::make([
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'quantity' => $request->input('quantity'),
            'description' => $request->input('description'),
            'user_id' => $request->user()->id,
            'enable' => $request->input('enable'),
        ]));

        return new ProductResource($product);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $this->authorize('product.user',$product);

        return new ProductResource($product);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request,Product $product)
    {    
        if(!$product)
            return response()->json(["error"=> "Not Found"],404);   
        
        $this->authorize('product.user',$product);

        $product->update($request->all());
        return new ProductResource($product);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product= Product::find($id);
        if($product)
        {
            $this->authorize('product.user',$product);
            $product->delete();
            return response()->json([]);
        }
        else
            return response()->json([
                "message" => "Product Not Found !"
            ],404);

    }

    /**
     * function research products by field
     *
     * @param SearchProductRequest $request
     * @return ProductResource
     */
    public function searchProduct(SearchProductRequest $request)
    {
        
        if($request->input('query') != '')
            $products = Product::where(strtolower($request->input('selectField')),'LIKE','%'.$request->input('query').'%')->where('user_id',$request->user()->id)->paginate($request->input('perpage'));
        else//if the query is empty returns all products of the user
            $products = Product::where('user_id',$request->user()->id)->paginate($request->input('perpage'));
        
        return ProductResource::collection($products);
    }
    
    /**
     * Undocumented function
     *
     * @param FilterRequest $request
     * @return void
     */
    public function filter(FilterRequest $request)
    {
        if($request->input('orderDesc'))
            $order = 'desc';
        else
            $order = 'asc';

        if($request->input('selectField') == 'Date')
            $field = 'created_at';
        else
            $field = strtolower($request->input('selectField'));

        $products = Product::where('user_id',$request->user()->id)->orderby($field,$order)->paginate($request->input('perPage'));

        return ProductResource::collection($products);
        
    }
}
