import { createStore } from 'vuex'
import theme from './modules/theme'
import user from './modules/user'
import app from './modules/app'
import dashboard from './modules/dashboard'
import alert from './modules/alert'
import cart from './modules/cart'
import product from './modules/product'
import category from './modules/category'

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
    theme,
    user,
    app,
    dashboard,
    alert,
    cart,
    product,
    category
  }
})
