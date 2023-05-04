<template>
  <div class="tw-h-fit">
    <div class="tw-p-5 tw-h-fit">
        <h1>Order Summary</h1>
        <div :class="[pay ? 'tw-border-y tw-mb-5 tw-py-5 ': 'tw-border-t tw-pt-5']" class="tw-mt-3 tw-flex tw-flex-col tw-gap-3 tw-border-neutral-400/20 tw-border-solid">
            <div class="tw-flex tw-items-center tw-justify-between tw-text-sm">
                <span class="dark:tw-text-neutral-400 tw-text-neutral-600">Subtotal</span>
                <span>${{ total }}</span>
            </div>
            <div class="tw-flex tw-items-center tw-justify-between tw-text-sm">
                <span class="dark:tw-text-neutral-400 tw-text-neutral-600">Shipping</span>
                <span>$5</span>
            </div>
            <div class="tw-flex tw-items-center tw-justify-between tw-text-md tw-mt-3">
                <span class="dark:tw-text-neutral-200 tw-text-neutral-800 tw-font-bold">Total</span>
                <span class="tw-text-violet-500 tw-font-black">${{total + 5}}</span>
            </div>
        </div>

        <router-link v-if="pay" :to="{ name: isLoggedIn ? 'checkout' : 'login'}" class="tw-w-full tw-font-medium tw-gap-2 tw-text-sm tw-flex tw-justify-center tw-text-center tw-py-2 tw-px-7 tw-items-center tw-rounded tw-bg-primary tw-text-white">        
            <span>
                Proceed to Pay
            </span>
        </router-link>

    </div>
  </div>
</template>

<script>
export default {

    props: {
        pay: {
            required: false,
            default: true
        }
    },


    data() {
        return {
            isLoading: false,

            tab: 1,

            tabs: [
                {
                    id: 1,
                    component: 'proceed-to-pay'
                },
                {
                    id: 2,
                    component: 'pay-with'
                }
            ]
        }
    },

    computed: {
        cart() {
            return this.$store.getters['cart/cart']
        },
        total() {
            let total = 0;

            this.cart.forEach(item => {
                total += (item.variation.price * item.quantity)
            });

            return total;
        },

        isLoggedIn() {
            return this.$store.getters['user/isLoggedIn']
        }
    },

    methods: {
        handleUpdate(id) {
            console.log('updated with: ', id);
            this.tab = id
        }
    }
}
</script>

<style>

</style>