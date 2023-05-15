
let initialState = {
    fetched: false,
    orders: [],
    orderDetails: null,
    isOrderDetailsActive: false,
}

export default {
    namespaced: true,
    name: 'order',
    state: initialState,
    getters: {
        fetched: state => state.fetched,
        orders: state => state.orders,
        orderDetails: state => state.orderDetails,
        isOrderDetailsActive: state => state.isOrderDetailsActive,
    },
    mutations: {

        SET_FETCHED: (state, payload) => {
            state.fetched = payload
        },

        SET_ORDERS: (state, payload) => {
            state.orders = payload
        },

        ADD_ORDER: (state, payload) => {
            state.orders.unshift(payload)
        },

        SET_ORDER_DETAILS: (state, payload) => {
            state.orderDetails = payload
        },

        SET_IS_ORDER_DETAILS_ACTIVE: (state, payload) => {
            state.isOrderDetailsActive = payload
        },

    },
    actions: {

        setFetched: ({commit}, payload) => {
            commit('SET_FETCHED', payload)
        },

        setOrders: ({commit}, payload) => {
            commit('SET_ORDERS', payload)
        },

        addOrder: ({commit}, payload) => {
            commit('ADD_ORDER', payload)
        },

        setOrderDetails: ({commit}, payload) => {
            commit('SET_ORDER_DETAILS', payload)
        },
        
        setIsOrderDetailsActive: ({commit}, payload) => {
            commit('SET_IS_ORDER_DETAILS_ACTIVE', payload)
        },
    }
}