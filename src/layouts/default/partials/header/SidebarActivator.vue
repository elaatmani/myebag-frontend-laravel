<template>
  <div class="tw-flex tw-items-center tw-justify-center">
    <button @click="handleClick">
      <icon class="tw-text-2xl" :icon="isSidebarActive ? 'mdi:close' : 'lucide:menu'" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    isSidebarActive() {
      return this.$store.getters['app/IsSidebarActive']
    }
  },
  methods: {
    handleClick() {

      // if(!this.isSidebarActive) {
      //   document.body.style.overflowY = 'hidden'
      //   document.body.style.height = '100vh'
      // } else {
      //   document.body.style.overflowY = 'auto'
      //   document.body.style.height = 'initial'
      // }

      this.$store.dispatch('app/setIsSidebarActive', !this.isSidebarActive)
    }
  }
}
</script>

<style>

</style> 