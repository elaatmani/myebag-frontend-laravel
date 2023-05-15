<template>
  <div  v-click-outside="close" class="tw-relative tw-w-fit">
    <button @click="toggle" class="tw-py-1 tw-px-2 tw-flex tw-items-center tw-gap-2 tw-font-bold tw-rounded tw-capitalize tw-text-xs" :style="{color: selected.text_color, background: selected.background_color}">
        <span>
          {{ selected?.name.toLocaleLowerCase() }}
        </span>

        <v-icon v-if="!isLoading" class="tw-ml-1">{{
          isOpen ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
        <v-icon v-if="isLoading" class="tw-animate-spin tw-ml-1">mdi-loading</v-icon>
    </button>

    <button v-if="false" @click="toggle" :class="[selected.text, selected.bg, selected.border]"
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
      class="tw-z-[20] tw-mt-1 tw-border dark:tw-border-neutral-700 tw-border-white  tw-overflow-hidden tw-bg-white dark:tw-bg-neutral-900 tw-absolute tw-top-full tw-left-0 tw-divide-y tw-divide-gray-100 tw-rounded-lg tw-shadow tw-w-full">
      <ul class="tw-text-sm tw-space-y-1 tw-p-1 tw-text-gray-700 tw-max-h-[250px] tw-overflow-y-auto">
        <li @click="handleChange(option)" v-for="option in options" :key="option.id" class="tw-cursor-pointer">
          <a class="tw-py-1 tw-whitespace-nowrap tw-px-2 tw-flex tw-items-center tw-gap-2 tw-font-bold tw-rounded tw-capitalize tw-text-xs" :style="{ background: option.background_color, color: option.text_color }">{{ option.name.toLocaleLowerCase()
            }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['order', 'type'],


    data() {
      return {
        isLoading: false,
        isOpen: false,

        // selectedId: 1,

      };
    },
    computed: {
      options() {
        return this.allOptions.filter((i) => i.id !== this.selectedId);
      },

      selectedId: {
        get() {
          return this.type == 'admin' ? this.order.order_status_id : this.order.user_status_id;
        }
      },

      selected() {
        return this.allOptions.filter((item) => item.id == this.selectedId)[0];
      },

      availableOptions() {
        return this.allOptions.map((i) => i.value);
      },
      allOptions() {
        return this.$store.getters['app/orderStatuses'].filter(i => i.type == this.type);
      }
    },

    methods: {
      close() {
        this.isOpen = false;
      },
      toggle() {
        this.isOpen = !this.isOpen;
      },
      handleChange(option) {
        this.isLoading = true
        let order = this.order
        if(this.type == 'admin') {
          order = {
            ...order,
            order_status_id: option.id,
            order_status: option
          }
        } else {
          order = {
            ...order,
            user_status_id: option.id,
            user_status: option
          }
        }

        this.$store.dispatch('order/updateOrder', order)
        setTimeout(
          () => {
            this.isLoading = false
            this.$alert({
              body: 'Status changed !',
              type: 'success'
            });
          }, 1500
        )
        this.close()
      }
    },
    mounted() {
      // this.selectedId = this.order.order_status_id
    },
  };
</script>

<style></style>