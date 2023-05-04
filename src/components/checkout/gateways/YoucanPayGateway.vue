<template>
  <div v-if="isReady">
    <button @click="mountButtons" class="tw-w-full tw-h-[45px] tw-font-medium tw-gap-2 tw-text-sm tw-flex tw-justify-center tw-text-center tw-py-2 tw-px-7 tw-items-center tw-rounded tw-bg-blue-500 tw-text-white">
          <v-icon class="tw-animate-spin tw-text-white" v-if="false" >mdi-loading</v-icon>
          
          <div class=" tw-flex tw-items-center tw-gap-1">
            YouCan Pay
          </div>
      </button>
  </div>
  <div id="payment-container">
    
  </div>
</template>

<script>
export default {

  data() {
    return {
      yCPay: null,
      isReady: false
    }
  },

  methods: {
    loadScript() {
        const script = document.createElement('script');
        script.src = 'https://youcanpay.com/js/ycpay.js'
        script.onload = this.getGatewayReady
        this.isReady = true

        document.head.append(script)
    },

    getGatewayReady() {
      const YCPay = window.YCPay
      const ycPay = new YCPay('pub_sandbox_84c24f89-5f2e-4f27-8053-a68d3', {
        locale: 'en',
        isSandbox: true,
        // errorContainer: '#error-container',
        formContainer: '#payment-container'
    });

    this.yCPay = ycPay;
    console.log(ycPay);
    },

    mountButtons() {
      // this.yCPay.renderAvailableGateways([], 'dark')
      this.yCPay.renderCreditCardForm([], 'dark')
      // this.yCPay.renderCashPlusForm([], 'dark')
    }
  },


  mounted() {
    this.loadScript()
  }
}
</script>

<style>

</style>