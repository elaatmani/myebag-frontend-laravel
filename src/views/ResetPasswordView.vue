<template>
  <div>
    <keep-alive>
      <div class="tw-h-screen tw-min-h-[400px] md:tw-min-h-[500px] tw-max-h-[2000px]">
        <div class="tw-grid tw-grid-cols-12 tw-h-full">
          <div class="md:tw-col-span-7 lg:tw-col-span-6 xl:tw-col-span-5 tw-col-span-12 tw-h-full dark:tw-bg-neutral-900 tw-py-10 tw-px-5 md:tw-px-10">
            <div  class="tw-py-5 tw-pb-0">
              <AppLogo />
            </div>

            <div class="tw-h-[85%] tw-mt-16 sm:tw-mt-0 tw-min-h-[500px] tw-mx-auto tw-max-w-[550px] tw-w-full tw-flex sm:tw-justify-center tw-justify-start md:tw-px-10 tw-flex-col">
              <div class="tw-text-2xl tw-mt-10 md:tw-text-start tw-text-start tw-font-semibold tw-text-neutral-700 dark:tw-text-neutral-200">
                Reset Password
              </div>
              <div class="tw-text-sm md:tw-text-start tw-text-start tw-my-3 tw-font-regular tw-text-neutral-500 dark:tw-text-neutral-200">
                Reset your account's password.
              </div>
              <div class="tw-min-h-[300px] tw-w-full tw-mt-5">
                <div class="tw-flex tw-flex-col tw-gap-3">
                  <div class="tw-flex tw-flex-col tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md tw-mt-1">
                    <label for="password">New Password</label>
                    <input v-model="user.password" @keyup="reset('password')" :class="{ '!tw-border-red-400': !form.password.valid }" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]" placeholder="Enter your password" type="password">
                    <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                      {{ form.password.message }}
                    </div>
                  </div>
                  <div class="tw-flex tw-flex-col tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md tw-mt-1">
                    <label for="password">Confirm Password</label>
                    <input @keyup.enter="resetPassword" v-model="user.passwordConfirm" @keyup="reset('password')" :class="{ '!tw-border-red-400': !form.passwordConfirm.valid }" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]" placeholder="Enter your password" type="password">
                    <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                      {{ form.passwordConfirm.message }}
                    </div>
                  </div>
                  <div class="mt-2">
                    <button @click="login" class="tw-py-3 tw-px-7 tw-w-full tw-justify-center tw-text-capitalize tw-flex tw-items-center tw-rounded tw-text-sm tw-bg-[rgb(var(--primary))] tw-text-white">
                      <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                      <span>Confirm</span>
                    </button>
                  </div>

                  <div class="mt-2 tw-text-center tw-text-md tw-text-neutral-700 tw-font-normal dark:tw-text-neutral-200">
                    Don't have an account? <router-link class="tw-text-[rgb(var(--primary))] tw-font-medium" :to="{ name: 'signup' }">Sign up</router-link>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="lg:tw-col-span-6 md:tw-col-span-5 xl:tw-col-span-7 tw-hidden md:tw-block">
            <div class="tw-h-full tw-bg-[rgb(var(--primary))] tw-p-10 tw-flex tw-items-center tw-justify-center">
              <img class="tw-w-full tw-max-w-[500px]" :src="$frontend('assets/images/illustrations/illustration-1.svg')" alt="">
            </div>
          </div>
        </div>
        
    <div class="dark:!tw-text-white dark:!tw-bg-neutral-900" ref="googleLoginBtn" />
    </div>

    </keep-alive>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo'
import User from '@/api/User'
import { required } from '@/helpers/validators'

export default {
  components: { AppLogo },

  data() {
    return {
      isLoading: false,
      isLoaded: false,

      user: {
        password: '',
        passwordConfirm: ''
      },

      form: {
        password: {
          valid: true,
          message: ''
        },
        passwordConfirm: {
          valid: true,
          message: ''
        },
      }
    }
  },

  computed: {
    isFormValid() {
      return this.form.password.valid && this.form.confirmPassword.valid
    },
    token() {
        return this.$route.params.token
    }
  },

  methods: {
    // reset fields error 
    reset(field) {
      this.form[field] = {
        valid: true,
        message: ''
      }
    },

    validateForm() {
      this.form.password = required(this.user.email, 'Password');
      this.form.ConfirmPassword = required(this.user.password, 'Confirm Password');

    },

    login() {
      this.validateForm();

      if (!this.isFormValid) {
        console.log('form not valid');
        return false;
      }

      this.isLoading = true
      User.setPassword({
        email: this.user.email,
        password: this.user.password
      })
      .then((response) => {
        const data = response.data
        if(data?.code == 'SUCCESS') {
          const user = data.data.user;
          this.$store.dispatch('user/setUser', user);
          this.$store.dispatch('user/setIsLoggedIn', true);
          this.$store.dispatch('user/setIsAdmin', user.is_admin == 1);
          this.$router.push({ 'name': 'home' });
          
        }

      })
      .catch(error => {
        this.$handleApiError(error);

        if(error.response.data?.code == 'INVALID_CREDENTIALS') {
          this.form.email = {
            valid: false,
            message: 'These credentials do not match our records.'
          }
          this.form.password = {
            valid: false,
            message: ''
          }
        }
      }) 
      .finally(() => {
        this.isLoading = false
      })
    },


  },
  mounted() {
  },
}
</script>

<style>

</style>