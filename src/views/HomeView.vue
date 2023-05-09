<template>
    <div class="tw-pb-6">
      <div v-if="!isReady">
        <loading />
      </div>

      <div v-if="isReady">
        <HeroSection />

        <div class="tw-py-5"></div>
        
        <WhyChooseSection />

        <div class="tw-py-5"></div>

        <FeaturedProducts :featured="featured" />
      </div>
    </div>
</template>

<script>
import HeroSection from '@/components/home/HeroSection';
import WhyChooseSection from '@/components/home/WhyChooseSection'
import  FeaturedProducts from '@/components/home/FeaturedProducts'
// Components

export default {
  name: 'HomeView',
  components: { HeroSection, WhyChooseSection, FeaturedProducts },

  data() {
    return {
    }
  },

  computed: {
    featured() {
      return this.$store.getters['app/featured']
    },
    isReady() {
      return this.$store.getters['app/isReady']
    }
  },

  methods: {
    
  },

  
};
</script>
