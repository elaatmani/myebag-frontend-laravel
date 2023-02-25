<template>
  <div>
    <router-link to="/">
      <v-hover v-slot="{ isHovering, props }">
        <div
          v-bind="props"
          class="
            tw-rounded-lg tw-shadow-lg
            dark:tw-shadow-none
            tw-shadow-neutral-300/10 tw-border tw-border-neutral-200
            dark:tw-border-neutral-700
            tw-overflow-hidden
            md:tw-h-[290px]
            tw-h-[130px] tw-grid tw-grid-cols-12 tw-grid-rows-3
          "
        >
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
              :src="$frontend(product.image)"
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

                <p class="tw-truncate">Hello tegjq jgsqc gjg sqg jqsg sqfrty </p>
                <p class="tw-text-sm tw-text-neutral-400 dark:tw-text-neutral-400">Shoes</p>
                </div>
                <v-spacer class="md:tw-hidden"></v-spacer>
              <div class="tw-flex md:tw-justify-end tw-justify-between tw-items-end">
                <p>$200</p>
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
};
</script>

<style>
</style>