<template>
  <div>
    <h2 class="tw-text-lg tw-text-neutral-600 dark:tw-text-neutral-200">Create Product</h2>
    <p class="tw-text-sm tw-mb-3 tw-font-light tw-text-neutral-500 dark:tw-text-neutral-300">Add new product</p>
    <div class="tw-w-full tw-h-fit dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
      <div class="tw-grid tw-grid-cols-12 tw-p-3 tw-px-4 tw-gap-10">
        <div class="md:tw-col-span-6 tw-col-span-12">

          <!-- Product info -->
          <div class="">
            <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-font-semibold" for="email">Product Name</label>
              <input :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-md tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Product name" type="text">
              <div v-if="false" ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                {{ 'Error' }}
              </div>
              <div ref="note" class=" tw-text-sm tw-text-neutral-400 tw-my-2">
                Do not exceed 20 characters when entering the product name.
              </div>
            </div>

            <div class="mt-5 tw-grid tw-gap-2 tw-grid-cols-12">

              <div class="tw-col-span-9 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                <label class="tw-font-semibold" for="email">Category</label>
                <div class=" tw-relative  tw-mt-1" >
                  <select :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-md tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500">
                    <option value="1">Shoes</option>
                    <option value="2">Hoodies</option>
                    <option value="3">Watches</option>
                  </select>
                  <v-icon size="small" class="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-pointer-events-none tw-right-3">mdi-chevron-down</v-icon>
                </div>
              </div>

              <div class="tw-col-span-3 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                <label class="tw-font-semibold" for="email">Genre</label>
                <div class=" tw-relative  tw-mt-1">
                  <select :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-md tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500">
                    <option value="1">Both</option>
                    <option value="2">Male</option>
                    <option value="3">Female</option>
                  </select>
                  <v-icon size="small" class="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-pointer-events-none tw-right-3">mdi-chevron-down</v-icon>
                </div>
              </div>


            </div>

            <div class="tw-flex tw-flex-col mt-5 tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-font-semibold" for="email">Description</label>
              <textarea 
              :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-md tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500"
               rows="5"></textarea>
              <div v-if="false" ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                {{ 'Error' }}
              </div>
            </div>

          </div>

        </div>
        <div class="md:tw-col-span-6 tw-col-span-12">
          <h1 class="tw-text-neutral-500 dark:tw-text-neutral-300">Product Images</h1>
          <div class="tw-grid tw-grid-cols-12 tw-mt-2 tw-gap-2">
            <div class="md:tw-col-span-5 tw-col-span-12 tw-h-[150px] tw-relative tw-rounded-lg tw-border tw-border-dashed tw-border-neutral-500">

              <div class="tw-flex tw-flex-col tw-w-[80%] tw-text-center tw-justify-center tw-items-center tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-y-1/2 -tw-translate-x-1/2">
                <v-icon class="tw-mb-2 tw-text-neutral-400 dark:tw-text-neutral-300">mdi-image</v-icon>
                <p class="tw-text-neutral-400 dark:tw-text-neutral-300 tw-text-xs">Drop your image here, or <span class="tw-text-blue-500">click to browse</span></p>
              </div>
            </div>
            <div class="tw-col-span-7 tw-grid tw-grid-cols-12 tw-gap-2">
              <div class="tw-col-span-3 tw-relative tw-h-[50px] tw-row-span-1  tw-rounded-lg tw-border tw-border-dashed tw-border-neutral-500">

                <button class="tw-w-5 tw-h-5 tw-rounded-full tw-absolute tw-top-0 tw-right-0 -tw-scale-75 -tw-translate-y-1/2 tw-translate-x-1/2 tw-flex tw-items-center tw-justify-center tw-bg-red-500">
                  <v-icon class="tw-text-xs tw-text-white">mdi-close</v-icon>
                </button>
              </div>
              <div class="tw-col-span-3 tw-relative tw-h-[50px] tw-row-span-1  tw-rounded-lg tw-border tw-border-dashed tw-border-neutral-500">

                <button class="tw-w-5 tw-h-5 tw-rounded-full tw-absolute tw-top-0 tw-right-0 -tw-scale-75 -tw-translate-y-1/2 tw-translate-x-1/2 tw-flex tw-items-center tw-justify-center tw-bg-red-500">
                  <v-icon class="tw-text-xs tw-text-white">mdi-close</v-icon>
                </button>
              </div>
              <div class="tw-col-span-3 tw-relative tw-h-[50px] tw-row-span-1  tw-rounded-lg tw-border tw-border-dashed tw-border-neutral-500">

                <button class="tw-w-5 tw-h-5 tw-rounded-full tw-absolute tw-top-0 tw-right-0 -tw-scale-75 -tw-translate-y-1/2 tw-translate-x-1/2 tw-flex tw-items-center tw-justify-center tw-bg-red-500">
                  <v-icon class="tw-text-xs tw-text-white">mdi-close</v-icon>
                </button>
              </div>
            </div>
            <div class="tw-col-span-12">
              <p class="tw-text-xs tw-text-neutral-400 dark:tw-text-neutral-300">
                You need to add at least 4 images. Pay attention to the quality of the pictures you add comply with the background color standards.
                </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>