<template>
  <div>
    <h1 class="tw-text-2xl tw-font-bold">Thank You!</h1>
    <h2 class="tw-mt-2 tw-mb-3 tw-text-lg tw-font-medium">It's on the way!</h2>
    <p class="tw-text-sm dark:tw-text-neutral-400 tw-text-neutral-600">Hi {{ user?.firstname }}, your Order has been confirmed and will be shipping soon</p>
    <div class="tw-mt-3 tw-py-5 tw-border-t tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300">
      <h2 class="tw-text-lg tw-mb-3">Order #154</h2>
      <ShoppingCart :all-items="items" />
    </div>
    <div class="tw-flex tw-justify-end">
      <router-link :to="{ name: 'home'}" class="tw-w-fit tw-font-medium tw-gap-2 tw-text-sm tw-flex tw-justify-center tw-text-center tw-py-2 tw-px-7 tw-items-center tw-rounded tw-bg-primary tw-text-white">        
            <span>
                Continue Shopping
            </span>
        </router-link>
    </div>
  </div>
</template>

<script>
import ShoppingCart from '../ShoppingCart.vue'
export default {
  components: { ShoppingCart },

  data() {
    return {
      items: []
    }
  },

  computed: {
    user() {
      return this.$store.getters['user/user']
    },
    cart() {
      return this.$store.getters['cart/cart']
    }
  },

  mounted() {
    this.items = [...this.cart]
    this.$store.dispatch('cart/setCart', []);
  }
}
</script>

<style>

</style>