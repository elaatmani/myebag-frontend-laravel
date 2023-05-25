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
              <div class="tw-scale-50">
              <loading-dash></loading-dash>
              </div>
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
import App from '@/api/App'

export default {
    components: { Header, Sidebar, Alert },

    data() {
        return {
            drawer: true,
            // isDataReady: false,
            orderChannel: null,
            isSubscribed: false
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
        },
        isDataReady() {
          return this.$store.getters['app/isReady']
        }
    },

    methods: {

      getState() {
        App.dashboard()
        .then(
          res => {
            if(res.data.code == 'SUCCESS') {
              this.$store.dispatch('app/setSizes', res.data.data.sizes)
              this.$store.dispatch('app/setColors', res.data.data.colors)
              this.$store.dispatch('app/setOptions', res.data.data.options);
              this.$store.dispatch('app/setOrderStatuses', res.data.data.order_statuses);
              this.$store.dispatch('product/setProducts', res.data.data.products)
              this.$store.dispatch('user/setUsers', res.data.data.users)
              // this.$store.dispatch('product/setFetched', true)
              this.$store.dispatch('app/setSliders', res.data.data.sliders);
              this.$store.dispatch('category/setCategories', res.data.data.categories);
              this.$store.dispatch('app/setIsReady', true);
              
              return res.data
            }
          },
          err => {
            this.$handleApiError(err)
          }
        )
      },

      subscribeToEvents() {
        let Pusher = window.Pusher
        var pusher = new Pusher('493c0271d5ff1b957dac', {
          cluster: 'eu'
        });

        this.orderChannel = pusher.subscribe('order');
        
        this.orderChannel.bind('new-order', (data) => {
          this.$store.dispatch('order/addOrder', data.order)
          this.$alert({
            type: 'success',
            body: 'New Order !'
          })
        });

        this.isSubscribed = true
      }
    },

    mounted() {
      if(!this.isLoggedIn && !this.isAdmin) {
        this.$router.push({'name': 'home'})
        return false;
      }

      this.getState()
      if(!this.isSubscribed) {
        // this.subscribeToEvents()
      }
    }

}
</script>

<style>

</style>