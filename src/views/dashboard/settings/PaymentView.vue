<template>
  <div>
    <h2 class="tw-mb-3 tw-text-lg">Payment Methods</h2>
    <div class="">

      <div class="tw-grid tw-grid-cols-12 tw-gap-5">

        <div class="md:tw-col-span-12 tw-col-span-12 tw-w-full tw-h-fit dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white tw-p-3">
          <div>
            <CashOnDeliverySettings v-model:cod="cod" />
          </div>
        </div>

        <div class="md:tw-col-span-12 tw-col-span-12 tw-w-full tw-h-fit dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white tw-p-3">
          <div>
            <StripeSettings v-model:stripe="stripe" />
          </div>
        </div>

        <div class="md:tw-col-span-12 tw-col-span-12 tw-w-full tw-h-fit dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white tw-p-3">
          <div>
            <PayPalSettings v-model:paypal="paypal" />
          </div>
        </div>


      </div>

    </div>
  </div>
</template>

<script>
import StripeSettings from '@/components/dashboard/settings/payment/StripeSettings'
import PayPalSettings from '@/components/dashboard/settings/payment/PayPalSettings'
import CashOnDeliverySettings from '@/components/dashboard/settings/payment/CashOnDeliverySettings'

export default {
  components: { StripeSettings, PayPalSettings, CashOnDeliverySettings },

  data() {
    return {

      stripe: {
        active: true,
        isTest: true,
        live: {
          publicKey: '',
          secretKey: ''
        },
        test: {
          publicKey: '',
          secretKey: ''
        },
      },

      paypal: {
        active: true,
        isTest: true,
        live: {
          clientId: '',
          secretKey: ''
        },
        test: {
          clientid: '',
          secretKey: ''
        }
      },
      cod: {
        active: true
      }
    }
  },

  watch: {
    stripe(v) {
      console.log(v);
    },
    paypal(v) {
      console.log(v);
    },
  },

  computed: {
    options() {
      return this.$store.getters['app/options']
    }
  },

  methods: {
    getOptions() {
      const pay_with_paypal = this.options.find(o => o.option_name == 'pay_with_paypal')
      const paypal_live_client_id = this.options.find(o => o.option_name == 'paypal_live_client_id')
      const paypal_test_client_id = this.options.find(o => o.option_name == 'paypal_test_client_id')
      const paypal_live_secret_key = this.options.find(o => o.option_name == 'paypal_live_secret_key')
      const paypal_test_secret_key = this.options.find(o => o.option_name == 'paypal_test_secret_key')
      const paypal_mode_test = this.options.find(o => o.option_name == 'paypal_mode_test')

      const pay_with_stripe = this.options.find(o => o.option_name == 'pay_with_stripe')
      const stripe_live_secret_key = this.options.find(o => o.option_name == 'stripe_live_secret_key')
      const stripe_live_public_key = this.options.find(o => o.option_name == 'stripe_live_public_key')
      const stripe_test_secret_key = this.options.find(o => o.option_name == 'stripe_test_secret_key')
      const stripe_test_public_key = this.options.find(o => o.option_name == 'stripe_test_public_key')
      const stripe_mode_test = this.options.find(o => o.option_name == 'stripe_mode_test')

      const pay_with_cod = this.options.find(o => o.option_name == 'pay_with_cod')

      const paypal = {
        active: pay_with_paypal.option_value,
        isTest: paypal_mode_test.option_value,
        live: {
          clientId: paypal_live_client_id.option_value,
          secretKey: paypal_live_secret_key.option_value
        },
        test: {
          clientid: paypal_test_client_id.option_value,
          secretKey: paypal_test_secret_key.option_value
        }
      }

      const stripe = {
        active: pay_with_stripe.option_value,
        isTest: stripe_mode_test.option_value,
        live: {
          publicKey: stripe_live_public_key.option_value,
          secretKey: stripe_live_secret_key.option_value
        },
        test: {
          publicKey: stripe_test_public_key.option_value,
          secretKey: stripe_test_secret_key.option_value
        },
      }

      const cod = {
        active: pay_with_cod.option_value
      }

      this.paypal = paypal;
      this.stripe = stripe;
      this.cod = cod;
    }
  },

  mounted() {
    this.getOptions()
  }

}
</script>

<style>

</style>