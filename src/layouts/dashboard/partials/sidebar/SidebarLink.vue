<template>
  <div>
    <router-link  :to="{name: link.to}" 
    :class="[isActive && '!tw-bg-primary !tw-text-neutral-200 !dark:tw-text-neutral-700']"
    class="tw-flex tw-items-center dark:tw-text-neutral-200 tw-text-neutral-700 dark:hover:tw-bg-neutral-800 hover:tw-bg-neutral-300/30 tw-duration-300 tw-py-2 tw-px-6 tw-gap-4">
        <icon class="tw-text-xl" :icon="link.icon" />
        <span class="dark:tw-font-thin">{{ link.name }}</span>
    </router-link>

  </div>
</template>

<script>
export default {
    props: [ 'link' ],

    data() {
      return {

      }
    },

    computed: {
      isActive() {
        return this.$route.name == this.link.to
      },
    },

    mounted() {
    }
}
</script>

<style>

</style>