<template>
  <div class="pt-10">

    <div class="tw-grid tw-grid-cols-12">
      
      <div class="lg:tw-col-span-7 tw-col-span-12">
        <ImageSlider />
      </div>

      <div class="lg:tw-col-span-5 tw-col-span-12">
        <ProductDetails />
      </div>
      
    </div>
  </div>
</template>

<script>
import ImageSlider from '@/components/product/ImageSlider'
import ProductDetails from '@/components/product/ProductDetails'

export default {
  components: { ImageSlider, ProductDetails }

}
</script>

<style>

</style>