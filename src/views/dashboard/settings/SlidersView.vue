<template>
  <div>
    <h2 class="tw-mb-3 tw-text-lg">Sliders</h2>
    <div class="tw-w-full tw-h-fit dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
        <div class="tw-grid tw-grid-cols-12 tw-p-3 tw-gap-2">
            <div class="tw-col-span-12">
            <SlidersTable />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import SlidersTable from '@/components/dashboard/settings/slider/SlidersTable'
export default {
    components: {SlidersTable},
  data() {
    return {
      
    }
  }

}
</script>

<style>

</style>