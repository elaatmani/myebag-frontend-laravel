<template>
  <div>
    <label class="tw-text-sm">Logo</label>
    <div
      class="tw-grid tw-grid-cols-12 tw-gap-2 tw-border dark:tw-border-neutral-700 tw-border-neutral-200 tw-rounded tw-p-2 tw-my-2"
    >
    <div class="tw-col-span-12 tw-flex tw-items-center tw-justify-between tw-flex-wrap tw-gap-5">
      <div>
        <label class="tw-text-xs">Light Logo</label>
        <div
          class="tw-w-[100px] tw-aspect-square tw-mt-2 tw-rounded tw-flex tw-items-center tw-justify-center tw-p-2 tw-border tw-border-dashed tw-border-neutral-500"
        >
          <img
            class="tw-w-full tw-object-contain"
            :src="$frontend('assets/images/logo.svg')"
            alt="logo"
          />
        </div>
      </div>
      <div>
        <label class="tw-text-xs">Dark Logo</label>
        <div
          class="tw-w-[100px] tw-aspect-square tw-mt-2 tw-rounded tw-flex tw-items-center tw-justify-center tw-p-2 tw-border tw-border-dashed tw-border-neutral-500"
        >
          <img
            class="tw-w-full tw-object-contain"
            :src="$frontend('assets/images/logo.svg')"
            alt="logo"
          />
        </div>
      </div>
      <div>
        <label class="tw-text-xs">Favicon</label>
        <div
          class="tw-w-[100px] tw-aspect-square tw-mt-2 tw-rounded tw-flex tw-items-center tw-justify-center tw-p-2 tw-border tw-border-dashed tw-border-neutral-500"
        >
          <img
            class="tw-w-full tw-object-contain"
            :src="$frontend('assets/images/logo.svg')"
            alt="logo"
          />
        </div>
      </div>
    </div>

    </div>
  </div>
</template>

<script>


export default {
  props: ["dark", "light"],

  data() {
    return {
        
    }
  },

  computed: {
    darkValue: {
      get() {
        return this.dark;
      },
      set(v) {
        this.$emit("update:dark", v);
      },
    },
    lightValue: {
      get() {
        return this.light;
      },
      set(v) {
        this.$emit("update:light", v);
      },
    },

  },

  mounted() {
    console.log(this.colors);
  },
};
</script>

<style>
</style>