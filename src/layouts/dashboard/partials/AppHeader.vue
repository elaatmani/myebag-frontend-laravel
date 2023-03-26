<template>
    <!-- Header -->
    <v-app-bar
        density="compact"
        elevation="0"
        class="tw-border-b-0 dark:tw-bg-neutral-900 !tw-shadow-lg !tw-shadow-gray-900/10 tw-top-0 !tw-fixed !tw-overflow-visible"
        :absolute="false"
      >

        <!-- App Logo -->
        <v-app-bar-nav-icon class="dark:tw-text-white" variant="text" @click.stop="toggleSidebar()"></v-app-bar-nav-icon>
        <!-- / App Logo -->

        <!-- Right Part -->
        <template v-slot:append>
          
          <div class="tw-flex tw-gap-2 tw-px-5">

            

            <!-- User Menu -->
            <UserMenu />
          </div>

        </template>
        <!-- /Right Part -->

      </v-app-bar>
</template>

<script>
import UserMenu from '@/layouts/default/partials/header/UserMenu.vue'
export default {
  components: { UserMenu },

  computed: {
    isSidebarActive() {
        return this.$store.getters['dashboard/IsSidebarActive']
    }
  },

  methods: {
    toggleSidebar() {
        console.log('updated');
        this.$store.dispatch('dashboard/setIsSidebarActive', !this.isSidebarActive)
    }
  }

}
</script>

<style>

</style>