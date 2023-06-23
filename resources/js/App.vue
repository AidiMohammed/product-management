<template>
  <div v-if="user">
    <TopBar/>
    <SideBar/>

    <ShowProduct/>
  </div>
  
  <router-view></router-view>
</template>
  
<script>

    import SideBar from './components/Sidebar.vue';
    import TopBar from './components/TopBar.vue';
    import ShowProduct from './components/ShowProduct.vue';
    import {mapGetters} from 'vuex';
    export default{
      components:{SideBar,TopBar,ShowProduct},
      computed:{
        ...mapGetters({'user': 'getUser','errors':'getErrors'}),
      }
    }
</script>
    
<style>

</style>