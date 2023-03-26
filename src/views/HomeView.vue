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
import HeroSection from '@/components/home/HeroSection';
import WhyChooseSection from '@/components/home/WhyChooseSection'
import  FeaturedProducts from '@/components/home/FeaturedProducts'

// Components

export default {
  name: 'HomeView',
  components: { HeroSection, WhyChooseSection, FeaturedProducts }
};
</script>
