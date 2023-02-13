<template>
  <div class="tw-bg-neutral-50 dark:tw-bg-neutral-800 tw-min-h-screen">


    <!-- Application header -->
    <div>
        <Header />
    </div>
    <!-- /Application header -->

    <!-- Application main view -->
    <v-container class="xl:tw-max-w-[1200px] md:tw-px-0 tw-px-5 tw-pt-[70px]">
        <router-view></router-view>
    </v-container>
    <!-- /Application main view -->

    <!-- Application Footer -->
    <div>

    </div>
    <!-- Application Footer -->
  </div>
</template>

<script>
import Header from '@/layouts/default/partials/AppHeader'

export default {
    components: { Header }

}
</script>

<style>

</style>