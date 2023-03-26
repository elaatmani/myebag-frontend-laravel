<template>
    <v-navigation-drawer v-model="isSidebarActive" class="dark:tw-bg-neutral-900">
        <div class="tw-py-2 tw-px-5 tw-flex tw-items-center tw-justify-between tw-gap-2 tw-border-b tw-border-solid tw-border-neutral-200 dark:tw-border-neutral-800">
            <AppLogo />

            <ThemeSwitcher class="tw-scale-75" />
        </div>

        <!-- Links -->
        <div class="tw-flex tw-flex-col tw-gap-2 mt-5">

            <router-link to="/" class="tw-flex tw-items-center dark:tw-text-neutral-200 tw-text-neutral-700 dark:hover:tw-bg-neutral-800 hover:tw-bg-neutral-300 tw-duration-300 tw-py-2 tw-px-6 tw-gap-4">
                <icon class="tw-text-xl" icon="carbon:dashboard" />
                <span class="dark:tw-font-thin">Dashboard</span>
            </router-link>

            <router-link to="/" class="tw-flex tw-items-center dark:tw-text-neutral-200 tw-text-neutral-700 dark:hover:tw-bg-neutral-800 hover:tw-bg-neutral-300 tw-duration-300 tw-py-2 tw-px-6 tw-gap-4">
                <icon class="tw-text-xl" icon="fluent-mdl2:product-variant" />
                <span class="dark:tw-font-thin">Products</span>
            </router-link>
        </div>


        <v-list v-if="false">
            <v-list-item>
            </v-list-item>
            <v-list-item class="mt-5" link>
                <div class="tw-flex tw-items-center tw-gap-2 ">
                    <icon class="tw-text-xl" icon="mdi:home" />
                    <span>Dashboard</span>
                </div>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import AppLogo from '@/components/AppLogo'
import ThemeSwitcher from '@/layouts/default/partials/header/ThemeSwitcher.vue';

export default {
    components: { AppLogo, ThemeSwitcher },

    data() {
        return {
        }
    },

    computed: {
        isSidebarActive: {
            get() {
                return this.$store.getters['dashboard/IsSidebarActive']
            },
            set(value) {
                this.$store.dispatch('dashboard/setIsSidebarActive', value)
            }
        }
    },

    watch: {
        isSidebarActive() {
            this.drawer = this.isSidebarActive
        },
    },    

    mounted() {
        if (this.$vuetify.display.mdAndDown) {
            this.$store.dispatch('dashboard/setIsSidebarActive', false)
        }
    }
}
</script>

<style>

</style>