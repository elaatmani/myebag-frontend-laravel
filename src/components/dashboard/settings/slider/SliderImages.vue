<template>
  <div class="tw-w-full">
    <div class="tw-grid tw-grid-cols-12">
      <div
        class="tw-col-span-12 tw-grid tw-grid-cols-12 tw-gap-5 md:tw-gap-2 md:tw-mt-0 tw-mt-3"
      >
        <div
          class="md:tw-col-span-6 tw-col-span-12 tw-w-full tw-duration-300 hover:tw-border-yellow-500 tw-flex tw-items-center tw-justify-center tw-aspect-video tw-relative tw-row-span-1 tw-p-1 tw-rounded-lg tw-border tw-border-dashed tw-border-neutral-500"
        >
        <h1
            class="tw-absolute tw-top-1 tw-left-1 tw-z-20 tw-text-xs tw-text-white tw-px-1 tw-bg-[rgb(var(--primary))] tw-rounded"
          >Desktop</h1>
          <div
            class="tw-relative tw-overflow-hidden tw-h-full tw-w-full tw-rounded-md"
          >
            <div v-if="!desktop" class="tw-h-full tw-w-full tw-relative tw-flex tw-flex-col tw-justify-center tw-items-center">
              <input @click.stop="false" @blur.stop="false" @change.stop="handleImageUpload($event, 'desktop')" type="file" class="tw-absolute tw-opacity-0 tw-w-full tw-h-full tw-z-10">
              <v-icon>mdi-plus</v-icon>
              <p>Click to add image</p>
            </div>

            <div v-if="!!desktop" class="tw-w-full tw-h-full">
              <img
                name="image-desktop"
                :src="$frontend(desktop)"
                class="tw-w-full tw-absolute tw-z-[1] tw-rounded-lg tw-object-cover tw-opacity-50 tw-shadow-lg tw-blur-xl tw-h-full"
              />
              <img
                name="image-desktop"
                :src="$frontend(desktop)"
                class="tw-w-full tw-relative tw-z-[1] tw-rounded-md tw-object-contain tw-h-full"
              />
            </div>
          </div>

          <button
            v-if="!!desktop"
            @click.stop="deleteImage('desktop')"
            class="tw-w-5 tw-h-5 tw-rounded-full tw-absolute tw-top-0 tw-right-0 -tw-scale-75 -tw-translate-y-1/2 tw-translate-x-1/2 tw-flex tw-items-center tw-justify-center tw-bg-red-500"
          >
            <v-icon class="tw-text-xs tw-text-white">mdi-close</v-icon>
          </button>
        </div>

        <div
          class="md:tw-w-fit md:tw-col-auto tw-col-span-12 tw-w-full tw-duration-300 hover:tw-border-yellow-500 tw-flex tw-items-center tw-justify-center tw-aspect-square tw-relative tw-row-span-1 tw-p-1 tw-rounded-lg tw-border tw-border-dashed tw-border-neutral-500"
        >
          <h1
            class="tw-absolute tw-top-1 tw-left-1 tw-z-20 tw-text-xs tw-text-white tw-px-1 tw-bg-[rgb(var(--primary))] tw-rounded"
          >Mobile</h1>
          <div
            class="tw-relative tw-h-full tw-overflow-hidden tw-w-full tw-rounded-md"
          >
          <div v-if="!mobile" class="tw-h-full tw-w-full tw-relative tw-flex tw-flex-col tw-justify-center tw-items-center">
            <input @click.stop="false" @blur.stop="false" @change.stop="handleImageUpload($event, 'mobile')" type="file" class="tw-absolute tw-opacity-0 tw-w-full tw-h-full tw-z-10">
            <v-icon>mdi-plus</v-icon>
            <p>Click to add image</p>
          </div>
          <div v-if="!!mobile" class="tw-w-full tw-h-full">
            <img
              name="image-mobile"
              :src="$frontend(mobile)"
              class="tw-w-full tw-absolute tw-z-[1] tw-rounded-lg tw-object-cover tw-opacity-50 tw-shadow-lg tw-blur-xl tw-h-full"
            />
            <img
              name="image-mobile"
              :src="$frontend(mobile)"
              class="tw-w-full tw-relative tw-z-[1] tw-rounded-md tw-object-contain tw-h-full"
            />
          </div>
          </div>

          <button
          v-if="!!mobile"
            @click.stop="deleteImage('mobile')"
            class="tw-w-5 tw-h-5 tw-rounded-full tw-absolute tw-top-0 tw-right-0 -tw-scale-75 -tw-translate-y-1/2 tw-translate-x-1/2 tw-flex tw-items-center tw-justify-center tw-bg-red-500"
          >
            <v-icon class="tw-text-xs tw-text-white">mdi-close</v-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['desktopImage', 'mobileImage'],

  data() {
    return {
      // desktop: null,
      // mobile: null,
    };
  },

  computed: {
    desktop: {
      get() {
        return this.desktopImage
      },
      set(v) {
        this.$emit('update:desktopImage', v)
      }
    },
    mobile: {
      get() {
        return this.mobileImage
      },
      set(v) {
        this.$emit('update:mobileImage', v)
      }
    }
  },

  methods: {
    deleteImage(name) {
      if(name == 'desktop') {
        this.desktop = null;
      }
      if(name == 'mobile') {
        this.mobile = null;
      }
    },
    handleImageUpload(e, screen) {
      const files = e.target.files;
      if(files.length == 0 ) return false;

      const image = files[0];
      const reader = new FileReader();
      
      if(screen == 'desktop') {
        this.desktop = image
      }

      if(screen == 'mobile') {
        this.mobile = image
      }

      reader.addEventListener('load', function() {
        document.querySelectorAll(`[name='image-${screen}']`)
        .forEach(i => {
          i.src = this.result
        })
      })

      reader.readAsDataURL(image)
    },
  },
};
</script>

<style>
</style>