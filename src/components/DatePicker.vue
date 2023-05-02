<template>
  <div class="tw-absolute">
    <popup :visible="popup" @cancel="popup = false">
        <div class="tw-mx-auto tw-w-[95%] md:tw-max-w-[400px] tw-overflow-hidden tw-min-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md  tw-my-5 tw-rounded-lg">
        <div class="tw-px-5 tw-flex dark:tw-text-neutral-400 tw-text-neutral-500 tw-items-center tw-gap-4 tw-py-4 dark:tw-bg-neutral-800 tw-bg-white">
          
          
        </div>
        <div class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-neutral-100">
          <button @click="popup = false" class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-black/20 tw-bg-neutral-300  dark:tw-bg-neutral-600  tw-duration-300  tw-text-neutral-900 dark:tw-text-neutral-300">
            Cancel
          </button>
          <button class="tw-py-2 tw-px-7 tw-flex tw-items-center tw-font-medium tw-rounded tw-text-sm tw-bg-red-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-red-600 dark:tw-border-neutral-900 dark:hover:tw-border-red-500 hover:tw-bg-red-500/80 dark:hover:tw-bg-red-400 tw-duration-300  tw-text-neutral-800">
            <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[]">mdi-loading</v-icon>
            <span>Select</span>
          </button>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
export default {
    props: [ 'visible', 'value' ],
    
    data() {
        return {
            data: null
        }
    },

    computed: {
        popup: {
            get() {
                return this.visible
            },
            set(value) {
                return this.$emit('cancel', value)
            }
        },
        dark() {
            return this.$store.getters['theme/isDarkMode']
        }
    }
}
</script>

<style>

</style>