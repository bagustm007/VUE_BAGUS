export default {
    fecthGaji(store, param) {
        let client = this.app.apolloProvider.defaultClient
        client.query({
            query: require('@/graphql/query/mamoney.gql').getGaji,
            variables: {
                username: param
            }
        }).then(response => {
            store.commit('setGaji', response.data.gaji)
            console.log(response.data.gaji)
        }).catch(error => {
            console.error(error)
        })
    },
    addGaji(store, param) {
        let client = this.app.apolloProvider.defaultClient
        client.mutate({
            mutation: require('@/graphql/mutations/gaji.gql').addGaji,
            variables: {
                gaji: param.gaji,
                username: param.username
            }
        }).then(response => {
            store.commit('setGaji', response.data.insert_gaji.returning)

        }).catch(error => {
            console.error(error)
        })
    },
    updateGaji(store, param) {
        let client = this.app.apolloProvider.defaultClient
        client.mutate({
            mutation: require('@/graphql/mutations/gaji.gql').updateGaji,
            variables: {
                gaji: param.gaji,
                username: param.username
            }
        }).then(response => {
            store.commit('setGaji', response.data.update_gaji.returning)

        }).catch(error => {
            console.error(error)
        })
    },
    addPengeluaran(store, param) {
        let client = this.app.apolloProvider.defaultClient
        client.mutate({
            mutation: require('@/graphql/mutations/gaji.gql').addPengeluaran,
            variables: {
                nama: param.nama,
                username: param.username,
                jumlah: param.pengeluaran
            }

        }).then(response => {
            store.commit('addPengeluaran', response.data.insert_pengeluaran.returning[0])
        }).catch(error => {
            console.error(error)
        })
    },
    fetchPengeluaran(store, param) {
        let client = this.app.apolloProvider.defaultClient
        client.query({
            query: require('@/graphql/query/mamoney.gql').getPengeluaran,
            variables: {
                username: param
            }
        }).then(response => {
            store.commit('setPengeluaran', response.data.pengeluaran)
            console.log(response.data.gaji)
        }).catch(error => {
            console.error(error)
        })
    },
    deletePengeluaran(store, param) {
        let client = this.app.apolloProvider.defaultClient
        client.mutate({
            mutation: require('@/graphql/mutations/gaji.gql').delete,
            variables: {
                id: param,

            }

        }).then(response => {
            store.commit('setDelete', response.data.delete_pengeluaran.returning[0])
        }).catch(error => {
            console.error(error)
        })
    }
}