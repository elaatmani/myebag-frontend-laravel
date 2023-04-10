<template>
  <div >
    <v-layout class="tw-bg-neutral-100 dark:tw-text-white dark:tw-bg-neutral-900/90 tw-min-h-screen">

        <Sidebar />

        <Header />

        <Alert />

      <v-main style="min-height: 300px;">
        <v-container class="xl:tw-max-w-[1500px]">
            <router-view></router-view>
        </v-container>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
import Header from '@/layouts/dashboard/partials/AppHeader'
import Sidebar from '@/layouts/dashboard/partials/AppSidebar'
import Alert from '@/components/AlertVue'

export default {
    components: { Header, Sidebar, Alert },

    data() {
        return {
            drawer: true,
        }
    },

    methods: {
        toggleSidebar() {

        }
    }

}
</script>

<style>

</style>