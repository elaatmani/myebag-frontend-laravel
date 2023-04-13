<template>
    <div class="tw-mx-auto tw-w-[95%] tw-max-h-screen tw-overflow-y-auto md:tw-max-w-[800px] tw-overflow-hidden tw-min-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md  tw-my-5 tw-rounded-lg">
    
        <h1 class="tw-mb-2 tw-pt-5 tw-px-5 tw-text-lg dark:tw-text-neutral-100 tw-text-neutral-700">Create Size Type</h1>
        <div class="tw-p-5">
            <div class="tw-h-fit tw-gap-2 tw-grid tw-grid-cols-12">
                <div class="tw-col-span-12 tw-h-fit">
                    <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                        <label class="tw-text-sm" for="email">Name</label>
                        <input @keyup="reset('name')" v-model="name" :class="{ '!tw-border-red-400': !form.name.valid }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Size type name" type="text">
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
                            <input @keyup="reset('sizeName')" @keydown="reset('sizes')" @keyup.enter="handleAdd" v-model="sizeName" :class="{ '!tw-border-red-400': !form.sizeName.valid }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Size name" type="text">
                            <button @click="handleAdd" class="tw-p-2 tw-h-[38px] tw-w-fit tw-whitespace-nowrap tw-rounded-lg dark:tw-text-neutral-300 tw-text-white tw-bg-violet-500 tw-border tw-border-solid tw-border-tansparent hover:tw-border-violet-600 dark:tw-border-neutral-900 dark:hover:tw-border-violet-400 hover:tw-bg-violet-500 dark:hover:tw-bg-violet-500 tw-duration-200 tw-flex tw-items-center tw-justify-center tw-gap-2">
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
                        <div v-for="s in sizes" :key="s.id" class="tw-relative tw-px-4 tw- tw-text-sm tw-py-1 tw-font-medium tw-bg-violet-500/20 tw-border tw-border-solid tw-border-violet-500/50 tw-rounded tw-text-violet-500">
                            <span>
                                {{ s.name }}
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
          <button @click="handleCreate" class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-bg-violet-500 tw-border tw-border-solid tw-border-tansparent hover:tw-border-violet-600 dark:tw-border-neutral-900 dark:hover:tw-border-violet-400 hover:tw-bg-violet-500 dark:hover:tw-bg-violet-500 tw-duration-200  tw-text-white">
            Create
          </button>
        </div>
    
    </div>
</template>

<script>
import { required } from '@/helpers/validators';
export default {
    data() {
        return {
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
                name: this.sizeName.toUpperCase()
            }

            this.sizes.push(s)

            this.sizeName = ''
            this.sizeId += 1
        },
        handleCreate() {
            this.validateForm()
            if(!this.isFormValid) return false;

            this.$alert({
                type: 'success',
                body: 'Size created successfully'
            })

            const size = {
                id: 4,
                name: this.name,
                sizes: this.sizes
            }

            this.$store.dispatch('app/addSize', size)

            this.cancel()
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