<template lang="">
<!--Start topbar header-->
<header class="topbar-nav">
 <nav class="navbar navbar-expand fixed-top">
  <ul class="navbar-nav mr-auto align-items-center">
    <li class="nav-item">
      <a class="nav-link toggle-menu" href="javascript:void();">
       <i class="icon-menu menu-icon"></i>
     </a>
    </li>
  </ul>
     
  <ul class="navbar-nav align-items-center right-nav-link">
    <li class="nav-item">
      <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown" href="#">
        <span class="user-profile"><img src="https://via.placeholder.com/110x110" class="img-circle" alt="user avatar"></span>
      </a>
      <ul class="dropdown-menu dropdown-menu-right">
       <li class="dropdown-item user-details">
        <a href="javaScript:void();">
           <div class="media">
             <div class="avatar"><img class="align-self-start mr-3" src="https://via.placeholder.com/110x110" alt="user avatar"></div>
            <div class="media-body">
            <h6 class="mt-2 user-title">{{user.name}}</h6>
            <p class="user-subtitle">{{user.email}}</p>
            </div>
           </div>
          </a>
        </li>
        <li class="dropdown-divider"></li>
        <router-link :to="{name: 'profile'}"><li class="dropdown-item"><i class="icon-wallet mr-2"></i> Account</li></router-link>
        <li class="dropdown-divider"></li>
        <router-link :to="{name: 'settings'}"><li class="dropdown-item"><i class="zmdi zmdi-settings mr-2"></i> Settings</li></router-link>
        <li class="dropdown-divider"></li>
        <li class="dropdown-item" @click="logout(user.token)"><i class="icon-power mr-2"></i> Logout</li>
      </ul>
    </li>
  </ul>

</nav>
</header>
<!--End topbar header-->
</template>

<script>
import { mapGetters,mapActions } from "vuex";
import router from "../router";
export default {
    data(){
      return{
        keyWord: "",
        searchBy:"Name",
        placeHolder:"Search Product By Name"
      }
    },
    computed:{
      ...mapGetters({'user':'getUser'})
    },
    methods: {
      ...mapActions({'logout':'logout','search':'searchProduct'}),
      selectSearch(e)
      {
        this.keyWord = "";
        this.searchBy = e.target.innerHTML;
        this.placeHolder = `Serach Product By ${this.searchBy}`;
      }
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
    }
}

</script>
<style scoped>
    .dropdown-item{
      cursor: pointer;
    }
</style>