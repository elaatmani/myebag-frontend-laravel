<template>
  <div>
    <div class="tw-h-full tw-w-full tw-py-2 tw-pb-1 tw-relative tw-z-20">
          <router-link
            v-for="link in links"
            :key="link.id"
            :to="{name: link.to}"
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
            adminLinks: [
                { id: 1, name: "Dashboard", to: "dashboard/index", icon: "ph:squares-four" },
                // { id: 2, name: "Profile", to: "/profile", icon: "ph:user" },
                { id: 3, name: "Orders", to: "user/orders/index", icon: "ph:package" },
              { id: 2, name: "Favorites", to: "favorites", icon: "ph:heart" },
                { id: 4, name: "Settings", to: "profile", icon: "ph:gear-six" },
            ],
            userLinks: [
                // { id: 1, name: "Dashboard", to: "/dashboard", icon: "akar-icons:dashboard" },
                { id: 3, name: "Orders", to: "user/orders/index", icon: "ph:package" },
                { id: 2, name: "Favorites", to: "favorites", icon: "ph:heart" },
                { id: 4, name: "Settings", to: "profile", icon: "ph:gear-six" },
            ]
        }
    },

    computed: {
      user() {
        return this.$store.getters['user/user']
      },
      isAdmin() {
        return this.$store.getters['user/isAdmin']
      },
      links() {
        return this.isAdmin ? this.adminLinks : this.userLinks
      }
    },

    methods: {
      logout() {
          this.$store.dispatch('user/logout');
          this.$router.push({name: 'login'})
      }
    }
}
</script>

<style>

</style>