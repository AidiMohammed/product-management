<template lang="">
    <div class="content-wrapper">
        <div class="container-fluid">
            <Loding v-if="loding"/>
            <Products v-else />
        </div>
	</div><!--End Row-->
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    import Products from '../components/Products'
    export default {
        components:{Products},
        computed:{
            ...mapGetters({'user': 'getUser','loding':'getLoding','pagination':'getPagination'})
        },
        methods: {
            ...mapActions({'loadProducts':'loadProducts'})
        },
        mounted() {
            if(!this.user)
			    this.$router.push({name: 'login'})
            else{
                this.loadProducts({token:this.user.token,perPage:10});
            }
        },
    }
</script>
<style lang="">
    
</style>