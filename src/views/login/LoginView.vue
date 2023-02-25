<template>
  <div>
    <div class="tw-h-screen tw-min-h-[400px] md:tw-min-h-[500px] tw-max-h-[2000px]">
        <div class="tw-grid tw-grid-cols-12 tw-h-full">
          <div class="md:tw-col-span-7 lg:tw-col-span-6 xl:tw-col-span-5 tw-col-span-12 tw-h-full dark:tw-bg-neutral-900 tw-py-10 tw-px-5 md:tw-px-10">
            <div  class="tw-py-5 tw-pb-0">
              <AppLogo />
            </div>

            <div class="tw-h-[85%] tw-mt-16 sm:tw-mt-0 tw-min-h-[500px] tw-mx-auto tw-max-w-[550px] tw-w-full tw-flex sm:tw-justify-center tw-justify-start md:tw-px-10 tw-flex-col">
              <div class="tw-text-2xl tw-mt-10 md:tw-text-start tw-text-start tw-font-semibold tw-text-neutral-700 dark:tw-text-neutral-200">
                Welcome back
              </div>
              <div class="tw-text-sm md:tw-text-start tw-text-start tw-my-3 tw-font-regular tw-text-neutral-500 dark:tw-text-neutral-200">
                Welcome back! Please enter your details.
              </div>
              <div class="tw-min-h-[300px] tw-w-full tw-mt-5">
                <div class="tw-flex tw-flex-col tw-gap-3">
                  <div class="tw-flex tw-flex-col tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                    <label for="email">Email</label>
                    <input v-model="user.email" :class="{ '!tw-border-red-400': !form.email.valid }" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Enter your email" type="email">
                    <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                      {{ form.email.message }}
                    </div>
                  </div>
                  <div class="tw-flex tw-flex-col tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md tw-mt-1">
                    <label for="email">Password</label>
                    <input v-model="user.password" :class="{ '!tw-border-red-400': !form.password.valid }" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Enter your password" type="password">
                    <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                      {{ form.password.message }}
                    </div>
                  </div>
                  <div class="tw-flex tw-justify-end">
                    <router-link class="tw-text-md tw-text-primary tw-font-normal" :to="{ name: 'home' }">Forgot password</router-link>
                  </div>
                  <div class="mt-2">
                    <v-btn @click="login" :loading="isLoading" class="text-capitalize" :ripple="false" variant="flat" color="primary" block size="large">Sign in</v-btn>
                  </div>
                  <div class="mt-2 tw-text-center tw-text-md tw-text-neutral-700 tw-font-normal dark:tw-text-neutral-200">
                    Don't have an account? <router-link class="tw-text-primary tw-font-medium" :to="{ name: 'signup' }">Sign up</router-link>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="lg:tw-col-span-6 md:tw-col-span-5 xl:tw-col-span-7 tw-hidden md:tw-block">
            <div class="tw-h-full tw-bg-primary tw-p-10 tw-flex tw-items-center tw-justify-center">
              <img class="tw-w-full tw-max-w-[500px]" :src="$frontend('assets/images/illustrations/illustration-1.svg')" alt="">

            </div>
          </div>
        </div>
        
    </div>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo'
import User from '@/api/User'
import { required, isStringBetween } from '@/helpers/validators'

export default {
  components: { AppLogo },

  data() {
    return {
      isLoading: false,

      user: {
        email: '',
        password: ''
      },

      form: {
        email: {
          valid: true,
          message: ''
        },
        password: {
          valid: true,
          message: ''
        },
      }
    }
  },

  computed: {
    isFormValid() {
      return this.form.email.valid && this.form.password.valid
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
      this.form.email = required(this.user.email, 'Email');
      this.form.password = isStringBetween(this.user.password, { min: 6, max: 16 }, 'Password');

      console.log('form validated !');
    },

    login() {
      this.validateForm();

      if (!this.isFormValid) {
        return false;
      }

      this.isLoading = true
      User.login({
        email: this.user.email,
        password: this.user.password
      })
      .then((response) => {
        const data = response.data

        if(data?.status == 200) {

          const user = data.user;
          this.$store.dispatch('user/setUser', user);
          this.$store.dispatch('user/setIsLoggedIn', true);
          this.$router.push('/');
          
        }
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      }) 
      .finally(() => {
        this.isLoading = false
      })
    }
  }
}
</script>

<style>

</style>