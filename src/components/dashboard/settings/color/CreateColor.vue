<template>
    <div class="tw-mx-auto tw-w-[95%] tw-max-h-screen tw-overflow-y-auto md:tw-max-w-[800px] tw-overflow-hidden tw-min-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md  tw-my-5 tw-rounded-lg">
    
        <h1 class="tw-mb-2 tw-pt-5 tw-px-5 tw-text-lg dark:tw-text-neutral-100 tw-text-neutral-700">Create Color</h1>
        <div class="tw-p-5">
            <div class="tw-h-fit tw-gap-2 tw-grid tw-grid-cols-12">
                <div class="tw-col-span-12 tw-h-fit">
                    <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                        <label class="tw-text-sm" for="email">Name</label>
                        <input @keyup="reset('name')" v-model="name" :class="{ '!tw-border-red-400': !form.name.valid }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]" placeholder="Color name" type="text">
                        <div class="tw-text-xs tw-text-neutral-400" :class="[!form.name.valid && '!tw-text-red-400']">
                            <span v-if="!form.name.valid">
                            {{ form.name.message }}
                            </span>
                            <span v-else>
                            Do not exceed 15 characters when entering the color name.
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="tw-col-span-12 tw-flex tw-gap-2 tw-items-center">
                    <div class="tw-flex tw-justify-center tw-w-full tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                        <label class="tw-text-sm" for="email">Hex code</label>
                        <div class="tw-flex tw-items-center tw-gap-2 tw-my-2 ">
                            <input v-model="hex" @keyup="reset('')" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]" placeholder="Hex code" type="text">
                            <input v-model="colorHex" @keyup="reset('')" :class="{ '!tw-border-red-400': !true }" class="tw-text-sm tw-w-[70px] tw-h-[38px]  tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]" type="color">

                        </div>
                        <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!true && '!tw-text-red-400']">
                            <span v-if="!true">
                            {{ '' }}
                            </span>
                            <span v-else>
                            Enter a color HEX code or choose a color.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-py-2 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-neutral-100">
            <button @click="cancel" class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-black/20 tw-bg-neutral-300  dark:tw-bg-neutral-600  tw-duration-200  tw-text-neutral-900 dark:tw-text-neutral-300">
                Cancel
            </button>
            <button @click="handleCreate" class="tw-py-2 tw-px-7 tw-h-[38px] tw-w-fit tw-whitespace-nowrap tw-rounded dark:tw-text-neutral-300 tw-text-white tw-bg-[rgb(var(--primary))] tw-border tw-border-solid tw-border-tansparent hover:tw-border-[rgb(var(--primary-dark))] dark:tw-border-neutral-900 dark:hover:tw-border-[rgb(var(--primary-light))] hover:tw-bg-[rgb(var(--primary))] dark:hover:tw-bg-[rgb(var(--primary))] tw-duration-200 tw-flex tw-items-center tw-justify-center">
                <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                <span>Create</span>
            </button>
        </div>
    
    </div>
</template>

<script>
import { required } from '@/helpers/validators';
import Color from '@/api/Color';
export default {
    data() {
        return {
            isLoading: false,

            name: '',
            hex: '',

            hexCode: '#FFFFFF',

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
        colorHex: {
            get() {
                return this.hexCode
            },
            set(value) {
                this.hexCode = value
            }
        }
    },

    watch: {
        hexCode(value) {
            this.hex = value
        },
        hex(value) {
            const hexRegex = /^#(?:[0-9a-f]{3}){2}$/i;
            if(hexRegex.test(value)) {
                this.colorHex = value
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

            const color = {
                name: this.name,
                hex_code: this.hex
            }
            
            this.isLoading = true
            Color.create(color)
            .then(
                res => {
                    if(res.data.code == 'SUCCESS') {
                        console.log(res.data);
                            color.id = res.data.data?.color?.id

                        this.$store.dispatch('app/addColor', color)

                        this.$alert({
                            type: 'success',
                            body: 'Color created successfully'
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
            this.form.name = required(this.name, 'Color name')
            
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