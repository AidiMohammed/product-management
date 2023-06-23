export default {
    setProducts(state,payload){
        return state.products = payload;
    },
    deleteProduct(state,payload)
    {
        var products = state.products.filter(product => product.id != payload);
        return state.products = products;
    },
    setProduct(state,payload)
    {
        return state.product = payload;
    },
    clearProduct(state){
        return state.product = null;
    },
    setPagination(state,payload){
        return state.pagination = payload;
    },
    setCountProducts(state,payload){
        return state.countProducts = payload;
    }
}