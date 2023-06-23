<template lang="">

	<div v-if="countProducts == 0" class="row mt-3 ">
		<div class="col-6 col-ld-6 mx-auto">

			<div class="alert alert-warning text-center py-3" role="alert">
				List products empty <router-link :to="{name: 'create-product'}" style="color: black" class="alert-link px-3">click here</router-link>. to add a new product.
			</div>

			<div class="text-center my-auto">
				<img src="assets/images/empty-List.svg" alt="list empty" width="450">
			</div>

		</div>
	</div>

	<div v-else class="row mt-3">
		<div class="col-12 col-lg-12">
			<div class="card">
				<!--Start Header Card-->
				<div class="d-flex justify-content-between py-2">
					<div class="d-flex">
						<div class="card-header">List products</div>
						<div class="dropdown my-auto mx-3">
							<a class="btn btn-sm btn-info dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
							filtered By {{filteredBy}}
							</a>
							<div class="dropdown-menu">
							<button @click="selectFilter($event)" class="dropdown-item">Name</button>
							<button @click="selectFilter($event)" class="dropdown-item">Quantity</button>
							<button @click="selectFilter($event)" class="dropdown-item">Price</button>
							<button @click="selectFilter($event)" class="dropdown-item">Date</button>
							<button @click="selectFilter($event)" class="dropdown-item">Description</button>
							</div>
						</div>

						<div class='my-auto filter' @click="filter">
							<i v-if="filterDesc" class="bi bi-sort-alpha-down "></i>
							<i v-else class="bi bi-sort-alpha-up"></i>
						</div>

						<div class="my-auto d-flex">
							<div class="search-bar">
								<input v-model="keyWord" type="text" class="form-control" :placeholder="placeHolder">
								<i class="icon-magnifier"></i>
							</div>
							<div class="dropdown mx-3">
								<a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
								Serach By {{searchBy}}
								</a>

								<div class="dropdown-menu">
								<button @click="selectSearch($event)" class="dropdown-item">Name</button>
								<button @click="selectSearch($event)" class="dropdown-item">Quantity</button>
								<button @click="selectSearch($event)" class="dropdown-item">Price</button>
								<button @click="selectSearch($event)" class="dropdown-item">Description</button>
								</div>
							</div>
						</div>

						<div class="my-1 mx-3">
							<Loding v-if="loding"/>
						</div>
					</div>

					<div class="card-action  my-auto mx-3">
             			<div class="dropdown">
             				<a href="javascript:void();" class="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
              					<i class="icon-options"></i>
             				</a>
              				<div class="dropdown-menu dropdown-menu-right">
              					<button class="dropdown-item" @click="setperPage(10)">10 per Page</button>
              					<button class="dropdown-item" @click="setperPage(20)">20 per Page</button>
               				</div>
              			</div>
            		</div>

				</div><!--End Header Card-->

				<!--Sart Tabel-->
				<div class="table-responsive">
					<table class="table align-items-center table-flush table-borderless">
						<thead>
							<tr>
								<th>Name</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>created</th>
								<th>Description</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<Product v-for="product in products" :product="product" @deleteProduct="deleteProduct($event)"/>
						</tbody>
					</table>
					<Bootstrap4Pagination class="mt-3 mr-3" align="right" :data="pagination" @pagination-change-page="getResults({page:$event,token:user.token,perPage:perPage})"/>
				</div><!--End Tabel-->
				<div v-if="products.length == 0" class="text-center my-auto">
					<img src="assets/images/empty-List.svg" alt="list empty" width="450">
				</div>
	   		</div>
	 	</div>
	</div><!--End Row-->
	<ConfirmationDeletProduct :id="idProduct"/><!--Modal confirmation delet product-->

</template>

<script>
import Product from './Product';
import ConfirmationDeletProduct from './ConfirmationDeletProduct.vue';
import { Bootstrap4Pagination } from 'laravel-vue-pagination';
import {mapGetters,mapActions} from 'vuex'

export default {
	data(){
		return{
			idProduct: null,
			perPage: 10,
			filteredBy: 'Name',
			filterDesc: true,
			keyWord: "",
       	 	searchBy:"Name",
        	placeHolder:"Search Product By Name"
		}
	},
    components:{
			Product,
			ConfirmationDeletProduct,
			Bootstrap4Pagination
		},
	methods:{
		...mapActions({
			'getResults':'changePage',
			'filterProduts':'filterProduts',
			'search':'searchProduct'
		}),
		deleteProduct(id){
			this.idProduct = id;
		},
		setperPage(val){
			this.perPage = val;
			this.getResults({page:1,token:this.user.token,perPage:this.perPage});
			
		},
		selectFilter(e){

			this.filterDesc = !this.filterDesc;
			this.filteredBy = e.target.innerHTML;
			this.filter();
		},
		filter()
		{
			this.filterDesc = !this.filterDesc;

			this.filterProduts({
				seletField: this.filteredBy,
				orderDesc: this.filterDesc,
				parPage: this.perPage,
				token: this.user.token
			})
		},
		selectSearch(e)
		{
			this.keyWord = "";
			this.searchBy = e.target.innerHTML;
			this.placeHolder = `Serach Product By ${this.searchBy}`;
		},
		
	},
	computed:{
		...mapGetters({
			'products':'getProducts',
			'loding':'getLodingSearch',
			'user':'getUser',
			'pagination':'getPagination',
			'countProducts':'getCountProduts'
		}),
	},
	watch:{
      keyWord: function(val)
      {
          this.search({
            val:val,
            select:this.searchBy,
            token:this.user.token
          });
      }
    },
}
</script>

<style scoped>
    th{
        text-align: center;
    };
	.alert-link{
		color: black !important;
		font-weight: 600 !important;
	}
	.filter{
		font-size: 17px;
    	padding: 3px 7px;
    	cursor: pointer;
	}
	.filter:hover
	{
		background-color: #7c7c7c;
    	padding: 3px 7px;
    	border-radius: 4px;
    	color: #d9d9d9;
	}
	.card-header{
		border-bottom: 0px solid rgba(0,0,0,.125)!important;
	}

</style>