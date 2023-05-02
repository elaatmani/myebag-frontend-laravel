<template>
  <div class="tw-bg-white dark:tw-bg-neutral-800 tw-min-h-screen">


    <!-- Application header -->
    <div>
        <Header />
    </div>
    <!-- /Application header -->

    <!-- Application Sidebar -->
    <div>
      <Sidebar />
    </div>
    <!-- /Application Sidebar -->

    <!-- Application main view -->
    <v-container class="xl:tw-max-w-[1200px] sm:tw-px-3 tw-px-3 tw-pt-[70px]">
        <div v-if="!isReady" class="tw-pt-10">
          <div class="tw-min-h-[600px]">
          <loading />

          </div>
        </div>
        <router-view v-else></router-view>
    </v-container>
    <!-- /Application main view -->

    <!-- Application Footer -->
    <div>
      <Footer />
    </div>
    <!-- Application Footer -->

    <Alert />

  </div>
</template>

<script>
import Header from '@/layouts/default/partials/AppHeader'
import Sidebar from '@/layouts/default/partials/AppSidebar.vue'
import Footer from '@/layouts/default/partials/AppFooter.vue'
import Alert from '@/components/AlertVue'
import App from '@/api/App'

export default {
    components: { Header, Sidebar, Footer, Alert },

    data()  {
      return {
        isLoaded: false
      }
    },

    watch: {
      $route() {
        window.scrollTo(0,0)
      }
    },

    computed: {
      isReady() {
        return this.$store.getters['app/isReady']
      }
    },

    methods: {
      getState() {
        
        return App.index()
        .then(
          res => {
            if (res.data.code == 'SUCCESS') {
              const featured = res.data.data.featured || [];
              const sizes = res.data.data.sizes || [];
              const colors = res.data.data.colors || [];

              this.$store.dispatch('app/setFeatured', featured)
              this.$store.dispatch('app/setSizes', sizes)
              this.$store.dispatch('app/setColors', colors)
              this.$store.dispatch('app/setIsReady', true)

            }

            return res
          },
          this.$handleApiError
        )
      },
    },

    mounted() {
    console.log(this.isReady);
    if(!this.isReady) {
      this.getState()
    }
  }
}
</script>

<style>

</style>