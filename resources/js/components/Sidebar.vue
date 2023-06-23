<template lang="">
  <!--Start sidebar-wrapper-->
  <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
   <ul class="sidebar-menu do-nicescrol">
      <li class="sidebar-header">Product Managment by MA</li>
      <li>
        <router-link :to="{name: 'Dashboard'}">
          <i class="zmdi zmdi-view-dashboard"></i> <span>Dashboard</span>
        </router-link>
      </li>

      <li>
        <router-link :to="{name: 'create-product'}">
          <i class="zmdi zmdi-invert-colors"></i> <span>New product</span>
        </router-link>
      </li>
    </ul>
   
   </div>
   <!--End sidebar-wrapper--> 
</template>

<script>
export default {

};
</script>
<style lang="">
    
</style>