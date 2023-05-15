<template>
  <div>
    <h2 class="tw-text-lg tw-text-neutral-600 dark:tw-text-neutral-200">Orders</h2>
    <p class="tw-text-sm tw-mb-3 tw-font-light tw-text-neutral-500 dark:tw-text-neutral-300">List of all orders</p>
    <div class="tw-w-full tw-h-fit dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
      <div class="tw-grid tw-grid-cols-12 tw-p-3 tw-pb-0 tw-gap-2">
        <div class="tw-col-span-12">
          <div>
            <OrdersTable :is-loaded="fetched" :all-items="orders" />
          </div>
        </div>
      </div>
    </div>
    
    <OrderDetails />
  </div>
</template>

<script>
import OrdersTable from '@/components/dashboard/order/OrdersTable.vue'
import OrderDetails from '@/components/dashboard/order/OrderDetails'

import Order from '@/api/Order'

export default {
  components: { OrdersTable, OrderDetails },

  data() {
    return {
    }
  },

  computed: {
    orders() {
      return this.$store.getters['order/orders']
    },
    fetched() {
      return this.$store.getters['order/fetched']
    }
  },

  methods: {
    getOrders() {
      Order.all()
      .then(
        res => {
          if(res.data.code == 'SUCCESS') {
            this.$store.dispatch('order/setOrders', res.data.data.orders)
          }
        },
        (err) => {
          this.$handleApiError(err)
          this.$store.dispatch('order/setOrders', [])
        }
      )
      .finally(
        () => this.$store.dispatch('order/setFetched', true)
      )
    }
  },

  mounted() {
    if(!this.fetched) {
      this.getOrders()
    }
  }
}
</script>

<style>

</style>