<template>
  <div>
    <div class="tw-flex tw-items-center tw-gap-1">
        <div :class="[order.payment_detail?.status == 0 && 'dark:!tw-text-pink-300 dark:!tw-bg-pink-300/10 !tw-text-pink-600 !tw-bg-pink-600/10']" class="tw-flex tw-items-center tw-gap-2 tw-px-2 tw-py-1 tw-rounded tw-w-full tw-max-w-[100px] tw-justify-between dark:tw-text-emerald-300 dark:tw-bg-emerald-300/10 tw-text-emerald-600 tw-bg-emerald-600/10">
            <p class="tw-text-sm">$ {{ order.payment_detail?.amount }}</p>
            <icon class="tw-text-xl" :icon="getProviderIcon(order.payment_detail?.provider)" />
        </div>
        <button @click="popup = true" class="tw-px-2 tw-py-1 tw-flex tw-items-center tw-bg-emerald-500 tw-rounded">
            <v-icon class="tw-text-xs tw-text-white">mdi-check</v-icon>
        </button>
    </div>
    <popup :visible="popup" @cancel="popup = false">
        <div class="tw-mx-auto tw-w-[95%] md:tw-max-w-[400px] tw-overflow-hidden tw-min-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md  tw-my-5 tw-rounded-lg">
            <div class="tw-px-5 tw-flex dark:tw-text-neutral-400 tw-text-neutral-500 tw-items-center tw-gap-4 tw-py-4 dark:tw-bg-neutral-800 tw-bg-white">
            <v-icon size="x-large" class="dark:tw-text-emerald-400 tw-text-emerald-500">mdi-information-outline</v-icon>
            <p>
                Confirm Payment ?
            </p>
            </div>
            <div class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-neutral-100">
            <button @click="popup = false" class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-black/20 tw-bg-neutral-300  dark:tw-bg-neutral-600  tw-duration-300  tw-text-neutral-900 dark:tw-text-neutral-300">
                Cancel
            </button>
            <button @click="handleConfirm" class="tw-py-2 tw-px-7 tw-flex tw-items-center tw-font-medium tw-rounded tw-text-sm tw-bg-emerald-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-emerald-600 dark:tw-border-neutral-900 dark:hover:tw-border-emerald-500 hover:tw-bg-emerald-500/80 dark:hover:tw-bg-emerald-400 tw-duration-300  tw-text-neutral-800">
                <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                <span>{{isLoading ? 'Confirming...' : 'Confirm'}}</span>
            </button>
            </div>
        </div>
        </popup>
  </div>
</template>

<script>
export default {
    props: ['order'],

    data() {
        return {
        popup: false,
        isLoading: false,
        }
    },

    methods: {
        handleConfirm() {
            this.isLoading = true

            const order = {
                ...this.order,
                payment_detail: {
                    ...this.order.payment_detail,
                    status: true
                }
            }

            setTimeout(
                () => {
                    this.$store.dispatch('order/updateOrder', order)
                    this.$alert({
                        type: 'success',
                        body: 'Payment confirmed !'
                    })
                    this.isLoading = false
                    this.popup = false
                }, 1500
            )
        },

        getProviderIcon(provider) {
            switch (provider) {
                case 'paypal':
                    return 'ph:paypal-logo';

                case 'stripe':
                    return 'ph:credit-card';

                case 'cod':
                    return 'fluent:money-hand-20-regular';

                default:
                    return 'ph:currency-circle-dollar';
            }
        },
    }
}
</script>

<style>

</style>