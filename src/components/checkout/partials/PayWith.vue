<template>
  <div class="tw-flex tw-flex-col tw-gap-2">
    <!-- <button @click="isLoading = true" class="tw-w-full tw-font-medium tw-gap-2 tw-text-sm tw-flex tw-justify-center tw-text-center tw-py-2 tw-px-7 tw-items-center tw-rounded tw-bg-yellow-500 tw-text-white">
        <v-icon class="tw-animate-spin tw-text-blue-600" v-if="isLoading" >mdi-loading</v-icon>
        
        <div v-if="!isLoading" class="tw-h-[24px] tw-flex tw-items-center tw-gap-1">
            <img :src="$frontend('assets/images/icons/p.svg')" class="tw-w-[22px]" alt="">
            <img :src="$frontend('assets/images/icons/paypal.svg')" class="tw-w-[80px]" alt="">
        </div>
    </button> -->

    <paypal-gateway></paypal-gateway>

    <youcan-pay></youcan-pay>
  </div>
</template>

<script>
import PaypalGateway from '../gateways/PaypalGateway.vue'
import YoucanPayGateway from '../gateways/YoucanPayGateway.vue'


export default {
    components: {
        'paypal-gateway': PaypalGateway,
        'youcan-pay': YoucanPayGateway
        },
    data() {
        return {
            isLoading: false,
        }
    },

    computed: {
    },

    methods: {
    },

    mounted() {
    }
}
</script>

<style>

</style>