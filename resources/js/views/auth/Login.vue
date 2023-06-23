 <template lang="">

<!-- Start wrapper-->
<div id="wrapper ">
	<Loding v-if="loding"/>
	
	<div v-else class="card card-authentication1 mx-auto my-5">

		<div class="card-body">
			<div class="card-content p-2">
				<div class="card-title text-uppercase text-center py-3">Sign In</div>
				<form @submit.prevent="login(data)">
					<div class="form-group">
						<label for="exampleInputUsername" class="sr-only">Email</label>
						<div class="position-relative has-icon-right">
							<input v-model="data.email" type="text" id="exampleInputUsername" class="form-control input-shadow" placeholder="Enter Username">
							<div class="form-control-position">
								<i class="icon-user"></i>
							</div>
						</div>
					</div>
					<div class="form-group">
					<label for="exampleInputPassword" class="sr-only">Password</label>
					<div class="position-relative has-icon-right">
						<input v-model="data.password" type="password" id="exampleInputPassword" class="form-control input-shadow" placeholder="Enter Password">
						<div class="form-control-position">
							<i class="icon-lock"></i>
						</div>
					</div>
					</div>
					<div class="form-row">
						<div class="form-group col-6">
							<div class="icheck-material-white">
								<input type="checkbox" id="user-checkbox" checked="" />
								<label for="user-checkbox">Remember me</label>
							</div>
						</div>
						<div class="form-group col-6 text-right">
							<a href="reset-password.html">Reset Password</a>
						</div>
					</div>
					<button type="submit" class="btn btn-light btn-block">Sign In</button>
				</form>
			</div>
		</div>
		<div class="card-footer text-center py-3">
		    <p class="text-warning mb-0">Do not have an account? <router-link :to="{name: 'register'}"> Sign Up here</router-link></p>
		</div>
	</div>
</div>

</template>

 <script>
import {mapActions,mapGetters} from 'vuex';
 export default {
	data(){
		return{
			data:{
				email: null,
				password: null 
			}
		}
	},
	methods: {
		...mapActions({'login': 'login'})
	},
	computed:{
		...mapGetters({'loding':'getLoding','user':'getUser'})
	},
	mounted() {
		if(this.user)
			this.$router.push({name: 'Dashboard'});
	}
	
 }
 </script>

 <style scoped>
    i{
      color: rgb(20, 19, 19) ;
      font-weight: 700;
    }

 </style>