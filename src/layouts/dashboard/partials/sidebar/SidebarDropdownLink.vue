<template>
  <div>
    <div @click="childrenMenu = !childrenMenu" class="tw-flex tw-cursor-pointer tw-items-center dark:tw-text-neutral-200 tw-text-neutral-700 dark:hover:tw-bg-neutral-800 hover:tw-bg-neutral-300/30 tw-duration-200 tw-py-2 tw-px-6 tw-gap-4">
        <icon class="tw-text-xl" :icon="link.icon" />
        <span class="dark:tw-font-thin">{{ link.name }}</span>
        <v-spacer></v-spacer>
        <v-icon :class="[ childrenMenu && 'tw-rotate-90' ]" class="tw-duration-300">mdi-chevron-right</v-icon>
    </div>

    <div 
    class="tw-max-h-0 tw-w-full tw-overflow-hidden tw-duration-300" 
    :class="[ childrenMenu && 'tw-max-h-[200px]' ]" v-if="link?.hasChildren">
      <router-link v-for="c in link.children" :key="c.id" :to="{name: c.to}" 
      :class="[isSublinkActive(c.to) && '!tw-bg-primary !tw-text-neutral-200 !dark:tw-text-neutral-700']" 
      class="tw-flex tw-items-center dark:tw-text-neutral-200 tw-text-neutral-700 hover:tw-pl-14  dark:tw-bg-black/30 tw-duration-200  tw-bg-neutral-100 tw-py-2 tw-px-6 tw-pl-12 tw-gap-2">
        <!-- <icon class="tw-text-xl" icon="mdi:arrow-left" /> -->
         <v-icon class="tw-text-[16px]">mdi-chevron-right</v-icon>
        
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
        childrenMenu: false,
      }
    },

    computed: {},

    methods: {
        isSublinkActive(name) {
            return this.$route.name == name
        }
    },

    mounted() {
        this.childrenMenu = this.link.module == this.$route?.meta?.module;
    }
}
</script>

<style>

</style>