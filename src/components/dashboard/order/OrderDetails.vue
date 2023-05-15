<template>
  <div>
    <teleport to='.my-application'>
        <div v-if="!!order" :class="[active && '!tw-translate-x-0']" class="tw-fixed tw-translate-x-full tw-duration-300 tw-top-0 md:tw-top-0 tw-right-0 md:tw-w-1/2 tw-w-10/12 tw-h-screen dark:tw-bg-neutral-900 tw-bg-neutral-100 tw-z-[1001]">
            <div class="tw-py-5 tw-px-3">
                <OrderDetails  :order="order" />
            <div v-if="false">
                <div :class="['tw-border-y tw-py-5']" class="tw-mt-3 tw-flex tw-flex-col tw-gap-3 tw-border-neutral-400/20 tw-border-solid">
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
            </div>
            </div>
        </div>
        <div @click="close" :class="[active && '!tw-opacity-100 !tw-z-[1000] !tw-pointer-events-auto']" class="tw-duration-300 tw-fixed tw-top-0 md:tw-top-0 tw-right-0 tw-w-full tw-h-screen tw-bg-black/70 tw-pointer-events-none tw-opacity-0">
        </div>
    </teleport>
  </div>
</template>

<script>
import OrderDetails from './show/OrderDetails.vue'

export default {
    components: { OrderDetails },

    computed: {
        active: {
            get() {
                return this.$store.getters['order/isOrderDetailsActive']
            },
            set(value) {
                this.$store.dispatch('order/isOrderDetailsActive', value)
            }
        },
        order() {
            return this.$store.getters['order/orderDetails']
        },
        total() {
            let total = 0;
            this.order.order_items.forEach(element => {
                total += element.product_variation.price * element.quantity
            });
            return total
        }
    },

    methods: {
        close() {
            this.$store.dispatch('order/setIsOrderDetailsActive', false)
        }
    }
}
</script>

<style>

</style>