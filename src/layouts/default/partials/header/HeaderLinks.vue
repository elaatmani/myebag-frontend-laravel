<template>
  <div class="md:tw-flex  tw-hidden tw-items-center tw-gap-5 tw-text-sm">
    <div>
        Home
    </div>
    <HeaderLink />
    
    <div class="tw-flex tw-gap-0 tw-items-center">
        <span>About us</span>
    </div>
    <div class="tw-flex tw-gap-0 tw-items-center">
        <span>Contact us</span>
    </div>
  </div>
</template>

<script>
import HeaderLink from '@/layouts/default/partials/header/HeaderLink'

export default {
  components: { HeaderLink }
}
</script>

<style>

</style>