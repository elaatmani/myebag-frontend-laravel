<template>
  <div v-if="isAdmin && isLoggedIn">
    <v-layout class="tw-bg-neutral-100 dark:tw-text-white dark:tw-bg-neutral-900/90 tw-min-h-screen">

        <Sidebar />

        <Header />

        <Alert />

      <v-main class="tw-min-h-screen">
        <v-container class="xl:tw-max-w-[1500px]">

            <router-view v-if="isDataReady"></router-view>

            <div v-if="!isDataReady" class="tw-h-[500px] tw-w-full tw-flex tw-items-center tw-justify-center">
              <loading-dash class="tw-scale-50"></loading-dash>
            </div>
        </v-container>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
import Header from '@/layouts/dashboard/partials/AppHeader'
import Sidebar from '@/layouts/dashboard/partials/AppSidebar'
import Alert from '@/components/AlertVue'
import Size from '@/api/Size'
import Color from '@/api/Color'
import Category from '@/api/Category'

export default {
    components: { Header, Sidebar, Alert },

    data() {
        return {
            drawer: true,
            isDataReady: false
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

    methods: {
      getSizes() {
        return Size.all()
        .then(
          res => {
            if(res.data.code == 'SUCCESS') {
              this.$store.dispatch('app/setSizes', res.data.data.sizes)
              return res.data
            }
          },
          err => {
            this.$handleApiError(err)
            return err
          }
        )
      },

      getColors() {
        return Color.all()
        .then(
          res => {
            if(res.data.code == 'SUCCESS') {
              this.$store.dispatch('app/setColors', res.data.data.colors)
              return res.data
            }
          },
          err => {
            this.$handleApiError(err)
            return err
          }
        )
      },

      getCategories() {
        return Category.all()
        .then(
          res => {
            if(res.data.code == 'SUCCESS') {
              this.$store.dispatch('category/setCategories', res.data.data.categories)
              return res.data
            }
          },
          err => {
            this.$handleApiError(err)
            return err
          }
        )
      },

      getData() {
        this.isDataReady = false;
        Promise.allSettled([this.getColors(), this.getSizes(), this.getCategories()])
        .then(
          res => {
            if(res.every(i => i.status == 'fulfilled')) {
              this.isDataReady = true
              console.log(res);
            }
          }
        )
      }
    },

    mounted() {
      if(!this.isLoggedIn && !this.isAdmin) {
        this.$router.push({'name': 'home'})
        return false;
      }

      this.getData()
    }

}
</script>

<style>

</style>