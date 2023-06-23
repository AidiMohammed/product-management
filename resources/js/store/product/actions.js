import axios from "axios";
import router from "../../router";

export default {
    loadProducts({commit},payload)
    {
        commit(`toggleLoding`);
        axios.get(`products?&perpage=${payload.perPage}`,{
            headers:{'Authorization': `Bearer ${payload.token}`}
        })
        .then(res => {
            const products = res.data.data;
            commit('setPagination',{
                meta:res.data.meta,
                links:res.data.links
            });
            commit('setProducts',products);
            commit('setCountProducts',products.length)
            commit('toggleLoding')
        })
        .catch(err => {
            console.error(`/!\\ ${err.message}`)
            
        })
    },
    loadProduct({commit},payload)
    {
        commit('toggleLoding');
        axios.get(`products/${payload.id}`,{
            headers:{'Authorization': `Bearer ${payload.token}`}
        })
        .then(res => {
            const product = res.data.data;
            commit('setProduct',product);
            commit('toggleLoding');
        })
        .catch(err => {
            console.error(`/!\\ ${err.message}`)
            commit('toggleLoding');
        })
    },
    deleteProduct({commit,dispatch},payload)
    {
        commit('toggleLodingSearch');
        axios.delete(`products/${payload.id}`,{
            headers:{'Authorization': `Bearer ${payload.token}`}
        })
        .then(res => {
            commit('deleteProduct',payload.id);
            dispatch('loadProducts',{token:payload.token,perPage:10})
            commit('toggleLodingSearch');
        })
        .catch(err => {
            console.error(`/!\\ ${err.message}`)
            commit('toggleLodingSearch');
        });
    },
    createProduct({commit},payload)
    {
        commit('toggleLoding');
        const product = {
            "name": payload.product.name,
            "price": Number(payload.product.price),
            "quantity": Number(payload.product.quantity),
            "description": payload.product.description,
            "enable": 0,
            "image": payload.product.image
        }
        axios.post('products',product,{
            headers:{
                'Authorization': `Bearer ${payload.token}`,
            },
        })
        .then(res => {
            router.push({name:'Dashboard'})
            commit('toggleLoding');
        })
        .catch(err => {
            console.error(`/!\\ ${err.message}`)
            commit('setError',err.message)
            commit('toggleLoding');
        })

    },
    showProduct({commit},payload)
    {
        commit('setProduct',payload);
    },
    searchProduct({commit},payload){

        commit('toggleLodingSearch');
        axios.get(`search-Product?query=${payload.val}&selectField=${payload.select}`,{
            headers:{'Authorization': `Bearer ${payload.token}`}
        })
        .then(res => {
            const products = res.data.data;
            commit('setProducts',products);
            commit('setPagination',{
                meta:res.data.meta,
                links:res.data.links
            });
            commit('toggleLodingSearch');
        })
        .catch(err => {
            console.error(`/!\\ ${err.message}`)
            commit('toggleLodingSearch');
        })
    },
    updateProduct({commit},payload){
        commit('toggleLoding');
        const product = {
            name: payload.product.name,
            price: payload.product.price,
            quantity: payload.product.quantity,
            description: payload.product.description,
            enable: 0
        }
        axios.put(`products/${payload.product.id}`,product,{
            headers:{'Authorization': `Bearer ${payload.token}`}
        })
        .then(res => {
            router.push({name:'Dashboard'});
            commit('toggleLoding');
            commit('clearProduct');
        })
        .catch(err => {
            console.error(`/!\\ ${err.message}`);
            commit('toggleLoding');
        })
    },
    changePage({commit},payload){
        commit('toggleLodingSearch');
        axios.get(`products?page=${payload.page}&perpage=${payload.perPage}`,{
            headers:{'Authorization': `Bearer ${payload.token}`}
        })
        .then(res => {
            commit('setProducts',res.data.data);
            commit('setPagination',{
                meta:res.data.meta,
                links:res.data.links
            });
            commit('toggleLodingSearch');
        }).catch(err => {
            commit('toggleLodingSearch');
            console.error(`/!\\ ${err.message}`)
        })
    },
    filterProduts({commit},payload)
    {
        var orderDesc;
        commit('toggleLodingSearch');
        if(payload.orderDesc)
            orderDesc = 1;
        else
            orderDesc = 0;
            
        axios.get(`filter?selectField=${payload.seletField}&orderDesc=${orderDesc}&perPage=${payload.parPage}`,{
            headers:{'Authorization': `Bearer ${payload.token}`}
        })
        .then(res => {
            commit('setProducts',res.data.data);
            commit('setPagination',{
                meta:res.data.meta,
                links:res.data.links
            });
            commit('toggleLodingSearch');
        })
        .catch(err => {
            console.error(`/!\\ ${err.message}`);
            commit('toggleLodingSearch');
        })
    }
}