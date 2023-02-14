<template>
<div class="tw-w-fit">
    <router-link :to="{ name: 'home' }">
        <div class="tw-flex tw-items-center tw-gap-2">
            <img class="tw-w-[28px]" :src="$frontend('assets/images/logo.svg')" alt="My Ebag Logo">
            <div v-if="!hideText" class="dark:tw-text-neutral-200 tw-text-neutral-800">
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
        }
    }
}
</script>

<style>

</style>