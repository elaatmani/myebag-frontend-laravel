<template>
  <div>
    <div class="tw-mb-3 tw-flex tw-items-center tw-justify-between">
      <div class="tw-flex tw-items-center tw-gap-2">
        <icon icon="ph:credit-card" class="tw-text-lg" />
        <h1>Stripe</h1>
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
        <h1 class="tw-text-sm">Test:</h1>
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
      Accept payments using credit card: Visa, Mastercard...
    </p>
    <div
      class="tw-grid tw-grid-cols-12 tw-rounded tw-border dark:tw-border-neutral-600 tw-border-neutral-300 tw-border-dashed"
    >
      <div
        class="md:tw-col-span-6 tw-col-span-12 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md tw-p-2"
      >
        <label class="tw-text-sm">Public Live Key</label>
        <input
          v-model="publicLiveKey"
          :class="{ '!tw-border-red-400': !form.publicLiveKey.valid }"
          class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"
          placeholder="Public Live Key"
          type="text"
        />
        <div
          class="tw-text-xs tw-text-neutral-400 tw-mb-2"
          :class="[!form.publicLiveKey.valid && '!tw-text-red-400']"
        >
          <span v-if="!form.publicLiveKey.valid">
            {{ form.publicLiveKey.valid }}
          </span>
          <span v-else>
            Please enter the public live key from your Stripe dashboard.
          </span>
        </div>
      </div>

      <div
        class="md:tw-col-span-6 tw-col-span-12 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md tw-p-2"
      >
        <label class="tw-text-sm">Secret Live Key</label>
        <input
          v-model="secretLiveKey"
          :class="{ '!tw-border-red-400': !form.secretLiveKey.valid }"
          class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"
          placeholder="Secret Key"
          type="text"
        />
        <div
          class="tw-text-xs tw-text-neutral-400 tw-mb-2"
          :class="[!form.secretLiveKey.valid && '!tw-text-red-400']"
        >
          <span v-if="!form.secretLiveKey.valid">
            {{ form.secretLiveKey.valid }}
          </span>
          <span v-else>
            Please enter the secret live key from your Stripe dashboard.
          </span>
        </div>
      </div>

      <div
        class="md:tw-col-span-6 tw-col-span-12 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md tw-p-2"
      >
        <label class="tw-text-sm">Public Test Key</label>
        <input
          v-model="publicTestKey"
          :class="{ '!tw-border-red-400': !form.publicTestKey.valid }"
          class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"
          placeholder="Public Live Key"
          type="text"
        />
        <div
          class="tw-text-xs tw-text-neutral-400 tw-mb-2"
          :class="[!form.publicTestKey.valid && '!tw-text-red-400']"
        >
          <span v-if="!form.publicTestKey.valid">
            {{ form.publicTestKey.valid }}
          </span>
          <span v-else>
            Please enter the public test key from your Stripe dashboard.
          </span>
        </div>
      </div>

      <div
        class="md:tw-col-span-6 tw-col-span-12 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md tw-p-2"
      >
        <label class="tw-text-sm">Secret Test Key</label>
        <input
          v-model="secretTestKey"
          :class="{ '!tw-border-red-400': !form.secretTestKey.valid }"
          class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"
          placeholder="Secret Key"
          type="text"
        />
        <div
          class="tw-text-xs tw-text-neutral-400 tw-mb-2"
          :class="[!form.secretTestKey.valid && '!tw-text-red-400']"
        >
          <span v-if="!form.secretTestKey.valid">
            {{ form.secretTestKey.valid }}
          </span>
          <span v-else>
            Please enter the secret test key from your Stripe dashboard.
          </span>
        </div>
      </div>
    </div>

    <div class="tw-flex tw-justify-end tw-mt-3">
      <button
        @click="update"
        class="tw-py-2 tw-px-7 tw-h-[38px] tw-w-fit tw-whitespace-nowrap tw-rounded dark:tw-text-neutral-300 tw-text-white tw-bg-[rgb(var(--primary))] tw-border tw-border-solid tw-border-tansparent hover:tw-border-[rgb(var(--primary-dark))] dark:tw-border-neutral-900 dark:hover:tw-border-[rgb(var(--primary-light))] hover:tw-bg-[rgb(var(--primary))] dark:hover:tw-bg-[rgb(var(--primary))] tw-duration-200 tw-flex tw-items-center tw-justify-center"
      >
        <v-icon
          size="small"
          class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
          :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']"
          >mdi-loading</v-icon
        >
        <span class="tw-text-sm">Save</span>
      </button>
    </div>
  </div>
</template>

<script>
import App from '@/api/App'

export default {
  props: ["stripe"],

  data() {
    return {
      isLoading: false,

      form: {
        publicLiveKey: {
          valid: true,
          message: "",
        },
        secretLiveKey: {
          valid: true,
          message: "",
        },
        publicTestKey: {
          valid: true,
          message: "",
        },
        secretTestKey: {
          valid: true,
          message: "",
        },
      },
      live: true,
    };
  },

  computed: {
    publicLiveKey: {
      get() {
        return this.stripe.live.publicKey;
      },
      set(v) {
        this.$emit("update:stripe", {
          ...this.stripe,
          live: { ...this.stripe.live, publicKey: v },
        });
      },
    },
    secretLiveKey: {
      get() {
        return this.stripe.live.secretKey;
      },
      set(v) {
        this.$emit("update:stripe", {
          ...this.stripe,
          live: { ...this.stripe.live, secretKey: v },
        });
      },
    },

    publicTestKey: {
      get() {
        return this.stripe.test.publicKey;
      },
      set(v) {
        this.$emit("update:stripe", {
          ...this.stripe,
          test: { ...this.stripe.test, publicKey: v },
        });
      },
    },
    secretTestKey: {
      get() {
        return this.stripe.test.secretKey;
      },
      set(v) {
        this.$emit("update:stripe", {
          ...this.stripe,
          test: { ...this.stripe.test, secretKey: v },
        });
      },
    },

    active: {
      get() {
        return this.stripe.active;
      },
      set(v) {
        this.$emit("update:stripe", { ...this.stripe, active: v });
      },
    },

    isTest: {
      get() {
        return this.stripe.isTest;
      },
      set(v) {
        this.$emit("update:stripe", { ...this.stripe, isTest: v });
      },
    },
  },

  methods: {
    update() {
      this.isLoading = true;

      const options = [
        {
          option_name: 'pay_with_stripe',
          option_value: this.stripe.active
        },
        {
          option_name: 'stripe_live_secret_key',
          option_value: this.stripe.live.secretKey
        },
        {
          option_name: 'stripe_live_public_key',
          option_value: this.stripe.live.publicKey
        },
        {
          option_name: 'stripe_test_secret_key',
          option_value: this.stripe.test.secretKey
        },
        {
          option_name: 'stripe_test_public_key',
          option_value: this.stripe.test.publicKey
        },
        {
          option_name: 'stripe_mode_test',
          option_value: this.stripe.isTest
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

    },
  },
};
</script>

<style>
</style>