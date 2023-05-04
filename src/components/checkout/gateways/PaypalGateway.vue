<template>
    <div>
        <div v-if="!isReady" class="tw-w-full tw-h-[45px]s tw-font-medium tw-gap-2 tw-text-sm tw-flex tw-justify-center tw-text-center tw-py-2 tw-px-7 tw-items-center tw-rounded tw-bg-yellow-500 tw-text-white">
            <v-icon class="tw-animate-spin tw-text-white">mdi-loading</v-icon>
        </div>
        <div id="paypal-buttons">

        </div>
    </div>
</template>

<script>
import { paypalClientId } from '@/config/app'
export default {

    emits: ['orderCompleted'],

    data() {
        return {
            isReady: false
        }
    },

    computed: {
        cart() {
            return this.$store.getters['cart/cart']
        },

        shipping() {
            return 5
        },

        total() {
            let total = 0;

            this.cart.forEach(item => {
                total += (item.variation.price * item.quantity)
            });

            return total + this.shipping
        },
    },

    methods: {
        notify(notif) {
            this.$alert(notif)
        },
        loadScript() {
            const script = document.createElement('script');
            script.src = 'https://www.paypal.com/sdk/js?currency=USD&locale=en_US&disable-funding=card&client-id=' + paypalClientId
            script.onload = this.mountButtons

            document.head.append(script)
        },
        
        mountButtons() {
            let paypal = window.paypal
            this.isReady = true
            const alertToast = (notif) => this.notify(notif)
            const nextStep = () => {
                console.log('next step ...');
                this.nextStep()
            };
            const total = this.total
            paypal.Buttons({
                style: {
                    label: 'pay',
                },
                createOrder(data, actions) {
                    console.log('create order');
                    console.log(data);
                    console.log(actions);
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: total,
                                },
                                }
                        ],
                    });
                },
                onApprove(data, actions) {
                    console.log('on approve');
                    console.log(data);
                    console.log(actions);
                    return actions.order.capture().then(details => {
                        // Show a success message to the buyer
                        if(details?.status == 'COMPLETED') {
                            alertToast({
                                body: 'Order completed !',
                                type: 'success'
                            });
                        }
                        console.log(details);
                        nextStep()
                        
                    });
                },
                onError(data, actions) {
                    console.log('error paypal');
                    console.log(data);
                    console.log(actions);
                },
            }).render('#paypal-buttons')
        },
        nextStep() {
            console.log('step fired');
            this.$emit('orderCompleted', 4)
        },
    },

    mounted() {
        if(!window.paypal) {
            this.loadScript()
        } else {
            this.mountButtons()
        }
    }
}
</script>

<style>

</style>