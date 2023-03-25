
const currentTheme = localStorage.getItem('myebag-theme');
let initialState = {
    isDarkMode: false
}
if(currentTheme == 'dark') {
    document.querySelector('html').classList.add('tw-dark');
    initialState.isDarkMode = true
}

export default {
    namespaced: true,
    state: initialState,
    getters: {
        isDarkMode: state => state.isDarkMode
    },
    mutations: {
        SET_MODE: (state, payload) => {
            state.isDarkMode = payload
        }
    },
    actions: {
        setMode: ({commit}, payload) => {
            commit('SET_MODE', payload)
        }
    }
}