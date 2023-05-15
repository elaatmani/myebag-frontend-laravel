<template>
  <div class="">
    <h1 class="tw-px-3 tw-py-2">Payment Info</h1>
    <div class="tw-p-3">
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <p
                  class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500"
                >
                  Payment Method:
                </p>
              </td>
              <td>
                <p class="tw-py-1 tw-text-sm tw-ml-2 tw-flex tw-items-center tw-gap-2">
                    <icon class="tw-text-lg" :icon="getPaymentMethod(order.payment_detail).icon" />
                    <span>
                        {{ getPaymentMethod(order.payment_detail).name }}
                    </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p
                  class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500"
                >
                  Amount:
                </p>
              </td>
              <td>
                <p class="tw-py-1 tw-text-sm tw-ml-2">${{order.total}}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p
                  class="tw-py-1 tw-text-xs tw-font-light dark:tw-text-neutral-400 tw-text-neutral-500"
                >
                  Status:
                </p>
              </td>
              <td>
                <p v-if="order.payment_detail.status" class="tw-py-1 tw-text-sm tw-ml-2 tw-text-emerald-500">
                  Completed
                </p>
                <p v-if="!order.payment_detail.status" class="tw-py-1 tw-text-sm tw-ml-2 tw-text-pink-500">
                  Not Paid
                </p>

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

    methods: {
        getPaymentMethod(payment) {
            switch (payment.provider) {
                case 'cod':
                    return {name: 'Cash On Delivery', icon: 'fluent:money-hand-20-regular'}
                case 'paypal':
                    return {name: 'Paypal', icon: 'ph:paypal-logo'}
                case 'stripe':
                    return {name: 'Credit Card', icon: 'ph:credit-card'}
            
                default:
                    return {name: 'Others', icon: 'ph:currency-circle-dollar'}
            }
        }
    }
};
</script>

<style>
</style>