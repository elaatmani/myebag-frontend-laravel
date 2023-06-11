<template>
  <div class="pt-10">

    <div v-if="!isLoaded" class="tw-scale-50">
      <loading />
    </div>

    <div v-if="isLoaded" class="tw-grid tw-grid-cols-12">
      
      <div class="lg:tw-col-span-7 tw-col-span-12">
        <ImageSlider :images="product.images" :product="product" />
      </div>

      <div class="lg:tw-col-span-5 tw-col-span-12">
        <ProductDetails :key="product.id" :product="product" />
      </div>
      

      <div class="tw-col-span-12">
        <h1 class="tw-text-lg tw-font-medium tw-mt-5 tw-w-fit tw-border-solid tw-border-[rgb(var(--primary))] tw-border-b ">Description</h1>
        <p class="tw-text-sm tw-my-3">
            {{ product.description }}
        </p>
      </div>

      <div v-if="false" class="tw-col-span-12">
        <h1 class="tw-text-lg tw-font-medium tw-mt-5 tw-w-fit tw-border-solid tw-border-[rgb(var(--primary))] tw-border-b ">Reviews</h1>
        <p class="tw-text-sm tw-my-3">
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import ImageSlider from '@/components/product/ImageSlider'
import ProductDetails from '@/components/product/ProductDetails'
import { product } from '@/helpers/data'
import Product from '@/api/Product'
// import Product from '@/api/Product'


export default {
  components: { ImageSlider, ProductDetails },

  data() {
    return {
      isLoading: true,
      isLoaded: false,

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
    id() {
      if (this.$route.name == "products/show") {
        this.getProduct();
      }
    }
  },

  methods: {
    getProduct() {
        this.isLoaded = false;
        Product.get(this.id)
        .then(
            res => {
              if(res.data.code == 'SUCCESS') {
                this.product = res.data.data.product
                console.log(res.data);

                this.isLoaded = true
              }
            },
            this.$handleApiError
        )
    },
    
  },

  mounted() {
    this.getProduct()
  }

}
</script>

<style>

</style>