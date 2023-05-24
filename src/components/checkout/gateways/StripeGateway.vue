<template>
  <div class="tw-w-full">
    <div
      v-show="!isReady"
      class="tw-h-full tw-flex tw-items-center tw-justify-center tw-min-h-[100px]"
    >
      <v-icon class="tw-animate-spin tw-text-[rgb(var(--primary))]">mdi-loading</v-icon>
    </div>
    <div v-show="isReady">
      <div id="payment-element"></div>

      <div id="card-number"></div>
      <div id="card-expiry"></div>
      <div id="card-cvc"></div>

      <div class="tw-flex tw-justify-end tw-mt-5 tw-gap-2">
        <button
          @click="$emit('cancel')"
          class="tw-w-fit tw-font-medium tw-gap-2 tw-text-sm tw-flex tw-justify-center tw-text-center tw-py-2 tw-px-7 tw-items-center tw-rounded tw-bg-neutral-200 tw-text-neutral-700 dark:tw-bg-neutral-600 dark:tw-text-neutral-300"
        >
          Cancel
        </button>
        <button
          @click="pay"
          :disabled="isLoading"
          class="tw-w-fit tw-font-medium tw-gap-2 tw-text-sm tw-flex tw-justify-center tw-text-center tw-py-2 tw-px-7 tw-items-center tw-rounded tw-bg-[rgb(var(--primary))] tw-text-white"
        >
          <v-icon v-if="isLoading" class="tw-animate-spin tw-text-white">mdi-loading</v-icon>
          <p v-if="!isLoading">Pay</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { stripeClientSecret } from "@/config/app";
// import { StripeElementsService } from 'stripe-elements'
// import { Stripe } from 'stripe'
import Payment from "@/api/Payment";
import Order from '@/api/Order';

export default {
  emits: ['orderCompleted'],
  data() {
    return {
      isReady: false,
      isLoading: false,
      isComplete: false,
      stripe: null,
      paymentElement: null,
      elements: null,

      client_secret: null,

      
    };
  },

  computed: {
    stripeClientSecret() {
      return this.$store.getters['app/options'].find(o => o.option_name == 'stripe_test_public_key').option_value
    },
    primary() {
      return this.$store.getters['app/primaryRaw'];
    },
    rules() {
      return {
        ".Input": {
          boxShadow: "none",
        },
        ".Input:hover": {
          boxShadow: "none",
          border: "1px solid " + this.primary.main + "60",
        },
        ".Input:focus": {
          boxShadow: "none",
          border: "1px solid " + this.primary.main,
        },
      }
    },
    darkVariables() {
      return {
        colorPrimary: this.primary.main,
        colorBackground: "#171717",
        colorText: "#E5E5E5",
      }
    },
    lightVariables() {
      return {
        colorPrimary: this.primary.main,
        colorBackground: "#fff",
        colorText: "#262626",
      }
    },
    dark() {
      return this.$store.getters["theme/isDarkMode"];
    },
    cart() {
            return this.$store.getters['cart/cart']
        },

        shipping() {
            return 5
        },

        total() {
          let total = 0;

          this.cart.forEach(item => {
              let price = item.variation.price;
              if(item.product.is_discount_active) {
                  price *= (item.product.discount_percentage / 100)
              }
              
              total += (price * item.quantity)
          });

          return total + this.shipping;
        },
        address() {
            return this.$store.getters['checkout/address']
        }
  },


  methods: {
    loadScript() {
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/";
      script.onload = this.mountForm;

      document.head.append(script);
    },
    mountForm() {
      const Stripe = window.Stripe;

      this.stripe = new Stripe(this.stripeClientSecret, { locale: 'en' });
      console.log(this.stripe);

      this.elements = this.stripe.elements({
        clientSecret: this.client_secret,
        appearance: {
          theme: this.dark ? "night" : "stripe",
          variables: this.dark ? this.darkVariables : this.lightVariables,
          rules: this.rules,
        },
      });

      this.paymentElement = this.elements.create("payment");

      this.paymentElement.on('change', (e) => {
        this.isComplete = e.complete
      })

      this.paymentElement.mount("#payment-element");
      this.isReady = true;
    },
    pay() {
      if(this.isComplete) {
        this.isLoading = true
      }
      const loading = (value) => this.isLoading = value;
      const createOrder = (status) => this.createOrder(status);

      this.stripe
        .confirmPayment({
          elements: this.elements,
          redirect: "if_required",
        })
        .then(function (result) {
          // Access the token with result.token
          if (!result.error) {
            const paymentIntent = result.paymentIntent;
            // const orderId = paymentIntent.id

            if (paymentIntent.status == "succeeded") {
              createOrder(true)
            }

            loading(false)
            // catc errors
            console.log(result);
          }
        });
    },

    initiatPayment() {
      this.isReady = false;
      Payment.initiatePayment(this.cart, this.total).then((res) => {
        console.log(res.data);
        if (res.data.code == "SUCCESS") {
          this.client_secret = res.data.data.client_secret;
          if (window.Stripe) {
            this.mountForm();
          } else {
            this.loadScript();
          }
        }
      }, this.$handleApiError);
    },

  // left here
    createOrder(status) {
      this.$emit("processing", true);
      const order = {
        total: this.total,
        items: this.cart.map((i) => {
          return {
            product_variation_id: i.variation.id,
            quantity: i.quantity,
          };
        }),
        payment_details: {
          amount: this.total,
          provider: "stripe",
          status: status,
        },
        shipping_address: this.address
      };
      
      Order.create(order).then((res) => {
        if (res.data.code == "SUCCESS") {
          this.$alert({
            body: "Order completed !",
            type: "success",
          });
          this.$emit("processing", false);
          this.nextStep();
        }
      }, this.$handleApiError);
    },
    nextStep() {
        this.$emit('orderCompleted', 4)
    },
  },

  mounted() {
    this.initiatPayment();
    console.log(this.lightVariables);
  },
};
</script>

<style scoped>
</style>