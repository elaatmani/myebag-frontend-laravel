<template>
  <div>
    <teleport to='.my-application'>
        <div :class="[active && '!tw-translate-x-0']" class="tw-fixed tw-translate-x-full tw-duration-300 tw-top-0 md:tw-top-0 tw-right-0 md:tw-w-1/2 tw-w-10/12 tw-h-screen dark:tw-bg-neutral-900 tw-bg-neutral-100 tw-z-[1001]">

        </div>
        <div @click="close" :class="[active && '!tw-opacity-100 !tw-z-[1000] !tw-pointer-events-auto']" class="tw-duration-300 tw-fixed tw-top-0 md:tw-top-0 tw-right-0 tw-w-full tw-h-screen tw-bg-black/70 tw-pointer-events-none tw-opacity-0">

        </div>
    </teleport>
  </div>
</template>

<script>
export default {

    computed: {
        active: {
            get() {
                return this.$store.getters['order/isOrderDetailsActive']
            },
            set(value) {
                this.$store.dispatch('order/isOrderDetailsActive', value)
            }
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