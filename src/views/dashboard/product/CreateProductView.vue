<template>
  <div>
    <h2 class="tw-text-lg tw-text-neutral-600 dark:tw-text-neutral-200">Create Product</h2>
    <p class="tw-text-sm tw-mb-3 tw-font-light tw-text-neutral-500 dark:tw-text-neutral-300">Add new product</p>
    <div class="tw-w-full tw-h-fit tw-p-3 tw-px-4  dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
      <div class="tw-grid tw-grid-cols-12 md:tw-gap-10">
        <div class="md:tw-col-span-6 tw-col-span-12">

          <div class="">
            <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-text-sm" for="email">Product Name</label>
              <input v-model="product.name" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Product name" type="text">
              <div v-if="false" ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                {{ 'Error' }}
              </div>
              <div ref="note" class=" tw-text-xs tw-text-neutral-400 tw-mb-2">
                Do not exceed 20 characters when entering the product name.
              </div>
            </div>

            <div class="mt-5 tw-grid tw-gap-2 tw-grid-cols-12">

              <div class="md:tw-col-span-9 tw-col-span-8 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                <label class="tw-text-sm" for="email">Category</label>
                <div class=" tw-relative  tw-mt-1" >
                  <select v-model="product.category_id" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500">
                    <option class="tw-text-neutral-600" value="1">Shoes</option>
                    <option class="tw-text-neutral-600" value="2">Hoodies</option>
                    <option class="tw-text-neutral-600" value="3">Watches</option>
                  </select>
                  <v-icon size="small" class="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-pointer-events-none tw-right-3">mdi-chevron-down</v-icon>
                </div>
              </div>

              <div class="md:tw-col-span-3 tw-col-span-4 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                <label class="tw-text-sm" for="email">Genre</label>
                <div class=" tw-relative  tw-mt-1">
                  <select v-model="product.gendre" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500">
                    <option class="tw-text-neutral-600" value="mix">Mix</option>
                    <option class="tw-text-neutral-600" value="male">Male</option>
                    <option class="tw-text-neutral-600" value="female">Female</option>
                  </select>
                  <v-icon size="small" class="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-pointer-events-none tw-right-3">mdi-chevron-down</v-icon>
                </div>
              </div>


            </div>

            <div class="tw-flex tw-flex-col mt-5 tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-text-sm" for="email">Description</label>
              <textarea 
              v-model="product.description"
              :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500"
               rows="5"></textarea>
              <div v-if="false" ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                {{ 'Error' }}
              </div>
              <div ref="note" class=" tw-text-xs tw-text-neutral-400 tw-mb-2">
                Do not exceed 300 characters when entering the product description.
              </div>
            </div>

          </div>

        </div>
        <div class="md:tw-col-span-6 tw-col-span-12 md:tw-mt-0 tw-mt-3">
          <h1 class="tw-text-neutral-500 dark:tw-text-neutral-300 tw-text-sm">Product Images</h1>
          <div class="tw-grid tw-grid-cols-12 tw-mt-2 tw-gap-2">
            <div :class="[isDragOver && 'tw-bg-primary/50']" @dragenter="handleDragEnter" @drop="handleDragLeave" @dragleave="handleDragLeave" class="lg:tw-col-span-6 tw-col-span-12 tw-aspect-square tw-relative tw-rounded-lg tw-border tw-border-dashed tw-border-neutral-500">
              
              <input v-if="images.length < 4" multiple max="4" type="file" @change="showImage" class="tw-opacity-0 tw-z-[1] tw-w-full tw-h-full tw-cursor-pointer" title="Drop your image">

              
              <div v-if="images.length < 4" class="tw-flex tw-flex-col tw-w-[80%] tw-text-center tw-justify-center tw-pointer-events-none tw-items-center tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-y-1/2 -tw-translate-x-1/2">
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
              <div v-if="images.length >= 4" class="tw-flex tw-h-full  tw-text-green-500 tw-w-full tw-px-10 tw-flex-col tw-bg-green-500/10 tw-text-center tw-justify-center tw-pointer-events-none tw-items-center tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-y-1/2 -tw-translate-x-1/2">
                <v-icon class="tw-mb-2">mdi-check</v-icon>
                <p class=" tw-text-xs">
                  <span>
                    Image limit is reached.
                  </span>
                  
                </p>
              </div>
            </div>
            <div class="lg:tw-col-span-6 tw-col-span-12 tw-grid tw-grid-cols-12 tw-gap-5 md:tw-gap-2  md:tw-mt-0 tw-mt-3">
              
              <div v-for="img in imagesReversed" :key="img.id" @click="primaryImage = img.id" :class="[primaryImage == img.id && '!tw-border-solid !tw-border-yellow-500']" class="tw-col-span-6 tw-duration-300 hover:tw-border-yellow-500 tw-cursor-pointer tw-flex tw-items-center tw-justify-center tw-aspect-square tw-relative  tw-row-span-1 tw-p-1 tw-rounded-lg tw-border tw-border-dashed tw-border-neutral-500">
                <div class="tw-relative tw-overflow-hidden tw-h-full tw-w-full tw-rounded-md">
                  <img :name="'image-' + img.id" :src="$frontend(img.src)" class="tw-w-full tw-absolute  tw-z-[1] tw-rounded-lg tw-object-cover tw-opacity-50 tw-shadow-lg tw-blur-xl tw-h-full">
                  <img :name="'image-' + img.id" :src="$frontend(img.src)" class="tw-w-full tw-relative tw-z-[1] tw-rounded-md tw-object-contain tw-h-full">

                </div>

                <button @click.stop="deleteImage(img.id)" class="tw-w-5 tw-h-5 tw-rounded-full tw-absolute tw-top-0 tw-right-0 -tw-scale-75 -tw-translate-y-1/2 tw-translate-x-1/2 tw-flex tw-items-center tw-justify-center tw-bg-red-500">
                  <v-icon class="tw-text-xs tw-text-white">mdi-close</v-icon>
                </button>
                <div v-if="primaryImage == img.id" class="tw-absolute tw-z-[2] tw-px-2 tw-rounded-br-lg tw-rounded-tl-md tw-flex tw-items-center tw-gap-2 tw-bg-yellow-500 tw-text-white tw-top-0 tw-left-0">
                  <v-icon class="tw-text-xs tw-text-neutral-800">mdi-star</v-icon>
                  <!-- <span class="tw-text-xs tw-text-neutral-800">Primary</span> -->
                </div>
              </div>



              

            </div>
            <div v-if="images.length < 4" class="tw-col-span-12">
              <p class="tw-text-xs tw-text-neutral-400 dark:tw-text-neutral-300">
                You need to add at least 4 images. Pay attention to the quality of the pictures you add comply with the background color standards.
                </p>
            </div>

            <div v-if="false" class=" tw-col-span-12 tw-grid tw-gap-2 tw-grid-cols-12">

              <div class="md:tw-col-span-6 tw-col-span-8 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                <label class="tw-text-sm" for="email">Add Size</label>
                <div class=" tw-relative  tw-mt-1" >
                  <select :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500">
                    <option class="tw-text-neutral-600" value="1">S</option>
                    <option class="tw-text-neutral-600" value="2">M</option>
                    <option class="tw-text-neutral-600" value="3">L</option>
                    <option class="tw-text-neutral-600" value="3">XL</option>
                  </select>
                  <v-icon size="small" class="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-pointer-events-none tw-right-3">mdi-chevron-down</v-icon>
                </div>
              </div>

              <div class="md:tw-col-span-6 tw-col-span-4 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                <label class="tw-text-sm" for="email">Color</label>
                <div class=" tw-relative  tw-mt-1">
                  <select :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500">
                    <option class="tw-text-neutral-600" value="1">Green</option>
                    <option class="tw-text-neutral-600" value="2">Red</option>
                    <option class="tw-text-neutral-600" value="3">Blue</option>
                    <option class="tw-text-neutral-600" value="3">...</option>
                  </select>
                  <v-icon size="small" class="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-pointer-events-none tw-right-3">mdi-chevron-down</v-icon>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      <div class="tw-flex tw-justify-end">
        <button  class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-bg-primary tw-text-white">
          Add Product
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/api/Product'
export default {

  data() {
    return {
      product: {
        name: '',
        category_id: 1,
        gendre: 'mix',
        desctiption: ''
      },
      imageId: 3,
      primaryImage: null || 2,
      images: [
        {
          id: 1,
          src: 'assets/images/products/shoes/1/2.webp'
        },
        {
          id: 2,
          src: 'assets/images/products/shoes/1/3.webp'
        }
      ],
      isDragOver: false,
    }
  },

  computed: {
    imagesReversed() {
      return this.images.map(i => i).reverse()
    }
  },

  methods: {
    create() {
      const p = {
        ...this.product,
        images: this.images
      }
      Product.create(p)
      .then(
        res => {
          console.log(res.data);
        },
        this.$handleApiError
      )
    },
    showImage(e) {
      const files = e.target.files

      if (files.length > 4) return false;
      if ((files.length + this.images.length) > 4) return false;
      
      for(let i = 0; i<= files.length; i++) {
      
        const file = e.target.files[i];
        let img = {
          id: this.imageId,
          image: file
        }

        if (file) {
          const reader = new FileReader();
          const addImage = this.addImage
            addImage(img)
          reader.addEventListener('load', function() {
            document.querySelectorAll(`[name='image-${img.id}']`)
            .forEach(i => {
              i.src = this.result
            }) 

          });
          reader.readAsDataURL(file);
          this.imageId += 1;
        }
      }
      this.setPrimaryImage()
    },
    deleteImage(id) {
      this.images = this.images.filter(i => i.id !== id)
      this.setPrimaryImage()
    },
    setPrimaryImage() {
      if(!this.images.some(i => i.id == this.primaryImage) && this.images.length > 0) {
        this.primaryImage = this.images[this.images.length - 1].id
      }
    },
    addImage(img) {
      this.images.push(img)
    },
    handleDragEnter() {
      this.isDragOver = true;
    },
    handleDragLeave() {
      this.isDragOver = false
    }
  }
}
</script>

<style>

</style>