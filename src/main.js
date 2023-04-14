import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import globalConfig from './plugins/globalConfig'
import alert from './plugins/alert'
import apiErrorHandler  from './plugins/apiErrorHandler'
import { Icon } from '@iconify/vue';
import Popup from '@/components/PopupVue'
import Loading from '@/components/LoadingVue'
import LoadingDashboard from '@/components/LoadingDashboard'

import '@/assets/css/main.css'

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(globalConfig)
  .use(alert)
  .use(apiErrorHandler)

  .component('icon', Icon)
  .component('popup', Popup)
  .component('loading', Loading)
  .component('loading-dash', LoadingDashboard)
  
  .mount('#app')
