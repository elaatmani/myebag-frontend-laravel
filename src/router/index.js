import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/default/DefaultLayout'
import HomeView from '../views/home/HomeView.vue'
import LoginView from '@/views/login/LoginView'
import SignupView from '@/views/signup/SignupView'
import ProfileView from '@/views/profile/ProfileView'

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
      },
      {
        path: '/profile',
        name: 'profile',
        component: ProfileView
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
