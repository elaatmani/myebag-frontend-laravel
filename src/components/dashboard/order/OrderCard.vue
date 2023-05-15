<template>
  <div>
    <div class="tw-p-3 tw-flex">
        <div class="tw-px-2">

        </div>
        <div class="tw-w-full">
            <div class=" tw-flex tw-justify-between">
                <div class="tw-flex tw-items-center tw-gap-2">
                    <h1 class="md:tw-text-lg tw-text-gray-400">Order <span class="tw-text-neutral-100">#123</span></h1>
                    <p class="tw-text-white tw-w-fit tw-bg-emerald-500 tw-px-2 tw-py-1 tw-text-xs tw-rounded">Paid</p>
                </div>
                <h1 class="md:tw-text-lg">$540.20</h1>
            </div>
            <div class="tw-flex tw-items-center tw-gap-1 tw-mt-1 tw-text-xs tw-font-light">
                <icon icon="ph:calendar-blank" class="tw-text-lg" />
                <p>13 Avr, 2023 at 4:39 PM</p>
            </div>
            <div class="tw-mt-2">
                <OrderStatus />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import OrderStatus from '@/components/dashboard/order/OrderStatus'
export default {
    props: ['order'],

    components: {OrderStatus},

    data() {
        return {

        }
    }
}
</script>

<style>

</style>