export default {
    setGaji(state, param) {
        if (param.length > 0) {
            state.gaji = param[0].gaji

        }
    },
    addPengeluaran(state, param) {
        state.pengeluaran.push(param)
    },
    setPengeluaran(state, param) {
        state.pengeluaran = param
    },
    setDelete(state, param) {
        const id = state.pengeluaran.map(id => id.id_pengeluaran)
        const length = id.indexOf(param.id_pengeluaran)
        state.pengeluaran.splice(length, 1);
    }
}