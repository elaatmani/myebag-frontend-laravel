
import LoginView from '@/views/LoginView'
import SignupView from '@/views/SignupView'
import ResetPasswordView from '@/views/ResetPasswordView'

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

      {
        path: '/reset-password/:token',
        name: 'reset-password',
        component: ResetPasswordView,
        meta: {
          requireAuth: false,
          title: 'Reset Password'
        }
      },
]