<template>
  <div class="tw-space-y-10">
    <ProductsContainer
      v-for="category in categories"
      :key="category"
      :products="products[category]"
      :title="category"
    />
  </div>
</template>

<script>
import ProductsContainer from "@/components/product/ProductsContainer";
import { products } from "@/helpers/data";
export default {
  components: { ProductsContainer },
  data() {
    return {
      products,
    };
  },

  computed: {
    categories() {
      return Object.keys(this.products);
    },
  },
};
</script>

<style>
</style>