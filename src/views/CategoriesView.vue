<template>
  <div class="tw-pb-14 tw-min-h-screen tw-max-h-[800px]">
    <div class="tw-grid tw-grid-cols-12 tw-my-5 tw-gap-5">
      <div class="tw-col-span-6 tw-h-[180px] tw-rounded-lg tw-relative tw-overflow-hidden">
        <div class="tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0">
          <img :src="$frontend('assets/images/categories/hoodies-3.jpg')" class="tw-object-cover tw-w-full tw-h-full" alt="">
        </div>
        <div class="tw-grid tw-grid-cols-12  tw-h-full tw-w-full tw-relative tw-z-10">
          <div class="tw-col-span-6 tw-p-5 "></div>
          <div class="tw-col-span-6 tw-p-5 tw-flex tw-items-center ">
            <h1 class="tw-font-bold tw-text-2xl">Get up to 50% off</h1>
          </div>
        </div>
      </div>
      <div class="tw-col-span-6 tw-h-[180px] tw-rounded-lg tw-relative tw-overflow-hidden">
        <div class="tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0">
          <img :src="$frontend('assets/images/categories/hoodies-4.png')" class="tw-object-cover tw-w-full tw-h-full" alt="">
        </div>
        <div class="tw-grid tw-grid-cols-12  tw-h-full tw-w-full tw-relative tw-z-10">
          <div class="tw-col-span-6  tw-p-5 tw-flex tw-justify-center tw-flex-col !tw-text-neutral-900">
            <h1 class="tw-font-bold tw-text-2xl">Winter Weekends</h1>
            <p class="tw-mt-1">Keep it casual</p>
          </div>
          <div class="tw-col-span-6 tw-p-5"></div>
        </div>
      </div>
    </div>
    <h1 class="tw-text-lg tw-my-5 tw-font-medium tw-w-full">Explore Categories ⚡</h1>
    <div class="tw-grid tw-grid-cols-12 tw-gap-5">

        <div class="lg:tw-col-span-3 md:tw-col-span-6 sm:tw-col-span-6 tw-col-span-12">
          <div class="md:tw-h-[150px] tw-h-[180px] tw-border tw-border-solid tw-border-transparent hover:tw-border-violet-500 tw-duration-200 tw-cursor-pointer tw-overflow-hidden tw-relative tw-rounded-lg">
            <div ref="gradient" class="tw-z-10 tw-bg-gradient-to-t tw-from-neutral-900  tw-via-neutral-900/20 tw-to-transparent tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full"></div>
            <div class="tw-w-full tw-h-full">
              <img :src="$frontend('assets/images/categories/hoodies-1.jpg')" class="tw-object-cover tw-w-full tw-h-full" alt="">
            </div>
          <h1 class="tw-text-md tw-px-2 tw-mb-2 tw-absolute tw-bottom-0 tw-z-[11] tw-text-neutral-100">Hoodies</h1>
          </div>
        </div>
        <div class="lg:tw-col-span-3 md:tw-col-span-6 sm:tw-col-span-6 tw-col-span-12">
          <div class="md:tw-h-[150px] tw-h-[180px] tw-border tw-border-solid tw-border-transparent hover:tw-border-violet-500 tw-duration-200 tw-cursor-pointer tw-overflow-hidden tw-relative tw-rounded-lg">
            <div ref="gradient" class="tw-z-10 tw-bg-gradient-to-t tw-from-neutral-900  tw-via-neutral-900/20 tw-to-transparent tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full"></div>
            <div class="tw-w-full tw-h-full">
              <img :src="$frontend('assets/images/categories/shoes-2.jpg')" class="tw-object-cover tw-w-full tw-h-full" alt="">
            </div>
          <h1 class="tw-text-md tw-px-2 tw-mb-2 tw-absolute tw-bottom-0 tw-z-[11] tw-text-neutral-100">Shoes</h1>
          </div>
        </div>
        <div class="lg:tw-col-span-3 md:tw-col-span-6 sm:tw-col-span-6 tw-col-span-12">
          <div class="md:tw-h-[150px] tw-h-[180px] tw-border tw-border-solid tw-border-transparent hover:tw-border-violet-500 tw-duration-200 tw-cursor-pointer tw-overflow-hidden tw-relative tw-rounded-lg">
            <div ref="gradient" class="tw-z-10 tw-bg-gradient-to-t tw-from-neutral-900  tw-via-neutral-900/20 tw-to-transparent tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full"></div>
            <div class="tw-w-full tw-h-full">
              <img :src="$frontend('assets/images/categories/watches.jpg')" class="tw-object-cover tw-w-full tw-h-full" alt="">
            </div>
          <h1 class="tw-text-md tw-px-2 tw-mb-2 tw-absolute tw-bottom-0 tw-z-[11] tw-text-neutral-100">Watches</h1>
          </div>
        </div>
        <div class="lg:tw-col-span-3 md:tw-col-span-6 sm:tw-col-span-6 tw-col-span-12">
          <div class="md:tw-h-[150px] tw-h-[180px] tw-border tw-border-solid tw-border-transparent hover:tw-border-violet-500 tw-duration-200 tw-cursor-pointer tw-overflow-hidden tw-relative tw-rounded-lg">
            <div ref="gradient" class="tw-z-10 tw-bg-gradient-to-t tw-from-neutral-900  tw-via-neutral-900/20 tw-to-transparent tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full"></div>
            <div class="tw-w-full tw-h-full">
              <img :src="$frontend('assets/images/categories/shoes-1.jpg')" class="tw-object-cover tw-w-full tw-h-full" alt="">
            </div>
          <h1 class="tw-text-md tw-px-2 tw-mb-2 tw-absolute tw-bottom-0 tw-z-[11] tw-text-neutral-100">Shoes</h1>
          </div>
        </div>
    </div>

    

  </div>
</template>

<script>
// import FeaturedProducts from '@/components/home/FeaturedProducts'
// import CategoryExplore from '@/components/category/CategoryExplore'
// Components

export default {
  name: 'CategoriesView',
  // components: { FeaturedProducts }
};
</script>
