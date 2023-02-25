<template>
  <div>
    <h2 class="tw-text-xl tw-font-medium tw-text-neutral-600 dark:tw-text-neutral-200 tw-mt-5">Account Settings</h2>
    <p class="tw-text-sm tw-font-regular tw-text-neutral-500 dark:tw-text-neutral-300 tw-mb-5">Change your profile and account settings</p>
    <div class="tw-w-full tw-h-[400px] tw-rounded-lg dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-neutral-200 dark:tw-border-neutral-600 tw-overflow-hidden">
        <div v-if="false" class="tw-grid tw-grid-cols-12">
          <div class="tw-col-span-2 tw-px-5 tw-pr-0 tw-py-10 tw-border-r tw-border-r-neutral-200">
            <div class="tw-w-full tw-flex tw-flex-col tw-gap-3 tw-translate-x-[.5%]">
              <router-link class="tw-w-full" to="/">
                <div class="tw-w-full tw-text-purple-500 tw-border-r-2 tw-border-purple-500  tw-py-1 tw-flex tw-gap-3 tw-items-center">
                  <icon icon="ph:user" class="tw-text-xl" />
                  <div>Profile</div>
                </div>
              </router-link>
              <router-link class="tw-w-full" to="/">
                <div class="tw-w-full tw-text-neutral-500 tw-py-1 tw-flex tw-gap-3 tw-items-center">
                  <icon icon="ph:lock" class="tw-text-xl" />
                  <div>Security</div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="tw-col-span-2 tw-p-5">
            <div class="tw-w-full tw-mb-5">Your profile avatar:</div>
            <div>
              <img :src="$frontend('assets/images/avatars/2.webp')" class="tw-w-[100px] tw-h-[100px] tw-rounded-full">
            </div>
          </div>
        </div>

        <!-- Mobile -->
        <div class="tw-grid tw-grid-cols-12 md:tw-hiddedn">
          <div class="tw-col-span-12 md:tw-col-span-3 lg:tw-col-span-2 tw-border-r tw-border-r-neutral-200 dark:tw-border-r-neutral-700">
            <v-tabs
              v-model="model"
              centered
              :direction="$vuetify.display.mdAndUp ? 'vertical' : 'horizontal'"
            >
              <v-tab
                v-for="tab in tabs"
                :key="tab.id"
                :value="tab.id"
                color="secondary"
                class="tw-capitalize"
                slider-color="secondary"
                
              >
                  <div class="tw-flex tw-gap-2 tw-items-center">
                      <icon :icon="tab.icon" class="tw-text-xl" />
                      <div>{{ tab.name }}</div>
                  </div>
              </v-tab>
            </v-tabs>
          </div>
          
        <div class="md:tw-col-span-8 lg:tw-col-span-9 tw-col-span-12">
          <v-window v-model="model">
            <v-window-item
              v-for="tab in tabs"
              :key="tab.id"
              :value="tab.id"
              
            >
              <div class="tw-p-5">
                <div class="tw-w-full tw-mb-5">Your profile avatar:</div>
                <div>
                  <img :src="$frontend('assets/images/avatars/2.webp')" class="tw-w-[100px] tw-h-[100px] tw-rounded-full">
                </div>
              </div>
            </v-window-item>
          </v-window>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/../tailwind.config.js'
// Components

export default {
  name: 'ProfileView',
  components: {  },

  data() {
    return {
        model: 'tab-2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tabs: [
          { id: 1, name: 'Profile', icon: 'ph:user' },
          { id: 2, name: 'Security', icon: 'ph:lock' },
          { id: 3, name: 'Settings', icon: 'ph:gear-six' },
        ]
    }
  },

  mounted() {
    const fullConfig = resolveConfig(tailwindConfig)
    console.log(fullConfig);
  }
};
</script>
