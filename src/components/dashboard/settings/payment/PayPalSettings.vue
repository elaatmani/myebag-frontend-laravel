<template>
  <div>
    <div class="tw-mb-3 tw-flex tw-items-center tw-justify-between">
      <div class="tw-flex tw-items-center tw-gap-2">
        <icon icon="ph:paypal-logo" class="tw-text-lg" />
        <h1>Paypal</h1>
        <label
            class="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer tw-scale-75 -tw-ml-1"
        >
            <input v-model="active" type="checkbox" class="tw-sr-only tw-peer" />
            <div
            class="tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none peer-focus:tw-ring-4 peer-focus:tw-ring-[rgba(var(--primary-light),.7)] dark:peer-focus:tw-ring-[rgba(var(--primary-light),.5)] tw-rounded-full tw-peer dark:tw-bg-neutral-600 peer-checked:after:tw-translate-x-full peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-left-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600 peer-checked:tw-bg-[rgb(var(--primary))]"
            ></div>
        </label>
      </div>
      <div class="tw-flex tw-items-center tw-gap-2">
        <h1 class="tw-text-sm">Test: </h1>
        <label
            class="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer tw-scale-75 -tw-ml-1"
        >
            <input v-model="isTest" type="checkbox" class="tw-sr-only tw-peer" />
            <div
            class="tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none peer-focus:tw-ring-4 peer-focus:tw-ring-[rgba(var(--primary-light),.7)] dark:peer-focus:tw-ring-[rgba(var(--primary-light),.5)] tw-rounded-full tw-peer dark:tw-bg-neutral-600 peer-checked:after:tw-translate-x-full peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-left-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600 peer-checked:tw-bg-[rgb(var(--primary))]"
            ></div>
        </label>
      </div>
    </div>
    <p class="tw-text-xs tw-text-neutral-400 tw-mb-5 -tw-mt-2">
      Accept payments using PayPal Gateway
    </p>

    <div
      class="tw-grid tw-grid-cols-12 tw-rounded tw-border dark:tw-border-neutral-600 tw-border-neutral-300 tw-border-dashed"
    >
      <div
        class="md:tw-col-span-6 tw-col-span-12 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md tw-p-2"
      >
        <label class="tw-text-sm">Live Client ID</label>
        <input
          v-model="liveClientId"
          :class="{ '!tw-border-red-400': !form.liveClientId.valid }"
          class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"
          placeholder="Live Client ID"
          type="text"
        />
        <div
          class="tw-text-xs tw-text-neutral-400 tw-mb-2"
          :class="[!form.liveClientId.valid && '!tw-text-red-400']"
        >
          <span v-if="!form.liveClientId.valid">
            {{ form.liveClientId.valid }}
          </span>
          <span v-else>
            Please enter the live client ID from your Paypal dashboard.
          </span>
        </div>
      </div>

      <div
        class="md:tw-col-span-6 tw-col-span-12 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md tw-p-2"
      >
        <label class="tw-text-sm">Live Secret Key</label>
        <input
          v-model="liveSecretKey"
          :class="{ '!tw-border-red-400': !form.liveSecretKey.valid }"
          class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"
          placeholder="Secret Key"
          type="text"
        />
        <div
          class="tw-text-xs tw-text-neutral-400 tw-mb-2"
          :class="[!form.liveSecretKey.valid && '!tw-text-red-400']"
        >
          <span v-if="!form.liveSecretKey.valid">
            {{ form.liveSecretKey.valid }}
          </span>
          <span v-else>
            Please enter the secret key from your paypal dashboard.
          </span>
        </div>
      </div>

      <div
        class="md:tw-col-span-6 tw-col-span-12 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md tw-p-2"
      >
        <label class="tw-text-sm">Test Client ID</label>
        <input
          v-model="testClientId"
          :class="{ '!tw-border-red-400': !form.testClientId.valid }"
          class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"
          placeholder="Test Client ID"
          type="text"
        />
        <div
          class="tw-text-xs tw-text-neutral-400 tw-mb-2"
          :class="[!form.testClientId.valid && '!tw-text-red-400']"
        >
          <span v-if="!form.testClientId.valid">
            {{ form.testClientId.valid }}
          </span>
          <span v-else>
            Please enter the test client id from your Paypal dashboard.
          </span>
        </div>
      </div>

      <div
        class="md:tw-col-span-6 tw-col-span-12 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md tw-p-2"
      >
        <label class="tw-text-sm">Test Secret Key</label>
        <input
          v-model="testSecretKey"
          :class="{ '!tw-border-red-400': !form.testSecretKey.valid }"
          class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"
          placeholder="Test Secret Key"
          type="text"
        />
        <div
          class="tw-text-xs tw-text-neutral-400 tw-mb-2"
          :class="[!form.testSecretKey.valid && '!tw-text-red-400']"
        >
          <span v-if="!form.testSecretKey.valid">
            {{ form.testSecretKey.valid }}
          </span>
          <span v-else>
            Please enter the secret key from your paypal dashboard.
          </span>
        </div>
      </div>
    </div>

    <div class="tw-flex tw-justify-end tw-mt-3">
      <button @click="update" class="tw-py-2 tw-px-7 tw-h-[38px] tw-w-fit tw-whitespace-nowrap tw-rounded dark:tw-text-neutral-300 tw-text-white tw-bg-[rgb(var(--primary))] tw-border tw-border-solid tw-border-tansparent hover:tw-border-[rgb(var(--primary-dark))] dark:tw-border-neutral-900 dark:hover:tw-border-[rgb(var(--primary-light))] hover:tw-bg-[rgb(var(--primary))] dark:hover:tw-bg-[rgb(var(--primary))] tw-duration-200 tw-flex tw-items-center tw-justify-center">
            <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
            <span class="tw-text-sm">Save</span>
        </button>
    </div>
  </div>
