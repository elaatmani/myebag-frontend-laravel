<template>
  <v-app class="my-application dark:tw-text-neutral-200 tw-text-neutral-800">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import User from './api/User'

export default {
  name: 'App',

  data: () => ({
    //
  }),

  watch: {
    primary: {
      deep: true,
      handler() {
        this.mountVariables()
      }
    },
    secondary: {
      deep: true,
      handler() {
        this.mountVariables()
      }
    },

  },

  computed: {
    isLoggedIn() {
      return this.$store.getters['user/isLoggedIn']
    },
    primary() {
      return this.$primary.value.main
    },
    secondary() {
      return this.$secondary.value.main
    },
    logoWidth() {
      return this.$store.getters['app/logoWidth']
    }
  },

  methods: {
    check() {
      User.current()
      .then(
        res => {
          const user = res.data;
          this.$store.dispatch('user/setUser', user);
          this.$store.dispatch('user/setIsLoggedIn', true);
          this.$store.dispatch('user/setIsAdmin', user.is_admin == 1);
        }
      )
      .catch(
        err => {
          this.$handleApiError(err)
        }
      )
    },
    mountVariables() {
      document.documentElement.style.setProperty('--primary', this.$primary.value.main)
      document.documentElement.style.setProperty('--primary-dark', this.$primary.value.dark)
      document.documentElement.style.setProperty('--primary-light', this.$primary.value.light)
      document.documentElement.style.setProperty('--secondary', this.$secondary.value.main)
      document.documentElement.style.setProperty('--secondary-dark', this.$secondary.value.dark)
      document.documentElement.style.setProperty('--secondary-light', this.$secondary.value.light)
      document.documentElement.style.setProperty('--logo-width', `${this.logoWidth}px`);
    }
  },

  mounted() {
    if(this.isLoggedIn) {
      console.log('checking...');
      this.check();
    }

    this.mountVariables()

    document.querySelector("[rel='icon']")
    .href = this.$backend('storage/images/logos/logo.svg')
    
  }
}
</script>

<style lang="scss"  >
  @font-face {
    font-family: "Nunito";
    src: url("@/assets/font/Nunito-VariableFont_wght.ttf");
    font-weight: 100 1000;
  }

  $font-family: 'Nunito', serif;
  .my-application {
    .headline,
    [class*='display-'],
    [class*='text-'] {
      font-family: $font-family, sans-serif !important;
    }
    font-family: $font-family, sans-serif !important;
  }
</style>

<style>
  /* :root {
    --primary: v-bind($primary.value.main);
    --secondary: v-bind($secondary.value.main) 
  } */

 ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
  }

  ::-webkit-scrollbar-thumb {
      width: 15px;
      background: rgb(var(--primary));
  }

  ::-webkit-scrollbar-track {
      background-color: rgba(0,0,0,.7);
  }
</style>