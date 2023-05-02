
let initialState = {
    IsSidebarActive: false,
    sizes: [],
    colors: [],
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
        sizes: state => state.sizes,
        colors: state => state.colors,
        categories: state => state.categories,
        featured: state => state.featured,
        isReady: state => state.isReady,
    },
    mutations: {
        
        SET_IS_SIDEBAR_ACTIVE: (state, payload) => {
            state.IsSidebarActive = payload
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

        setFeatured: ({commit}, payload) => {
            commit('SET_FEATURED', payload)
        },

        setIsReady: ({commit}, payload) => {
            commit('SET_IS_READY', payload)
        },
    }
}