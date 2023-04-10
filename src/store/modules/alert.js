export default {
    name: 'alert',
    namespaced: true,

    state: {
        active: false,
        alert: {
            type: 'success',
            body: 'Hello body'
        }
    },

    getters: {
        alert: (state) => state
    },

    mutations: {
        TOGGLE_TOAST: (state, payload) => {
            state.alert = payload;
            state.active = true;

            setTimeout(() => {
                state.active = false
            }, 4500)

        },
    },

    actions: {
        toggleAlert: ({ commit }, payload) => {
            commit('TOGGLE_TOAST', payload)
        }
    }
}