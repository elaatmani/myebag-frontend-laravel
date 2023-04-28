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

  computed: {
    isLoggedIn() {
      return this.$store.getters['user/isLoggedIn']
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
    }
  },

  mounted() {
    if(this.isLoggedIn) {
      console.log('checking...');
      // this.check()
    }
    
  }
}
</script>

<style lang="scss" scoped>
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