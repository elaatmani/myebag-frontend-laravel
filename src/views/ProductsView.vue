<template>
  <div class="pt-10">
    <loading v-if="!isLoaded" />

    <div v-if="isLoaded" class="tw-grid tw-grid-cols-12 tw-gap-5">
      <div class="lg:tw-col-span-3 tw-col-span-12">

        <div class="tw-flex tw-flex-col tw-gap-2">
          <div
            class="tw-w-full tw-rounded tw-border tw-border-solid tw-p-3 dark:tw-border-neutral-700 tw-border-neutral-200"
          >
            Search
            <div class="tw-relative tw-w-full tw-max-w-[550pxd] tw-flex-grow-1 tw-mt-2">
                <icon icon="ph:magnifying-glass" class="tw-text-xl tw-text-neutral-400 tw-absolute tw-top-1/2 tw-left-3 -tw-translate-y-1/2" />
                <input v-model="search" class="tw-outline-none tw-h-[38px] tw-rounded-lg tw-text-sm tw-text-neutral-500 dark:tw-text-neutral-300 tw-bg-white dark:tw-bg-neutral-800 tw-duration-300 focus:tw-border-[rgb(var(--primary))] hover:tw-border-[rgba(var(--primary),.4)] dark:hover:tw-border-[rgba(var(--primary),.4)] dark:focus:tw-border-[rgba(var(--primary),1)] tw-border-neutral-200 dark:tw-border-neutral-600 tw-border-solid tw-border tw-py-2 tw-px-3 tw-pl-10 tw-w-full" type="text" placeholder="Search for Name, Brand..." />
            </div>
          </div>

          <div
            class="tw-w-full tw-rounded tw-border tw-border-solid tw-p-3 dark:tw-border-neutral-700 tw-border-neutral-200"
          >
            Category
            <ul class="tw-mt-2">
              <li
                v-for="c in categories"
                :key="c.id"
                class="tw-flex tw-items-center tw-gap-2"
                @change="handleCategoryChange"
              >
                <!-- <input  id="helper-checkbox-1"  type="checkbox" class="!tw-caret-[rgb(var(--primary))] tw-w-4 tw-h-4 tw-text-[rgb(var(--primary-dark))] tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-[rgb(var(--primary))] dark:focus:tw-ring-[rgb(var(--primary-dark))] dark:tw-ring-offset-gray-800 focus:tw-ring-2 dark:tw-bg-gray-700 dark:tw-border-gray-600"> -->

                <div class="tw-inline-flex tw-items-center">
                  <label
                    class="tw-relative tw-flex tw-cursor-pointer tw-items-center tw-rounded-full tw-p-2"
                    for="checkbox"
                    data-ripple-dark="true"
                  >
                    <input
                      type="checkbox"
                      :id="'category-' + c.id"
                      :checked="filteredCategories.includes(c.id)"
                      name="category"
                      :value="c.id"
                      class="before:tw-content[''] tw-peer tw-relative tw-h-5 tw-w-5 tw-cursor-pointer tw-appearance-none tw-rounded-md tw-border tw-border-solid tw-border-blue-gray-200 tw-transition-all before:tw-absolute before:tw-top-2/4 before:tw-left-2/4 before:tw-block before:tw-h-12 before:tw-w-12 before:-tw-translate-y-2/4 before:-tw-translate-x-2/4 before:tw-rounded-full before:tw-bg-blue-gray-500 before:tw-opacity-0 before:tw-transition-opacity checked:tw-border-[rgb(var(--primary))] checked:tw-bg-[rgb(var(--primary))] checked:before:tw-bg-[rgb(var(--primary))] hover:before:tw-opacity-10"
                    />
                    <div
                      class="tw-pointer-events-none tw-absolute tw-top-2/4 tw-left-2/4 -tw-translate-y-2/4 -tw-translate-x-2/4 tw-text-white tw-opacity-0 tw-transition-opacity peer-checked:tw-opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="tw-h-3.5 tw-w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </label>
                </div>
                <label :for="'category-' + c.id" class="tw-text-sm">{{ c.name }}</label>
              </li>
            </ul>
          </div>

          <div
            v-if="false"
            class="tw-w-full tw-rounded tw-border tw-border-solid tw-p-3 dark:tw-border-neutral-700 tw-border-neutral-200"
          >
            Price
            <ul class="tw-mt-2">
              <li
                v-for="c in colors"
                :key="c.id"
                class="tw-flex tw-items-center tw-flex-wrap tw-gap-2"
              >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="lg:tw-col-span-9 tw-col-span-12">
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
      Product.all_active().then((res) => {
        if (res.data.code == "SUCCESS") {
          this.$store.dispatch("product/setProducts", res.data.data.products);
          this.$store.dispatch("product/setFetched", true);

          this.isLoaded = true;
        }
      }, this.$handleApiError);
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