import axios from "axios"
import router from '../../router/'

export default {
    login({commit},payload)//The payload has an email and a password
    {
        commit('toggleLoding');//loding ON
        axios.post('login',payload)
        .then(res => {
            let user = res.data.user;
            user['token'] = res.data.auth_token;
            commit('setUser',res.data.user);
            router.push({name:'Dashboard'})
            commit('toggleLoding');//loding OFF
        })
        .catch(err => {
            console.error(`${err.message}`);
            commit('toggleLoding');//loding OFF
        })
    },
    logout({commit},payload)//payload is access token
    {
        commit('toggleLoding');
        axios.delete('logout',{
            headers:{'Authorization': `Bearer ${payload}`}
        })
        .then(res => {
            commit('logout');
            router.push({name:'login'});
            commit('toggleLoding');
        })
        .catch(err => {
            console.error(err.message);
            commit('toggleLoding');
        })
    },
    updateProfile({commit},payload)
    {
        commit('toggleLoding');
        console.log(`USER : ${payload}`)
        axios.put('update-profile',payload,{
            headers:{'Authorization': `Bearer ${payload.token}`}
        })
        .then(res => {
            let user = res.data.data
            console.log(`**** user ${user} ****`);
            commit('toggleLoding')
        })
        .catch(err => {
            console.error(`/!\\ ${err.message}`);
            commit('toggleLoding');
        })
    },
    register({commit},payload)
    {
        commit('toggleLoding');
        axios.post('register',payload)
        .then(res => {
            router.push({name: 'login'})
            commit('toggleLoding');
        }).catch(err => {
            console.error(`/!\\ ${err.message.message}`)
            commit('toggleLoding');
        })
        
    }
}