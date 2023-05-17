<template>
  <div>
    <h2 class="tw-text-lg tw-text-neutral-600 dark:tw-text-neutral-200">Create Product</h2>
    <p class="tw-text-sm tw-mb-3 tw-font-light tw-text-neutral-500 dark:tw-text-neutral-300">Add new product</p>
    <div class="tw-w-full tw-h-fit tw-p-3 tw-px-4  dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
      <div class="tw-grid tw-grid-cols-12 md:tw-gap-10 md:tw-gap-y-5 tw-gap-y-5">
        <div class="md:tw-col-span-6 tw-col-span-12">

          <div class="">
            <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-text-sm">Product Name</label>
              <input
              @keydown="reset('name')"
              v-model="product.name" :class="{ '!tw-border-red-400': !form.name.valid }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Product name" type="text">
              <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!form.name.valid && '!tw-text-red-400']">
                <span v-if="!form.name.valid">
                  {{ form.name.message }}
                </span>
                <span v-else>
                  Do not exceed 20 characters when entering the product name.
                </span>
              </div>
            </div>

            <div class="mt-5 tw-grid tw-gap-2 tw-grid-cols-12">

              <div class="md:tw-col-span-9 tw-col-span-8 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                <label class="tw-text-sm">Category</label>
                <div class=" tw-relative  tw-mt-1" >
                  <select v-model="product.category_id" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500">
                    <option v-for="c in categories" :key="c.id" class="tw-text-neutral-600" :value="c.id">{{ c.name }}</option>
                  </select>
                  <v-icon size="small" class="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-pointer-events-none tw-right-3">mdi-chevron-down</v-icon>
                </div>
              </div>

              <div class="md:tw-col-span-3 tw-col-span-4 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                <label class="tw-text-sm">Gender</label>
                <div class=" tw-relative  tw-mt-1">
                  <select v-model="product.gender" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500">
                    <option class="tw-text-neutral-600" value="mix">Mix</option>
                    <option class="tw-text-neutral-600" value="male">Male</option>
                    <option class="tw-text-neutral-600" value="female">Female</option>
                  </select>
                  <v-icon size="small" class="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-pointer-events-none tw-right-3">mdi-chevron-down</v-icon>
                </div>
              </div>
            </div>

            <div class="tw-flex tw-flex-col mt-5 tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
              <label class="tw-text-sm">Description</label>
              <textarea 
              @keydown="reset('description')"
              v-model="product.description"
              :class="{ '!tw-border-red-400': !form.description.valid  }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500"
               rows="8"></textarea>
              <div class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!form.description.valid && '!tw-text-red-400']">
                <span v-if="!form.description.valid">
                  {{ form.description.message }}
                </span>
                <span v-else>
                Do not exceed 300 characters when entering the product description.
                </span>
              </div>
            </div>
          </div>

        </div>
        <div class="md:tw-col-span-6 tw-col-span-12 md:tw-mt-0 tw-mt-3">
          <h1 class="tw-text-neutral-500 dark:tw-text-neutral-300 tw-text-sm">Product Images</h1>
          <div class="tw-grid tw-grid-cols-12 tw-mt-2 tw-gap-2">
            <div :class="[isDragOver && 'tw-bg-primary/50', !form.images.valid && '!tw-border-red-400']" @dragenter="handleDragEnter" @drop="handleDragLeave" @dragleave="handleDragLeave" class="lg:tw-col-span-6 tw-col-span-12 tw-aspect-square tw-relative tw-rounded-lg tw-border tw-border-dashed tw-border-neutral-500">
              
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
            
            <div class="tw-text-xs tw-col-span-12 tw-text-neutral-400 tw-mb-2" :class="[!form.images.valid && '!tw-text-red-400']">
                <span v-if="!form.images.valid">
                  {{ form.images.message }}
                </span>
                <span v-else>
                  You need to add at least 4 images. Pay attention to the quality of the pictures you add comply with the background color standards.
                </span>
              </div>

            <div class="mt-5 tw-col-span-12 tw-grid tw-gap-2 tw-grid-cols-12">

              <div class="md:tw-col-span-9 tw-col-span-8 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                <label class="tw-text-sm">Size System</label>
                <div class=" tw-relative  tw-mt-2" >
                  <select v-model="size_type_id" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500">
                    <option v-for="s in size_types" :key="s.id" class="tw-text-neutral-600 tw-uppercase" :value="s.id">{{s.name}}</option>
                  </select>
                  <v-icon size="small" class="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-pointer-events-none tw-right-3">mdi-chevron-down</v-icon>
                </div>
              </div>

              <div class="md:tw-col-span-3 tw-col-span-4 tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                <label class="tw-text-sm">Stock Alert</label>
                <input v-model="product.stock_alert" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-my-2 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="Stock alert" type="number">
                <div v-if="false" ref="error" class="tw-h-1 tw-text-sm tw-text-red-400 tw-mb-1">
                  {{ 'Error' }}
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="tw-col-span-12">
          <div class="tw-text-md tw-mb-2">
            Options
          </div>
          <div class="tw-grid tw-grid-cols-12 tw-gap-x-4 tw-border tw-border-solid tw-border-neutral-300 dark:tw-border-neutral-700  tw-rounded-lg">
            <div class=" md:tw-col-span-6 tw-col-span-12 tw-border-0 md:tw-border-r tw-border-neutral-300 dark:tw-border-neutral-700 tw-px-3 tw-py-3 tw-border-solid">
                <div class="tw-flex">
                  <div class="tw-flex tw-items-center tw-h-5">
                    <div class="tw-flex tw-items-center tw-mr-4">
                        <input :disabled="!!variations.length" id="purple-checkbox" type="checkbox" v-model="hasColors" class="!tw-w-4 !tw-h-4 !tw-text-purple-600 !tw-bg-gray-100 !tw-border-gray-300 !tw-rounded focus:!tw-ring-purple-500 dark:focus:!tw-ring-purple-600 dark:!tw-ring-offset-gray-800 focus:!tw-ring-2 dark:!tw-bg-gray-700 dark:!tw-border-gray-600">
                    </div>
                  </div>
                  <div class="tw-ml-2 tw-text-sm">
                      <label for="helper-checkbox" class="tw-font-medium tw-text-gray-900 dark:tw-text-gray-300">Has colors</label>
                      <p id="helper-checkbox-text" class="tw-text-xs tw-font-normal tw-text-gray-500 dark:tw-text-gray-300">For products that has multiple colors.</p>
                  </div>
                </div>

                <div v-if="!hasColors" class="tw-col-span-12 md:tw-col-span-6 tw-flex  tw-flex-col mt-2 tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                  <label class="tw-text-sm">Select color</label>
                  <div class=" tw-relative  tw-mt-1" >
                    <select :disabled="!!variations.length" v-model="color_id" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-uppercase tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500">
                      <option v-for="c in colors" :key="c.id" class="tw-text-neutral-600 tw-uppercase" :value="c.id">{{c.name}}</option>
                    </select>
                    <v-icon size="small" class="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-pointer-events-none tw-right-3">mdi-chevron-down</v-icon>
                  </div>
                
                </div>
            </div>
            <div class="md:tw-border-t-0 tw-border-t tw-border-solid tw-border-neutral-300 dark:tw-border-neutral-700 md:tw-col-span-6 tw-col-span-12 tw-px-3 tw-py-3">
                <div class="tw-flex">
                  <div class="tw-flex tw-items-center tw-h-5">
                    <input :disabled="!!variations.length" id="helper-checkbox-1"  type="checkbox" v-model="samePrice" class="!tw-caret-violet-500 tw-w-4 tw-h-4 tw-text-violet-600 tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-violet-500 dark:focus:tw-ring-violet-600 dark:tw-ring-offset-gray-800 focus:tw-ring-2 dark:tw-bg-gray-700 dark:tw-border-gray-600">
                  </div>
                  <div class="tw-ml-2 tw-text-sm">
                      <label for="helper-checkbox-1" class="tw-font-medium tw-text-gray-900 dark:tw-text-gray-300">Same price</label>
                      <p id="helper-checkbox-1-text" class="tw-text-xs tw-font-normal tw-text-gray-500 dark:tw-text-gray-300">Apply same price for all variations.</p>
                  </div>
                </div>
                <div v-if="samePrice" class="tw-col-span-12 md:tw-col-span-6 tw-flex tw-flex-col tw-text-neutral-600 tw-mt-2 dark:tw-text-neutral-200 tw-text-md">
                  <label class="tw-text-sm">Set price</label>

                  <input :readonly="!!variations.length" v-model="price" :class="{ '!tw-border-red-400': !true }" type="number" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="0">
                </div>
                
            </div>
          </div>
        </div>


        <div class="tw-col-span-12 md:tw-mt-0 ">
          <div class="tw-text-md tw-mb-2 tw-mt-3">
            Add Variations
          </div>

          <div class="tw-grid tw-grid-cols-5 tw-gap-2">

            <div :class="[(!hasColors && samePrice) && 'md:!tw-col-span-2', (hasColors || samePrice) && 'md:tw-col-span-1', (hasColors && !samePrice) && 'md:!tw-col-span-1']" class="md:tw-col-span-2 tw-col-span-12">
              <div class="tw-flex  tw-flex-col mt-0 tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                <label class="tw-text-sm">Size</label>
                <div class=" tw-relative  tw-mt-1" >
                  <select v-model="size_id" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-uppercase tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500">
                    <option v-for="s in sizes" :key="s.id" class="tw-text-neutral-600  tw-uppercase" :value="s.id">{{s.value}}</option>
                  </select>
                  <v-icon size="small" class="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-pointer-events-none tw-right-3">mdi-chevron-down</v-icon>
                </div>
              
              </div>
            </div>

            <div v-if="hasColors" :class="[ !samePrice && 'md:!tw-col-span-1']"  class="md:tw-col-span-1 tw-col-span-12">
              <div class="tw-flex  tw-flex-col mt-0 tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                <label class="tw-text-sm">Color</label>
                <div class=" tw-relative  tw-mt-1" >
                  <select v-model="color_id" :class="{ '!tw-border-red-400': !true }" class="tw-w-full tw-uppercase tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500">
                    <option v-for="c in colors" :key="c.id" class="tw-text-neutral-600 tw-uppercase" :value="c.id">{{c.name}}</option>
                  </select>
                  <v-icon size="small" class="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-pointer-events-none tw-right-3">mdi-chevron-down</v-icon>
                </div>
              
              </div>
            </div>

            <div :class="[(!hasColors && samePrice) && 'md:!tw-col-span-2']" class="md:tw-col-span-1 tw-col-span-12">
              <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                <label class="tw-text-sm">Quantity</label>
                <input v-model="quantity" :class="{ '!tw-border-red-400': !true }" type="number" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="0">
                
              </div>
            </div>

            <div v-if="!samePrice" class="md:tw-col-span-1 tw-col-span-12">
              <div class="tw-flex tw-flex-col tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md">
                <label class="tw-text-sm">Price</label>
                <input v-model="price" :class="{ '!tw-border-red-400': !true }" type="number" class="tw-w-full tw-text-sm tw-py-2 tw-px-3 tw-rounded-md tw-mt-1 tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-600 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" placeholder="0">
              </div>
            </div>
            

            <div class="md:tw-col-span-1 tw-col-span-12 tw-flex tw-items-end tw-h-full">
              <button @click="handleAdd" class="tw-py-2 tw-px-7 tw-w-full tw-h-[38px] tw-whitespace-nowrap tw-rounded dark:tw-text-neutral-300 tw-text-white tw-bg-violet-500 tw-border tw-border-solid tw-border-tansparent hover:tw-border-violet-600 dark:tw-border-neutral-900 dark:hover:tw-border-violet-400 hover:tw-bg-violet-500 dark:hover:tw-bg-violet-500 tw-duration-200 tw-flex tw-gap-2 tw-items-center tw-justify-center">
                  <icon class="tw-text-lg" icon="mdi:plus" />
                  <span class="tw-text-sm">Add</span>
              </button>
            </div>

          </div>

          <div class="my-5">
            <div v-if="!form.variations.valid" class="tw-text-xs tw-text-neutral-400 tw-mb-2" :class="[!form.variations.valid && '!tw-text-red-400']">
                You should add at least one variation
            </div>
            <div class="tw-relative tw-min-h-fit dark:tw-border-neutral-700 tw-border !tw-rounded-lg tw-border-neutral-200/80 tw-max-h-[600px] tw-overflow-x-auto  sm:tw-rounded-lg">
              <table class="tw-w-full  tw-relative tw-text-sm tw-text-left !tw-rounded-lg tw-text-gray-500 dark:tw-text-neutral-200">
                  <thead class="tw-text-xs  tw-w-full tw-text-gray-700 dark:tw-text-gray-300 tw-uppercase tw-bg-gray-50 dark:tw-bg-neutral-900">
                      <tr>
                          
                          <th v-for="column in ['id', 'size', 'color', 'quantity', 'price', 'actions']" :key="column" :class="[column == 'actions' && '!tw-w-[100px]', column == 'name' && 'tw-w-[150px]', column == 'sizes' && 'tw-min-w-[400px]']" scope="col" class="tw-px-6 tw-w-fit tw-py-3 text-truncate">
                              <div class="tw-w-fit tw-flex tw-whitespace-nowrap">
                                  {{ column }}
                              </div>
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="item in variations" :key="item.id" :class="[variations[variations.length - 1].id == item.id && '!tw-border-b-0']" class="tw-bg-white dark:tw-bg-neutral-800 tw-border-b dark:tw-border-b-neutral-700 tw-whitespace-nowrap hover:tw-bg-gray-50 dark:hover:tw-bg-black/30">
                          
                          <td class="tw-px-6 tw-py-2 tw-w-[20px]">
                              {{ item.id }}
                          </td>
                          <td class="tw-px-6 tw-py-2 tw-max-w-[100px] tw-truncate tw-uppercase">
                              <div class="tw-rounded tw-w-fit tw-bg-primary/10 tw-text-primary dark:tw-text-violet-500 tw-px-3 tw-border tw-border-solid tw-border-primary/20 tw-font-medium dark:tw-border-primary/30 ">
                                  <span class="tw-text-sm">
                                      {{ item.size.value }}
                                  </span>
                              </div>
                          </td>
                          <td class="tw-px-6 tw-py-2 tw-max-w-[120px] tw-truncate tw-uppercase">
                              {{ item.color.name }}
                              
                          </td>
                          <td class="tw-px-6 tw-py-2 tw-max-w-[120px] tw-truncate">
                              {{ item.quantity }}
                          </td>
                          <td class="tw-px-6 tw-py-2 tw-max-w-[120px] tw-truncate">
                              {{ item.price }}
                          </td>
                          <td class="tw-flex tw-items-center tw-px-6 tw-py-2 tw-space-x-3">
                              <div>
                                  <div class="tw-flex tw-items-center tw-gap-2">
                                    
                                    <button @click="popup = true" class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-red-500/20 hover:tw-bg-red-500/10 hover:tw-border-red-500/70 tw-duration-300 tw-text-red-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
                                        <v-icon size="x-small" >mdi-delete-outline</v-icon>
                                    </button>
                                  </div>

                                  <popup :visible="popup" @cancel="popup = false">
                                    <div class="tw-mx-auto tw-w-[95%] md:tw-max-w-[400px] tw-overflow-hidden tw-min-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md  tw-my-5 tw-rounded-lg">
                                      <div class="tw-px-5 tw-flex dark:tw-text-neutral-400 tw-text-neutral-500 tw-items-center tw-gap-4 tw-py-4 dark:tw-bg-neutral-800 tw-bg-white">
                                        <v-icon size="x-large" class="dark:tw-text-red-400 tw-text-red-500">mdi-alert-outline</v-icon>
                                        <p>
                                          Are you sure you want to delete this Variation?
                                        </p>
                                      </div>
                                      <div class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-neutral-100">
                                        <button @click="popup = false" class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-black/20 tw-bg-neutral-300  dark:tw-bg-neutral-600  tw-duration-300  tw-text-neutral-900 dark:tw-text-neutral-300">
                                          Cancel
                                        </button>
                                        <button @click="handleDelete(item.id)" class="tw-py-2 tw-px-7 tw-flex tw-items-center tw-font-medium tw-rounded tw-text-sm tw-bg-red-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-red-600 dark:tw-border-neutral-900 dark:hover:tw-border-red-500 hover:tw-bg-red-500/80 dark:hover:tw-bg-red-400 tw-duration-300  tw-text-neutral-800">
                                          <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                                          <span>Delete</span>
                                        </button>
                                      </div>
                                    </div>
                                  </popup>
                                </div>
                          </td>
                      </tr>
                      
                  </tbody>
              </table>
          </div>
          </div>
        </div>
      </div>
      <div class="tw-flex tw-justify-end">
        <button @click="create" class="tw-py-2 tw-px-7 tw-h-[38px] tw-w-fit tw-whitespace-nowrap tw-rounded dark:tw-text-neutral-300 tw-text-white tw-bg-violet-500 tw-border tw-border-solid tw-border-tansparent hover:tw-border-violet-600 dark:tw-border-neutral-900 dark:hover:tw-border-violet-400 hover:tw-bg-violet-500 dark:hover:tw-bg-violet-500 tw-duration-200 tw-flex tw-items-center tw-justify-center">
            <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0" :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
            <span class="tw-text-sm">Add Product</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/api/Product'
