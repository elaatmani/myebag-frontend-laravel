

const initialState = {
    user: {
        fistname: 'Yassine',
        lastname: 'El Aatmani',
        email: 'yassine@gmail.com',
        isAdmin: true
    },
    isLoggedIn: true
};

export default {
    name: 'user',
    namespaced: true,

    state: initialState,

    getters: {
        user: (state) => state.user,
        isLoggedIn: (state) => state.isLoggedIn
    },

    mutations: {

        SET_USER: (state, payload) => {
            state.user = payload
        },

        SET_IS_LOGGED_IN: (state, payload) => {
            state.isLoggedIn = payload
        }
    },

    actions: {

        setUser: ({commit}, payload) => {
            commit('SET_USER', payload)
        },

        setIsLoggedIn: ({commit}, payload) => {
            commit('SET_IS_LOGGED_IN', payload)
        },
    }
}