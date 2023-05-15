<template>
  <div class="tw-border-b dark:tw-border-neutral-700 tw-border-neutral-200">
    <h1 class="tw-px-3 tw-py-2">Shipping Info</h1>
    <div class="tw-p-3">
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <p
                  class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500"
                >
                  Address:
                </p>
              </td>
              <td>
                <p class="tw-py-1 tw-text-sm tw-ml-2">
                  {{ order.shipping_address.adress_line1 }}
                </p>
              </td>
            </tr>
            <tr v-if="!!order.shipping_address.adress_line2">
              <td>
                <p
                  class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500"
                >
                  Address 2:
                </p>
              </td>
              <td>
                <p class="tw-py-1 tw-text-sm tw-ml-2">
                  {{ order.shipping_address.adress_line2 }}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p
                  class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500"
                >
                  Postal code:
                </p>
              </td>
              <td>
                <p class="tw-py-1 tw-text-sm tw-ml-2">{{ order.shipping_address.postal_code }}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p
                  class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500"
                >
                  City:
                </p>
              </td>
              <td>
                <p class="tw-py-1 tw-text-sm tw-ml-2">{{ order.shipping_address.city }}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p
                  class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500"
                >
                  Country:
                </p>
              </td>
              <td>
                <p class="tw-py-1 tw-text-sm tw-ml-2">{{ order.shipping_address.country }}</p>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['order'],

    mounted() {
    }
};
</script>

<style>
</style>