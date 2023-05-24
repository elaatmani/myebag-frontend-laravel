<template>
  <div>
    <h1>Accepted Methods</h1>
    <div class="tw-grid tw-grid-cols-12 tw-mt-3 tw-gap-5">

        <div class="md:tw-col-span-4 tw-col-span-12 tw-flex tw-justify-center tw-w-full tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
            <label class="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer">
                <input type="checkbox" v-model="paypalValue" class="tw-sr-only tw-peer">
                <div class="tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none peer-focus:tw-ring-4 peer-focus:tw-ring-[rgba(var(--primary-light),.7)] dark:peer-focus:tw-ring-[rgba(var(--primary-light),.5)] tw-rounded-full tw-peer dark:tw-bg-neutral-600 peer-checked:after:tw-translate-x-full peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-left-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600 peer-checked:tw-bg-[rgb(var(--primary))]"></div>
                <span class="tw-ml-3 tw-text-sm tw-font-medium tw-text-neutral-700 dark:tw-text-neutral-200">Paypal</span>
            </label>
        </div>

        <div class="md:tw-col-span-4 tw-col-span-12 tw-flex tw-justify-center tw-w-full tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
            <label class="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer">
                <input type="checkbox" v-model="stripeValue" class="tw-sr-only tw-peer">
                <div class="tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none peer-focus:tw-ring-4 peer-focus:tw-ring-[rgba(var(--primary-light),.7)] dark:peer-focus:tw-ring-[rgba(var(--primary-light),.5)] tw-rounded-full tw-peer dark:tw-bg-neutral-600 peer-checked:after:tw-translate-x-full peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-left-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600 peer-checked:tw-bg-[rgb(var(--primary))]"></div>
                <span class="tw-ml-3 tw-text-sm tw-font-medium tw-text-neutral-700 dark:tw-text-neutral-200">Stripe</span>
            </label>
        </div>

        <div class="md:tw-col-span-4 tw-col-span-12 tw-flex tw-justify-center tw-w-full tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
            <label class="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer">
                <input type="checkbox" v-model="codValue" class="tw-sr-only tw-peer">
                <div class="tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none peer-focus:tw-ring-4 peer-focus:tw-ring-[rgba(var(--primary-light),.7)] dark:peer-focus:tw-ring-[rgba(var(--primary-light),.5)] tw-rounded-full tw-peer dark:tw-bg-neutral-600 peer-checked:after:tw-translate-x-full peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-left-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600 peer-checked:tw-bg-[rgb(var(--primary))]"></div>
                <span class="tw-ml-3 tw-text-sm tw-font-medium tw-text-neutral-700 dark:tw-text-neutral-200">Cash On Delivery</span>
            </label>
        </div>
    </div>
  </div>
</template>

<script>
export default {

    props: [ 'paypal', 'stripe', 'cod' ],
    emits: [ 'update:paypal', 'update:stripe', 'update:cod' ],

    computed: {
        paypalValue: {
            get() {
                return this.paypal
            },
            set(v) {
                this.$emit('update:paypal', v)
            }
        },
        stripeValue: {
            get() {
                return this.stripe
            },
            set(v) {
                this.$emit('update:stripe', v)
            }
        },
        codValue: {
            get() {
                return this.cod
            },
            set(v) {
                this.$emit('update:cod', v)
            }
        },
    }

}
</script>

<style>

</style>