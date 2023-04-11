<template>
  <div>
    <h2 class="tw-text-lg">Sizes</h2>
    <p class="tw-text-sm tw-mb-3 tw-font-light tw-text-neutral-500 dark:tw-text-neutral-300">See and manage custom sizes</p>
    <div class="tw-w-full tw-h-[500px] dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
      <div class="tw-grid tw-grid-cols-12 tw-p-3 tw-gap-2">
        <div class="tw-col-span-12">
          <SizesTable />
        </div>
      </div>
    </div>
      <div class="tw-h-[1000px]"></div>
  </div>
</template>

<script>
import SizesTable from '@/components/dashboard/settings/size/SizesTable'

export default {
  components: { SizesTable },
  data() {
    return {
      size: '',
      sizes: []
    }
  }

}
</script>

<style>

</style>