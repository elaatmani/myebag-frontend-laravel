<template>
  <div>
    <router-link v-if="!link.hasChildren" :to="link.to" class="tw-flex tw-items-center dark:tw-text-neutral-200 tw-text-neutral-700 dark:hover:tw-bg-neutral-800 hover:tw-bg-neutral-300/30 tw-duration-300 tw-py-2 tw-px-6 tw-gap-4">
        <icon class="tw-text-xl" :icon="link.icon" />
        <span class="dark:tw-font-thin">{{ link.name }}</span>
    </router-link>

    <div v-else @click="childrenMenu = !childrenMenu" class="tw-flex tw-cursor-pointer tw-items-center dark:tw-text-neutral-200 tw-text-neutral-700 dark:hover:tw-bg-neutral-800 hover:tw-bg-neutral-300/30 tw-duration-200 tw-py-2 tw-px-6 tw-gap-4">
        <icon class="tw-text-xl" :icon="link.icon" />
        <span class="dark:tw-font-thin">{{ link.name }}</span>
        <v-spacer></v-spacer>
        <v-icon :class="[ childrenMenu && 'tw-rotate-90' ]" class="tw-duration-300">mdi-chevron-right</v-icon>
    </div>

    <div class="tw-max-h-0 tw-w-full tw-overflow-hidden tw-duration-300" :class="[ childrenMenu && 'tw-max-h-[200px]' ]" v-if="link?.hasChildren">
      <router-link v-for="c in link.children" :key="c.id" :to="c.to" class="tw-flex tw-items-center dark:tw-text-neutral-200 tw-text-neutral-700 dark:hover:tw-bg-neutral-700/80 hover:tw-bg-neutral-400/30 dark:tw-bg-neutral-800 tw-duration-200  tw-bg-neutral-100 tw-py-2 tw-px-6 tw-pl-12 tw-gap-2">
        <!-- <icon class="tw-text-xl" icon="mdi:arrow-left" /> -->
         <v-icon class="tw-text-[6px]">mdi-circle</v-icon>
        
        <span class="dark:tw-font-thin tw-text-sm">{{ c.name }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    props: [ 'link' ],

    data() {
      return {
        childrenMenu: false
      }
    }
}
</script>

<style>

</style>