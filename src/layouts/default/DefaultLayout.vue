<template>
  <div class="tw-bg-white dark:tw-bg-neutral-800 tw-min-h-screen">
    <!-- Application header -->
    <div>
      <Header />
    </div>
    <!-- /Application header -->

    <!-- Application Sidebar -->
    <div>
      <Sidebar />
    </div>
    <!-- /Application Sidebar -->

    <!-- Application main view -->
    <v-container class="xl:tw-max-w-[1200px] sm:tw-px-3 tw-px-3 tw-pt-[70px]">
      <div v-if="!isReady" >
        <div class="tw-min-h-[600px]">
          <div class="tw-scale-75">
            <loading />
          </div>
        </div>
      </div>
      <router-view v-else></router-view>
    </v-container>
    <!-- /Application main view -->

    <!-- Application Footer -->
    <div>
      <Footer />
    </div>
    <!-- Application Footer -->

    <Alert />
  </div>
</template>

<script>
import Header from "@/layouts/default/partials/AppHeader";
import Sidebar from "@/layouts/default/partials/AppSidebar.vue";
import Footer from "@/layouts/default/partials/AppFooter.vue";
import Alert from "@/components/AlertVue";
import App from "@/api/App";
import Cart from "@/api/Cart";

export default {
  components: { Header, Sidebar, Footer, Alert },

  data() {
    return {
      isLoaded: false,
    };
  },

  watch: {
    $route() {
      window.scrollTo(0, 0);
    },
  },

  computed: {
    isReady() {
      return this.$store.getters["app/isHomeReady"];
    },
    options() {
      return this.$store.getters['app/options']
    },
    isLoggedIn() {
          return this.$store.getters['user/isLoggedIn']
    },
  },

  methods: {
    getState() {
      return App.index().then((res) => {
        if (res.data.code == "SUCCESS") {
          const featured = res.data.data.featured || [];
          const orderStatuses = res.data.data.order_statuses || [];
          const sizes = res.data.data.sizes || [];
          const colors = res.data.data.colors || [];
          
          this.$store.dispatch("app/setFeatured", featured);
          this.$store.dispatch("app/setOrderStatuses", orderStatuses);
          this.$store.dispatch("app/setSizes", sizes);
          this.$store.dispatch("app/setColors", colors);
          this.$store.dispatch("app/setOptions", res.data.data.options);
          this.$store.dispatch("app/setSliders", res.data.data.sliders);
          this.getColors()
          this.setLogoSize()
          this.$store.dispatch("app/setIsHomeReady", true);
        }

        return res;
      }, this.$handleApiError);
    },
    getCart(){
      return Cart.getCart().then((res)=>{
        if(res.data.code == 'SUCCESS'){

          this.$store.dispatch('cart/setCart', res.data.data.cart)
          return res
        }
      }, this.$handleApiError)
    },
    getColors() {
      const primary = {
        name: this.options.find((o) => o.option_name == "primary_color_name")
          .option_value,
        main: this.options.find((o) => o.option_name == "primary_color_main")
          .option_value,
        light: this.options.find((o) => o.option_name == "primary_color_light")
          .option_value,
        dark: this.options.find((o) => o.option_name == "primary_color_dark")
          .option_value,
      };

      const secondary = {
        name: this.options.find((o) => o.option_name == "secondary_color_name")
          .option_value,
        main: this.options.find((o) => o.option_name == "secondary_color_main")
          .option_value,
        light: this.options.find(
          (o) => o.option_name == "secondary_color_light"
        ).option_value,
        dark: this.options.find((o) => o.option_name == "secondary_color_dark")
          .option_value,
      };

      this.$store.dispatch("app/setPrimary", primary);
      this.$store.dispatch("app/setSecondary", secondary);
    },
    setLogoSize() {
      this.$store.dispatch(
        'app/setLogoWidth',
        this.options.find(o => o.option_name == 'logo_width').option_value
      )
    }
  },

  mounted() {
    console.log(this.isReady);
    if (!this.isReady) {
      this.getState();
    }
    if (this.isLoggedIn) {
      if(this.getCart()){
        console.log('card saved');
      }else {
        console.log('not saved');
      }
    }
  },
};
</script>

<style>
</style>