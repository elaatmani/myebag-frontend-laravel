<template>
  <div>
    <div class="tw-flex tw-items-center tw-gap-2">
      <!-- <button class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-blue-500/20 hover:tw-bg-blue-500/10 hover:tw-border-blue-500/70 tw-duration-300 tw-text-blue-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
          <v-icon size="x-small" >mdi-eye-outline</v-icon>
      </button> -->
      <button class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-green-500/20 hover:tw-bg-green-500/10 hover:tw-border-green-500/70 tw-duration-300 tw-text-green-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
          <v-icon size="x-small" >mdi-pencil-outline</v-icon>
      </button>
      <button @click="popup = true" class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-red-500/20 hover:tw-bg-red-500/10 hover:tw-border-red-500/70 tw-duration-300 tw-text-red-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
          <v-icon size="x-small" >mdi-delete-outline</v-icon>
      </button>
    </div>

    <popup :visible="popup" @cancel="popup = false">
      <div class="tw-mx-auto tw-w-[95%] md:tw-max-w-[400px] tw-overflow-hidden tw-min-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md  tw-my-5 tw-rounded-lg">
        <div class="tw-px-5 tw-flex dark:tw-text-neutral-400 tw-text-neutral-500 tw-items-center tw-gap-4 tw-py-4 dark:tw-bg-neutral-800 tw-bg-white">
          <v-icon size="x-large" class="dark:tw-text-red-400 tw-text-red-500">mdi-alert-outline</v-icon>
          <p>
            Are you sure you want to delete this Color?
          </p>
        </div>
        <div class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-neutral-100">
          <button @click="popup = false" class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-black/20 tw-bg-neutral-300  dark:tw-bg-neutral-600  tw-duration-300  tw-text-neutral-900 dark:tw-text-neutral-300">
            Cancel
          </button>
          <button class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-bg-red-500 tw-border tw-border-solid tw-border-tansparent hover:tw-border-red-600 dark:tw-border-neutral-900 dark:hover:tw-border-red-400 hover:tw-bg-red-500 dark:hover:tw-bg-red-500 tw-duration-200  tw-text-white">
            Delete
          </button>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popup: false
    }
  }
}
</script>

<style>

</style>