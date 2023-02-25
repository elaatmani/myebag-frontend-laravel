<template>
  <div v-click-outside="hideMenu" class="tw-h-full tw-relative">
    <button
      @click="toggleMenu"
      type="button"
      class="
        tw-rounded-full
        tw-flex tw-items-center tw-justify-center tw-gap-2
      "
    >
        <span>{{ title }}</span>
      <icon
        class="tw-text-lg tw-text-neutral-700 dark:tw-text-neutral-100 tw-duration-200"
        icon="carbon:chevron-down"
        :class="{'-tw-scale-y-100': isActive}"
      />
    </button>

    <transition name="show">
      <div
        v-if="isActive"
        class="
          
          tw-fixed
          sm:tw-absolute
          tw-h-fit tw-w-full 
          tw-right-0
          md:-tw-left-2
          md:tw-w-60
          md:tw-px-0
          md:tw-top-10
          tw-px-2
          tw-top-[75px]
          
        "
      >
      <div 
      class="
          drop-menu
          tw-relative
          md:after:tw-border-l-neutral-400/20
          tw-border tw-border-neutral-400/20
           dark:tw-bg-neutral-900
          tw-bg-white
          tw-rounded-lg tw-shadow-lg tw-shadow-neutral-400/10
          dark:tw-shadow-neutral-900/10
      "
      >
        <!-- Content goes here -->
        <div class="tw-h-full tw-w-full tw-p-5 tw-relative tw-z-20">
            <div class="tw-mb-3 tw-flex tw-items-center tw-gap-2 tw-cursor-pointer hover:tw-text-primary">
                <div class="tw-text-white tw-bg-purple-500/10 tw-p-2 tw-w-fit tw-rounded-md">
                    <icon class="tw-text-3xl" icon="fluent-emoji:running-shoe" />
                </div>
                <div>
                    Shoes
                </div>
            </div>
            <div class="tw-mb-3 tw-flex tw-items-center tw-gap-2  tw-cursor-pointer hover:tw-text-primary">
                <div class="tw-text-white tw-bg-secondary/10 tw-p-2 tw-w-fit tw-rounded-md">
                    <!-- <img class="tw-w-[30px]" :src="$frontend('assets/images/watchIcon.svg')"> -->
                    <icon class="tw-text-3xl" icon="fluent-emoji:watch" />
                </div>
                <div>
                    Watches
                </div>
            </div>
            <div class="tw--1 tw-flex tw-items-center tw-gap-2  tw-cursor-pointer hover:tw-text-primary">
                <div class="tw-text-white tw-bg-orange-500/10 tw-p-2 tw-w-fit tw-rounded-md">
                    <!-- <icon class="tw-text-3xl" icon="fluent-emoji:watch" /> -->
                    <img class="tw-w-[30px]" :src="$frontend('assets/images/hoodieIcon.avif')">
                </div>
                <div>
                    Hoodies
                </div>
            </div>
        </div>
      </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: [ 'title' ],
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    showMenu() {
      this.isActive = true;
    },
    hideMenu() {
      this.isActive = false;
    },
    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>

.show-enter-active,
.show-leave-active {
  transition: top 0.2s ease, opacity 0.2s ease;
}

.show-enter-from,
.show-leave-to {
  top: 80px;
  opacity: 0;
}

@media (min-width: 768px) {
  .show-enter-from,
  .show-leave-to {
    top: 30px;
    opacity: 0;
  }

}
</style>