<template>
  <div class="tw-min-h-screen">
    
    <div class="dark:tw-bg-neutral-900 tw-border dark:tw-border-neutral-700 tw-p-5 tw-rounded">
        <div class="mb-5">
            <h1 class="tw-text-neutral-600 dark:tw-text-neutral-200 md:tw-text-xl tw-text-lg tw-font-medium">Checkout</h1>
            <!-- <p class="tw-text-neutral-500 dark:tw-text-neutral-400 tw-text-sm">Check your items and select your shipping for better experience order items.</p> -->
        </div>
        <div>
            <TimelineStepper @update-step="handleUpdateStep" :step="step" />
        </div>

        <div class="tw-grid tw-grid-cols-12 tw-mt-10 tw-gap-5">
            <div class="md:tw-col-span-8 tw-col-span-12">
                <v-window v-model="step">
                    <v-window-item
                        v-for="(t) in tabs" :key="t.id"
                        :value="t.id"
                    >
                        <component @update-step="handleUpdateStep" :is="t.component" />
                    </v-window-item>
                </v-window>
            </div>
            <div class="md:tw-col-span-4 tw-col-span-12 md:tw-pt-7">
                <OrderSummary :pay="false" class="tw-border tw-border-solid dark:tw-border-neutral-700 tw-rounded" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import TimelineStepper from '@/components/checkout/partials/TimelineStepper'
import BagTab from '@/components/checkout/partials/BagTab'
import AddressTab from '@/components/checkout/partials/AddressTab'
import PaymentTab from '@/components/checkout/partials/PaymentTab'
import OrderSummary from '@/components/checkout/OrderSummary'
import CompletedTab from '@/components/checkout/partials/CompletedTab'

export default {
  components: { TimelineStepper, BagTab, AddressTab, PaymentTab, OrderSummary, CompletedTab },

  data() {
    return {
        step: 1,
        tabs: [
            {
                id: 1,
                name: 'Bag',
                component: 'bag-tab'
            },
            {
                id: 2,
                name: 'Address',
                component: 'address-tab'
            },
            {
                id: 3,
                name: 'Payment',
                component: 'payment-tab'
            },
            {
                id: 4,
                name: 'Completed',
                component: 'completed-tab'
            },

        ]
    }
  },

  computed: {
    cart() {
      return this.$store.getters['cart/cart']
    },
    visibleItems() {
      return [...this.cart].reverse().splice(0, 3)
    }
  },

  methods: {
    handleUpdateStep(number) {
        this.step = number
    }
  },

  mounted() {
  }

}
</script>

<style>

</style>