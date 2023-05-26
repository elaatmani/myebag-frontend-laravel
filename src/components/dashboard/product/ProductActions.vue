<template>
  <div class="tw-h-full">
    <div class="tw-flex tw-items-center tw-gap-2">
      <router-link :to="'/products/' + product.id">
        <button class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-blue-500/20 hover:tw-bg-blue-500/10 hover:tw-border-blue-500/70 tw-duration-300 tw-text-blue-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
            <v-icon size="x-small" >mdi-eye-outline</v-icon>
        </button>
      </router-link>
      <router-link :to="'/dashboard/products/update/' + product.id">
          <button  class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-green-500/20 hover:tw-bg-green-500/10 hover:tw-border-green-500/70 tw-duration-300 tw-text-green-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
            <v-icon size="x-small" >mdi-pencil-outline</v-icon>
          </button>
      </router-link>
      <button @click="popup = true" class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-red-500/20 hover:tw-bg-red-500/10 hover:tw-border-red-500/70 tw-duration-300 tw-text-red-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
          <v-icon size="x-small" >mdi-delete-outline</v-icon>
      </button>
    </div>

    <popup :visible="popup" @cancel="popup = false">
      <div class="tw-mx-auto tw-w-[95%] md:tw-max-w-[400px] tw-overflow-hidden tw-min-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md  tw-my-5 tw-rounded-lg">
        <div class="tw-px-5 tw-flex dark:tw-text-neutral-400 tw-text-neutral-500 tw-items-center tw-gap-4 tw-py-4 dark:tw-bg-neutral-800 tw-bg-white">
          <v-icon size="x-large" class="dark:tw-text-red-400 tw-text-red-500">mdi-alert-outline</v-icon>
          <p>
            Are you sure you want to delete this Product?
          </p>
        </div>
        <div class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-neutral-100">
          <button @click="popup = false" class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-black/20 tw-bg-neutral-300  dark:tw-bg-neutral-600  tw-duration-300  tw-text-neutral-900 dark:tw-text-neutral-300">
            Cancel
          </button>
          <button @click="handleDelete" class="tw-py-2 tw-px-7 tw-flex tw-items-center tw-font-medium tw-rounded tw-text-sm tw-bg-red-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-red-600 dark:tw-border-neutral-900 dark:hover:tw-border-red-500 hover:tw-bg-red-500/80 dark:hover:tw-bg-red-400 tw-duration-300  tw-text-neutral-800">
            <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
            <span>{{isLoading ? 'Deleting...' : 'Delete'}}</span>
          </button>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import Product from '@/api/Product'
export default {
  props: ['product'],

  data() {
    return {
      popup: false,
      isLoading: false,
    }
  },

  methods: {
    handleDelete() {
      this.isLoading = true

      Product.delete(this.product.id)
      .then(
        res => {
          if(res.data.code == 'SUCCESS') {
            this.$alert({
              type: 'success',
              body: "Product deleted successfully"
            })
            this.$store.dispatch('product/delete', this.product.id)
            this.popup = false
          }
        },
        this.$handleApiError
      )
      .finally(
        () => this.isLoading = false
      )
    }
  }
}
</script>

<style>

</style>