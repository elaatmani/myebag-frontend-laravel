<template>
  <div>
    <h2 class="tw-mb-3 tw-text-lg">General</h2>
    <div class="tw-w-full tw-h-fit dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">

      <div class="tw-grid tw-grid-cols-12 tw-p-3 tw-gap-5">

        <div class="md:tw-col-span-6 tw-col-span-12">
          <div>
            <GeneralInformations v-model:name="name" v-model:description="description" />
          </div>
          <div>

          </div>
        </div>

        <div class="md:tw-col-span-6 tw-col-span-12">
          <div>
            <LogoSettings v-model:dark="logo.dark" v-model:light="logo.light" />
          </div>
          <div>
            <ColorSelector />
          </div>
        </div>

        <div class="md:tw-col-span-6 tw-col-span-12">
        </div>

        <div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import GeneralInformations from '@/components/dashboard/settings/general/GeneralInformations'
import LogoSettings from '@/components/dashboard/settings/general/LogoSettings'
import ColorSelector from '@/components/dashboard/settings/general/ColorSelector'

export default {
  components: { GeneralInformations, LogoSettings, ColorSelector },

  data() {
    return {
      name: '',
      description: '',
      logo: {
        dark: 'hello',
        light: 'by'
      }
    }
  }

}
</script>

<style>

</style>