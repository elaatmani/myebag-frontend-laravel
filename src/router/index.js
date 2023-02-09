import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/default/DefaultLayout'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'default',
    component: DefaultLayout,
    children: [
      {
        name: 'home',
        path: '',
        component: HomeView,
        meta: {
          
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
