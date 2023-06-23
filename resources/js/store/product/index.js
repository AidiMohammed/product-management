import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
    //namespaced: true,
    state:{
        products:[],
        product:null,
        pagination: null,
        countProducts: 0
    },
    actions,
    getters,
    mutations
}