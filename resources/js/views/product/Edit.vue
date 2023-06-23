<template lang="">
    <div class="content-wrapper">
        <div class="container-fluid">
            <Loding v-if="loding"/>
            <div v-if="product != null">
                <h1 >Update Product</h1>
                <FormEditProduct v-if="!loding" :product="product"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';
import FormEditProduct from '../../components/FormEditProduct.vue';
export default {
    props:['id'],
    computed:{
        ...mapGetters({
            'user':'getUser',
            'product':'getProduct',
            'loding':'getLoding'
        })
    },
    methods:{
        ...mapActions({'loadProduct':'loadProduct'})
    },
    mounted(){
        if(!this.user)
            this.$router.push({name: 'login'})
        else
            this.loadProduct({id:this.id,token:this.user.token});
    },
    components:{FormEditProduct}
}
</script>
<style lang="">
    
</style>