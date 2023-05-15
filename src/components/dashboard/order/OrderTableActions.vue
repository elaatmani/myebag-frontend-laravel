<template>
  <div>
    <div class="tw-flex tw-items-center tw-gap-2">
      <button
        @click="showItems"
        class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-blue-500/20 hover:tw-bg-blue-500/10 hover:tw-border-blue-500/70 tw-duration-300 tw-text-blue-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center"
      >
        <v-icon size="x-small">mdi-eye-outline</v-icon>
      </button>
      <button
        @click="showOrder"
        class="tw-p-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-violet-500/20 hover:tw-bg-violet-500/10 hover:tw-border-violet-500/70 tw-duration-300 tw-text-violet-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center"
      >
        <icon class="!tw-text-xl" icon="ph:gear-six" />
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: ["order"],

  data() {
    return {};
  },

  methods: {
    showItems() {
        this.$store.dispatch('order/setOrderDetails', this.order)
        this.$store.dispatch('order/setIsOrderDetailsActive', true);
    },

    showOrder() {
      this.$router.push('/dashboard/orders/' + this.order.id)
    }
  }
};
</script>

<style>
</style>