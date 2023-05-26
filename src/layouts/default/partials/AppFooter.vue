<template>
  <div class="tw-bg-gray-100 dark:tw-bg-neutral-900">
    <v-container class="sm:tw-px-3 tw-py-2 tw-px-2">
      <div class="tw-grid tw-grid-cols-12 tw-py-10">
        <div class="md:tw-col-span-4 tw-col-span-12">
          <AppLogo />
          <p class="tw-mt-4 tw-text-sm">
            {{description}}
          </p>
        </div>
        <div class="md:tw-col-span-4 tw-col-span-12">
        </div>
        <div class="md:tw-col-span-4 tw-col-span-12">
          <h2 class="tw-font-medium">Accepted Payments</h2>
          <div class="tw-flex tw-gap-2 tw-flex-wrap">
            <img class="tw-w-[40px]" v-for="i in paymentMethods" :key="i.id" :src="$frontend(i.image)" :title="i.name" :alt="i.name">
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import AppLogo from "@/components/AppLogo";

export default {
  components: { AppLogo },

  data() {
    return {
      paymentMethods: [
        {id: 1, name: 'Stripe', image: 'assets/images/icons/stripe.svg'},
        {id: 2, name: 'Visa', image: 'assets/images/icons/visa.svg'},
        {id: 3, name: 'Mastercard', image: 'assets/images/icons/mastercard.svg'},
        {id: 4, name: 'Paypal', image: 'assets/images/icons/paypal-card.svg'},
      ]
    }
  },

  computed: {
    options() {
      return this.$store.getters['app/options'];
    },

    description() {
      const option = this.options.find(o => o.option_name == "description");

      if(!option) {
        return `
            Elevate your style with My Ebag. Discover the latest fashion trends
            and get fast, reliable delivery right to your doorstep. Plus, enjoy
            hassle-free returns and exceptional customer service. Shop now and
            experience the ultimate shopping experience.
        `
      }
      return option.option_value
    }
  }
};
</script>

<style>
</style>