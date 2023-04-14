<template>
  <div>
    <div class="tw-p-5">
        <h1>Order Summary</h1>
        <div class="tw-mt-3 tw-py-5 tw-flex tw-flex-col tw-gap-3 tw-mb-5 tw-border-y tw-border-neutral-400/20 tw-border-solid">
            <div class="tw-flex tw-items-center tw-justify-between tw-text-sm">
                <span class="dark:tw-text-neutral-400 tw-text-neutral-600">Subtotal</span>
                <span>$310,10</span>
            </div>
            <div class="tw-flex tw-items-center tw-justify-between tw-text-sm">
                <span class="dark:tw-text-neutral-400 tw-text-neutral-600">Shipping</span>
                <span>$5</span>
            </div>
            <div class="tw-flex tw-items-center tw-justify-between tw-text-md tw-mt-3">
                <span class="dark:tw-text-neutral-200 tw-text-neutral-800 tw-font-bold">Total</span>
                <span class="tw-text-primary tw-font-black">$315,10</span>
            </div>
        </div>
        <div>
            <!-- <router-link :to="{ name: 'checkout' }" class="tw-w-full"> -->
                <button @click="placeOrder" class="tw-w-full tw-font-medium tw-gap-2 tw-text-sm tw-flex tw-justify-center tw-text-center tw-py-2 tw-px-7 tw-items-center tw-rounded tw-bg-primary tw-text-white">
                   <v-icon class="tw-animate-spin" v-if="isLoading" >mdi-loading</v-icon>
                  
                  <span>
                    Pay <span class="tw-mr-2">$315,10</span>
                  </span>
                </button>
              <!-- </router-link> -->
        </div>
    </div>
  </div>
</template>

<script>
import Order from '@/api/Order'
export default {

    data() {
        return {
            isLoading: false
        }
    },

    computed: {
        cart() {
            return this.$store.getters['cart/cart']
        }
    },

    methods: {
        placeOrder() {
            this.isLoading = true
            console.log(this.cart);
            Order.create(
                { items: this.cart }
            )
            .then(
                res => {
                    console.log(res.data);
                },
                this.$handleApiError
            )
            .finally(
                () => this.isLoading = false
            )
        }
    }
}
</script>

<style>

</style>