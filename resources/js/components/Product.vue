<template lang="">

<tr :key="product">
	<td>{{product.name}}</td>
	<td>{{product.quantity}}</td>
	<td>{{product.price}} (DH)</td>
	<td>{{dateTime(product.created)}}</td>
	<td>{{descriptionSnippet()}}</td>
    <td>
        <div class="">
            <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#ShowProduct" @click="show(product)">Show</button>
            <router-link :to="{name:'edit-product',params:{id:product.id}}" class="btn btn-secondary mx-2">Edit</router-link>
            <a class="btn btn-danger" href="#confirmationDelete" data-toggle="modal" @click="_delete(product.id)" >Delete</a>
        </div>
    </td>
</tr>

</template>

<script>

import {mapGetters,mapActions} from 'vuex'
import moment from 'moment';
export default {
    props:["product"],
	computed:{
		...mapGetters({'user':'getUser'})
	},
    methods: {
        ...mapActions({'show':'showProduct'}),
        _delete(id)
        {
            this.$emit('deleteProduct',id);
        },
        descriptionSnippet()
        {
            if(this.product.description.length > 20)
               return this.product.description.substring(0,20)+" ..."
            
            return this.product.description;
        },
        dateTime(val){
            return moment(val).format('YYYY-MM-DD HH:MM');
        }
    },
}
</script>

<style scoped>
    td{
        text-align: center;
    }
</style>