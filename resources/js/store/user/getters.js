export default {
    getUser({user}){
        return user;
    },
    getToken(state){
        return state.user.token;
    }
}