
import LoginView from '@/views/LoginView'
import SignupView from '@/views/SignupView'

export default [
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