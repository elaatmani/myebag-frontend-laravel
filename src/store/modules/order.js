
let initialState = {
    orders: [],
    newOrdersCount: 0,
}

export default {
    namespaced: true,
    name: 'order',
    state: initialState,
    getters: {
        order: state => state.orders,
        newOrdersCount: state => state.newOrdersCount,
    },
    mutations: {

        SET_ORDERS: (state, payload) => {
            state.orders = payload
        },

        SET_NEW_ORDERS_COUNT: (state, payload) => {
            state.newOrdersCount = payload
        },

    },
    actions: {

        setOrders: ({commit}, payload) => {
            commit('SET_ORDERS', payload)
        },

        setNewOrdersCount: ({commit}, payload) => {
            commit('SET_NEW_ORDERS_COUNT', payload)
        },
    }
}