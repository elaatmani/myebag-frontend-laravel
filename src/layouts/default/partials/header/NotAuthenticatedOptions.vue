<template>
  <div>
    <div class="tw-h-full tw-w-full tw-py-2 tw-relative tw-z-20">
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
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { id: 1, name: "Login", to: "/login", icon: "fe:login" },
                { id: 2, name: "Sign up", to: "/signup", icon: "ph:user" },
            ],
        }
    }
}
</script>

<style>

</style>