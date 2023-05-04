<template>
  <div class="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-[101]">
    <v-container fluid class="sm:tw-px-3 tw-py-2 tw-px-2">
      <div
        class="
          tw-h-12
          tw-w-full
          tw-rounded-xl
          tw-border
          dark:tw-border-neutral-600/70
          tw-border-neutral-400/60
          tw-shadow-lg
          tw-shadow-neutral-400/10
          dark:tw-shadow-neutral-900/10
          tw-flex tw-justify-between
          tw-items-center
          tw-bg-white
          dark:tw-bg-neutral-900
          tw-relative
          tw-px-3
        "
      >
      <!-- Header Start -->
      <div class="tw-flex tw-items-center tw-gap-5">
        <div  class="md:tw-hidden">
          <SidebarActivator />
        </div>
        <div>
          <AppLogo :hide-text-mobile="true" />
        </div>
        <div class="md:tw-block tw-hidden dark:tw-border-r-neutral-600 tw-border-r-neutral-300 tw-border-r tw-h-[25px] tw-border-solid"></div>
        <div>
          <HeaderLinks />
        </div>
      </div>

      <!-- Header End -->
      <div class="tw-flex tw-items-center tw-gap-2">

      <!-- Theme switcher dark/light mode -->
        <div class="tw-scale-75">
          <ThemeSwitcher />
        </div>

        <div>
            <keep-alive>
              <ShoppingCart />
            </keep-alive>
        </div>

        <div>
            <SearchBox />
        </div>
    
        <!-- User account menu -->
        <div>
          <UserMenu />
        </div>
      </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import ThemeSwitcher from "@/layouts/default/partials/header/ThemeSwitcher";
import AppLogo from "@/components/AppLogo";
import UserMenu from "@/layouts/default/partials/header/UserMenu";
import SearchBox from "@/layouts/default/partials/header/SearchBox";
import ShoppingCart from "@/layouts/default/partials/header/ShoppingCart";
import HeaderLinks from "@/layouts/default/partials/header/HeaderLinks";
import SidebarActivator from '@/layouts/default/partials/header/SidebarActivator'

export default {
  components: { ThemeSwitcher, AppLogo, UserMenu, SearchBox, ShoppingCart, HeaderLinks, SidebarActivator },
};
</script>

<style>
</style>