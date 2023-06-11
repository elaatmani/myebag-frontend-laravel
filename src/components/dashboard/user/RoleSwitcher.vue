<template>
  <div class="tw-relative tw-flex tw-items-center">
    <div v-if="isLoading"  class="tw-absolute -tw-left-1 -tw-translate-x-full ">
        <v-icon class="tw-animate-spin tw-text-[rgb(var(--primary))]">mdi-loading</v-icon>
    </div>
    <label class="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer tw-scale-75">
        <input type="checkbox" v-model="active" @change="onRoleChange" class="tw-sr-only tw-peer">
        <div class="tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none peer-focus:tw-ring-4 peer-focus:tw-ring-[rgba(var(--primary-light),.7)] dark:peer-focus:tw-ring-[rgba(var(--primary-light),.5)] tw-rounded-full tw-peer dark:tw-bg-neutral-600 peer-checked:after:tw-translate-x-full peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-left-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600 peer-checked:tw-bg-[rgb(var(--primary))]"></div>
    </label>
  </div>
</template>

<script>
import User from '@/api/User'
export default {
    props: ['item'],

    data() {
        return {
            isLoading: false,
            active: false,
        }
    },

    methods: {
        onRoleChange() {
            
            this.isLoading = true
            User.switchRole({id: this.item.id, is_admin: this.active})
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

                        this.$store.dispatch('user/update', res.data.data.user);
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
        this.active = this.item.is_admin == 1 ? true : false;
    }
}
</script>

<style>

</style>