<template>
  <div>
    <h2 class="tw-text-lg tw-text-neutral-600 dark:tw-text-neutral-200">Categories</h2>
    <p class="tw-text-sm tw-mb-3 tw-font-light tw-text-neutral-500 dark:tw-text-neutral-300">List of all categories</p>
    <div class="tw-w-full tw-h-fit dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
      <div class="tw-grid tw-grid-cols-12 tw-p-3 tw-pb-0 tw-gap-2">
        <div class="tw-col-span-12">
          <CategoriesTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesTable from '@/components/dashboard/category/CategoriesTable.vue'
import Category from '@/api/Category'

export default {
  components: { CategoriesTable },

  method: {
    getCategories() {
      Category.all()
      .then(
        res => {
          if(res.data.code == 'SUCCESS') {
            this.$store.dispatch('category/setCategories', res.data.data.categories)
          }
        },
        this.$handleApiError
      )
    }
  }
}
</script>

<style>

</style>