<template>
  <div class="tw-h-full tw-min-h-fit">
    <div class="tw-flex tw-h-full tw-flex-col">
    <div class="tw-mb-5">Profile</div>
      <div class="tw-w-full">
        <div class="tw-flex lg:tw-flex-row tw-flex-col tw-gap-10">
            <div class="tw-flex tw-flex-col tw-items-center tw-gap-3 tw-w-fit">
                <img :src="$frontend('assets/images/avatars/3.webp')" class="tw-w-[100px] tw-h-[100px] tw-rounded-full">
                <v-btn class="tw-capitalize"  variant="text" :color="isDarkMode ? 'secondary' : 'primary'">Change Avatar</v-btn>
            </div>
            <div class="tw-w-full">
                <div class="tw-grid tw-grid-cols-12 tw-w-full tw-gap-x-5 tw-gap-y-3 tw-text-sm">
                    <div class="md:tw-col-span-6 tw-col-span-12">
                        <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                          <label for="firstname">First name</label>
                          <input value="Yassine" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500"  type="text">
                          <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                            {{ '' }}
                          </div>
                        </div>
                    </div>
                    <div class="md:tw-col-span-6 tw-col-span-12">
                        <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                          <label for="lastname">Last name</label>
                          <input value="El Aatmani" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500"  type="text">
                          <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                            {{ '' }}
                          </div>
                        </div>
                    </div>
                    <div class="md:tw-col-span-6 tw-col-span-12">
                        <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                          <label for="phone">Phone number</label>
                          <input value="0608944024" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500"  type="text">
                          <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                            {{ '' }}
                          </div>
                        </div>
                    </div>
                    <div class="md:tw-col-span-6 tw-col-span-12">
                        <div class="tw-flex tw-flex-col md:tw-col-span-6 tw-col-span-12 tw-text-neutral-700 dark:tw-text-neutral-200 tw-text-md">
                          <label for="email">Email</label>
                          <input value="yassine@gmail.com" class="tw-w-full tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500"  type="email">
                          <div ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                            {{ '' }}
                          </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>

      <v-spacer></v-spacer>

      <div class="tw-w-full tw-flex tw-justify-end tw-mt-10">
        <v-btn variant="flat" :color="isDarkMode ? 'secondary' : 'primary'" class="tw-capitalize">
          <span class="dark:tw-text-neutral-900 tw-font-medium">
            Save changes
          </span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
      isDarkMode() {
        return this.$store.getters['theme/isDarkMode']
      }
    }
}
</script>

<style>

</style>