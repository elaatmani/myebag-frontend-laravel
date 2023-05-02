<template>
  <div>
    <!-- <div class="tw-p-5 tw-grid tw-grid-cols-12 tw-rounded tw-bg-black/20">

    </div> -->
    <div
      class="tw-w-full tw-grid  tw-gap-3 tw-grid-cols-12 tw-rounded-md dark:tw-bg-black/50 tw-shadow-lg tw-shadow-neutral-500/10 dark:tw-shadow-neutral-700/10 tw-border tw-border-solid tw-border-neutral-400/20 md:tw-p-5 tw-p-2"
    >
      <div class="tw-col-span-2 tw-relative tw-aspect-square">
        <div
          class="tw-w-full tw-h-full tw-relative tw-rounded tw-overflow-hidden"
        >
          <img
            :src="$backend(item.product.images.find(i => i.order == 1)?.path || item.product.images[0].path)"
            class="tw-w-full tw-absolute tw-opacity-60 tw-top-0 tw-left-0 tw-blur-md tw-h-full tw-object-contain"
            alt=""
          />
          <img
            :src="$backend(item.product.images.find(i => i.order == 1)?.path || item.product.images[0].path)"
            class="tw-w-full tw-h-full tw-object-contain tw-relative tw-z-10"
            alt=""
          />
        </div>
      </div>
      <div class="tw-col-span-10">
        <div class="tw-flex tw-h-full tw-justify-between tw-flex-col tw-px-2 ">
          <h2 class="">{{ item.product.name }}</h2>
          <h3 class="dark:tw-text-neutral-400 tw-text-neutral-600 tw-text-xs">{{ item.product.description }}</h3>
          <v-spacer></v-spacer>
          <div class="tw-flex tw-items-center tw-justify-between">
            <p class="tw-text tw-mt-1">
              {{ item.quantity }} x ${{ item.product.price }}
            </p>
            <p class="tw-text tw-mt-1">
              <span>Size: </span>
              <span>{{ item.size.name }}</span>
            </p>
            <button @click="handleDelete(item.id)" class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-red-500/20 hover:tw-bg-red-500/10 hover:tw-border-red-500/70 tw-duration-300 tw-text-red-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
                <v-icon size="x-small" >mdi-delete-outline</v-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: [ 'item' ],

    methods: {
      handleDelete(id) {
        this.$store.dispatch('cart/removeItem', id)
      }
    }
}
</script>

<style>

</style>