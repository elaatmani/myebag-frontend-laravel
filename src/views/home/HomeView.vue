<template>
  <div>
    <HeroSection />

    <div class="tw-py-5"></div>
    
    <WhyChooseSection />
  </div>
</template>

<script>
import HeroSection from '@/views/home/partials/HeroSection';
import WhyChooseSection from '@/views/home/partials/WhyChooseSection'

// Components

export default {
  name: 'HomeView',
  components: { HeroSection, WhyChooseSection }
};
</script>
