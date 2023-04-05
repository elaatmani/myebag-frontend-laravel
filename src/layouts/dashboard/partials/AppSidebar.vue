<template>
    <v-navigation-drawer v-model="isSidebarActive" class="dark:tw-bg-neutral-900">
        <div class="tw-py-2 tw-px-5 tw-flex tw-items-center tw-justify-between tw-gap-2 tw-border-b tw-border-solid tw-border-neutral-200 dark:tw-border-neutral-800">
            <AppLogo />

            <ThemeSwitcher class="tw-scale-75" />
        </div>

        <!-- Links -->
        <div class="tw-flex tw-flex-col tw-gap-2 mt-5">

            <SidebarLink v-for="link in links" :key="link.id" :link="link" />

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
import SidebarLink from '@/layouts/dashboard/partials/sidebar/SidebarLink'

export default {
    components: { AppLogo, ThemeSwitcher, SidebarLink },

    data() {
        return {
            links: [
                {
                    id: 1,
                    name: 'Dashboard',
                    icon: 'carbon:dashboard',
                    to: '/'
                },
                {
                    id: 2,
                    name: 'Products',
                    icon: 'fluent-mdl2:product-variant',
                    hasChildren: true,
                    to: '/',
                    children: [
                        {
                            id: 1,
                            name: 'All products',
                            icon: '',
                            to: '/'
                        },
                        {
                            id: 2,
                            name: 'Add product',
                            icon: '',
                            to: '/'
                        },
                        {
                            id: 3,
                            name: 'Update product',
                            icon: '',
                            to: '/'
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Orders',
                    icon: 'carbon:dashboard',
                    to: '/'
                },
                {
                    id: 4,
                    name: 'Users',
                    icon: 'carbon:dashboard',
                    to: '/'
                },
            ]
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