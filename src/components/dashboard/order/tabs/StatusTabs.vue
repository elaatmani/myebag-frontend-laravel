<template>
  <div>
    <div
      class="tw-text-sm tw-font-medium tw-text-center tw-text-gray-500 tw-border-b tw-border-gray-200 dark:tw-text-neutral-200 dark:tw-border-gray-700"
    >
      <ul class="tw-flex tw-flex-wrap -tw-mb-px">

        <li class="tw-mr-2">
          <button
          @click="$emit('update:filter', 0)"
            :class="[filter == 0 && 'dark:tw-text-violet-400 tw-text-violet-500 dark:tw-border-violet-400 tw-border-b-2 tw-border-violet-600', filter != 0 && 'hover:tw-border-gray-300 dark:hover:tw-text-gray-300 hover:tw-text-gray-600']"
            class="tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-border-solid tw-border-b-2 tw-border-transparent tw-rounded-t-lg tw-duration-200"
            >
            <span>All</span>
            <div class="tw-p-1 tw-px-2 tw-text-xs tw-bg-violet-500 tw-rounded tw-text-white">{{ orders.length }}</div>
            </button
          >
        </li>

        <StatusTab
          v-for="s in adminStatuses"
          :key="s.id"
          :selected="filter"
          :status="s"
          @clicked="changeTab"
        />

      </ul>
    </div>
  </div>
</template>

<script>
import StatusTab from '@/components/dashboard/order/tabs/StatusTab'
export default {
    components: {StatusTab},
    props: ['filter'],

    data() {
        return {
            // selected: 0,
        }
    },

    computed: {
      orders() {
        return this.$store.getters['order/orders']
      },
      statuses() {
        return this.$store.getters['app/orderStatuses']
      },
      adminStatuses() {
        return this.statuses.filter(i => i.type == 'admin').map((item) => ({...item, name: item.name.toLocaleLowerCase()}))
      },
    },

    methods: {
      changeTab(status) {
        this.$emit('update:filter', status.id)
        // this.selected = status.id
      }
    }
};
</script>

<style>
</style>