<template lang="">
    <h1>Create Product</h1>
    <div class="col-lg-6 mx-auto">
        <div class="card">
            <div class="card-body">
                <div class="card-title">New Product</div>
                <hr>
                <form @submit.prevent="create({product:product,token:user.token})" >
                    <div class="form-group">
                        <label for="input-1">Name *</label>
                        <input v-model="product.name" type="text" class="form-control" id="input-1" placeholder="Enter Name Product" required>
                    </div>
                    <div class="form-group">
                        <label for="input-2">Price (DH) *</label>
                        <input v-model="product.price" type="number" class="form-control" id="input-2" placeholder="Enter Price Product" required>
                    </div>
                    <div class="form-group">
                        <label for="input-3">Quantity *</label>
                        <input v-model="product.quantity" type="number" class="form-control" id="input-3" placeholder="Enter Quantity Product" required>
                    </div>
                    <div class="form-group">
                        <label for="input-4">Description</label>
                        <textarea v-model="product.description" class="form-control" name="Description" id="input-4" rows="8" required></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-light px-5">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    methods:{
        ...mapActions({'create':'createProduct'})
    },
    data(){ 
        return{
            product:{
                name: "",
                price: "",
                quantity: 0,
                description: "",
                image: "",
            }
        }
    },
    computed:{
        ...mapGetters({'user':'getUser'})
    }
}
</script>
<style lang="">
    
</style>