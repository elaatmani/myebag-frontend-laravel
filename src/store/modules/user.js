

const user = localStorage.getItem('user');
const isLoggedIn = localStorage.getItem('isLoggedIn');

const initialState = {
    user: !user ? null : JSON.parse(user),
    isLoggedIn: !isLoggedIn ? null : JSON.parse(isLoggedIn),
    isAdmin: !user ? null : JSON.parse(user)?.is_admin == 1
};

export default {
    name: 'user',
    namespaced: true,

    state: initialState,

    getters: {
        user: (state) => state.user,
        isLoggedIn: (state) => state.isLoggedIn,
        isAdmin: (state) => state.isAdmin
    },

    mutations: {

        SET_USER: (state, payload) => {
            state.user = payload
            localStorage.setItem('user', JSON.stringify(payload))
        },

        SET_IS_LOGGED_IN: (state, payload) => {
            localStorage.setItem('isLoggedIn', JSON.stringify(payload))
            state.isLoggedIn = payload
        },
        SET_IS_ADMIN: (state, payload) => {
            state.isAdmin = payload
        },

        LOGOUT: (state) => {
            state.user = null;
            state.isLoggedIn = false
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('user')
        }
    },

    actions: {

        setUser: ({commit}, payload) => {
            commit('SET_USER', payload)
        },

        setIsLoggedIn: ({commit}, payload) => {
            commit('SET_IS_LOGGED_IN', payload)
        },

        setIsAdmin: ({commit}, payload) => {
            commit('SET_IS_ADMIN', payload)
        },

        logout: ({commit}) => {
            commit('LOGOUT')
        },
    }
}