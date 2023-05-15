<template>
  <div class="tw-h-full">
    <div v-if="processing" class="tw-h-full tw-flex tw-items-center tw-justify-center tw-min-h-[200px]">
      <v-icon class="tw-animate-spin tw-text-violet-500">mdi-loading</v-icon>
    </div>
    <div v-show="!processing" class="tw-flex tw-flex-col tw-h-full">
      <h2>Select Payment Method</h2>
      <div class="tw-grid tw-grid-cols-12 tw-mt-2 tw-gap-5">
        <div class="md:tw-col-span-4 tw-col-span-12">
          <div
            @click="!choosed && handleMethodChange(1)"
            :class="[
              method == 1
                ? '!tw-text-violet-500 !tw-border-violet-500'
                : 'hover:tw-shadow',
                choosed ? 'tw-opacity-80 hover:!tw-shadow-none' : 'tw-cursor-pointer'
            ]"
            class="tw-flex tw-duration-300 tw-items-center tw-gap-3 tw-text-neutral-600 dark:tw-text-neutral-300 tw-h-[50px] tw-p-5 tw-rounded tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-200"
          >
            <icon class="tw-text-xl" icon="bi:credit-card-fill" />
            <p>Credit or debit card</p>
          </div>
        </div>
        <div class="md:tw-col-span-4 tw-col-span-12">
          <div
            @click="!choosed && handleMethodChange(2)"
            :class="[
              method == 2
                ? '!tw-text-violet-500 !tw-border-violet-500'
                : 'hover:tw-shadow',
                choosed ? 'tw-opacity-80 hover:!tw-shadow-none' : 'tw-cursor-pointer'
            ]"
            class="tw-flex tw-items-center tw-gap-3 tw-text-neutral-600 dark:tw-text-neutral-300 tw-duration-300 tw-h-[50px] tw-p-5 tw-rounded tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-200 "
          >
            <icon class="tw-text-xl" icon="simple-icons:paypal" />
            <p>PayPal</p>
          </div>
        </div>
        <div class="md:tw-col-span-4 tw-col-span-12">
          <div
            @click="!choosed && handleMethodChange(3)"
            :class="[
              method == 3
                ? '!tw-text-violet-500 !tw-border-violet-500'
                : 'hover:tw-shadow',
                choosed ? 'tw-opacity-80 hover:!tw-shadow-none' : 'tw-cursor-pointer'
            ]"
            class="tw-flex tw-items-center tw-duration-300 tw-gap-3 tw-text-neutral-600 dark:tw-text-neutral-300 tw-h-[50px] tw-p-5 tw-rounded tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-200"
          >
            <icon class="tw-text-xl" icon="fluent:money-hand-20-regular" />
            <p>Cash on delivery</p>
          </div>
        </div>
      </div>

      <v-spacer></v-spacer>
      
      <v-slide-y-transition>
        <div v-if="choosed" class="tw-mt-5 tw-flex tw-justify-end">
        <div v-if="method == 2">
          <PaypalGateway @cancel="choosed = false" @processing="handleProcessing" @order-completed="nextStep" />
        </div>
        
        <div class="tw-w-full" v-if="method == 1">
          <StripeGateway @cancel="choosed = false" @processing="handleProcessing" @order-completed="nextStep" />
        </div>

        <div v-if="method == 3">
          <CashOnDeliveryGateway @cancel="choosed = false" @processing="handleProcessing" @order-completed="nextStep" />
        </div>

      </div>
      </v-slide-y-transition>

      <div v-if="!choosed" @click="choosed = true" class="tw-mt-5 tw-flex tw-justify-end">
        <button
          class="tw-w-fit tw-font-medium tw-gap-2 tw-text-sm tw-flex tw-justify-center tw-text-center tw-py-2 tw-px-7 tw-items-center tw-rounded tw-bg-violet-500 tw-text-white"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PaypalGateway from "@/components/checkout/gateways/PaypalGateway";
import StripeGateway from '@/components/checkout/gateways/StripeGateway'
import CashOnDeliveryGateway from '@/components/checkout/gateways/CashOnDeliveryGateway'

export default {
  components: { PaypalGateway, StripeGateway, CashOnDeliveryGateway },
  data() {
    return {
      choosed: false,
      method: 1,
      processing: false
    };
  },

  methods: {
    handleMethodChange(method) {
      this.method = method;
    },
    nextStep() {
      this.$emit("updateStep", 4);
    },

    pay() {
      switch (this.method) {
        case 1:
          this.payWithCard();
          break;
        case 3:
          this.payWithCod();
          break;
      }
    },

    payWithCard() {
      console.log("processing card...");
    },

    payWithCod() {
      console.log("processing cod...");
    },

    handleProcessing(state) {
        this.processing = state
    }
  },
};
</script>

<style>
</style>