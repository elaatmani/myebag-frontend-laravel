<template>
  <div>
    <h2 class="tw-text-lg tw-text-neutral-600 dark:tw-text-neutral-200">Create Category</h2>
    <p class="tw-text-sm tw-mb-3 tw-font-light tw-text-neutral-500 dark:tw-text-neutral-300">Create new category collection</p>
    <div class="tw-w-full tw-h-fit tw-p-3 tw-px-4  dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
      <div class="tw-grid tw-grid-cols-12 md:tw-gap-10">
        <div class="md:tw-col-span-6 tw-col-span-12">

          <div class="">
            <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-font-semibold" for="email">Category Name</label>
              <input v-model="category.name" :class="{ '!tw-border-red-400': !form.name.valid }" class="tw-w-full tw-text-md tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Category name" type="text">
              <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!form.name.valid && '!tw-text-red-400']">
                <span v-if="!form.name.valid">
                  {{ form.name.message }}
                </span>
                <span v-else>
                  Do not exceed 20 characters when entering the category name.
                </span>
              </div>
            </div>

            <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-font-semibold" for="email">Description</label>
              <textarea 
              v-model="category.description"
              :class="{ '!tw-border-red-400': !form.description.valid }" class="tw-w-full tw-text-md tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500"
               rows="5"></textarea>
               <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!form.description.valid && '!tw-text-red-400']">
                <span v-if="!form.description.valid">
                  {{ form.description.message }}
                </span>
                <span v-else>
                Do not exceed 300 characters when entering the category description.
                </span>
              </div>
            </div>

          </div>

        </div>
        <div class="md:tw-col-span-6 tw-col-span-12 md:tw-mt-0 tw-mt-3">
          <h1 class="tw-text-neutral-500 dark:tw-text-neutral-300">Category Image</h1>
          <div class="tw-grid tw-grid-cols-12 tw-mt-2 tw-gap-2">
            <div 
            :class="[isDragOver && 'tw-bg-primary/50', !form.image.valid && '!tw-border-red-400']" 
            @dragenter="handleDragEnter" 
            @drop="handleDragLeave" 
            @dragleave="handleDragLeave" 
            class="lg:tw-col-span-6 tw-col-span-12 tw-aspect-square tw-relative tw-rounded-lg tw-border tw-border-dashed tw-border-neutral-500">
              
              <input accept=".jpg, .jpeg, .png, .webp" max="4" type="file" @change="showImage" class="tw-opacity-0 tw-z-[1] tw-w-full tw-h-full tw-cursor-pointer" title="Drop your image">

              
              <div v-if="!category.image" class="tw-flex tw-flex-col tw-w-[80%] tw-text-center tw-justify-center tw-pointer-events-none tw-items-center tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-y-1/2 -tw-translate-x-1/2">
                <v-icon v-if="!isDragOver" class="tw-mb-2 tw-text-neutral-400 dark:tw-text-neutral-300">mdi-image-multiple</v-icon>
                <v-icon v-else class="tw-mb-2 tw-text-neutral-400 dark:tw-text-neutral-300">mdi-download</v-icon>
                <p class="tw-text-neutral-400 dark:tw-text-neutral-300 tw-text-xs">
                  <span v-if="!isDragOver">
                    Drop your image here, or <span class="tw-text-blue-500">click to browse</span>
                  </span>
                  <span v-else>
                    Drop your image here.
                  </span>
                </p>
              </div>
              <div v-if="!!category.image" class="tw-flex tw-h-full tw-w-full tw-flex-col tw-p-1 tw-text-center tw-justify-center tw-pointer-events-none tw-items-center tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-y-1/2 -tw-translate-x-1/2">
                <div class="tw-relative tw-overflow-hidden tw-h-full tw-w-full tw-rounded-md">
                  <img name="image-preview" src="" class="tw-w-full tw-absolute  tw-z-[1] tw-rounded-lg tw-object-cover tw-opacity-50 tw-shadow-lg tw-blur-xl tw-h-full">
                  <img name="image-preview" src="" class="tw-w-full tw-relative tw-z-[1] tw-rounded-md tw-object-contain tw-h-full">
                </div>
              </div>
            </div>
            <div class="tw-text-xs tw-col-span-12 tw-text-neutral-400 tw-mb-2" :class="[!form.image.valid && '!tw-text-red-400']">
                <span v-if="!form.image.valid">
                  {{ form.image.message }}
                </span>
                <span v-else>
                  You need to add at least one image.
                </span>
              </div>

            <!-- <div v-if="images.length < 4" class="tw-col-span-12">
              <p class="tw-text-xs tw-text-neutral-400 dark:tw-text-neutral-300">
                You need to add at least one image. Pay attention to the quality of the picture you add comply with the background color standards.
                </p>
            </div> -->


            <div class="mt-3 tw-col-span-12 tw-flex tw-justify-end">
              <button @click="validateForm" class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-bg-primary tw-text-white">
                Add Category
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isStringBetween, required } from '@/helpers/validators';
export default {

  data() {
    return {
      isDragOver: false,

      category: {
        name: '',
        description: '',
        image: null,
      },

      form: {
        name: {
          valid: true,
          message: ''
        },
        description: {
          valid: true,
          message: ''
        },
        image: {
          valid: true,
          message: ''
        }
      }
    }
  },

  computed: {
    isFormValid() {
      return this.form.name.valid && this.form.description.valid
    }
  },

  methods: {
    showImage(e) {
      const file = e.target.files[0]

      if (!file) return false;      

        if (file) {
          const reader = new FileReader();
          
            this.category.image = file;
          reader.addEventListener('load', (e) => {
            const images = document.querySelectorAll(`[name='image-preview']`)
            images.forEach(image => {
              image.src = e.target.result;
            })
          });
          reader.readAsDataURL(file);
        }
    },
    deleteImage() {
      this.category.image = null;
      const images = document.querySelectorAll(`[name='image-preview']`)
      images.forEach(image => {
        image.src = '';
      })
    },
    handleDragEnter() {
      this.isDragOver = true;
    },
    handleDragLeave() {
      this.isDragOver = false
    },
    validateForm() {
      this.form.name = required(this.category.name, 'Name');
      this.form.image = required(this.category.image, 'Image');
      this.form.description = isStringBetween(this.category.description, { min: 20, max: 300 }, 'Description');

    },
  }
}
</script>

<style>

</style>