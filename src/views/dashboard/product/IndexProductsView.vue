<template>
  <div>
    <h2 class="tw-text-lg tw-text-neutral-600 dark:tw-text-neutral-200">Products</h2>
    <p class="tw-text-sm tw-mb-3 tw-font-light tw-text-neutral-500 dark:tw-text-neutral-300">List of all products</p>
    <div class="tw-w-full tw-h-fit dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
      <div class="tw-grid tw-grid-cols-12 tw-p-3 tw-gap-2">
        
        <div class="tw-col-span-12">
          <ProductsTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsTable from '@/components/dashboard/product/ProductsTable'

export default {
  components: { ProductsTable }
}
</script>

<style>

</style>