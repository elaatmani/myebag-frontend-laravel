<template>
  <div>
    <h2 class="tw-text-lg tw-text-neutral-600 dark:tw-text-neutral-200">Products</h2>
    <p class="tw-text-sm tw-mb-3 tw-font-light tw-text-neutral-500 dark:tw-text-neutral-300">List of all products</p>
    <div class="tw-w-full tw-h-fit dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
      <div class="tw-grid tw-grid-cols-12 tw-p-3 tw-gap-2">
        
        <div class="tw-col-span-12">
          <ProductsTable :isLoaded="fetched" :allItems="products" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsTable from '@/components/dashboard/product/ProductsTable'
import Product from '@/api/Product'

export default {
  components: { ProductsTable },

  data() {
    return {
    }
  },

  computed: {
    products() {
      return this.$store.getters['product/products']
    },

    fetched() {
      return this.$store.getters['product/fetched']
    },
  },

  methods: {
    getProducts() {
      this.fetched = false
      Product.all()
      .then(
        res => {
          if(res.data.code == 'SUCCESS') {
            this.$store.dispatch('product/setProducts', res.data.data.products)
          }
        },
        this.$handleApiError
      )
      .finally(
        () => {
          this.$store.dispatch('product/setFetched', true)
        }
      )
    }
  },
  
  mounted() {
    if(!this.fetched) {
      this.getProducts()
    }
  }
}
</script>

<style>

</style>