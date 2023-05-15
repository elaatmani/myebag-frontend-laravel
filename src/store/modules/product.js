
let initialState = {
    fetched: false,
    products: []
}

export default {
    namespaced: true,
    name: 'product',
    state: initialState,
    getters: {
        fetched: state => state.fetched,
        products: state => state.products
    },
    mutations: {
        SET_FETCHED: (state, payload) => {
            state.fetched = payload
        },

        SET_PRODUCTS: (state, payload) => {
            state.products = payload
        },

        ADD_PRODUCT: (state, payload) => {
            state.products.unshift(payload)
        },

        DELETE_PRODUCT: (state, payload) => {
            state.products = state.products.filter(p => p.id != payload)
        }
    },
    actions: {
        setFetched: ({commit}, payload) => {
            commit('SET_FETCHED', payload)
        },

        setProducts: ({commit}, payload) => {
            commit('SET_PRODUCTS', payload)
        },

        addProduct: ({commit}, payload) => {
            commit('ADD_PRODUCT', payload)
        },

        delete: ({commit}, payload) => {
            commit('DELETE_PRODUCT', payload)
        }
    }
}