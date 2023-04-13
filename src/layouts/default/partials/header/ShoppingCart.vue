<template>
  <div v-click-outside="hideMenu" class="tw-h-full tw-relative">
    <button
      @click="toggleMenu"
      type="button"
      class="
        tw-w-[32px] tw-h-[32px] tw-rounded-full
        hover:tw-bg-neutral-100
        dark:hover:tw-bg-neutral-800
        tw-flex tw-items-center tw-justify-center
      "
    >
      <icon
        class="tw-text-2xl tw-text-neutral-700 dark:tw-text-neutral-100"
        icon="ph:tote"
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
          md:-tw-right-2
          md:tw-w-48
          md:tw-px-0
          md:tw-top-14
          tw-px-2
          tw-top-[75px]
          
        "
      >
      <div 
      class="
          drop-menu
          tw-relative
          md:after:tw-border-t
          md:after:tw-border-t-neutral-400/20
          md:after:tw-border-l
          md:after:tw-border-l-neutral-400/20
          tw-border tw-border-neutral-400/20
          dark:after:tw-bg-neutral-900 dark:tw-bg-neutral-900
          tw-bg-white
          after:tw-bg-white
          tw-rounded-lg tw-shadow-lg tw-shadow-neutral-400/10
          dark:tw-shadow-neutral-900/10
      "
      >
        <!-- Content goes here -->
        <div class="tw-h-full tw-w-full tw-py-2 tw-relative tw-z-20">
          <div v-if="!cart.length">
            <p class="tw-px-2 tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-sm tw-my-3" >No items yet</p>
          </div>
          <div v-if="cart.length > 0">
            <div>
              <router-link to="/" v-for="item in cart" v-bind:key="item.id">
                {{ item.id }}
              </router-link>
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
  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    cart() {
      return this.$store.getters['cart/cart']
    }
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
  mounted() {
    console.log(this.cart);
  }
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
    top: 65px;
    opacity: 0;
  }

  .drop-menu::after {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  top: -8px;
  right: 16px;
  transform: rotate(45deg);
  transition-duration: 200ms;
}
}
</style>