<template>
  <div class="">
    <div class="tw-border-b dark:tw-border-neutral-700 tw-border-neutral-200">
      <h1 class="tw-px-3 tw-py-2">Customer Info</h1>
      <div class="tw-p-3 tw-flex tw-gap-3">
        <div>
          <img
            class="tw-w-[45px] tw-h-[45px] tw-rounded-full tw-object-contain"
            :src="$frontend('assets/images/avatars/2.webp')"
            alt="profile"
          />
        </div>
        <div>
          <p class="tw-capitalize">{{ order.user.firstname }} {{ order.user.lastname }}</p>
          <p
            class="tw-text-sm dark:tw-text-neutral-400 tw-text-neutral-500 tw-flex tw-items-center tw-gap-1 tw-font-light"
          >
            <span>{{ order.user.email }}</span>
            <icon
              class="tw-text-blue-500 dar:tw-text-blue-400 tw-text-lg"
              icon="ph:check-circle"
            />
          </p>
        </div>
      </div>
      <div class="tw-px-3 tw-mb-3 tw-flex tw-justify-between tw-items-center">
        <p
          class="dark:tw-text-blue-400 tw-text-blue-500 tw-flex tw-items-center tw-text-sm tw-gap-2"
        >
          <icon class="tw-text-lg" icon="ph:package" /> {{ order.user.total_orders }} Orders
        </p>
        <p class="dark:tw-text-blue-400 tw-text-blue-500 tw-text-xs">View</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["order"],
};
</script>

<style>
</style>