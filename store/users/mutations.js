export default {
    setUsers(state, param) {
        state.users = param
    },
    addUsers(state, param) {
        state.users.push(param)
    }
}