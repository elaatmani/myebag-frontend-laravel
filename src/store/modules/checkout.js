
let initialState = {
    address: ''
}

export default {
    name: 'checkout',
    namespaced: true,
    state: initialState,
    getters: {
        address: state => state.address
    },
    mutations: {
        SET_MODE: (state, payload) => {
            state.isDarkMode = payload
        }
    },
    actions: {
        setMode: ({commit}, payload) => {
            commit('SET_MODE', payload)
        }
    }
}