import { isStringBetween, required } from '@/helpers/validators'
export default {

  data() {
    return {
      isLoading: false,
      popup: false,
      samePrice: false,
      hasColors: true,
      product: {
        name: '',
        category_id: 1,
        gender: 'mix',
        description: '',
        stock_alert: 10,
      },

      variation_id: 1,
      variations: [],

      size_type_id: 1,
      size_id: 1,
      color_id: 1,
      quantity: 0,
      price: 0,

      imageId: 1,
      primaryImage: null || 1,
      images: [
      ],
      isDragOver: false,

      form: {
        name: {
          valid: true,
          message: ''
        },
        description: {
          valid: true,
          message: ''
        },
        images: {
          valid: true,
          message: ''
        },
        variations: {
          valid: true,
          message: ''
        }
      }
    }
  },

  computed: {
    imagesReversed() {
      return this.images.map(i => i).reverse()
    },
    colors() {
      return this.$store.getters['app/colors']
    },
    size_types() {
      return this.$store.getters['app/sizes']
    },
    sizes() {
      return this.size_types.find(s => s.id == this.size_type_id)
      ?.sizes.filter(i => !this.variations.some(v => v.size_id == i.id))
      || []
    },
    categories() {
      return this.$store.getters['category/categories']
    },
    isFetched(){
      return this.$store.getters['category/isFetched']
    },
    isFormValid() {
      return this.form.name.valid 
      && this.form.description.valid
      && this.form.images.valid
      && this.form.variations.valid
    }
  },

  watch: {
    size_type_id() {
      if(this.sizes.length > 0) {
        this.size_id = this.sizes[0].id
      }
    }
  },

  methods: {

    handleAdd() {
      const selectedSize = this.sizes.find(s => s.id == this.size_id)
      const selectedColor = this.colors.find(c => c.id == this.color_id)
      console.log(selectedColor);

      if(!selectedSize) return false;

      const variation = {
        id: this.variation_id++,
        size_id: selectedSize.id,
        color_id: selectedColor.id,
        size: selectedSize,
        color: selectedColor,
        quantity: this.quantity,
        price: this.price
      }

      this.variations.push(variation)

      if(this.sizes.length > 0) {
        this.size_id = this.sizes[0].id
      }

      if(!this.samePrice) {
        this.price = 0
      }

      this.quantity = 0;

      this.reset('variations')

    },

    handleDelete(id) {
      this.variations = this.variations.filter(v => v.id !== id)
      this.popup = false
    },

    create() {

      this.validateForm()
      if(!this.isFormValid) return false;

      this.isLoading = true

      const primaryImage = {
        order: 1,
        image: this.images.find(i => i.id == this.primaryImage).image
      }

      let order = 2
      let images = this.images.filter(img => img.id !== this.primaryImage).map(
        item => {
          return {
            order: order++,
            image: item.image
          }
        }
      )

      images.push(primaryImage)

      const product = {
        name: this.product.name,
        description: this.product.description,
        category_id: this.product.category_id,
        discount_id: 0,
        size_type_id: this.size_type_id,
        variations: this.variations,
        stock_alert: 10,
        gender: this.product.gender,
        images: images,
        same_price: this.samePrice,
        has_colors: this.has_colors,
      }

      Product.create(product)
      .then(
        res => {
          if(res.data.code == 'SUCCESS') {
            this.$alert({
              type: 'success',
              body: 'Product Created Successfully'
            })
            this.$store.dispatch('product/addProduct', res.data.data.product);

            this.product.name = '';
            this.product.description = '';
            this.variations = [];
            this.images = [];
            this.samePrice = false;
            this.hasColors = true;
            
          }

        },
        this.$handleApiError
      )
      
    },

    validateForm() {
      this.form.name = required(this.product.name, 'Name');
      this.form.images = required(this.images.length, 'Images');
      this.form.variations = required(this.variations.length, 'Variations');
      this.form.description = isStringBetween(this.product.description, { min: 20, max: 300 }, 'Description');
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
      this.reset('images')
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
    },
    reset(field) {
      this.form[field] = {
        valid: true,
        message: ''
      }
    },
  },

  mounted() {
    if(this.size_types.length > 0) {
      this.size_type_id = this.size_types[0].id
    }

    if(this.colors.length > 0) {
      this.color_id = this.colors[0].id
    }

    if(this.sizes.length > 0) {
      this.size_id = this.sizes[0].id
    }
  }
}
</script>

<style>

</style>