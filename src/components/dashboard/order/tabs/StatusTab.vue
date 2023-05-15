<template>
  <li class="tw-mr-2" >
    <button
      @click="changeTab"
      :style="{ borderColor: selected == status.id ? status.background_color : '' }"
      :class="[
        selected == status.id &&
          'tw-font-medium tw-border-b-2 dark:tw-text-neutral-100 tw-text-neutral-900',
        selected != status.id &&
          'hover:tw-border-gray-300 tw-text-neutral-600 dark:tw-text-neutral-300 dark:hover:tw-text-gray-300 hover:tw-text-gray-600',
      ]"
      class="tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-border-solid tw-border-b-2 tw-border-transparent tw-rounded-t-lg tw-duration-200"
    >
      <span class="!tw-capitalize">{{ status.name }}</span>
      <div
        :style="{ background: status.background_color }"
        class="tw-p-1 tw-px-2 tw-text-xs tw-rounded tw-text-white"
      >
        {{ count }}
      </div>
    </button>
  </li>
</template>

<script>
export default {
    props: ['selected', 'status'],

    computed: {
        orders() {
            return this.$store.getters['order/orders']
        },
        count() {
            return this.orders.filter(o => o.id == this.status?.id).length
        }
    },

    methods: {
        changeTab() {
            this.$emit('clicked', this.status)
        }
    }
};
</script>

<style>
</style>