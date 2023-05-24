<template>
  <div>
    <div>
    <div class="tw-overflow-hidden tw-rounded-full dark:tw-bg-gray-600 tw-bg-gray-200">
      <div :class="[step == 2 && '!tw-w-1/3', step == 3 && '!tw-w-2/3', step == 4 && '!tw-w-full']" class="tw-w-10 tw-h-2 tw-duration-500 tw-rounded-full tw-bg-[rgb(var(--primary))] dark:tw-bg-[rgb(var(--primary))]"></div>
    </div>

    <ol class="tw-mt-4 tw-grid tw-grid-cols-4 tw-text-sm tw-font-medium tw-text-gray-500">
      <li :class="[step >= 1 && '!tw-text-[rgb(var(--primary))] dark:!tw-text-[rgb(var(--primary))]']" class="tw-flex tw-items-center tw-justify-start  sm:tw-gap-1.5">
        <span class="tw-hidden sm:tw-inline"> Bag </span>

        <svg
          class="tw-h-6 tw-w-6 sm:tw-h-5 sm:tw-w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          />
        </svg>
      </li>

      <li :class="[step >= 2 && '!tw-text-[rgb(var(--primary))] dark:!tw-text-[rgb(var(--primary))]']" class="tw-flex tw-items-center tw-justify-center sm:tw-gap-1.5">
        <span class="tw-hidden sm:tw-inline"> Address </span>

        <svg
          class="tw-h-6 tw-w-6 sm:tw-h-5 sm:tw-w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </li>

      <li :class="[step >= 3 && '!tw-text-[rgb(var(--primary))] dark:!tw-text-[rgb(var(--primary))]']" class="tw-flex tw-items-center tw-justify-end sm:tw-gap-1.5">
        <span class="tw-hidden sm:tw-inline"> Payment </span>

        <svg
          class="tw-h-6 tw-w-6 sm:tw-h-5 sm:tw-w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      </li>


      <li :class="[step >= 4 && '!tw-text-[rgb(var(--primary))] dark:!tw-text-[rgb(var(--primary))]']" class="tw-flex tw-items-center tw-justify-end sm:tw-gap-1.5">
        <span class="tw-hidden sm:tw-inline"> Completed </span>

        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"/></svg>
      </li>
    </ol>
  </div>
  </div>
</template>

<script>
export default {
    props: ['step'],

    data() {
        return {
            
        }
    },

    methods: {
        updateStep(number) {
            this.$emit('updateStep', number)
        }
    }
};
</script>

<style>
</style>