import { createRouter, createWebHistory } from 'vue-router'
import beforeEachHandler from './beforeEachHandler'

// routes
import main from './routes/main'
import dashboard from './routes/dashboard'
import auth from './routes/auth'

const routes = [
  ...auth,
  ...main,
  ...dashboard,
  {
    name: 'catch-all',
    path: '/:pathMatch(.*)*',
    beforeEnter: (to, from, next) => {
        console.log('match for 404');
        return next({ name: '404' })
    },
    meta: {
        requireAuth: false,
        title: 'Not Found'
    }
},
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(beforeEachHandler)

export default router
