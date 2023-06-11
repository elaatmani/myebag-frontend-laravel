<template>
  <div class="md:tw-flex  tw-hidden tw-items-center tw-gap-5 tw-text-sm">
    
    <router-link :to="{ name: 'home' }">Home</router-link>

    <router-link :to="{ name: 'categories' }">Categories</router-link>

    <router-link :to="{ name: 'home/products/index' }">Products</router-link>

    <router-link :to="{ name: 'home/products/promotions' }">Promotions</router-link>

    <!-- <HeaderLink :title="'Categories'" />

    <HeaderLink :title="'Discover'" />
    
    <div class="tw-flex tw-gap-0 tw-items-center">
        <span>About us</span>
    </div>
    <div class="tw-flex tw-gap-0 tw-items-center">
        <span>Contact us</span>
    </div> -->
  </div>
</template>

<script>
// import HeaderLink from '@/layouts/default/partials/header/HeaderLink'

export default {
  // components: { HeaderLink }
}
</script>

<style>

</style>