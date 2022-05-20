export default {
    setlogin(state, param) {
        state.user = param;
        localStorage.setItem('users', JSON.stringify(param))
    },
    setStorage(state) {
        if (localStorage.getItem('user')) {
            state.user = localStorage.getItem('user')
        }
    },
    logout(state) {
        state.user = false
        localStorage.removeItem('users')
    }
}