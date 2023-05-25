<template>
    <div class="tw-mx-auto tw-w-[95%] tw-max-h-screen tw-overflow-y-auto md:tw-max-w-[800px] tw-overflow-hidden tw-min-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md  tw-my-5 tw-rounded-lg">
    
        <h1 class="tw-mb-2 tw-pt-5 tw-px-5 tw-text-lg dark:tw-text-neutral-100 tw-text-neutral-700">Create Slider</h1>
        <div class="tw-p-5">
            <div class="tw-h-fit tw-gap-2 tw-grid tw-grid-cols-12">
                <div class="tw-col-span-12 tw-h-fit">
                    <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                        <label class="tw-text-sm" for="email">Name</label>
                        <input @keyup="reset('name')" v-model="name" :class="{ '!tw-border-red-400': !form.name.valid }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]" placeholder="Slide Name" type="text">
                        <div class="tw-text-xs tw-text-neutral-400" :class="[!form.name.valid && '!tw-text-red-400']">
                            <span v-if="!form.name.valid">
                            {{ form.name.message }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="tw-col-span-12 tw-h-fit">
                    <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                        <label class="tw-text-sm" for="email">Link</label>
                        <input @keyup="reset('name')" v-model="link" :class="{ '!tw-border-red-400': !form.name.valid }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]" placeholder="Link" type="text">
                        <div class="tw-text-xs tw-text-neutral-400" :class="[!form.name.valid && '!tw-text-red-400']">
                            <span v-if="!form.name.valid">
                            {{ form.name.message }}
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="tw-col-span-12">
                    <SliderImages v-model:desktopImage="desktop" v-model:mobileImage="mobile" />
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
import SliderImages from '@/components/dashboard/settings/slider/SliderImages'
import Slider from '@/api/Slider'

export default {
    components: {SliderImages},
    
    data() {
        return {
            isLoading: false,
            name: '',
            link: '',

            desktop: null,
            mobile: null,

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
    },

    watch: {
    },

    methods: {
        cancel() {
            this.$emit('cancel')
        },
        handleCreate() {
            this.validateForm()
            if(!this.isFormValid) return false;

            if(this.name == '' || this.link == '') {
                this.$alert({
                    body: 'Please fill out the form',
                    type: 'warning'
                })
                return false;
            }

            this.isLoading = true;
            const slider = {
                name: this.name,
                link: this.link,
                desktop: this.desktop,
                mobile: this.mobile
            }

            Slider.create(slider)
            .then(
                res => {
                    if(res.data.code == 'SUCCESS') {
                        this.$alert({
                            body: 'Created Successfully',
                            type: 'success'
                        })

                        this.$store.dispatch('app/addSlider', res.data.data.slider)
                        this.cancel()
                    }
                },
                this.$handleApiErro
            )
            .finally(
                () => {
                    this.isLoading = false
                }
            )

        },
        validateForm() {
            
            
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