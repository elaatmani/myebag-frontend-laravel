<template>
  <div class="tw-flex tw-justify-between tw-flex-wrap">
    <div>
      <div class="tw-mb-3 tw-flex tw-items-center tw-gap-2">
        <icon icon="fluent:money-hand-20-regular" class="tw-text-lg" />
        <h1>Cash On Delivery</h1>
        <label
          class="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer tw-scale-75 -tw-ml-1"
        >
          <input v-model="active" type="checkbox" class="tw-sr-only tw-peer" />
          <div
            class="tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none peer-focus:tw-ring-4 peer-focus:tw-ring-[rgba(var(--primary-light),.7)] dark:peer-focus:tw-ring-[rgba(var(--primary-light),.5)] tw-rounded-full tw-peer dark:tw-bg-neutral-600 peer-checked:after:tw-translate-x-full peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-left-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600 peer-checked:tw-bg-[rgb(var(--primary))]"
          ></div>
        </label>
      </div>
      <p class="tw-text-xs tw-text-neutral-400 tw-mb-2 -tw-mt-2">
        Accept payments with Cash On Delivery
      </p>
    </div>

    <div class="tw-flex tw-justify-end tw-mt-3">
      <button @click="update" class="tw-py-2 tw-px-7 tw-h-[38px] tw-w-fit tw-whitespace-nowrap tw-rounded dark:tw-text-neutral-300 tw-text-white tw-bg-[rgb(var(--primary))] tw-border tw-border-solid tw-border-tansparent hover:tw-border-[rgb(var(--primary-dark))] dark:tw-border-neutral-900 dark:hover:tw-border-[rgb(var(--primary-light))] hover:tw-bg-[rgb(var(--primary))] dark:hover:tw-bg-[rgb(var(--primary))] tw-duration-200 tw-flex tw-items-center tw-justify-center">
            <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
            <span class="tw-text-sm">Save</span>
        </button>
    </div>

  </div>
</template>

<script>
export default {
  props: ["cod"],

  data() {
    return {
      isLoading: false
    };
  },

  computed: {
    active: {
      get() {
        return this.cod.active;
      },
      set(v) {
        this.$emit("update:cod", { ...this.cod, active: v });
      },
    },
  },

  methods: {
    update() {
      this.isLoading = true

      setTimeout(
        () => {
          this.$alert({
            body: 'Updated successfully',
            type: 'success'
          })
          this.isLoading = false
        }, 2000
      )
    }
  }
};
</script>

<style>
</style>