import { createStore } from 'vuex'
import theme from './modules/theme'
import user from './modules/user'
import app from './modules/app'
import dashboard from './modules/dashboard'

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
    dashboard
  }
})
