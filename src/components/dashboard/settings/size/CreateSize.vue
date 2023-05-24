<template>
    <div class="tw-mx-auto tw-w-[95%] tw-max-h-screen tw-overflow-y-auto md:tw-max-w-[800px] tw-overflow-hidden tw-min-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md  tw-my-5 tw-rounded-lg">
    
        <h1 class="tw-mb-2 tw-pt-5 tw-px-5 tw-text-lg dark:tw-text-neutral-100 tw-text-neutral-700">Create Size Type</h1>
        <div class="tw-p-5">
            <div class="tw-h-fit tw-gap-2 tw-grid tw-grid-cols-12">
                <div class="tw-col-span-12 tw-h-fit">
                    <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                        <label class="tw-text-sm" for="email">Name</label>
                        <input @keyup="reset('name')" v-model="name" :class="{ '!tw-border-red-400': !form.name.valid }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]" placeholder="Size type name" type="text">
                        <div class="tw-text-xs tw-text-neutral-400" :class="[!form.name.valid && '!tw-text-red-400']">
                            <span v-if="!form.name.valid">
                            {{ form.name.message }}
                            </span>
                            <span v-else>
                            Do not exceed 15 characters when entering the size type name.
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="tw-col-span-12 tw-flex tw-gap-2 tw-items-center">
                    <div class="tw-flex tw-justify-center tw-w-full tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                        <label class="tw-text-sm" for="email">Size name</label>
                        <div class="tw-flex tw-items-center tw-gap-2 tw-my-2 ">
                            <input @keyup="reset('sizeName')" @keydown="reset('sizes')" @keyup.enter="handleAdd" v-model="sizeName" :class="{ '!tw-border-red-400': !form.sizeName.valid }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-[rgb(var(--primary))] focus:tw-border-[rgb(var(--primary))]" placeholder="Size name" type="text">
                            <button @click="handleAdd" class="tw-p-2 tw-h-[38px] tw-w-fit tw-whitespace-nowrap tw-rounded-lg dark:tw-text-neutral-300 tw-text-white tw-bg-[rgb(var(--primary))] tw-border tw-border-solid tw-border-tansparent hover:tw-border-[rgb(var(--primary-dark))] dark:tw-border-neutral-900 dark:hover:tw-border-[rgb(var(--primary-light))] hover:tw-bg-[rgb(var(--primary))] dark:hover:tw-bg-[rgb(var(--primary))] tw-duration-200 tw-flex tw-items-center tw-justify-center tw-gap-2">
                                <icon class="tw-text-lg" icon="mdi:plus" />
                                <span class="tw-hidden md:tw-block tw-text-sm">Add</span>
                            </button>
                        </div>
                        <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!form.sizeName.valid && '!tw-text-red-400']">
                            <span v-if="!form.sizeName.valid">
                            {{ form.sizeName.message }}
                            </span>
                            <span v-else>
                            Do not exceed 10 characters when entering the size name.
                            </span>
                        </div>
                    </div>
                </div>

                <div class="tw-col-span-12 tw-border-t tw-border-solid tw-border-t-neutral-200 tw-py-3 tw-pt-5 dark:tw-border-t-neutral-700">
                    <div v-if="sizes.length == 0 && form.sizes.valid" class="tw-text-sm tw-text-neutral-400 tw-mb-2">
                        <p>Size list is empty.</p>
                    </div>
                    <div class="tw-text-red-400 tw-text-sm tw-mb-2" v-if="!form.sizes.valid">
                        <p>Add some sizes to create a custom type !</p>
                    </div>
                    <div v-if="sizes.length > 0" class="tw-flex tw-flex-wrap tw-gap-3">
                        <div v-for="s in sizes" :key="s.id" class="tw-relative tw-px-4 tw- tw-text-sm tw-py-1 tw-font-medium tw-bg-[rgb(var(--primary))]/20 tw-border tw-border-solid tw-border-[rgb(var(--primary))]/50 tw-rounded tw-text-[rgb(var(--primary))]">
                            <span>
                                {{ s.value }}
                            </span>
                            <button @click="handleDelete(s.id)" class="tw-flex tw-items-center tw-justify-center tw-w-[20px] tw-h-[20px] tw-absolute tw-top-0 tw-right-0 tw-p-1 tw-bg-red-500 tw-rounded-full tw-scale-75 -tw-translate-y-1/2 tw-translate-x-1/2">
                                <v-icon class="tw-text-sm tw-text-white dark:tw-text-black">mdi-close</v-icon>
                            </button>
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
import Size from '@/api/Size';
export default {
    data() {
        return {
            isLoading: false,

            name: '',
            sizeName: '',
            sizeId: 1,
            sizes: [],

            form: {
                name: {
                    valid: true,
                    message: ''
                },
                sizeName: {
                    valid: true,
                    message: ''
                },
                sizes: {
                    valid: true,
                    message: ''
                }
            }
        }
    },

    computed: {
        isFormValid() {
            return this.form.name.valid && this.form.sizes.valid
        },
        allSizes() {
            return this.$store.getters['app/sizes']
        }
    },

    methods: {
        cancel() {
            this.$emit('cancel')
        },
        handleAdd() {
            this.form.sizeName = required(this.sizeName, 'Size name')
            if(!this.form.sizeName.valid) return false;
            const s = {
                id: this.sizeId,
                value: this.sizeName.toUpperCase()
            }

            this.sizes.push(s)

            this.sizeName = ''
            this.sizeId += 1
        },
        handleCreate() {
            this.validateForm()
            if(!this.isFormValid) return false;

            const size = {
                name: this.name,
                sizes: this.sizes
            }
            this.isLoading = true
            Size.create({ name: this.name, sizes: this.sizes })
            .then(
                res => {
                    if(res.data.code == 'SUCCESS') {
                        console.log(res.data);
                            size.id = res.data.data?.size?.id

                        this.$store.dispatch('app/addSize', size)

                        this.$alert({
                            type: 'success',
                            body: 'Size created successfully'
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
        handleDelete(id) {
            this.sizes = this.sizes.filter(s => s.id !== id)
        },
        validateForm() {
            this.form.name = required(this.name, 'Size Type name')
            this.form.sizes = {
                valid: this.sizes.length > 0
            }
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