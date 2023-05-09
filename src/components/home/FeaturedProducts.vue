<template>
  <div class="tw-space-y-10">
    <ProductsContainer
      v-for="item in featured"
      :key="item.id"
      :show-more="'/categories/'+item.id"
      :products="item.products.slice(0, 4)"
      :title="item.name"
    />
  </div>
</template>

<script>
import ProductsContainer from "@/components/product/ProductsContainer";
// import { products } from "@/helpers/data";
export default {
  components: { ProductsContainer },
  props: ['featured'],

  data() {
    return {
      // products,
    };
  },

  computed: {
  },
};
</script>

<style>
</style>