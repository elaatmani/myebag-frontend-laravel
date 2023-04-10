<template>
  <div v-if="isAdmin && isLoggedIn">
    <v-layout class="tw-bg-neutral-100 dark:tw-text-white dark:tw-bg-neutral-900/90 tw-min-h-screen">

        <Sidebar />

        <Header />

        <Alert />

      <v-main style="min-height: 300px;">
        <v-container class="xl:tw-max-w-[1500px]">
            <router-view></router-view>
        </v-container>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
import Header from '@/layouts/dashboard/partials/AppHeader'
import Sidebar from '@/layouts/dashboard/partials/AppSidebar'
import Alert from '@/components/AlertVue'

export default {
    components: { Header, Sidebar, Alert },

    data() {
        return {
            drawer: true,
        }
    },

    watch: {
      isLoggedIn(newValue) {
        if(!newValue) {
          this.$router.push({'name': 'home'})
        }
      },
      isAdmin(newValue) {
        if(!newValue) {
          this.$router.push({'name': 'home'})
        }
      },

    },

    computed: {
        isLoggedIn() {
          return this.$store.getters['user/isLoggedIn']
        },
        isAdmin() {
          return this.$store.getters['user/isAdmin']
        }
    },

    mounted() {
      if(!this.isLoggedIn && !this.isAdmin) {
        this.$router.push({'name': 'home'})
      }
    }

}
</script>

<style>

</style>