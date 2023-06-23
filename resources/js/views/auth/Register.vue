<template lang="">

<div class="card card-authentication1 mx-auto my-4">
		<div class="card-body">
		 <div class="card-content p-2">
		  <div class="card-title text-uppercase text-center py-3">Sign Up</div>
		    <form @submit.prevent="register(data)">
            
			  <div class="form-group">
			  <label for="exampleInputName" class="sr-only">User name</label>
			   <div class="position-relative has-icon-right">
				  <input v-model="data.user_name" type="text" id="exampleInputName" class="form-control input-shadow" placeholder="Enter Your User name">
				  <div class="form-control-position">
					  <i class="icon-user"></i>
				  </div>
			   </div>
			  </div>

              <div class="form-group">
                <label for="exampleInputName" class="sr-only">Name</label>
                 <div class="position-relative has-icon-right">
                    <input v-model="data.name" type="text" id="exampleInputName" class="form-control input-shadow" placeholder="Enter Your Name">
                    <div class="form-control-position">
                        <i class="icon-user"></i>
                    </div>
                 </div>
                </div>

			  <div class="form-group">
			  <label for="exampleInputEmailId" class="sr-only">Email ID</label>
			   <div class="position-relative has-icon-right">
				  <input v-model="data.email" type="email" id="exampleInputEmailId" class="form-control input-shadow" placeholder="Enter Your Email ID">
				  <div class="form-control-position">
					  <i class="icon-envelope-open"></i>
				  </div>
			   </div>

			  </div>
			  <div class="form-group">
			   <label for="exampleInputPassword" class="sr-only">Password</label>
			   <div class="position-relative has-icon-right">
				  <input v-model="data.password" type="password" id="exampleInputPassword" class="form-control input-shadow" placeholder="Choose Password">
				  <div class="form-control-position">
					  <i class="icon-lock"></i>
				  </div>
			   </div>
			  </div>

              <div class="form-group">
			   <label for="exampleInputPassword" class="sr-only">Confirme Password</label>
			   <div class="position-relative has-icon-right">
				  <input v-model="data.password_confirmation" type="password" id="exampleInputPassword" class="form-control input-shadow" placeholder="Confirme Password">
				  <div class="form-control-position">
					  <i class="icon-lock"></i>
				  </div>
			   </div>
			  </div>
			  
			   <div class="form-group">
			     <div class="icheck-material-white">
                   <input type="checkbox" id="user-checkbox" checked="" />
                   <label for="user-checkbox">I Agree With Terms & Conditions</label>
			     </div>
			    </div>
			  
			 <button type="submit" class="btn btn-light btn-block waves-effect waves-light">Sign Up</button>
		
			 </form>
		   </div>
		  </div>
		  <div class="card-footer text-center py-3">
		    <p class="text-warning mb-0">Already have an account? <router-link :to="{name: 'login'}"> Sign In here</router-link></p>
		  </div>
	     </div>

</template>
<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return{
            data:{
                email:'',
                password:'',
                password_confirmation:'',
                user_name:'',
                name:''
            }
        }
    },
    methods:{
        ...mapActions({'register':'register'})
    }

}
</script>
<style lang="">
    
</style>