<template>
  <div>
    <HeroSection />

    <div class="tw-py-5"></div>
    
    <WhyChooseSection />

    <div class="tw-py-5"></div>

    <FeaturedProducts />
  </div>
</template>

<script>
import HeroSection from '@/views/home/partials/HeroSection';
import WhyChooseSection from '@/views/home/partials/WhyChooseSection'
import  FeaturedProducts from '@/views/home/partials/FeaturedProducts'

// Components

export default {
  name: 'HomeView',
  components: { HeroSection, WhyChooseSection, FeaturedProducts }
};
</script>
