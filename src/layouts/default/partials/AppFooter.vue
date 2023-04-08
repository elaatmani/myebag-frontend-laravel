<template>
  <div class="tw-bg-gray-100 dark:tw-bg-neutral-900">
    <v-container class="sm:tw-px-3 tw-py-2 tw-px-2">
        <div class="tw-grid tw-grid-cols-12 tw-py-10">
            <div class="tw-col-span-4">
                <AppLogo />
                <p class="tw-mt-4 tw-text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis culpa id, beatae alias aliquid. Odio architecto quos impedit quo.
                </p>
            </div>
        </div>
    </v-container>
  </div>
</template>

<script>
import AppLogo from "@/components/AppLogo";

export default {
  components: { AppLogo },
};
</script>

<style>
</style>