<template>
  <div>
    <!-- <h2 class="tw-text-lg tw-text-neutral-600 dark:tw-text-neutral-200">Order</h2> -->
    <div class="tw-w-full tw-flex tw-items-center tw-p-3 tw-mb-3 tw-h-fit dark:tw-bg-neutral-800 tw-rounded md:tw-rounded-t-lg tw-bg-white">
      <div class="tw-flex tw-items-end">
        <div class="tw-text-lg tw-font-bold">
          Order #{{order.id}}
        </div>
        <p class="tw-text-xs tw-mb-1 tw-ml-2" style="line-height: 15px">13 Avr, 2023 at 4:39 PM</p>
      </div>
      <div class="tw-ml-4">
        <OrderStatus type="admin" :order="order" />
      </div>
      <div class="tw-ml-2">
        <OrderStatus type="user" :order="order" />
      </div>
    </div>
    <div class="tw-w-full tw-h-fit">
      <div class="tw-grid tw-grid-cols-12 tw-gap-5">
        <div class="md:tw-col-span-8 tw-col-span-12 dark:tw-bg-neutral-800 tw-rounded md:tw-rounded-bl-lg tw-bg-white">
          <OrderDetails :order="order" />
        </div>
        <div class="md:tw-col-span-4 tw-col-span-12 dark:tw-bg-neutral-800 tw-rounded md:tw-rounded-br-lg tw-bg-white">
            <CustomerInfo :order="order" />
            <ShippingInfo :order="order" />
            <PaymentInfo  :order="order" />
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerInfo from '@/components/dashboard/order/show/CustomerInfo'
import ShippingInfo from '@/components/dashboard/order/show/ShippingInfo'
import PaymentInfo from '@/components/dashboard/order/show/PaymentInfo'
import OrderDetails from '@/components/dashboard/order/show/OrderDetails'
import OrderStatus from '@/components/dashboard/order/OrderStatus'

import Order from '@/api/Order'

export default {
  components: { CustomerInfo, ShippingInfo, PaymentInfo, OrderDetails, OrderStatus },

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
    },
    id() {
      return this.$route.params.id
    },
    order() {
      return this.orders.find(o => o.id == this.id)
    }
  },

  methods: {
    getOrders() {
      return Order.all()
      .then(
        res => {
          if(res.data.code == 'SUCCESS') {
            this.$store.dispatch('order/setOrders', res.data.data.orders);
            
            if(this.order == undefined) {
              this.$router.push({name: 'dashboard/404'})
            }
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

    if(this.fetched) {
      if(this.order == undefined) {
        this.$router.push({name: 'dashboard/404'})
      }
    }
  }
}
</script>

<style>

</style>