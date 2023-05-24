<template>
    <div>
        <popup :visible="visible" @cancel="cancel">
            <div class="tw-mx-auto tw-w-[95%] tw-max-h-screen tw-overflow-y-auto md:tw-max-w-[800px] tw-overflow-hidden tw-min-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md  tw-my-5 tw-rounded-lg">
                <div class="tw-p-5">
                    <h1 class="tw-mb-3">Choose your avatar</h1>
                    <div class=" tw-flex tw-flex-wrap tw-items-start tw-gap-3">
                        <img v-for="img in images" :key="img" :src="$frontend(`assets/images/avatars/${img}.webp`)"
                        :class="[img == selected && 'tw-ring tw-ring-[rgb(var(--primary))] tw-ring-offset-2 dark:tw-ring-offset-neutral-800']"
                        class="tw-w-[80px] tw-h-[80px] tw-object-contain tw-rounded-full tw-cursor-pointer"
                        @click="selected = img"
                        >
                    </div>

                    <div class="tw-flex tw-justify-end">
                        <button @click="handleSave" class="tw-py-2 tw-px-7 tw-mt-3 tw-h-[38px] tw-w-fit tw-whitespace-nowrap tw-rounded dark:tw-text-neutral-300 tw-text-white tw-bg-[rgb(var(--primary))] tw-border tw-border-solid tw-border-tansparent hover:tw-border-[rgb(var(--primary-dark))] dark:tw-border-neutral-900 dark:hover:tw-border-[rgb(var(--primary-light))] hover:tw-bg-[rgb(var(--primary))] dark:hover:tw-bg-[rgb(var(--primary))] tw-duration-200 tw-flex tw-items-center tw-justify-center">
                            <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[false && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                            <span>Save</span>
                        </button>
                    </div>
                </div>
            </div>
        </popup>
    </div>
</template>

<script>
export default {
    props: ['avatar', 'visible'],

    data() {
        return {
            images: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
            selected: 0
        }
    },

    watch: {
        avatar() {
            this.selected = this.avatar;
        }
    },

    methods: {
        cancel() {
            this.selected = this.avatar
            this.$emit('update:visible', false)
        },
        handleSave() {
            this.$emit('update:avatar', this.selected)
            this.cancel()
        }
    },

    mounted() {
        this.selected = this.avatar
    }

}
</script>
<style>
    
</style>