<template>
  <div>
    <div class="tw-font-extrabold tw-text-center tw-text-xl">Why Choose <span :class="['tw-text-[rgb(var(--primary))]']">Us ?</span></div>
    <div class="tw-grid tw-grid-cols-12 tw-mt-8 tw-px-5">
        <div class="md:tw-col-span-4 tw-col-span-12 tw-flex tw-py-5 md:tw-justify-center tw-items-center tw-gap-5">
            <div class="tw-p-3 tw-rounded-full tw-bg-violet-500/20 tw-text-violet-500">
                <icon class="tw-text-4xl" icon="mdi:truck-outline" />
            </div>
            <div>
                <h2 class="tw-font-bold">Free Delivery</h2>
                <p class="tw-text-neutral-600 dark:tw-text-neutral-300">For orders above $100</p>
            </div>
        </div>

        <div class="md:tw-col-span-4 tw-col-span-12 tw-flex tw-py-5 md:tw-justify-center tw-items-center tw-gap-5">
            <div class="tw-p-3 tw-rounded-full tw-bg-secondary/20 tw-text-secondary">
                <icon class="tw-text-4xl" icon="mdi:cash" />
            </div>
            <div>
                <h2 class="tw-font-bold">100% Refund</h2>
                <p class="tw-text-neutral-600 dark:tw-text-neutral-300">Money-back after 7 days</p>
            </div>
        </div>

        <div class="md:tw-col-span-4 tw-col-span-12 tw-flex tw-py-5 md:tw-justify-center tw-items-center tw-gap-5">
            <div class="tw-p-3 tw-rounded-full tw-bg-yellow-500/20 tw-text-yellow-400">
                <icon class="tw-text-4xl" icon="mdi:crown-outline" />
            </div>
            <div>
                <h2 class="tw-font-bold">Premium Quality</h2>
                <p class="tw-text-neutral-600 dark:tw-text-neutral-300">Certified top quality items</p>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>