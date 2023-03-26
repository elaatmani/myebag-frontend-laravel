
let initialState = {
    IsSidebarActive: true
}

export default {
    namespaced: true,
    name: 'dashboard',
    state: initialState,
    getters: {
        IsSidebarActive: state => state.IsSidebarActive
    },
    mutations: {
        SET_IS_SIDEBAR_ACTIVE: (state, payload) => {
            state.IsSidebarActive = payload
        }
    },
    actions: {
        setIsSidebarActive: ({commit}, payload) => {
            commit('SET_IS_SIDEBAR_ACTIVE', payload)
        }
    }
}