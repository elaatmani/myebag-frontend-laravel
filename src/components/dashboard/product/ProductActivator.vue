<template>
  <div class="tw-relative tw-flex tw-items-center">
    <div v-if="isLoading"  class="tw-absolute -tw-left-1 -tw-translate-x-full ">
        <v-icon class="tw-animate-spin tw-text-[rgb(var(--primary))]">mdi-loading</v-icon>
    </div>
    <label class="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer tw-scale-75">
        <input type="checkbox" v-model="active" @change="onActiveChange" class="tw-sr-only tw-peer">
        <div class="tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none peer-focus:tw-ring-4 peer-focus:tw-ring-[rgba(var(--primary-light),.7)] dark:peer-focus:tw-ring-[rgba(var(--primary-light),.5)] tw-rounded-full tw-peer dark:tw-bg-neutral-600 peer-checked:after:tw-translate-x-full peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-left-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600 peer-checked:tw-bg-[rgb(var(--primary))]"></div>
    </label>
  </div>
</template>

<script>
import Product from '@/api/Product'
export default {
    props: ['item'],

    data() {
        return {
            isLoading: false,
            active: false,
        }
    },

    methods: {
        onActiveChange() {
            
            this.isLoading = true
            Product.setActive(this.item.id, this.active)
            .then(
                res => {
                    if(res.data.code == 'SUCCESS') {
                        if(this.active == true) {
                            this.$alert({
                                body: 'Activated',
                                type: 'success'
                            })
                        } else {
                            this.$alert({
                                body: 'Desactivated',
                                type: 'success'
                            })
                        }
                    }
                },
                this.$handleApiError
            )
            .finally(
                () => {
                    this.isLoading = false
                }
            )
        }
    },

    mounted() {
        this.active = this.item.active == 1 ? true : false;
    }
}
</script>

<style>

</style>