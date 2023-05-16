<template>
  <div>
    <h2 class="tw-mb-3 tw-text-lg">General</h2>
    <div class="tw-w-full tw-h-[500px] dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
      <div class="tw-grid tw-grid-cols-12 tw-p-3 tw-gap-2">
        <div class="tw-col-span-12">
          <GeneralInformations v-model:name="name" v-model:description="description" />
        </div>
      </div>
    </div>
      <div class="tw-h-[1000px]"></div>
  </div>
</template>

<script>
import GeneralInformations from '@/components/dashboard/settings/general/GeneralInformations'
export default {
  components: { GeneralInformations },

  data() {
    return {
      name: '',
      description: ''
    }
  }

}
</script>

<style>

</style>