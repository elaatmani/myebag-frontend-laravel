<template>
  <div>

    <!-- Button Switcher -->
    <v-btn v-if="false" icon size="x-small"  class="tw-bg-transparent tw-text-neutral-800 tw-border-neutral-300 dark:tw-border-neutral-600 tw-border dark:tw-text-white" variant="flat" >
        <v-icon class="">{{ icon }}</v-icon>
    </v-btn>

    <!-- Switcher -->
    <div class="tw-rounded-full tw-border tw-border-neutral-300 dark:tw-border-neutral-500 dark:hover:tw-border-neutral-400 hover:tw-border-neutral-400">
        <button @click="switchMode" class="tw-h-6 tw-w-12 tw-rounded-full dark:tw-bg-neutral-600 tw-bg-neutral-100 tw-cursor-pointer">
            <div :class="{ 'tw-translate-x-[100%]': isDarkMode }" class="tw-h-full tw-w-1/2 tw-bg-white dark:tw-bg-neutral-800 tw-flex tw-justify-center tw-items-center tw-rounded-full">
                <v-icon size="x-small" class="dark:tw-text-neutral-100 tw-text-neutral-700">{{ icon }}</v-icon>
            </div>
        </button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isDarkMode: false,
            icons: {
                dark: 'mdi-moon-waxing-crescent',
                light: 'mdi-white-balance-sunny'
            }
        }
    },
    computed: {
        icon() {
            return this.isDarkMode ? this.icons.dark : this.icons.light
        }
    },
    methods: {
        switchMode() {
            const html = document.querySelector('html')
            if(html.classList.contains('tw-dark')) {
                html.classList.remove('tw-dark')
                this.isDarkMode = false
            } else {
                html.classList.add('tw-dark')
                this.isDarkMode = true
            }
        }
    },
    mounted() {
        this.isDarkMode = document.querySelector('html').classList.contains('tw-dark');
    }
}
</script>

<style>

</style>