</template>

<script>
import App from '@/api/App'
export default {
  props: ["paypal"],

  data() {
    return {
      isLoading: false,

      form: {
        liveClientId: {
          valid: true,
          message: "",
        },
        liveSecretKey: {
          valid: true,
          message: "",
        },
        testClientId: {
          valid: true,
          message: "",
        },
        testSecretKey: {
          valid: true,
          message: "",
        },
      },
      live: true,
    };
  },

  computed: {
    liveClientId: {
      get() {
        return this.paypal.live.clientId;
      },
      set(v) {
        this.$emit("update:paypal", {
          ...this.paypal,
          live: { ...this.paypal.live, clientId: v },
        });
      },
    },
    liveSecretKey: {
      get() {
        return this.paypal.live.secretKey;
      },
      set(v) {
        this.$emit("update:paypal", {
          ...this.paypal,
          live: { ...this.paypal.live, secretKey: v },
        });
      },
    },

    testClientId: {
      get() {
        return this.paypal.test.clientId;
      },
      set(v) {
        this.$emit("update:paypal", {
          ...this.paypal,
          test: { ...this.paypal.test, clientId: v },
        });
      },
    },
    testSecretKey: {
      get() {
        return this.paypal.test.secretKey;
      },
      set(v) {
        this.$emit("update:paypal", {
          ...this.paypal,
          test: { ...this.paypal.test, secretKey: v },
        });
      },
    },
    active: {
      get() {
        return this.paypal.active;
      },
      set(v) {
        this.$emit("update:paypal", { ...this.paypal, active: v });
      },
    },
    isTest: {
      get() {
        return this.paypal.isTest;
      },
      set(v) {
        this.$emit("update:paypal", { ...this.paypal, isTest: v });
      },
    },
  },

  methods: {
    update() {
      this.isLoading = true;

      const options = [
        {
          option_name: 'pay_with_paypal',
          option_value: this.paypal.active
        },
        {
          option_name: 'paypal_live_client_id',
          option_value: this.paypal.live.clientId
        },
        {
          option_name: 'paypal_live_secret_key',
          option_value: this.paypal.live.secretKey
        },
        {
          option_name: 'paypal_test_client_id',
          option_value: this.paypal.test.clientId
        },
        {
          option_name: 'paypal_test_secret_key',
          option_value: this.paypal.test.secretKey
        },
        {
          option_name: 'paypal_mode_test',
          option_value: this.paypal.isTest
        }
      ]

      App.updateOptions(options)
      .then(
        res => {
          if(res.data.code == 'SUCCESS') {
            this.$alert({
              body: "Updated successfully",
              type: "success",
            })
          }
        },
        this.$handleApiError
      ).finally(
        () => this.isLoading = false
      )
    }
  }
};
</script>

<style>
</style>