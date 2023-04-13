
let initialState = {
    IsSidebarActive: false,
    sizes: [],
    colors: [],
}

export default {
    namespaced: true,
    name: 'app',
    state: initialState,
    getters: {
        IsSidebarActive: state => state.IsSidebarActive,
        sizes: state => state.sizes,
        colors: state => state.colors
    },
    mutations: {
        
        SET_IS_SIDEBAR_ACTIVE: (state, payload) => {
            state.IsSidebarActive = payload
        },

        SET_SIZES: (state, payload) => {
            state.sizes = payload
        },

        ADD_SIZE: (state, payload) => {
            state.sizes.push(payload)
        },

        SET_COLORS: (state, payload) => {
            state.colors = payload
        },

        ADD_COLOR: (state, payload) => {
            state.colors.push(payload)
        }
    },
    actions: {
        
        setIsSidebarActive: ({commit}, payload) => {
            commit('SET_IS_SIDEBAR_ACTIVE', payload)
        },

        setSizes: ({commit}, payload) => {
            commit('SET_SIZES', payload)
        },

        addSize: ({commit}, payload) => {
            commit('ADD_SIZE', payload)
        },

        setColors: ({commit}, payload) => {
            commit('SET_COLORS', payload)
        },

        addColor: ({commit}, payload) => {
            commit('ADD_COLOR', payload)
        },
    }
}