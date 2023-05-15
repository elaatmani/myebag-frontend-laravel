<template>
    <div class="tw-mx-auto tw-w-[95%] tw-max-h-screen tw-overflow-y-auto md:tw-max-w-[800px] tw-overflow-hidden tw-min-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md  tw-my-5 tw-rounded-lg">
    
        <h1 class="tw-mb-2 tw-pt-5 tw-px-5 tw-text-lg dark:tw-text-neutral-100 tw-text-neutral-700">Create Order Status</h1>
        <div class="tw-p-5">
            <div class="tw-h-fit tw-gap-2 tw-grid tw-grid-cols-12">
                <div class="tw-col-span-12 tw-h-fit">
                    <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                        <label class="tw-text-sm" for="email">Name</label>
                        <input @keyup="reset('name')" v-model="name" :class="{ '!tw-border-red-400': !form.name.valid }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Status name" type="text">
                        <div class="tw-text-xs tw-text-neutral-400" :class="[!form.name.valid && '!tw-text-red-400']">
                            <span v-if="!form.name.valid">
                            {{ form.name.message }}
                            </span>
                            <span v-else>
                            Do not exceed 20 characters when entering the order status name.
                            </span>
                        </div>
                    </div>
                </div>
                

                <div class="tw-col-span-12 md:tw-col-span-6 tw-flex tw-gap-2 tw-items-center">
                    <div class="tw-flex tw-justify-center tw-w-full tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                        <label class="tw-text-sm" for="email">Background color</label>
                        <div class="tw-flex tw-items-center tw-gap-2 tw-my-2 ">
                            <input v-model="backgroundColor" @keyup="reset('')" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Background color" type="text">
                            <input v-model="backgroundColorHex" @keyup="reset('')" :class="{ '!tw-border-red-400': !true }" class="tw-text-sm tw-w-[70px] tw-h-[38px]  tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" type="color">

                        </div>
                        <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!true && '!tw-text-red-400']">
                            <span v-if="!true">
                            {{ '' }}
                            </span>
                            <span v-else>
                            Enter a background color HEX code or choose a color.
                            </span>
                        </div>
                    </div>
                </div>

                <div class="tw-col-span-12 md:tw-col-span-6 tw-flex tw-gap-2 tw-items-center">
                    <div class="tw-flex tw-justify-center tw-w-full tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                        <label class="tw-text-sm" for="email">Text color</label>
                        <div class="tw-flex tw-items-center tw-gap-2 tw-my-2 ">
                            <input v-model="textColor" @keyup="reset('')" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Text color" type="text">
                            <input v-model="textColorHex" @keyup="reset('')" :class="{ '!tw-border-red-400': !true }" class="tw-text-sm tw-w-[70px] tw-h-[38px]  tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" type="color">

                        </div>
                        <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!true && '!tw-text-red-400']">
                            <span v-if="!true">
                            {{ '' }}
                            </span>
                            <span v-else>
                            Enter a text color HEX code or choose a color.
                            </span>
                        </div>
                    </div>
                </div>

                <div class="tw-col-span-12 md:tw-col-span-6 tw-flex tw-gap-2 tw-items-center">
                    <div class="tw-flex tw-items-center tw-w-full tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                        <label class="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer tw-w-fit -tw-rotate-90 ">
                            <input type="checkbox" v-model="type" class="tw-sr-only tw-peer">
                            <div class="tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none  tw-rounded-full tw-peer dark:tw-bg-neutral-600 peer-checked:after:tw-translate-x-full peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-left-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600"></div>
                        </label>
                        <label class="tw-flex tw-flex-col tw-justify-center tw-gap-1">

                            <span :class="[type ? 'tw-text-neutral-700 dark:tw-text-neutral-200' : 'tw-text-neutral-400 dark:tw-text-neutral-500']" class="tw-ml-1 tw-text-sm tw-font-medium tw-duration-300">Admin</span>
                            <span :class="[!type ? 'tw-text-neutral-700 dark:tw-text-neutral-200' : 'tw-text-neutral-400 dark:tw-text-neutral-500']" class="tw-ml-1 tw-text-sm tw-font-medium tw-duration-300">User</span>
                        </label>
                    </div>
                    <div class="tw-flex tw-justify-center tw-w-full tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                        <label class="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer">
                            <input type="checkbox" v-model="markAsPaid" class="tw-sr-only tw-peer">
                            <div class="tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none peer-focus:tw-ring-4 peer-focus:tw-ring-violet-300 dark:peer-focus:tw-ring-violet-300/50 tw-rounded-full tw-peer dark:tw-bg-neutral-600 peer-checked:after:tw-translate-x-full peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-left-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600 peer-checked:tw-bg-violet-500"></div>
                            <span class="tw-ml-3 tw-text-sm tw-font-medium tw-text-neutral-700 dark:tw-text-neutral-200">Mark as Paid</span>
                        </label>
                    </div>
                    
                </div>

                <div class="tw-col-span-12 md:tw-col-span-6 tw-flex tw-gap-2 tw-items-center">
                    <div class="tw-flex tw-justify-center tw-w-full tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                        <label class="tw-text-sm" for="email">Preview</label>
                        <div :style="{color: textColor, background: backgroundColor}" class="tw-flex tw-w-fit tw-text-sm tw-h-[30px] tw-min-w-[60px] tw-items-center tw-rounded tw-px-2 tw-py-1">
                            {{ name }}
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-py-2 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-neutral-100">
            <button @click="cancel" class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-black/20 tw-bg-neutral-300  dark:tw-bg-neutral-600  tw-duration-200  tw-text-neutral-900 dark:tw-text-neutral-300">
                Cancel
            </button>
            <button @click="handleCreate" class="tw-py-2 tw-px-7 tw-h-[38px] tw-w-fit tw-whitespace-nowrap tw-rounded dark:tw-text-neutral-300 tw-text-white tw-bg-violet-500 tw-border tw-border-solid tw-border-tansparent hover:tw-border-violet-600 dark:tw-border-neutral-900 dark:hover:tw-border-violet-400 hover:tw-bg-violet-500 dark:hover:tw-bg-violet-500 tw-duration-200 tw-flex tw-items-center tw-justify-center">
                <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                <span>Create</span>
            </button>
        </div>
    
    </div>
