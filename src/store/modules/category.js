
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
        }
    },
    actions: {
        setCategories: ({commit}, payload) => {
            commit('SET_CATEGORIES', payload)
        }
    }
}