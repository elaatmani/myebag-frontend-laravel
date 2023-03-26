import { createRouter, createWebHistory } from 'vue-router'
import beforeEachHandler from './beforeEachHandler'

import DefaultLayout from '@/layouts/default/DefaultLayout'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView'
import SignupView from '@/views/SignupView'
import ProfileView from '@/views/ProfileView'
import ProductView from '@/views/ProductView'

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
          requireAuth: false,
          title: 'Home'
        }
      },
      {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
        meta: {
          requireAuth: true,
          title: 'Account'
        }
      },
      {
        path: '/products/:id',
        name: 'products.show',
        component: ProductView,
        meta: {
          requireAuth: false,
          title: 'Product'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requireAuth: false,
      title: 'Login'
    }
  },

  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      requireAuth: false,
      title: 'Signup'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(beforeEachHandler)

export default router
