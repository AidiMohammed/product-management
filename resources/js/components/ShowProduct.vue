<template lang="">
	<div v-if="product != null" class="modal fade" id="ShowProduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
		    <div class="modal-content">
				<div class="h-100 p-5 bg-body-tertiary border rounded-3">
                <h2 class="text-center text-uppercase">{{product.name}}</h2>
                <p>{{product.description}}</p>
                <hr>
                <p>Price : {{product.price}}</p>
                <p>Quantity : {{product.quantity}}</p>
                <hr>
                <h3>Created At</h3>
                <p>{{dateTime(product.created)}}</p>
            </div>

		    </div>
		</div>
	</div>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters({'product':'getProduct'})
    },
    methods:{
        dateTime(val){
            return moment(val).format('YYYY-MM-DD HH:MM');
        }
    }
}
</script>

<style scoped>
    h1{
        color: black;
    }
    .modal-content{
        background-color: rgb(21 25 36);
        color: antiquewhite;
        border: 0px solid #dee2e600!important;
        text-align: justify;
    }
</style>