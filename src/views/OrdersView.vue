<template>
  <div class="tw-min-h-screen tw-max-h-[1000px]">
    <div class="my-5">
          <h1 class="tw-text-neutral-600 dark:tw-text-neutral-200 md:tw-text-xl tw-text-lg tw-font-medium">Orders</h1>
          <p class="tw-text-neutral-500 dark:tw-text-neutral-400 tw-text-sm">Check your past orders.</p>
    </div>
    <div class="tw-my-3 tw-flex tw-items-center tw-gap-3">
        <div @click="selected = 1" :class="[selected == 1 && '!tw-text-neutral-900 dark:tw-bg-blue-400 tw-bg-blue-300']" class="tw-flex tw-items-center tw-gap-2 tw-duration-300 tw-cursor-pointer tw-py-1 tw-px-2 tw-rounded-full tw-border tw-border-solid tw-border-blue-400 tw-text-blue-500 dark:tw-text-blue-400">
            <icon icon="ph:spinner-gap" />
            <span class="tw-text-sm">In Progress</span>
        </div>
        <div @click="selected = 2" :class="[selected == 2 && '!tw-text-neutral-900 dark:tw-bg-gray-400 tw-bg-gray-300']" class="tw-flex tw-items-center tw-gap-2 tw-duration-300 tw-cursor-pointer tw-py-1 tw-px-2 tw-rounded-full tw-border tw-border-solid tw-border-gray-400 tw-text-gray-500 dark:tw-text-gray-400">
            <icon icon="ph:truck" />
            <span class="tw-text-sm">Shipping now</span>
        </div>
        <div @click="selected = 3" :class="[selected == 3 && '!tw-text-neutral-900 dark:tw-bg-green-400 tw-bg-green-300']" class="tw-flex tw-items-center tw-gap-2 tw-duration-300 tw-cursor-pointer tw-py-1 tw-px-2 tw-rounded-full tw-border tw-border-solid tw-border-green-400 tw-text-green-500 dark:tw-text-green-400">
            <icon icon="ph:check-circle" />
            <span class="tw-text-sm">Completed</span>
        </div>
        <!-- <div class="tw-flex tw-items-center tw-gap-2 tw-py-1 tw-px-2 tw-rounded-full tw-border tw-border-solid tw-border-red-400 tw-text-red-500 dark:tw-text-red-400">
            <icon icon="ph:x-circle" />
            <span class="tw-text-sm">Canceled</span>
        </div> -->
    </div>
  </div>
</template>

<script>

export default {
  components: {  },

  data() {
    return {
        selected: 1
    }
  },

  computed: {
  }

}
</script>

<style>

</style>