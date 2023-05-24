<template>
  <div>
    <router-link :to="'/products/' + product.id">
      <v-hover v-slot="{ isHovering, props }">
        <div
          v-bind="props"
          class="
            tw-rounded-lg tw-shadow-lg
            tw-relative
            dark:tw-shadow-none
            tw-shadow-neutral-300/10 tw-border tw-border-neutral-200
            dark:tw-border-neutral-700
            tw-overflow-hidden
            md:tw-h-[290px]
            tw-h-[130px] tw-grid tw-grid-cols-12 tw-grid-rows-3
          "
        >
        <div v-if="price.discount" class="tw-absolute tw-top-1 tw-left-1 tw-p-1 tw-bg-emerald-500 tw-text-white tw-z-10 tw-text-xs tw-uppercase tw-rounded">
          {{product.discount_percentage}}% Off
        </div>
          <div
            class="
              md:tw-col-span-12
              tw-col-span-5
              md:tw-row-span-2
              tw-row-span-3
              tw-relative
              tw-bg-whitse
              tw-overflow-hidden
              tw-bg-white
            "
          >
            <img
              :src="$backend(product.images.find(i => i.order == 1)?.path || product.images[0]?.path || null)"
              :class="{ 'tw-scale-105': isHovering }"
              class="tw-w-full tw-h-full tw-object-contain tw-duration-200"
            />
          </div>
          <div
            class="
              tw-relative
              md:tw-col-span-12
              tw-col-span-7
              md:tw-row-span-1
              tw-row-span-3
              dark:tw-bg-neutral-800
              tw-bg-white
              md:tw-border-t
              tw-border-l
              md:tw-border-t-neutral-200 md:tw-border-l-0
              tw-border-l-neutral-200
              dark:tw-border-l-neutral-700
              md:dark:tw-border-t-neutral-700
              tw-border-t-solid tw-border-l-solid
            "
          >
            <div class="tw-hidden md:tw-block tw-absolute tw-top-0 -tw-translate-y-1/2 tw-right-5 tw-p-2 tw-border-neutral-200 dark:tw-border-neutral-600 dark:tw-bg-neutral-800 tw-bg-white tw-rounded-full tw-border tw-border-solid" >
                <icon icon="mdi:shopping-outline" class="tw-text-2xl tw-text-neutral-600 dark:tw-text-neutral-200" />
            </div>
            <div
              class="
                tw-h-full tw-w-full
                md:tw-text-md
                dark:tw-text-white
                tw-text-base md:tw-py-5 tw-py-2 tw-px-3
                tw-flex tw-flex-col
              "
            >
                <div>

                <p class="tw-truncate">{{ product.name }}</p>
                <p class="tw-text-sm tw-text-neutral-400 dark:tw-text-neutral-400">{{ product.category.name }}</p>
                </div>
                <v-spacer class="md:tw-hidden"></v-spacer>
              <div class="tw-relative tw-flex md:tw-justify-end tw-justify-between tw-items-end">
                <p v-if="price.discount" class="tw-line-through tw-text-xs tw-text-red-400 tw-bg-red-400/10 tw-rounded-l tw-px-1">
                  ${{ price.old }}
                </p>
                <p :class="{'tw-text-emerald-500 tw-bg-emerald-500/10 tw-rounded tw-rounded-bl-none tw-px-1': price.discount, '': !price.discount}">${{ price.current }}</p>
                <div class="md:tw-hidden">
                    <button class="tw-p-2 dark:tw-bg-neutral-800 tw-bg-white tw-rounded-full tw-border dark:tw-border-neutral-600 tw-border-neutral-200 tw-border-solid">
                        <icon icon="mdi:chevron-right" />
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-hover>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["product"],

  computed: {
    price() {
      let price = this.product.variations[0].price;
      if(this.product.is_discount_active && this.product.discount_percentage != 0) {
        price = price - (price * (this.product.discount_percentage/100))
      }
      let result = {
        discount: this.product.is_discount_active,
        current: price,
        old: this.product.variations[0].price
      }

      return result;
    }
  }
};
</script>

<style>
</style>