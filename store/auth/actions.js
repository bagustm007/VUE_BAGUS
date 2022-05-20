export default {
    login(store, param) {
        store.commit('setlogin', param)
    },
    setlocalStorage(store) {
        store.commit('setStorage')
    },
    logout(store) {
        store.commit("logout")
    }
}