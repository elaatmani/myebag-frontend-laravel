import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import globalConfig from './plugins/globalConfig'
import alert from './plugins/alert'
import apiErrorHandler  from './plugins/apiErrorHandler'
import VueNumber from 'vue-number-animation'
import Popup from '@/components/PopupVue'
import Loading from '@/components/LoadingVue'
import LoadingDashboard from '@/components/LoadingDashboard'
import Loader from '@/components/loaders/LoaderOne'
import DatePicker from '@/components/DatePicker'
import Pusher from "pusher-js";
import VueDatePicker from '@vuepic/vue-datepicker';
import { createApp } from 'vue'
import { loadFonts } from './plugins/webfontloader'
import { Icon } from '@iconify/vue';

import '@vuepic/vue-datepicker/dist/main.css'
import '@/assets/css/main.css'

// Enable pusher logging - remove in production
Pusher.logToConsole = true;

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(globalConfig)
  .use(alert)
  .use(apiErrorHandler)
  .use(VueNumber)
  

  .component('icon', Icon)
  .component('popup', Popup)
  .component('loading', Loading)
  .component('loading-dash', LoadingDashboard)
  .component('loader', Loader)
  .component('date-picker', DatePicker)
  .component('vue-date-picker', VueDatePicker)
  
  .mount('#app')
