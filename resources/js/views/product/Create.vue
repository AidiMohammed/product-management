<template lang="">
    <div class="content-wrapper">
        <div class="container-fluid">
            <FormAddProduct/>
        </div>
    </div>
</template>

<script>
    import FormAddProduct from '../../components/FormProduct.vue';
    import {mapGetters} from 'vuex'
    export default {
        components:{FormAddProduct},
        computed:{
            ...mapGetters({'user':'getUser'})
        },
        mounted(){
            if(!this.user)
                this.$router.push({name: 'login'})
        }
    }
</script>

<style lang="">
    
</style>