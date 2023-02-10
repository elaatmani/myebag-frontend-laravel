import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import globalConfig from './plugins/globalConfig'
import { Icon } from '@iconify/vue';

import '@/assets/css/main.css'

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(globalConfig)

  .component('icon', Icon)
  
  .mount('#app')
