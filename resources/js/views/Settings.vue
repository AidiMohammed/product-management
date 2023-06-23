<template lang="">
    <div class="content-wrapper">
        <div class="container-fluid">
            <h1>Settings 'coming soon in next version inshallah ;)'</h1>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters({'user':'getUser'})
    },
    mounted(){
        if(!this.user)
            this.$router.push({name: 'login'});
    }
}
</script>
<style lang="">
    
</style>