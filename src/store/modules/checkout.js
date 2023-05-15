
let initialState = {
    address: {}
}

export default {
    name: 'checkout',
    namespaced: true,
    state: initialState,
    getters: {
        address: state => state.address
    },
    mutations: {
        SET_ADDRESS: (state, payload) => {
            state.address = payload
        }
    },
    actions: {
        setAddress: ({commit}, payload) => {
            commit('SET_ADDRESS', payload)
        }
    }
}