</template>

<script>
import { required } from '@/helpers/validators';
import Order from '@/api/Order';
export default {
    data() {
        return {
            isLoading: false,

            name: '',
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
            markAsPaid: false,
            type: true,

            form: {
                name: {
                    valid: true,
                    message: ''
                },
            }
        }
    },

    computed: {
        isFormValid() {
            return this.form.name.valid
        },
        backgroundColorHex: {
            get() {
                return this.backgroundColor
            },
            set(value) {
                this.backgroundColor = value
            }
        },
        textColorHex: {
            get() {
                return this.textColor
            },
            set(value) {
                this.textColor = value
            }
        }
    },

    methods: {
        cancel() {
            this.$emit('cancel')
        },
        handleCreate() {
            this.validateForm()
            if(!this.isFormValid) return false;

            const status = {
                name: this.name,
                send_notification: false,
                mark_as_paid: this.markAsPaid,
                text_color: this.textColor,
                background_color: this.backgroundColor,
                type: this.type ? 'admin' : 'user'
            }
            this.isLoading = true
            
            Order.createStatus(status)
            .then(
                res => {
                    if(res.data.code == 'SUCCESS') {
                        console.log(res.data);
                            status.id = res.data.data?.order?.id

                        this.$store.dispatch('app/addOrderStatus', res.data.data?.order_status)

                        this.$alert({
                            type: 'success',
                            body: 'Order status created successfully'
                        })
                        this.cancel()
                    }
                }
            )
            .finally(
                () => {
                    this.isLoading = false
                }
            )

        },
        validateForm() {
            this.form.name = required(this.name, 'Order status name')
        },
        reset(field) {
            this.form[field] = {
                valid: true,
                message: ''
            }
        }
    }
}
</script>

<style>

</style>