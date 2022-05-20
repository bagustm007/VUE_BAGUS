export default {
    fetchUser(store) {
        let client = this.app.apolloProvider.defaultClient
        client.query({
            query: require('@/graphql/query/user.gql').getUser
        }).then(response => {
            store.commit('setUsers', response.data.users)
        }).catch(error => {
            console.log(error)
        })
    },
    pushUsers(store, param) {
        let client = this.app.apolloProvider.defaultClient
        client.mutate({
            mutation: require('@/graphql/mutations/users.gql').addUser,
            variables: {
                nama: param.nama,
                password: param.password,
                username: param.username,

            }
        }).then(response => {
            store.commit('addUsers', response.data.insert_users.returning[0])
        }).catch(error => {
            console.error(error)
        })

    }
}