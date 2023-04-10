<template>
  <div>
    <div class="tw-h-full tw-w-full tw-py-2 tw-pb-1 tw-relative tw-z-20">
          <router-link
            v-for="link in links"
            :key="link.id"
            :to="link.to"
            class="
              tw-py-2
              md:tw-py-1
              tw-flex tw-items-center tw-gap-3 tw-w-full tw-px-3
              hover:tw-bg-black/5
              dark:hover:tw-bg-white/5
            "
          >
            <icon
              class="tw-text-xl tw-text-neutral-700 dark:tw-text-neutral-100"
              :icon="link.icon"
            />
            <span
              class="tw-text-md tw-text-neutral-700 dark:tw-text-neutral-100"
              >{{ link.name }}</span
            >
          </router-link>

          <v-divider
            class="tw-border-neutral-700 dark:tw-border-neutral-100 tw-my-1"
          ></v-divider>

          <button
            @click="logout"
            class="
              tw-py-2
              md:tw-py-1
              tw-flex tw-items-center tw-gap-3 tw-w-full tw-px-3
              hover:tw-bg-black/5
              dark:hover:tw-bg-white/5
            "
          >
            <icon class="tw-text-xl tw-text-red-600" icon="ph:power" />
            <span class="tw-text-md tw-text-red-600">Logout</span>
          </button>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { id: 1, name: "Dashboard", to: "/dashboard", icon: "akar-icons:dashboard" },
                // { id: 2, name: "Profile", to: "/profile", icon: "ph:user" },
                { id: 3, name: "Orders", to: "/signup", icon: "ph:package" },
                { id: 4, name: "Settings", to: "/profile", icon: "ph:gear-six" },
            ],
        }
    },

    computed: {
      user() {
        return this.$store.getters['user/user']
      }
    },

    methods: {
      logout() {
          this.$store.dispatch('user/setUser', {});
          this.$store.dispatch('user/setIsLoggedIn', false);
          this.$router.push({name: 'login'})
      }
    }
}
</script>

<style>

</style>