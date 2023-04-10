<template>
    <teleport to='body' >
        <v-slide-y-reverse-transition>
            <div v-show="state.active" class="pa-2 tw-fixed tw-w-full tw-flex tw-justify-end tw-pointer-events-none tw-bottom-0 tw-right-0 tw-z-[1000]">
                    <div class="tw-min-h-[40px] tw-pointer-events-auto tw-text-neutral-900 tw-shadow-lg tw-flex tw-items-center tw-gap-2 tw-rounded md:tw-w-[400px] tw-w-[95%] tw-mx-auto md:tw-mx-0 tw-max-w-full tw-py-2 tw-px-2" :class="[type.bg]">
                        <div class="tw-grid tw-place-items-center">
                            <icon class="tw-text-2xl" :icon="type.icon"/>
                        </div>
                        <div class="tw-flex tw-flex-col tw-justify-center">
                            <h1 class="tw-text-neutral-900 tw-text-md tw-font-bold">{{ type.title }}</h1>
                            <p class="tw-text-neutral-900 tw-text-[13px] tw-font-medium">{{ state.alert.body }}</p>
                        </div>
                    </div>
            </div>
        </v-slide-y-reverse-transition>
    </teleport>
</template>

<script>
export default {

    data() {
        return {
            types: ['success', 'info', 'danger', 'warning'],
            variants: {
                'success': {
                    title: 'Success',
                    bg: 'dark:tw-bg-green-500 tw-bg-green-400',
                    icon: 'ph:check-circle'
                },
                'info': {
                    title: 'Info',
                    bg: 'dark:tw-bg-blue-500 tw-bg-blue-400',
                    icon: 'ph:info'
                },
                'danger': {
                    title: 'Error',
                    bg: 'dark:tw-bg-red-500 tw-bg-red-400',
                    icon: 'ph:x-circle'
                },
                'warning': {
                    title: 'Warning',
                    bg: 'dark:tw-bg-yellow-500 tw-bg-yellow-400',
                    icon: 'ph:warning-circle'
                },
            }
        }
    },

    computed: {
        state() {
            return this.$store.getters['alert/alert']
        },
        type() {
            
            return this.types.includes(this.state.alert.type.toLowerCase()) 
            ? this.variants[this.state.alert.type.toLowerCase()] 
            : this.variants['info']
        }
    },
    mounted() {
        console.log('alert mounted');
    }
}
</script>

<style>

</style>