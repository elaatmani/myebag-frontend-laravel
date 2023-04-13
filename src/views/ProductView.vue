<template>
  <div class="pt-10">

    <div class="tw-grid tw-grid-cols-12">
      
      <div class="lg:tw-col-span-7 tw-col-span-12">
        <ImageSlider />
      </div>

      <div class="lg:tw-col-span-5 tw-col-span-12">
        <ProductDetails :product="product" />
      </div>
      
    </div>
  </div>
</template>

<script>
import ImageSlider from '@/components/product/ImageSlider'
import ProductDetails from '@/components/product/ProductDetails'
import { product } from '@/helpers/data'
// import Product from '@/api/Product'


export default {
  components: { ImageSlider, ProductDetails },

  data() {
    return {
      isLoading: true,
      isFound: true,
      product: product
    }
  },

  computed: {
    id() {
      return this.$route.params.id
    },
    sizes() {
      return this.$store.getters['app/sizes']
    },
    colors() {
      return this.$store.getters['app/colors']
    }
  },

  watch: {
    $route() {
      this.isLoading = true;
      this.getProduct();
    }
  },

  methods: {
    getProduct() {

      // Product
      // .get(this.id)
      // .then(
      //   res => {
      //     console.log(res.data);
      //   },
      //   this.$handleApiError
      // )
    }
  }

}
</script>

<style>

</style>