<template>
    <v-navigation-drawer v-model="isSidebarActive" class="dark:tw-bg-neutral-900 !tw-fixed">
        <div class="tw-py-2 tw-px-5 tw-flex tw-items-center tw-justify-between tw-gap-2 tw-border-b tw-border-solid tw-border-neutral-200 dark:tw-border-neutral-800">
            <AppLogo />

            <ThemeSwitcher class="tw-scale-75" />
        </div>

        <!-- Links -->
        <div class="tw-flex tw-flex-col tw-gap-2 mt-5">
            <div v-for="link in links" :key="link.id">
                
                <div class="tw-w-full" v-if="!link?.hasChildren">

                    <SidebarOdersLink v-if="link.to == 'orders/index'"  :link="link" />

                    <SidebarLink :link="link"  v-else/>
                </div>

                <SidebarDropdownLink v-if="!!link?.hasChildren"  :link="link" />
            </div>

        </div>

    </v-navigation-drawer>
</template>

<script>
import links from '@/config/dashboard_links'

import AppLogo from '@/components/AppLogo'
import ThemeSwitcher from '@/layouts/default/partials/header/ThemeSwitcher.vue';
import SidebarLink from '@/layouts/dashboard/partials/sidebar/SidebarLink'
import SidebarOdersLink from '@/layouts/dashboard/partials/sidebar/SidebarOdersLink'
import SidebarDropdownLink from '@/layouts/dashboard/partials/sidebar/SidebarDropdownLink'

export default {
    components: { AppLogo, ThemeSwitcher, SidebarLink, SidebarOdersLink, SidebarDropdownLink },

    data() {
        return {
            links
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