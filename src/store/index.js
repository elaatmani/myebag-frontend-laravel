import { createStore } from 'vuex'
import theme from './modules/theme'
import user from './modules/user'
import app from './modules/app'
import dashboard from './modules/dashboard'
import alert from './modules/alert'
import cart from './modules/cart'
import product from './modules/product'
import category from './modules/category'
import order from './modules/order'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app,
    theme,
    dashboard,
    user,
    alert,
    cart,
    product,
    category,
    order
  }
})
