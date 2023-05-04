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
import Order from '@/api/Order'
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
        loadScript() {
            const script = document.createElement('script');
            script.src = 'https://www.paypal.com/sdk/js?currency=USD&locale=en_US&disable-funding=card&client-id=' + paypalClientId
            script.onload = this.mountButtons

            document.head.append(script)
        },
        
        mountButtons() {
            let paypal = window.paypal
            this.isReady = true
            const createOrder = () => this.createOrder();
            
            const onError = () => this.onError();

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
                            createOrder()
                        }
                        
                    });
                },
                onError(data, actions) {
                    console.log('error paypal');
                    console.log(data);
                    console.log(actions);
                    onError()
                    
                },
            }).render('#paypal-buttons')
        },
        nextStep() {
            this.$emit('orderCompleted', 4)
        },
        createOrder() {
            const order = {
                total: this.total,
                items: this.cart.map(i => {
                    return {
                        product_variation_id: i.variation.id,
                        quantity: i.quantity
                    }
                }),
                payment_details: {
                    amount: this.total,
                    provider: 'paypal',
                    status: true
                }
            }
            Order.create(order)
            .then(
                res => {
                    if(res.data.code == 'SUCCESS') {
                        this.$alert({
                            body: 'Order completed !',
                            type: 'success'
                        })
                        this.nextStep()
                    }
                },
                this.$handleApiError
            )
        },

        onError() {
            this.$alert({
                type: 'danger',
                body: 'Payment has been canceled'
            })
        }
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