<template>
  <div>
    <h2 class="tw-mb-3 tw-text-lg">Dashboard</h2>
    <div class="tw-w-full dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
      
      <div class="tw-grid tw-grid-cols-12 tw-p-3 tw-gap-2">
        <div class="tw-col-span-12 tw-grid tw-grid-cols-12 tw-max-h-0 tw-overflow-hidden tw-duration-500" :class="[filters && '!tw-max-h-[500px] !tw-overflow-visible']">
            <div class="tw-w-full tw-h-fit tw-flex tw-items-center tw-pt-2 tw-col-span-12 md:tw-col-span-6 tw-gap-2">
                <!-- Date filter -->
                <vue-date-picker class="tw-flex-1" :dark="dark" v-model="fromDate"></vue-date-picker>
                <p class="tw-text-xs">To</p>
                <vue-date-picker class="tw-flex-1" :dark="dark" v-model="toDate"></vue-date-picker>
            </div>
        </div>
        <div class="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3 tw-h-[100px] tw-overflow-hidden dark:tw-bg-blue-600 tw-rounded-md tw-bg-blue-400">
          <div class="tw-p-5 tw-relative tw-text-white">
            <h1 class="tw-text-sm tw-font-medium">Orders</h1>
            <div class="tw-text-whit tw-text-xl tw-font-bold">
              <number :from="0" :to="orders.length" :duration="2" easing="Power1.Expo" />
            </div>
            <div class="tw-absolute tw-text-white tw-top-1/2 -tw-translate-y-1/2 tw-right-0 tw-text-[80px] tw-opacity-30">
              <icon icon="ph:package" />
            </div>
          </div>
        </div>
        <div class="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3 tw-overflow-hidden tw-h-[100px] dark:tw-bg-green-600 tw-rounded-md tw-bg-green-400">
          <div class="tw-p-5 tw-relative  tw-text-white">
            <h1 class="tw-text-sm tw-font-medium">Earnings</h1>
            <div class="tw-text-whit tw-text-xl tw-font-bold">
              $<number :from="0" :to="earnings" :duration="2" easing="Power1.Expo" />
            </div>
            <div class="tw-absolute tw-text-white tw-top-1/2 -tw-translate-y-1/2 tw-right-0 tw-text-[80px] tw-opacity-30">
              <icon icon="ph:currency-circle-dollar" />
            </div>
          </div>
        </div>
        <div class="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3 tw-h-[100px] tw-overflow-hidden dark:tw-bg-orange-600 tw-rounded-md tw-bg-orange-400">
          <div class="tw-p-5 tw-relative tw-text-white">
            <h1 class="tw-text-sm tw-font-medium">Customers</h1>
            <div class="tw-text-whit tw-text-xl tw-font-bold">
              <number :from="0" :to="users.length" :duration="2" easing="Power1.Expo" />
            </div>
            <div class="tw-absolute tw-text-white tw-top-1/2 -tw-translate-y-1/2 tw-right-0 tw-text-[80px] tw-opacity-30">
              <icon icon="ph:user" />
            </div>
          </div>
        </div>
        <div class="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3 tw-h-[100px] tw-overflow-hidden dark:tw-bg-red-600 tw-rounded-md tw-bg-red-400">
          <div class="tw-p-5 tw-relative tw-text-white">
            <h1 class="tw-text-sm tw-font-medium">Products</h1>
            <div class="tw-text-whit tw-text-xl tw-font-bold">
              <number :from="0" :to="products.length" :duration="2" easing="Power1.Expo" />
            </div>
            <div class="tw-absolute tw-text-white tw-top-1/2 -tw-translate-y-1/2 tw-right-0 tw-text-[80px] tw-opacity-30">
              <icon icon="ph:currency-circle-dollar" />
            </div>
          </div>
        </div>
      </div>

      <div class="tw-grid tw-grid-cols-12 tw-p-3">
        <div class="md:tw-col-span-6 tw-col-span-12">
          <ChartBar />
        </div>
        <div class="md:tw-col-span-6 tw-col-span-12">
          <ChartLine />
        </div>
      </div>

      <LatestOrders v-if="false" />

    </div>

  </div>
</template>

<script>
import LatestOrders from '@/views/dashboard/analytics/LatestOrders'
import ChartBar from '@/views/dashboard/analytics/ChartBar'
import ChartLine from '@/views/dashboard/analytics/ChartLine'
export default {
  components: { LatestOrders, ChartBar, ChartLine },

  data() {
    return {
      filters: true,
      fromDate: new Date(),
      toDate: new Date()
    }
  },

  computed: {
    dark() {
            return this.$store.getters['theme/isDarkMode']
        },

    orders() {
      return this.$store.getters['order/orders']
    },

    users() {
      return this.$store.getters['user/users']
    },

    products() {
      return this.$store.getters['product/products']
    },

    earnings() {
      let total = 0;
      this.orders.forEach(o => {
        if(o.order_status.mark_as_paid) {
          total += o.total
        }
      });
      return total
    }
  }

}
</script>

<style>

</style>