
let initialState = {
    cart: [
        // {
        //     id: 1,
        //     product_id: 1,
        //     product: {
        //         name: 'Air Force 1',
        //         description: 'lorem ipsum lorem ipsum',
        //         images: [
        //             {
        //                 id: 1,
        //                 order: 1,
        //                 path: 'assets/images/products/shoes/1/1.webp'
        //             }
        //         ],
        //         price: 100
        //     },
        //     quantity: 5,
        //     size: {
        //         id: 1,
        //         name: 'XL'
        //     },
        //     color: 'RED'
        // }
    ]
}

export default {
    namespaced: true,
    name: 'cart',
    state: initialState,
    getters: {
        cart: state => state.cart
    },
    mutations: {
        SET_CART: (state, payload) => {
            state.cart = payload
        },

        ADD_ITEM: (state, payload) => {
            state.cart.push(payload)
        },

        REMOVE_ITEM: (state, payload) => {
            state.cart = state.cart.filter(i => i.id !== payload)
        }
    },
    actions: {
        setCart: ({commit}, payload) => {
            commit('SET_CART', payload)
        },

        addItem: ({ commit }, payload) => {
            commit('ADD_ITEM', payload)
        },

        removeItem: ({ commit }, payload) => {
            commit('REMOVE_ITEM', payload)
        },
    }
}