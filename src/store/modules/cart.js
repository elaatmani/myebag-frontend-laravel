
let initialState = {
    cart: [
        {
            id: 1,
            product_id: 1,
            product: {
                name: 'Air Force 1',
                description: 'lorem ipsum lorem ipsum',
                image: 'assets/images/products/shoes/1/1.webp',
                price: 100
            },
            quantity: 5,
            size: 'XL',
            color: 'RED'
        }
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
        }
    },
    actions: {
        setCart: ({commit}, payload) => {
            commit('SET_CART', payload)
        }
    }
}