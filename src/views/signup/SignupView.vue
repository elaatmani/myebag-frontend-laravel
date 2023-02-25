<template>
  <div>
    <div class="tw-h-screen tw-min-h-[400px] md:tw-min-h-[500px] tw-max-h-[2000px]">
        <div class="tw-grid tw-grid-cols-12 tw-h-full">
          <div class="lg:tw-col-span-5 md:tw-col-span-5 xl:tw-col-span-6 tw-hidden lg:tw-block">
            <div class="tw-h-full tw-bg-primary tw-p-10 tw-flex tw-items-center tw-justify-center">
              <img class="tw-w-full tw-max-w-[500px] -tw-scale-x-100" :src="$frontend('assets/images/illustrations/illustration-2.svg')" alt="">

            </div>
          </div>
          <div class="md:tw-col-span-12 lg:tw-col-span-7 xl:tw-col-span-6 tw-col-span-12 tw-h-full dark:tw-bg-neutral-900 tw-py-10 tw-px-5 md:tw-px-10">
            <div  class="tw-py-5 tw-pb-0">
              <AppLogo />
            </div>

            <div class="tw-h-[85%] tw-mt-16 sm:tw-mt-0 tw-min-h-[500px] tw-mx-auto tw-max-w-[700px] tw-w-full tw-flex sm:tw-justify-center tw-justify-start md:tw-px-10 tw-flex-col">
              <div class="tw-text-2xl tw-mt-10 md:tw-text-start tw-text-start tw-font-semibold tw-text-neutral-700 dark:tw-text-neutral-200">
                Welcome to My Ebag
              </div>
              <div class="tw-text-sm md:tw-text-start tw-text-start tw-my-3 tw-font-regular tw-text-neutral-500 dark:tw-text-neutral-200">
                Start your shopping journey by creating an account.
              </div>
              <div class="tw-min-h-[300px] tw-w-full tw-mt-5">
                <div class="tw-flex tw-flex-col tw-gap-3">
                  <div class="tw-grid tw-grid-cols-12 tw-gap-5 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                    <div class="tw-flex tw-flex-col tw-col-span-6  tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                      <label for="firstname">First Name</label>
                      <input @keyup="reset('firstname')" v-model="user.firstname" :class="{ '!tw-border-red-400': !form.firstname.valid }" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" type="text">
                      <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                        {{ form.firstname.message }}
                      </div>
                    </div>
                    <div class="tw-flex tw-flex-col tw-col-span-6  tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                      <label for="lastname">Last Name</label>
                      <input @keyup="reset('lastname')" v-model="user.lastname" :class="{ '!tw-border-red-400': !form.lastname.valid }"  class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500"  type="text">
                      <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                        {{ form.lastname.message }}
                      </div>
                    </div>
                  </div>
                  
                  <div class="tw-grid tw-grid-cols-12 tw-gap-5 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                    <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                      <label for="phone">Phone <span class="tw-text-xs">(optionel)</span></label>
                      <input @keyup="reset('phone')" :class="{ '!tw-border-red-400': !form.phone.valid }" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" type="email">
                      <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                        {{ form.phone.message }}
                      </div>
                    </div>
                    <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                      <label for="email">Email</label>
                      <input @keyup="reset('email')" v-model="user.email" :class="{ '!tw-border-red-400': !form.email.valid }"  class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500"  type="email">
                      <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                        {{ form.email.message }}
                      </div>
                    </div>
                  </div>

                  <div class="tw-grid tw-grid-cols-12 tw-gap-5 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                    <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                      <label for="password">Password</label>
                      <div class="tw-relative">
                        <input @keyup="reset('password')" v-model="user.password" :class="{ '!tw-border-red-400': !form.password.valid }" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" :type="showPassword ? 'text' : 'password'">
                        <icon @click="showPassword = !showPassword" class="tw-text-xl tw-cursor-pointer tw-text-neutral-500 tw-absolute tw-top-1/2 -tw-translate-y-1/2  tw-z-10 tw-right-2" :icon="showPassword ? 'ph:eye-closed' : 'ph:eye'" />
                      </div>
                      <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                        {{ form.password.message }}
                      </div>
                    </div>
                    <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                      <label for="confirmPassword">Confirm Password</label>
                      <div class="tw-relative">
                        <input @keyup="reset('confirmPassword')" v-model="user.confirmPassword" :class="{ '!tw-border-red-400': !form.confirmPassword.valid }" class=" tw-pr-8 tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" :type="showPassword ? 'text' : 'password'">
                      </div>
                      <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                        {{ form.confirmPassword.message }}
                      </div>
                    </div>
                  </div>


                  <div class="mt-5">
                    <v-btn @click="signup" :loading="isLoading" class="text-capitalize" :ripple="false" variant="flat" color="primary" block size="large">Sign up</v-btn>
                  </div>
                  <div class="mt-2 tw-text-center tw-text-md tw-text-neutral-700 tw-font-normal dark:tw-text-neutral-200">
                    Already have an account? <router-link class="tw-text-primary tw-font-medium" :to="{ name: 'login' }">Sign in</router-link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        
    </div>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo'
import { required } from '@/helpers/validators'
export default {
  components: { AppLogo },

  data() {
    return {
      isLoading: false,
      showPassword: false,

      user: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
      },

      form: {
        firstname: {
          valid: true,
          message: ''
        },
        lastname: {
          valid: true,
          message: ''
        },
        phone: {
          valid: true,
          message: ''
        },
        email: {
          valid: true,
          message: ''
        },
        password: {
          valid: true,
          message: ''
        },
        confirmPassword: {
          valid: true,
          message: ''
        }
      }
    }
  },

  computed: {
    isFormValid() {
      return this.form.email.valid &&
              this.form.password.valid &&
              this.form.firstname.valid &&
              this.form.lastname.valid &&
              this.form.confirmPassword.valid
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
      this.form.firstname = required(this.user.firstname, 'First name');
      this.form.lastname = required(this.user.lastname, 'Last name');
      // this.form.phone = required(this.user.phone);
      this.form.email = required(this.user.email, 'Email');
      this.form.password = required(this.user.password, 'Password');
      this.form.confirmPassword = required(this.user.confirmPassword);
    },

    signup() {

      this.validateForm();

      if(!this.isFormValid) {
        return false;
      }

      
    }
  }
}
</script>

<style>

</style>