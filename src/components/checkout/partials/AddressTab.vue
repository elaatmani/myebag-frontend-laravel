<template>
    <h1 class="tw-mb-5">Shipping Details</h1>
  <div class="tw-mt-5">
    <div class="tw-grid tw-grid-cols-12 tw-gap-2">
      <div class="tw-col-span-6">
        <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-text-sm">First name</label>
              <input
              v-model="firstname" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="First name" type="text">
              <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!true && '!tw-text-red-400']">
                <span v-if="!true">
                  {{ 'form.name.message' }}
                </span>
              </div>
            </div>
      </div>
      <div class="tw-col-span-6">
        <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-text-sm">Last name</label>
              <input
              v-model="lastname" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Last name" type="text">
              <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!true && '!tw-text-red-400']">
                <span v-if="!true">
                  {{ 'form.name.message' }}
                </span>
              </div>
            </div>
      </div>
      <div class="tw-col-span-12">
        <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-text-sm">Street address</label>
              <input
              v-model="address_line_1" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Street address" type="text">
              <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!true && '!tw-text-red-400']">
                <span v-if="!true">
                  {{ 'form.name.message' }}
                </span>
                <span v-else>
                  Do not exceed 30 characters when entering the street address.
                </span>
              </div>
            </div>
      </div>
      <div class="tw-col-span-12">
        <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-text-sm">Street address (Line 02)</label>
              <input
              v-model="address_line_2" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Street address" type="text">
              <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!true && '!tw-text-red-400']">
                <span v-if="!true">
                  {{ 'form.name.message' }}
                </span>
              </div>
            </div>
      </div>
      <div class="tw-col-span-4">
        <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-text-sm">Zip code</label>
              <input
              v-model="zip_code" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Zip code" type="text">
              <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!true && '!tw-text-red-400']">
                <span v-if="!true">
                  {{ 'form.name.message' }}
                </span>
              </div>
            </div>
      </div>
      <div class="tw-col-span-4">
        <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-text-sm">City</label>
              <input
              v-model="city" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="City" type="text">
              <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!true && '!tw-text-red-400']">
                <span v-if="!true">
                  {{ 'form.name.message' }}
                </span>
              </div>
            </div>
      </div>
      <div class="tw-col-span-4">
        <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-text-sm">Country</label>
              <input
              v-model="country" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Country" type="text">
              <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!true && '!tw-text-red-400']">
                <span v-if="!true">
                  {{ 'form.name.message' }}
                </span>
              </div>
            </div>
      </div>

    </div>
    <div class="tw-mt-5 tw-flex tw-justify-end">
      <button @click="nextStep" class="tw-w-fit  tw-font-medium tw-gap-2 tw-text-sm tw-flex tw-justify-center tw-text-center tw-py-2 tw-px-7 tw-items-center tw-rounded tw-bg-violet-500 tw-text-white">
          Continue
      </button>
    </div>
  </div>
</template>

<script>
// import UserAddresses from '@/components/checkout/partials/UserAddresses'
export default {
    // components: {UserAddresses},

    emits: ['updateStep'],

    data() {
      return {
        firstname: '',
        lastname: '',
        address_line_1: '',
        address_line_2: '',
        zip_code: '',
        city: '',
        country: ''
      }
    },

    methods: {
      nextStep() {
        this.$emit('updateStep', 3)
      },
    }
}
</script>

<style>

</style> 