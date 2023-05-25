<template>
  <div>
    <div v-if="false" class="tw-grid tw-grid-cols-12 tw-gap-5">
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

    <div>
      <swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :autoplay="true"
      :speed="1000"
      :modules="modules"
      
    >
      <swiper-slide v-for="slider in sliders" :key="slider.id">
        <div class="tw-relative tw-h-fit tw-max-h-[400px] tw-rounded-lg tw-overflow-hidden">
          <router-link :to="slider.link">
            <picture class="tw-w-full tw-h-full tw-object-contain tw-max-h-[400px]">
              <source class="tw-w-full tw-max-h-[400px]" media="(min-width:650px)" :srcset="$backend(slider.desktop_image_path)">
              <img class="tw-w-full tw-max-h-[400px]" :src="$backend(slider.mobile_image_path)">
            </picture>
          </router-link>
        </div>
      </swiper-slide>
    </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade  } from 'swiper'
import 'swiper/css';

export default {
  components: { Swiper, SwiperSlide },

  data() {
    return {
      modules: [Autoplay, EffectFade ],
      swiper: null
    }
  },

  computed: {
    sliders() {
      return this.$store.getters['app/sliders']
    }
  },

  methods: {
    onSwiper(swiper) {
      this.swiper = swiper
      console.log(swiper);
    },
    onSlideChange(swiper) {
      console.log(swiper);
    }
  }
}
</script>

<style>

</style>