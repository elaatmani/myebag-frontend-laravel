<template>
  <div>
    <h1 class="tw-mb-1">My bag</h1>
    <div>
      <ShoppingCart :all-items="cart" />
    </div>
    <div class="tw-mt-5 tw-flex tw-justify-end">
      <button @click="$emit('update-step', 2)" class="tw-w-fit  tw-font-medium tw-gap-2 tw-text-sm tw-flex tw-justify-center tw-text-center tw-py-2 tw-px-7 tw-items-center tw-rounded tw-bg-violet-500 tw-text-white">
          Next
      </button>
    </div>
  </div>
</template>

<script>
import ShoppingCart from '@/components/checkout/ShoppingCart'
export default {
  components: {ShoppingCart},

  computed: {
    cart() {
      return this.$store.getters['cart/cart']
    },
  }

}
</script>

<style>

</style>