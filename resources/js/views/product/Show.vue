<template lang="">
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="container">
                <h1 class='text-center'>Show Product</h1>
                <p>name : {{product[0].name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters({'product':'getProduct'})
    }
}
</script>
<style lang="">
    
</style>