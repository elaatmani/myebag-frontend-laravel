
let initialState = {
    products: []
}

export default {
    namespaced: true,
    name: 'product',
    state: initialState,
    getters: {
        products: state => state.products
    },
    mutations: {
        SET_PRODUCTS: (state, payload) => {
            state.products = payload
        },

        DELETE_PRODUCT: (state, payload) => {
            state.products = state.products.filter(p => p.id != payload)
        }
    },
    actions: {
        setProducts: ({commit}, payload) => {
            commit('SET_PRODUCTS', payload)
        },

        delete: ({commit}, payload) => {
            commit('DELETE_PRODUCT', payload)
        }
    }
}