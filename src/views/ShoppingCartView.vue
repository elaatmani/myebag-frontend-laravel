<template>
  <div class="tw-min-h-screen tw-max-h-[1000px]">
    <div class="my-5">
          <h1 class="tw-text-neutral-600 dark:tw-text-neutral-200 md:tw-text-xl tw-text-lg tw-font-medium">My Bag</h1>
          <p class="tw-text-neutral-500 dark:tw-text-neutral-400 tw-text-sm">Check your items and select your shipping for better experience order items.</p>
    </div>
    <div class="tw-grid tw-gap-5 tw-grid-cols-12">
        <div class="md:tw-col-span-8 tw-col-span-12">
          <ShoppingCart :all-items="cart" />
        </div>
        <div class="md:tw-col-span-4 tw-col-span-12 tw-h-fit dark:tw-bg-black/50 tw-bg-white tw-shadow-lg tw-shadow-neutral-500/10 dark:tw-shadow-neutral-700/10 tw-border tw-border-solid tw-border-neutral-400/30 tw-rounded">
          <OrderSummary />
        </div>
    </div>
  </div>
</template>

<script>
import OrderSummary from '@/components/checkout/OrderSummary'
import ShoppingCart from '@/components/checkout/ShoppingCart'

export default {
  components: { ShoppingCart, OrderSummary },

  computed: {
    cart() {
      return this.$store.getters['cart/cart']
    },
    visibleItems() {
      return [...this.cart].reverse().splice(0, 3)
    }
  }

}
</script>

<style>

</style>