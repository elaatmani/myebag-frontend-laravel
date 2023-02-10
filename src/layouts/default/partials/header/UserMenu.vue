<template>
  <div class="tw-h-full tw-relative" v-click-outside="hideMenu">
    <button @click="toggleMenu" type="button" class="tw-w-[28px] tw-h-[28px] tw-ring tw-ring-transparent tw-duration-300 dark:hover:tw-ring-neutral-700 hover:tw-ring-neutral-100 tw-block tw-rounded-full tw-overflow-hidden">
        <img :src="$frontend('assets/images/avatars/2.webp')" class="tw-w-full" alt="User Prfile">
    </button>

    <div v-if="isActive" class="drop-menu tw-absolute tw-h-fit tw-w-56 md:tw-w-48 tw-top-14 after:tw-border-t after:tw-border-t-neutral-400/20 after:tw-border-l after:tw-border-l-neutral-400/20 tw-border tw-border-neutral-400/20 dark:after:tw-bg-neutral-900 dark:tw-bg-neutral-900 tw-bg-white after:tw-bg-white -tw-right-2 tw-rounded-lg  tw-shadow-lg tw-shadow-neutral-400/10 dark:tw-shadow-neutral-900/10">
        <div class="tw-h-full tw-w-full tw-py-2 tw-relative tw-z-20">
            <router-link to="/" class="tw-py-2 md:tw-py-1 tw-flex tw-items-center tw-gap-3 tw-w-full tw-px-3 hover:tw-bg-black/5 dark:hover:tw-bg-white/5">
                <icon class="tw-text-xl tw-text-neutral-700 dark:tw-text-neutral-100" icon="akar-icons:dashboard" />
                <span class="tw-text-md tw-text-neutral-700 dark:tw-text-neutral-100">Dashboard</span>
            </router-link>
            <router-link to="/" class="tw-py-2 md:tw-py-1 tw-flex tw-items-center tw-gap-3 tw-w-full tw-px-3 hover:tw-bg-black/5 dark:hover:tw-bg-white/5">
                <icon class="tw-text-xl tw-text-neutral-700 dark:tw-text-neutral-100" icon="ph:user" />
                <span class="tw-text-md tw-text-neutral-700 dark:tw-text-neutral-100">Profile</span>
            </router-link>
            <router-link to="/" class="tw-py-2 md:tw-py-1 tw-flex tw-items-center tw-gap-3 tw-w-full tw-px-3 hover:tw-bg-black/5 dark:hover:tw-bg-white/5">
                <icon class="tw-text-xl tw-text-neutral-700 dark:tw-text-neutral-100" icon="ph:package" />
                <span class="tw-text-md tw-text-neutral-700 dark:tw-text-neutral-100">Orders</span>
            </router-link>
            <router-link to="/" class="tw-py-2 md:tw-py-1 tw-flex tw-items-center tw-gap-3 tw-w-full tw-px-3 hover:tw-bg-black/5 dark:hover:tw-bg-white/5">
                <icon class="tw-text-xl tw-text-neutral-700 dark:tw-text-neutral-100" icon="ph:gear-six" />
                <span class="tw-text-md tw-text-neutral-700 dark:tw-text-neutral-100">Settings</span>
            </router-link>

            <v-divider class="tw-border-neutral-700 dark:tw-border-neutral-100 tw-my-2"></v-divider>

            <router-link to="/" class="tw-py-2 md:tw-py-1 tw-flex tw-items-center tw-gap-3 tw-w-full tw-px-3 hover:tw-bg-black/5 dark:hover:tw-bg-white/5">
                <icon class="tw-text-xl tw-text-red-600" icon="ph:power" />
                <span class="tw-text-md tw-text-red-600">Logout</span>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        showMenu() {
            this.isActive = true
        },
        hideMenu() {
            this.isActive = false
        },
        toggleMenu() {
            this.isActive = !this.isActive
        }
    }
}
</script>

<style scoped>
.drop-menu::after {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    top: -8px;
    right: 16px;
    transform: rotate(45deg);
    transition-duration: 200ms;
}

</style>