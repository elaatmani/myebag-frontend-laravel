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
      <div class="tw-py-1 tw-px-2 tw-font-bold tw-rounded tw-capitalize tw-text-xs tw-ml-4" :style="{color: order.order_status.text_color, background: order.order_status.background_color}">
        {{ order?.order_status?.name.toLocaleLowerCase() }}
      </div>
    </div>
    <div class="tw-w-full tw-h-fit">
      <div class="tw-grid tw-grid-cols-12 tw-gap-5">
        <div class="md:tw-col-span-8 tw-col-span-12 dark:tw-bg-neutral-800 tw-rounded md:tw-rounded-bl-lg tw-bg-white">
          <div class="">
            <h1 class="tw-px-3 tw-py-2 tw-border-b dark:tw-border-neutral-700 tw-border-neutral-200">Order Details</h1>


          </div>
        </div>
        <div class="md:tw-col-span-4 tw-col-span-12 dark:tw-bg-neutral-800 tw-rounded md:tw-rounded-br-lg tw-bg-white">
          <div class="">
            <div class="tw-border-b dark:tw-border-neutral-700 tw-border-neutral-200">
              <h1 class="tw-px-3 tw-py-2">Customer Info</h1>
              <div class="tw-p-3 tw-flex tw-gap-3">
                <div>
                  <img class="tw-w-[45px] tw-h-[45px] tw-rounded-full tw-object-contain" :src="$frontend('assets/images/avatars/2.webp')" alt="profile">
                </div>
                <div>
                  <p>Yassine El Aatmani</p>
                  <p class="tw-text-sm dark:tw-text-neutral-400 tw-text-neutral-500 tw-flex tw-items-center tw-gap-1 tw-font-light"><span>devyassine47@gmail.com</span> <icon class="tw-text-blue-500 dar:tw-text-blue-400 tw-text-lg" icon="ph:check-circle" /></p>
                </div>
              </div>
              <div class="tw-px-3 tw-mb-3 tw-flex tw-justify-between tw-items-center">
                  <p class="dark:tw-text-blue-400 tw-text-blue-500 tw-flex tw-items-center tw-text-sm tw-gap-2"><icon class="tw-text-lg" icon="ph:package" /> 11 Orders</p>
                  <p class="dark:tw-text-blue-400 tw-text-blue-500 tw-text-xs">View</p>
              </div>
            </div>
            <div class="tw-border-b dark:tw-border-neutral-700 tw-border-neutral-200">
              <h1 class="tw-px-3 tw-py-2">Shipping Info</h1>
              <div class="tw-p-3">
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <p class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500">Address:</p>
                        </td>
                        <td>
                          <p class="tw-py-1 tw-text-sm tw-ml-2">Laura Petkova 3400 Montana, Bulgaria</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500">City:</p>
                        </td>
                        <td>
                          <p class="tw-py-1 tw-text-sm tw-ml-2">Marrakech</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500">Country:</p>
                        </td>
                        <td>
                          <p class="tw-py-1 tw-text-sm tw-ml-2">Morocco</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500">Telephone:</p>
                        </td>
                        <td>
                          <p class="tw-py-1 tw-text-sm tw-ml-2">0608944024</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="">
              <h1 class="tw-px-3 tw-py-2">Payment Info</h1>
              <div class="tw-p-3">
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <p class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500">Payment Method:</p>
                        </td>
                        <td>
                          <p class="tw-py-1 tw-text-sm tw-ml-2">Cash On Delivery</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500">Amount:</p>
                        </td>
                        <td>
                          <p class="tw-py-1 tw-text-sm tw-ml-2">$140.99</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500">Status:</p>
                        </td>
                        <td>
                          <p class="tw-py-1 tw-text-sm tw-ml-2 tw-text-emerald-500">Completed</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <OrderDetails />
  </div>
</template>

<script>
import OrderDetails from '@/components/dashboard/order/OrderDetails'

import Order from '@/api/Order'

export default {
  components: { OrderDetails },

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