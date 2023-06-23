import { createStore } from "vuex";
import userModule from './user'
import productModule from './product'

export default createStore({
    state:{
        loding: false,
        lodingSearch: false,
        errors: ""
    },
    mutations:{
        toggleLoding(state){
            return state.loding = !state.loding;
        },
        setError(state,errors){
            return state.errors = errors;
        },
        toggleLodingSearch(state){
            return state.lodingSearch = !state.lodingSearch;
        }
    },
    actions:{
        lodingSearch({commit}){
            commit('toggleLodingSearch');
        }
    },
    getters:{
        getLoding({loding}){
            return loding;
        },
        getErrors({errors})
        {
            return errors;
        },
        getLodingSearch({lodingSearch}){
            return lodingSearch;
        },
    },
    modules:{
        user: userModule,
        product: productModule
    }
});