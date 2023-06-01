<template>
  <div>
    <popup :visible="visibleValue" @cancel="visibleValue = false">
      <div
        class="tw-mx-auto tw-w-[95%] tw-max-h-screen tw-overflow-y-auto md:tw-max-w-[500px] tw-overflow-hidden tw-min-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg"
      >
        <h1
          class="tw-mb-2 tw-pt-5 tw-px-5 tw-text-lg dark:tw-text-neutral-100 tw-text-neutral-700"
        >
          Passsword reset
        </h1>
        <div class="tw-p-5">
          <div class="tw-h-fit tw-gap-2 tw-grid tw-grid-cols-12">
            <div class="tw-col-span-12 tw-h-fit">
              <div
                class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md"
              >
                <label class="tw-text-sm" for="email">Email</label>
                <input
                  @keyup="reset('email')"
                  v-model="email"
                  :class="{ '!tw-border-red-400': !form.email.valid }"
                  class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]"
                  placeholder="Account email"
                  type="text"
                />
                <div
                  class="tw-text-xs tw-text-neutral-400"
                  :class="[!form.email.valid && '!tw-text-red-400']"
                >
                  <span>
                    <!-- Do not exceed 20 characters when entering the order status name. -->
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-py-2 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-neutral-100"
        >
          <button
            @click="cancel"
            class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-black/20 tw-bg-neutral-300 dark:tw-bg-neutral-600 tw-duration-200 tw-text-neutral-900 dark:tw-text-neutral-300"
          >
            Cancel
          </button>
          <button
            @click="handleSend"
            class="tw-py-2 tw-px-7 tw-h-[38px] tw-w-fit tw-whitespace-nowrap tw-rounded dark:tw-text-neutral-300 tw-text-white tw-bg-[rgb(var(--primary))] tw-border tw-border-solid tw-border-tansparent hover:tw-border-[rgb(var(--primary-dark))] dark:tw-border-neutral-900 dark:hover:tw-border-[rgb(var(--primary-light))] hover:tw-bg-[rgb(var(--primary))] dark:hover:tw-bg-[rgb(var(--primary))] tw-duration-200 tw-flex tw-items-center tw-justify-center"
          >
            <v-icon
              size="small"
              class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
              :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']"
              >mdi-loading</v-icon
            >
            <span>Send</span>
          </button>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import User from '@/api/User';
export default {
  props: ["visible"],
  data() {
    return {
      isLoading: false,

      email: "",
      form: {
        email: {
          valid: true,
          message: "",
        },
      },
    };
  },

  computed: {
    visibleValue: {
      get() {
        return this.visible;
      },
      set(value) {
        this.$emit("update:visible", value);
      },
    },
  },

  methods: {
    cancel() {
      this.$emit("update:visible", false);
    },
    handleSend() {
        if(this.email == '') {
            this.$alert({
                body: 'Email is not valid',
                type: 'warning'
            })
            return false;
        }
        this.isLoading = true;
        User.sendRequestPassword(this.email)
        .then(
            res => {
                if(res.data.code == 'USER_NOT_FOUND') {
                    this.$alert({
                        type: 'warning',
                        body: 'User does not exists !'
                    })
                }
                if(res.data.code == 'SUCCES') {
                    this.$alert({
                        type: 'success',
                        body: 'A password reset email has been sent !'
                    })
                }
            }
        )
        .finally(
            () => {
                this.isLoading = false
            }
        )
    },
    reset(field) {
      this.form[field] = {
        valid: true,
        message: "",
      };
    },
  },
};
</script>

<style>
</style>