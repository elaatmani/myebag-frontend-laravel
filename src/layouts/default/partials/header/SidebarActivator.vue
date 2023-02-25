<template>
  <div class="tw-flex tw-items-center tw-justify-center">
    <button @click="isActive = !isActive">
      <icon class="tw-text-2xl" :icon="isActive ? 'mdi:close' : 'lucide:menu'" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style>

</style> 