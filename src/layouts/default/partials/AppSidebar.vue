<template>
  <div>
    <div :class="{'!tw-z-30': isSidebarActive}" class="md:tw-hidden  tw-fixed tw-top-[80px] tw-pb-[130px] tw-px-2 tw-left-1/2 -tw-translate-x-1/2 tw-h-screen tw-overflow-auto tw-w-full -tw-z-10">
      <div class="tw-w-full tw-h-full tw-p-5 tw-backdrop-blur-3xl tw-overflow-y-auto  tw-shadow-lg tw-rounded-lg tw-border tw-border-solid tw-border-neutral-300 dark:tw-border-neutral-700 tw-duration-300 tw-opacity-0" :class="{'!tw-opacity-100': isSidebarActive}">
        <div class="tw-flex tw-flex-col tw-gap-2">
          
          <router-link :to="{ name: 'home' }" class="tw-flex tw-items-center tw-gap-2 tw-w-full dark:tw-bg-white/5 tw-bg-black/5 tw-border-black/10 tw-border dark:tw-border-white/10 tw-py-2 tw-px-4 tw-rounded-md">
            <!-- <icon class="tw-text-2xl" icon="mdi:home" /> -->
            <span>Home</span>
          </router-link>
          <router-link :to="{ name: 'categories' }" class="tw-flex tw-items-center tw-gap-2 tw-w-full dark:tw-bg-white/5 tw-bg-black/5 tw-border-black/10 tw-border dark:tw-border-white/10 tw-py-2 tw-px-4 tw-rounded-md">
            <!-- <icon class="tw-text-2xl" icon="mdi:home" /> -->
            <span>Categories</span>
          </router-link>
          <router-link :to="{ name: 'categories' }" class="tw-flex tw-items-center tw-gap-2 tw-w-full dark:tw-bg-white/5 tw-bg-black/5 tw-border-black/10 tw-border dark:tw-border-white/10 tw-py-2 tw-px-4 tw-rounded-md">
            <!-- <icon class="tw-text-2xl" icon="mdi:home" /> -->
            <span>Products</span>
          </router-link>
        </div>
      </div>
    </div>
    <div :class="{'!tw-z-20 !tw-opacity-100': isSidebarActive}" @click="closeSidebar" class="md:tw-hidden tw-opacity-0 tw-duration-300 tw-fixed tw-left-0 tw-top-0 tw-w-full tw-h-screen dark:tw-bg-black/70 tw-bg-white -tw-z-10">

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isSidebarActive() {
      return this.$store.getters['app/IsSidebarActive']
    }
  },
  methods: {
    closeSidebar() {
      // document.body.style.overflowY = 'auto'
      // document.body.style.height = 'initial'
      this.$store.dispatch('app/setIsSidebarActive', false)
    }
  }
}
</script>

<style>

</style>