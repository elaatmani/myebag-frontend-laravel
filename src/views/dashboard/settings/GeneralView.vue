<template>
  <div>
    <h2 class="tw-mb-3 tw-text-lg">General</h2>
    <div class="tw-w-full tw-h-fit dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">

      <div class="tw-grid tw-grid-cols-12 tw-p-3 tw-gap-5">

        <div class="md:tw-col-span-6 tw-col-span-12">
          <div>
            <GeneralInformations v-model:name="name" v-model:description="description" />
          </div>
          <div>

          </div>
        </div>

        <div class="md:tw-col-span-6 tw-col-span-12">
          <div>
            <LogoSettings v-model:logoWidth="width" v-model:dark="logo.dark" v-model:light="logo.light" />
          </div>
          <div>
            <ColorSelector v-model:primaryColor="primary" v-model:secondaryColor="secondary" />
          </div>
        </div>


        <div class="tw-col-span-12 tw-flex tw-justify-end">
            <button @click="update" class="tw-py-2 tw-px-7 tw-h-[38px] tw-w-fit tw-whitespace-nowrap tw-rounded dark:tw-text-neutral-300 tw-text-white tw-bg-[rgb(var(--primary))] tw-border tw-border-solid tw-border-tansparent hover:tw-border-[rgb(var(--primary-dark))] dark:tw-border-neutral-900 dark:hover:tw-border-[rgb(var(--primary-light))] hover:tw-bg-[rgb(var(--primary))] dark:hover:tw-bg-[rgb(var(--primary))] tw-duration-200 tw-flex tw-items-center tw-justify-center">
              <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
              <span class="tw-text-sm">Save</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import App from '@/api/App'
import GeneralInformations from '@/components/dashboard/settings/general/GeneralInformations'
import LogoSettings from '@/components/dashboard/settings/general/LogoSettings'
import ColorSelector from '@/components/dashboard/settings/general/ColorSelector'

export default {
  components: { GeneralInformations, LogoSettings, ColorSelector },

  data() {
    return {
      isLoading: false,
      name: '',
      description: '',
      hasLogo: false,
      logo: {
        dark: 'hello',
        light: 'by'
      },
      primary: {},
      secondary: {},
      width: 28,
    }
  },

  watch: {
    logo: {
      deep: true,
      handler() {
        this.hasLogo = true;
      }
    }
  },

  computed: {
    options() {
      return this.$store.getters['app/options']
    },
    nameOption() {
      return this.options.find(o => o.option_name == 'name')
    },
    descriptionOption() {
      return this.options.find(o => o.option_name == 'description');
    },
    logoWidthOption() {
      return this.options.find(o => o.option_name == 'logo_width');
    }
  },

  methods: {
    update() {
      this.isLoading = true;

      const primary_color_name = this.options.find(o => o.option_name == 'primary_color_name');
      const primary_color_main = this.options.find(o => o.option_name == 'primary_color_main');
      const primary_color_light = this.options.find(o => o.option_name == 'primary_color_light');
      const primary_color_dark = this.options.find(o => o.option_name == 'primary_color_dark');

      const secondary_color_name = this.options.find(o => o.option_name == 'secondary_color_name');
      const secondary_color_main = this.options.find(o => o.option_name == 'secondary_color_main');
      const secondary_color_light = this.options.find(o => o.option_name == 'secondary_color_light');
      const secondary_color_dark = this.options.find(o => o.option_name == 'secondary_color_dark');

      const options = [
        {
          ...this.descriptionOption,
          option_value: this.description
        },
        {
          ...this.nameOption,
          option_value: this.name
        },
        {
          ...primary_color_name,
          option_value: this.primary.name
        },
        {
          ...primary_color_main,
          option_value: this.primary.main
        },
        {
          ...primary_color_light,
          option_value: this.primary.light
        },
        {
          ...primary_color_dark,
          option_value: this.primary.dark
        },
        {
          ...secondary_color_name,
          option_value: this.secondary.name
        },
        {
          ...secondary_color_light,
          option_value: this.secondary.light
        },
        {
          ...secondary_color_dark,
          option_value: this.secondary.dark
        },
        {
          ...secondary_color_main,
          option_value: this.secondary.main
        },
        {
          ...this.logoWidthOption,
          option_value: this.width
        },
      ]

      const logos = {
        light: this.logo.light
      }

      App.updateOptions(options, logos, this.hasLogo)
      .then(
        res => {
          if(res.data.code == 'SUCCESS') {
            this.$alert({
              body: "Updated successfully",
              type: "success",
            })

            this.freshLogo()

            options.forEach(
              o => {
                this.$store.dispatch('app/updateOption', o);
                this.$store.dispatch('app/setPrimary', this.primary)
                this.$store.dispatch('app/setSecondary', this.secondary)
                this.$store.dispatch("app/setLogoWidth", this.width);
              }
            )

          }
        },
        this.$handleApiError
      ).finally(
        () => this.isLoading = false
      )
    },

    freshLogo() {
      const logo = document.getElementById('app-logo');

      logo.src = logo.src + "?" + new Date().getTime();
    },

    getOptions() {
      this.name =  this.nameOption.option_value
      this.description =  this.descriptionOption.option_value
      this.width =  this.logoWidthOption.option_value
    }
  },

  mounted() {
    this.getOptions()
  }

}
</script>

<style>

</style>