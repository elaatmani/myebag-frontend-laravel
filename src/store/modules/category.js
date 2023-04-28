
let initialState = {
    isFetched: false,
    categories: []
}

export default {
    namespaced: true,
    name: 'category',
    state: initialState,
    getters: {
        categories: state => state.categories,
        isFetched: state => state.isFetched
    },
    mutations: {
        SET_CATEGORIES: (state, payload) => {
            state.categories = payload
        },

        SET_IS_FETCHED: (state, payload) => {
            state.isFetched = payload
        },

        DELETE: (state, payload) => {
            state.categories = state.categories.filter(c => c.id !== payload)
        }
    },

    actions: {
        setCategories: ({commit}, payload) => {
            commit('SET_CATEGORIES', payload)
        },

        setIsFetched: ({commit}, payload) => {
            commit('SET_IS_FETCHED', payload)
        },
        
        delete: ({commit}, payload) => {
            commit('DELETE', payload)
        },

    }
}