<template>
  <div>
    <label class="tw-text-sm">Logo</label>
    <div
      class="tw-grid tw-grid-cols-12 tw-gap-2 dark:tw-border-neutral-600 tw-border-neutral-300 tw-rounded tw-my-2"
    >
    <div class="tw-col-span-12 tw-flex tw-items-start tw-flex-wrap tw-gap-5">
      <div>
        <!-- <label class="tw-text-xs">Light Logo</label> -->
        <div
          class="tw-w-[100px] tw-h-[100px] tw-relative tw-aspect-square tw-mt-2 tw-rounded tw-flex tw-items-center tw-justify-center tw-p-2 tw-border tw-border-dashed dark:tw-border-neutral-600 tw-border-neutral-300"
        >
          <input @click.stop="false" @blur.stop="false" @change.stop="handleImageUpload($event, 'light')" type="file" class="tw-absolute tw-opacity-0 tw-w-full tw-h-full tw-z-10">
          <img
            class="tw-w-full tw-object-contain"
            :src="$backend('storage/images/logos/logo.svg')"
            alt="logo"
            name="light-logo"
          />
        </div>
      </div>
      <div class="">
        <label for="small-range" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white tw-text-start">{{width}}px</label>
        <input id="small-range" type="range" v-model="width" max="100" class="tw-caret-[rgb(var(--primary))] tw-w-full tw-h-1 tw-mb-6 tw-bg-gray-200 tw-rounded-lg tw-appearance-none tw-cursor-pointer range-sm dark:tw-bg-gray-700">
      </div>
      <!-- <div>
        <label class="tw-text-xs">Dark Logo</label>
        <div
          class="tw-w-[100px] tw-h-[100px] tw-relative tw-aspect-square tw-mt-2 tw-rounded tw-flex tw-items-center tw-justify-center tw-p-2 tw-border tw-border-dashed dark:tw-border-neutral-600 tw-border-neutral-300"
        >
          <input @click.stop="false" @blur.stop="false" @change.stop="handleImageUpload($event, 'dark')" type="file" class="tw-absolute tw-opacity-0 tw-w-full tw-h-full tw-z-10">
          <img
            class="tw-w-full tw-object-contain"
            :src="$frontend('assets/images/logo.svg')"
            alt="logo"
          />
        </div>
      </div>
      <div>
        <label class="tw-text-xs">Favicon</label>
        <div
          class="tw-w-[100px] tw-h-[100px] tw-relative tw-aspect-square tw-mt-2 tw-rounded tw-flex tw-items-center tw-justify-center tw-p-2 tw-border tw-border-dashed dark:tw-border-neutral-600 tw-border-neutral-300"
        >
          <input @click.stop="false" @blur.stop="false" @change.stop="handleImageUpload($event, 'favicon')" type="file" class="tw-absolute tw-opacity-0 tw-w-full tw-h-full tw-z-10">

          <img
            class="tw-w-full tw-object-contain"
            :src="$frontend('assets/images/logo.svg')"
            alt="logo"
          />
        </div>
      </div> -->
    </div>

    </div>
    <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!form.logo.valid && '!tw-text-red-400']">
      <span>
          Any logo should be in SVG format except for favicon.
      </span>
    </div>
  </div>
</template>

<script>


export default {
  props: ["dark", "light", "logoWidth"],

  data() {
    return {
        form: {
          logo: {
            valid: true,
            message: ''
          }
        }
    }
  },

  computed: {
    darkValue: {
      get() {
        return this.dark;
      },
      set(v) {
        this.$emit("update:dark", v);
      },
    },
    lightValue: {
      get() {
        return this.light;
      },
      set(v) {
        this.$emit("update:light", v);
      },
    },
    width: {
      get() {
        return this.logoWidth;
      },
      set(v) {
        this.$emit("update:logoWidth", v);
      },
    },
  },

  methods: {
    handleImageUpload(e, type) {
      const files = e.target.files;
      if(files.length == 0 ) return false;

      const image = files[0];
      const extention = image.name.split('.')[image.name.split('.').length - 1];

      if(extention.toLocaleLowerCase() != 'svg') {
        this.$alert({
          body: 'The uploaded image should be an SVG',
          type: 'warning'
        })
        return false;
      }

      const reader = new FileReader();
      
      if(type == 'light') {
        this.lightValue = image
      }

      if(type == 'dark') {
        this.darkValue = image
      }

      reader.addEventListener('load', function() {
        document.querySelector(`[name='${type}-logo']`).src = this.result
      })

      reader.readAsDataURL(image)
    },
  },

  mounted() {
  },
};
</script>

<style>
</style>