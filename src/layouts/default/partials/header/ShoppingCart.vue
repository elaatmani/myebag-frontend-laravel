<template>
  <div v-click-outside="hideMenu" class="tw-h-full tw-relative">
    <button
      @click="toggleMenu"
      type="button"
      class="tw-w-[32px] tw-h-[32px] tw-rounded-full hover:tw-bg-neutral-100 dark:hover:tw-bg-neutral-800 tw-flex tw-items-center tw-justify-center"
    >
      <icon
        class="tw-text-2xl tw-text-neutral-700 dark:tw-text-neutral-100"
        icon="ph:tote"
      />
    </button>

    <transition name="show">
      <div
        v-if="isActive"
        class="tw-fixed sm:tw-absolute tw-h-fit tw-w-full tw-right-0 md:-tw-right-2 md:tw-w-[300px] md:tw-px-0 md:tw-top-14 tw-px-2 tw-top-[75px]"
      >
        <div
          class="drop-menu tw-relative md:after:tw-border-t md:after:tw-border-t-neutral-400/20 md:after:tw-border-l md:after:tw-border-l-neutral-400/20 tw-border tw-border-neutral-400/20 dark:after:tw-bg-neutral-900 dark:tw-bg-neutral-900 tw-bg-white after:tw-bg-white tw-rounded-lg tw-shadow-lg tw-shadow-neutral-400/10 dark:tw-shadow-neutral-900/10"
        >
          <!-- Content goes here -->
          <div class="tw-h-full tw-w-full tw-py-2 tw-relative tw-z-20">
            <div v-if="!cart.length">
              <p
                class="tw-px-2 tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-sm tw-my-3"
              >
                No items yet
              </p>
            </div>

            <div v-if="cart.length > 0">
              <div class="tw-flex tw-flex-col tw-gap-1 tw-px-2">
                <div
                  v-for="item in visibleItems"
                  :key="item.id"
                  class="tw-w-full tw-grid tw-grid-cols-12 tw-gap-2 tw-rounded-md dark:tw-bg-neutral-800 tw-py-2 tw-px-2"
                >
                  <div class="tw-col-span-2 tw-relative tw-aspect-square">
                    <div
                      class="tw-w-full tw-h-full tw-relative tw-rounded tw-overflow-hidden"
                    >
                      <img
                        :src="
                          $backend(
                            item.product.images.find((i) => i.order == 1)
                              ?.path || item.product.images[0].path
                          )
                        "
                        class="tw-w-full tw-absolute tw-opacity-60 tw-top-0 tw-left-0 tw-blur-md tw-h-full tw-object-contain"
                        alt=""
                      />
                      <img
                        :src="
                          $backend(
                            item.product.images.find((i) => i.order == 1)
                              ?.path || item.product.images[0].path
                          )
                        "
                        class="tw-w-full tw-h-full tw-object-contain tw-relative tw-z-10"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="tw-col-span-10">
                    <div class="tw-flex tw-flex-col tw-px-2">
                      <router-link
                        :to="'/products/' + item.product.id"
                        class="tw-text-sm hover:tw-underline tw-truncate"
                        >{{ item.product.name }}</router-link
                      >
                      <div class="tw-flex tw-items-center tw-justify-between">
                        <p class="tw-text-xs tw-mt-1">
                          {{ item.quantity }} x ${{ item?.variation?.price }}
                        </p>
                        <p class="tw-text-xs tw-mt-1">
                          <span>Size: </span>
                          <span>{{ item.size.value }}</span>
                        </p>
                        <button
                          @click="handleDelete(item.id)"
                          class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-red-500/20 hover:tw-bg-red-500/10 hover:tw-border-red-500/70 tw-duration-300 tw-text-red-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center"
                        >
                          <v-icon size="x-small">mdi-delete-outline</v-icon>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tw-p-2 tw-flex tw-justify-between tw-text-sm tw-border-t tw-border-solid tw-border-t-neutral-400/20 tw-my-2"
            >
              <div>
                {{ cart.length }} {{ cart.length == 1 ? "Item" : "Items" }}
              </div>
              <div v-if="cart.length > 0" class="">
                <span>Total: </span>
                <span>${{ total }}</span>
              </div>
            </div>

            <div v-if="cart.length > 0" class="tw-px-2 tw-mt-2">
              <router-link :to="{ name: 'cart' }" class="tw-w-full">
                <button
                  @click="hideMenu"
                  class="tw-w-full tw-font-medium tw-text-sm tw-flex tw-justify-center tw-text-center tw-py-2 tw-px-7 tw-items-center tw-rounded tw-bg-[rgb(var(--primary))] tw-text-white"
                >
                  Checkout
                </button>
              </router-link>
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
      return this.$store.getters["cart/cart"];
    },
    visibleItems() {
      return [...this.cart].reverse().slice(0, 3);
    },
    total() {
      let total = 0;

      this.cart.forEach((item) => {
        total += item.variation.price * item.quantity;
      });

      return total;
    },
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
    handleDelete(id) {
      this.$store.dispatch("cart/removeItem", id);
    },
  },
  mounted() {
    console.log(this.cart);
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