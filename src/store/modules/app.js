
let initialState = {
    IsSidebarActive: false,
    primary: 'violet',
    secondary: 'emerald',
    sizes: [],
    colors: [],
    orderStatuses: [],
    featured: [],
    categories: [],
    isReady: false
}

export default {
    namespaced: true,
    name: 'app',
    state: initialState,
    getters: {
        IsSidebarActive: state => state.IsSidebarActive,
        primary: state => state.primary,
        secondary: state => state.secondary,
        sizes: state => state.sizes,
        colors: state => state.colors,
        categories: state => state.categories,
        orderStatuses: state => state.orderStatuses,
        featured: state => state.featured,
        isReady: state => state.isReady,
    },
    mutations: {
        
        SET_IS_SIDEBAR_ACTIVE: (state, payload) => {
            state.IsSidebarActive = payload
        },

        SET_PRIMARY: (state, payload) => {
            state.primary = payload
        },

        SET_SECONDARY: (state, payload) => {
            state.secondary = payload
        },

        SET_SIZES: (state, payload) => {
            state.sizes = payload
        },

        REMOVE_SIZE: (state, payload) => {
            state.sizes = state.sizes.filter(s => s.id !== payload)
        },

        ADD_SIZE: (state, payload) => {
            state.sizes.push(payload)
        },

        SET_COLORS: (state, payload) => {
            state.colors = payload
        },

        REMOVE_COLOR: (state, payload) => {
            state.colors = state.colors.filter(c => c.id !== payload)
        },

        ADD_COLOR: (state, payload) => {
            state.colors.push(payload)
        },

        SET_ORDER_STATUSES: (state, payload) => {
            state.orderStatuses = payload
        },

        REMOVE_ORDER_STATUS: (state, payload) => {
            state.orderStatuses = state.orderStatuses.filter(c => c.id !== payload)
        },

        ADD_ORDER_STATUS: (state, payload) => {
            state.orderStatuses.push(payload)
        },

        SET_FEATURED: (state, payload) => {
            state.featured = payload
        },

        SET_IS_READY: (state, payload) => {
            state.isReady = payload
        }
    },
    actions: {
        
        setIsSidebarActive: ({commit}, payload) => {
            commit('SET_IS_SIDEBAR_ACTIVE', payload)
        },

        setSizes: ({commit}, payload) => {
            commit('SET_SIZES', payload)
        },

        setPrimary: ({commit}, payload) => {
            commit('SET_PRIMARY', payload)
        },

        setSecondary: ({commit}, payload) => {
            commit('SET_SECONDARY', payload)
        },

        removeSize: ({commit}, payload) => {
            commit('REMOVE_SIZE', payload)
        },

        addSize: ({commit}, payload) => {
            commit('ADD_SIZE', payload)
        },

        setColors: ({commit}, payload) => {
            commit('SET_COLORS', payload)
        },

        removeColor: ({commit}, payload) => {
            commit('REMOVE_COLOR', payload)
        },

        addColor: ({commit}, payload) => {
            commit('ADD_COLOR', payload)
        },

        setOrderStatuses: ({commit}, payload) => {
            commit('SET_ORDER_STATUSES', payload)
        },

        removeOrderStatus: ({commit}, payload) => {
            commit('REMOVE_ORDER_STATUS', payload)
        },

        addOrderStatus: ({commit}, payload) => {
            commit('ADD_ORDER_STATUS', payload)
        },

        setFeatured: ({commit}, payload) => {
            commit('SET_FEATURED', payload)
        },

        setIsReady: ({commit}, payload) => {
            commit('SET_IS_READY', payload)
        },
    }
}