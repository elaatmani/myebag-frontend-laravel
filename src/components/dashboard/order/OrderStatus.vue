<template>
  <div  v-click-outside="close" class="tw-relative tw-min-w-[100px] tw-w-fit">
    <button @click="toggle" :class="[selected.text, selected.bg, selected.border]"
      class="tw-border tw-border-solid tw-min-w-[100px] focus:tw-outline-none tw-font-medium tw-rounded-lg tw-text-sm tw-px-2 tw-py-1 tw-text-center tw-inline-flex tw-items-center tw-justify-between"
      type="button">
      {{ selected.name }}

      <v-icon v-if="!isLoading" class="tw-ml-1">{{
        isOpen ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      <v-icon v-if="isLoading" class="tw-animate-spin tw-ml-1">mdi-loading</v-icon>
    </button>
    <!-- Dropdown menu -->
    <div :class="{ 'tw-hidden': !isOpen }"
      class="tw-z-[20] tw-border dark:tw-border-neutral-700 tw-border-white  tw-overflow-hidden tw-bg-white dark:tw-bg-neutral-900 tw-absolute tw-top-full tw-left-0 tw-divide-y tw-divide-gray-100 tw-rounded-lg tw-shadow tw-w-44">
      <ul class="tw-text-sm tw-space-y-1 tw-p-1 tw-text-gray-700 tw-max-h-[250px] tw-overflow-y-auto">
        <li @click="handleChange(option)" v-for="option in options" :key="option.id">
          <a class="tw-border tw-rounded-lg tw-border-solid tw-block tw-px-4 tw-py-2 hover:tw-bg-gray-100" :class="[option.text, option.bg, option.border]">{{ option.name
            }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import order_status from '@/config/order_status';
  export default {
    props: [],


    data() {
      return {
        isLoading: false,
        isOpen: false,

        selectedId: 1,
        allOptions: order_status,

      };
    },
    computed: {
      options() {
        return this.allOptions.filter((i) => i.id !== this.selectedId);
      },

      selected() {
        return this.allOptions.filter((item) => item.id == this.selectedId)[0];
      },

      availableOptions() {
        return this.allOptions.map((i) => i.value);
      },
    },

    methods: {
      close() {
        this.isOpen = false;
      },
      toggle() {
        this.isOpen = !this.isOpen;
      },
      handleChange(option) {
        this.selectedId = option.id
        this.close()
      }
    },
    mounted() {
    },
  };
</script>

<style></style>