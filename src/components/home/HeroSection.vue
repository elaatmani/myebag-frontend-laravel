<template>
  <div>
    <div class="tw-grid tw-grid-cols-12 tw-gap-5">
      <div class="md:tw-h-[380px] sm:tw-h-[300px] tw-h-[230px] md:tw-col-span-8 tw-col-span-12 tw-bg-[#0097dc] tw-rounded-lg tw-overflow-hidden">
        <img :src="$frontend('assets/images/slider-img-1.jpg')" class="tw-w-full tw-h-full tw-object-cover"  alt="hero image">
      </div>

      <div class="md:tw-h-[380px] tw-h-[130px] tw-grid md:tw-grid-rows-2 tw-grid-cols-12 tw-grid-rows-1 tw-gap-5 md:tw-col-span-4 tw-col-span-12 tw-rounded-lg tw-overflow-hidden">
        <div class="tw-relative tw-w-full tw-bg-red md:tw-row-span-1 tw-col-span-6 md:tw-col-span-12 tw-bg-[#fec600] tw-rounded-lg tw-overflow-hidden">
          <img :src="$frontend('assets/images/slider-img-2.webp')" class="tw-absolute tw-top-1/2 tw-right-0 -tw-translate-y-1/2 tw-w-full tw-max-w-[250px] tw-max-h-[150px] tw-h-full tw-object-contain"  alt="hero image">
        </div>
        <div class="tw-relative tw-w-full tw-bg-red md:tw-row-span-1 tw-col-span-6 md:tw-col-span-12 tw-bg-[#a68afc] tw-rounded-lg tw-overflow-hidden">
          <img :src="$frontend('assets/images/slider-img-3.webp')" class="tw-absolute tw-top-1/2 tw-right-0 -tw-translate-y-1/2 tw-w-full tw-max-w-[250px] tw-max-h-[150px] tw-h-full tw-object-contain"  alt="hero image">
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