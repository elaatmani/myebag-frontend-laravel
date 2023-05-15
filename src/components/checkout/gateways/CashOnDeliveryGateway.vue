<template>
  <div class="tw-flex tw-items-start tw-justify-end tw-gap-2">
    <button
          @click="$emit('cancel')"
          class="tw-w-fit tw-font-medium tw-gap-2 tw-text-sm tw-flex tw-justify-center tw-text-center tw-py-2 tw-px-7 tw-items-center tw-rounded tw-bg-neutral-200 tw-text-neutral-700 dark:tw-bg-neutral-600 dark:tw-text-neutral-300"
        >
          Cancel
        </button>
    <button
        @click="createOrder"
        class="tw-w-fit tw-font-medium tw-gap-2 tw-text-sm tw-flex tw-justify-center tw-text-center tw-py-2 tw-px-7 tw-items-center tw-rounded tw-bg-violet-500 tw-text-white"
    >
        
        Pay
    </button>
  </div>
</template>

<script>
import Order from '@/api/Order';
export default {

    computed: {
        cart() {
            return this.$store.getters['cart/cart']
        },

        shipping() {
            return 5
        },

        total() {
            let total = 0;

            this.cart.forEach(item => {
                total += (item.variation.price * item.quantity)
            });

            return total + this.shipping
        },
        address() {
            return this.$store.getters['checkout/address']
        }
    },

    methods: {
        createOrder() {
            this.$emit('processing', true)
            const order = {
                total: this.total,
                items: this.cart.map(i => {
                    return {
                        product_variation_id: i.variation.id,
                        quantity: i.quantity
                    }
                }),
                payment_details: {
                    amount: this.total,
                    provider: 'cod',
                    status: false
                },
                shipping_address: this.address
            }
            Order.create(order)
            .then(
                res => {
                    if(res.data.code == 'SUCCESS') {
                        this.$alert({
                            body: 'Order completed !',
                            type: 'success'
                        })
                        this.$emit('processing', false)
                        this.nextStep()
                    }
                },
                this.$handleApiError
            )
        },
        nextStep() {
            this.$emit('orderCompleted', 4)
        },
    },

    mounted() {
        console.log(this.address);
    }
}
</script>

<style>

</style>