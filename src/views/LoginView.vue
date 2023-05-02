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
                Welcome back
              </div>
              <div class="tw-text-sm md:tw-text-start tw-text-start tw-my-3 tw-font-regular tw-text-neutral-500 dark:tw-text-neutral-200">
                Welcome back! Please enter your details.
              </div>
              <div class="tw-min-h-[300px] tw-w-full tw-mt-5">
                <div class="tw-flex tw-flex-col tw-gap-3">
                  <div class="tw-flex tw-flex-col tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                    <label for="email">Email</label>
                    <input v-model="user.email" @keyup="reset('email')" :class="{ '!tw-border-red-400': !form.email.valid }" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Enter your email" type="email">
                    <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                      {{ form.email.message }}
                    </div>
                  </div>
                  <div class="tw-flex tw-flex-col tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md tw-mt-1">
                    <label for="password">Password</label>
                    <input @keyup.enter="login" v-model="user.password" @keyup="reset('password')" :class="{ '!tw-border-red-400': !form.password.valid }" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Enter your password" type="password">
                    <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                      {{ form.password.message }}
                    </div>
                  </div>
                  <div class="tw-flex tw-justify-end">
                    <router-link class="tw-text-md tw-text-primary tw-font-normal" :to="{ name: 'home' }">Forgot password</router-link>
                  </div>
                  <div class="mt-2">
                    <button @click="login" class="tw-py-3 tw-px-7 tw-w-full tw-justify-center tw-text-capitalize tw-flex tw-items-center tw-rounded tw-text-sm tw-bg-primary tw-text-white">
                      <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                      <span>Sign in</span>
                    </button>
                  </div>

                  <div class="tw-text-sm tw-text-center ">
                    Or
                  </div>

                  <div v-if="true" class="mt-1">
                    <button :disabled="isLoadingGoogle" @click="googleWrapper.click()" class="tw-py-3 tw-px-7 tw-w-full tw-gap-3 tw-justify-center tw-border tw-border-solid tw-border-neutral-300 dark:tw-border-neutral-700 tw-text-capitalize tw-flex tw-items-center tw-rounded tw-text-sm dark:tw-text-white tw-text-neutral-700">
                      <v-icon v-if="isLoadingGoogle" size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[isLoadingGoogle && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                      <icon v-else icon="logos:google-icon" class="tw-text-lg" />
                      
                      <span class="tw-text-sm">Sign in with Google</span>
                    </button>
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
        
    <div class="dark:!tw-text-white dark:!tw-bg-neutral-900" ref="googleLoginBtn" />
    </div>

    </keep-alive>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo'
import User from '@/api/User'
import { required, isStringBetween } from '@/helpers/validators'
import { googleClientId } from '@/config/app'
import { parseJwt } from '@/helpers/methods'

export default {
  components: { AppLogo },

  data() {
    return {
      isLoading: false,
      isLoadingGoogle: true,

      googleWrapper: null,

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
        if(data?.code == 'SUCCESS') {
          const user = data.data.user;
          this.$store.dispatch('user/setUser', user);
          this.$store.dispatch('user/setIsLoggedIn', true);
          this.$store.dispatch('user/setIsAdmin', user.is_admin == 1);
          this.$router.push({ 'name': 'home' });
          
        }
        console.log(response);
      })
      .catch(error => {
        this.$handleApiError(error);
      }) 
      .finally(() => {
        this.isLoading = false
      })
    },

    loginWithGoogle() {
      this.isLoadingGoogle = true;
    },

    async handleCredentialResponse(response) {
         const userData = parseJwt(response.credential);

         console.log(userData);
    },

    createFakeGoogleWrapper() {
      const googleLoginWrapper = document.createElement("div");
      googleLoginWrapper.style.display = "none";
      
      this.$refs.googleLoginBtn.appendChild(googleLoginWrapper);
      
      // Use GSI javascript api to render the button inside the wrapper
      window.google.accounts.id.renderButton(googleLoginWrapper, {
        type: "icon",
        width: "200",
      });

      const googleLoginWrapperButton =
        googleLoginWrapper.querySelector("div[role=button]");

      this.isLoadingGoogle = false
      return {
        click: () => {
          googleLoginWrapperButton.click();
        },
      };
    },

    setGoogleAuth() {

      if(document.readyState == 'complete') {
          window.google.accounts.id.initialize({
          client_id: googleClientId,
          callback: this.handleCredentialResponse,
          auto_select: true,
          ux_mode: "popup"
        })

        this.googleWrapper = this.createFakeGoogleWrapper()
      } else {
        window.onload =  () => {
          window.google.accounts.id.initialize({
          client_id: googleClientId,
          callback: this.handleCredentialResponse,
          auto_select: true,
          ux_mode: "popup"
        })
  
        this.googleWrapper = this.createFakeGoogleWrapper()
      }

      // window.google.accounts.id.renderButton(
      //   this.$refs.googleLoginBtn, {
      //     text: 'continue_with', // 'signin_with' or 'signup_with' | 'continue_with' | 'signin'
      //     size: 'large', //'large' or 'small' | 'medium'
      //     width: 'full', // max width 400
      //     theme: 'outline', //'outline' or 'filled_black' |  'filled_blue'
      //     logo_alignment: 'left' // 'left' or 'center'
      //   }
      // )
      }
    }
  },
  mounted() {
    this.setGoogleAuth()
  },
}
</script>

<style>

</style>