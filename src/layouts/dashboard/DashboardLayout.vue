<template>
  <div >
    <v-layout class="tw-bg-white dark:tw-text-white dark:tw-bg-neutral-800 tw-min-h-screen">

        <Sidebar />

        <Header />

      <v-main style="min-height: 300px;">
        <v-container class="xl:tw-max-w-[1200px]">
            <router-view></router-view>
        </v-container>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
import Header from '@/layouts/dashboard/partials/AppHeader'
import Sidebar from '@/layouts/dashboard/partials/AppSidebar'

export default {
    components: { Header, Sidebar },

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