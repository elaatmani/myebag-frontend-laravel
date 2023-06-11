<template>
  <div class="pt-10">
    <div v-if="!isLoaded" class="tw-scale-50">
      <loading />
    </div>

    <div v-if="isLoaded" class="tw-grid tw-grid-cols-12 tw-gap-5">
      <div class="tw-col-span-12 tw-text-lg">
        My Favorites
      </div>
      <div class="lg:tw-col-span-12 tw-col-span-12">
        <div
          class="tw-w-full tw-rounded tw-border tw-border-solid tw-p-3 tw-pt-0 dark:tw-border-neutral-700 tw-border-neutral-200"
        >
            <ProductsContainer :hide-title="true" :products="filteredProducts" :show-more="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/api/Product";
import ProductsContainer from '@/components/product/ProductsContainer'

export default {
    components: {ProductsContainer},
  data() {
    return {
      isLoading: true,
      isLoaded: false,
      search: '',
      minPrice: 0,
      maxPrice: 1000,

      filteredCategories: []
    };
  },

  computed: {
    id() {
      return this.$route.params.id;
    },
    sizes() {
      return this.$store.getters["app/sizes"];
    },
    colors() {
      return this.$store.getters["app/colors"];
    },
    products() {
      return this.$store.getters["product/products"];
    },
    filteredProducts() {
      return this.products.filter((p) => {

        if(this.filteredCategories.length !== 0 && !this.filteredCategories.includes(p.category.id)) {
            return false;
        }


        if(this.search !== '' && !p.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())) {
            return false;
        }

        if(p.variations.length > 0 && !p.variations.some(v => this.price(p, v).current >= this.minPrice && this.price(p, v).current <= this.maxPrice)) {
          return false
        }

        return true;
      });
    },

    categories() {
      return this.products
        .map((p) => p.category)
        .filter((c, i, array) => array.map((j) => j.id).indexOf(c.id) == i);
    },
  },

  methods: {
    getProducts() {
      this.isLoaded = false;
      Product.favorites().then((res) => {
        if (res.data.code == "SUCCESS") {
          this.$store.dispatch("product/setProducts", res.data.data.products);
          this.$store.dispatch("product/setFetched", true);

          this.isLoaded = true;
        }
      }, this.$handleApiError);
    },

    price(p, v) {
      let price = v.price;
      if(p.is_discount_active && p.discount_percentage != 0) {
        price = price - (price * (p.discount_percentage/100))
      }
      let result = {
        discount: p.is_discount_active,
        current: price,
        old: v.price
      }

      return result;
    },

    handleCategoryChange(event) {
        if(this.filteredCategories.includes(parseInt(event.target.value))) {
            this.filteredCategories = this.filteredCategories.filter(c => c != parseInt(event.target.value))
        } else {
            this.filteredCategories.push(parseInt(event.target.value));
        }
    }
  },

  mounted() {
    this.getProducts();
  },
};
</script>

<style>
</style>