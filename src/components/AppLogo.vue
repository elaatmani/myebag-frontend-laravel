<template>
<div class="tw-w-fit">
    <router-link :to="{ name: 'home' }">
        <div class="tw-flex tw-items-center tw-gap-2">
            <img class="tw-w-[28px]" :src="$frontend('assets/images/logo.svg')" alt="My Ebag Logo">
            <!-- <img id="app-logo" class="tw-w-[var(--logo-width)]" :src="$backend('storage/images/logos/logo.svg')"> -->
            <div v-if="!hideText" :class="{ 'md:tw-block tw-hidden': hideTextMobile }" class="dark:tw-text-neutral-200 tw-text-neutral-800">
                My Ebag
            </div>
        </div>
    </router-link>
</div>
</template>

<script>
export default {
    props: {
        hideText: {
            required: false,
            default: false
        },
        hideTextMobile: {
            required: false,
            default: false
        }
    },

    computed: {
        options() {
            return this.$store.getters['app/options']
        }
    }
}
</script>

<style>

</style>