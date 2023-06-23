export default {
    setUser(state,user)
    {
        return state.user = user;
    },
    logout(state)
    {
        return state.user = null;
    }
}