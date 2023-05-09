<template>
  <div>
    <div v-if="!isLoaded">
      <loading></loading>
    </div>
    <div v-if="isLoaded && !!category" class="tw-min-h-screen">
      <ProductsContainer :title="category.name" :products="category.products" />
    </div>
  </div>
</template>

<script>
import Category from '@/api/Category';
import ProductsContainer from '@/components/product/ProductsContainer.vue';
export default {
  components: { ProductsContainer },
  data() {
    return {
      isLoaded: false,
      category: null
    }
  },

  watch: {
    $route(newValue) {
      console.log(newValue);
    }
  },

  computed: {
    id() {
      return this.$route.params.id
    }
  },

  methods: {
    getCategory() {
      this.isLoaded = false;
      return Category.get(this.id)
      .then(
        res => {
          if(res.data.code == 'SUCCESS') {
            this.category = res.data.data.category
          }
        },
        this.$handleApiError
      )
      .finally(
        () => {
          this.isLoaded = true
        }
      )
    }
  },

  mounted() {
    console.log('id: ', this.id);
    this.getCategory()
  }
}
</script>

<style scoped>

</style>