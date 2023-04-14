
let initialState = {
    categories: []
}

export default {
    namespaced: true,
    name: 'category',
    state: initialState,
    getters: {
        categories: state => state.categories
    },
    mutations: {
        SET_CATEGORIES: (state, payload) => {
            state.categories = payload
        },

        SET_DELETE: (state, payload) => {
            state.categories = state.categories.filter(c => c.id !== payload)
        }
    },
    actions: {
        setCategories: ({commit}, payload) => {
            commit('SET_CATEGORIES', payload)
        },
        
        delete: ({commit}, payload) => {
            commit('SET_DELETE', payload)
        },

    }
}