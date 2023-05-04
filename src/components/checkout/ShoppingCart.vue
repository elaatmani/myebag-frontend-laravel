<template>
  <div>
    <div class="tw-relative tw-min-h-fit dark:tw-border-neutral-700 tw-border !tw-rounded tw-border-neutral-200/80 tw-max-h-[625px] tw-overflow-x-auto  sm:tw-rounded-lg">
        
        <table class="tw-w-full  tw-relative tw-text-sm tw-text-left !tw-rounded-lg tw-text-gray-500 dark:tw-text-neutral-200">
            <thead class="tw-text-xs  tw-w-full tw-text-gray-700 dark:tw-text-gray-300 tw-uppercase tw-bg-gray-50 dark:tw-bg-neutral-900">
                <tr>
                    
                    <th v-for="column in columns" :key="column" :class="[column == 'actions' && '!tw-w-[100px]']" scope="col" class="tw-px-6 tw-py-3 text-truncate">
                        <div class="tw-w-fit tw-flex tw-whitespace-nowrap">
                            {{ column }}
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody v-if="items.length > 0">
                <tr v-for="item in items" :key="item.id" :class="[items[items.length - 1].id == item.id && '!tw-border-b-0']" class="tw-bg-white dark:tw-bg-neutral-800 tw-border-b dark:tw-border-b-neutral-700 tw-whitespace-nowrap hover:tw-bg-gray-50 dark:hover:tw-bg-black/30">
                    
                    <td class="tw-px-3 tw-py-2 tw-w-[20px]">
                        <div class="tw-flex tw-gap-2">
                            <div>
                                <div class="tw-w-[70px] tw-flex tw-items-center tw-h-[70px] tw-bg-primary/20 tw-overflow-hidden tw-rounded">
                                    <img class="tw-w-full tw-object-cover" :title="item?.product?.name" :src="$backend(primaryImage(item?.product.images)?.path)" alt="">
                                </div>
                            </div>
                            <div class="tw-max-w-[200px]  tw-flex tw-gap-2 tw-justify-center tw-flex-col">
                                <router-link :title="item?.product?.name" :to="'/products/' + item?.product?.id" class="tw-truncate tw-underline tw-w-full">{{ item?.product?.name }}</router-link>
                                <div>
                                    <p class="tw-text-xs">Color: {{ item?.variation?.color?.name }}</p>
                                    <p class="tw-text-xs">Size: {{ item?.size?.value }}</p>
                                </div>
                            </div>
                        </div>
                    </td>
                    <th scope="row" class="tw-px-6 tw-py-2 tw-font-medium tw-w-[36px] tw-h-[36px]  tw-whitespace-nowrap ">
                        ${{ item?.variation.price }}
                    </th>
                    <td class="tw-px-6 tw-py-2 tw-max-w-[200px] tw-truncate">
                        {{ item.quantity }}
                    </td>
                    <td class="tw-px-6 tw-py-2 tw-max-w-[120px] tw-truncate">
                        ${{ item?.variation.price * item.quantity }}
                    </td>
                    <!-- <td class="tw-px-6 tw-py-2">
                        {{ item.category?.name }}
                    </td> -->
                </tr>
                
            </tbody>
            <tbody v-else>
                <tr>
                    <td :colspan="columns.length">

                        <div class="tw-flex tw-flex-col tw-items-center tw-gap-2 tw-p-5 tw-min-h-[150px] tw-justify-center">
                            <!-- <h1 class="tw-text-sm tw-font-medium">Category list is empty!</h1> -->
                            <img class="tw-w-[200px]" :src="$frontend('assets/images/illustrations/not-found.svg')" alt="">
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Pagination -->
    <div v-if="allItems.length > 10" class="mt-5 tw-flex tw-justify-between">
        <div class="d-flex align-center tw-relative">
            <div class="text-body-2 tw-h-fit mr-2 tw-text-zinc-700 dark:tw-text-neutral-200">Show per page: </div>
            <select v-model="paginationLimit"  class="tw-py-1 tw-outline-none  focus:tw-border-primary tw-text-sm tw-px-2 tw-w-[60px] tw-border tw-rounded-lg tw-border-solid tw-border-neutral-500">
                <option v-for="o in allowedLimit" :key="o" :value="o" class="dark:tw-text-black">
                    {{ o }}
                </option>
            </select>
            <v-icon size="x-small" class="tw-absolute tw-pointer-events-none tw-top-1/2 -tw-translate-y-1/2 tw-right-1">mdi-chevron-down</v-icon>
            <!-- <v-select :hide-details="true" :items="allowedLimit" variant="outlined" density="compact" color="primary-color"></v-select> -->
        </div>
        <div class="d-flex align-center">
            <div class="text-caption tw-h-fit mr-2 font-weight-bold tw-text-zinc-700 dark:tw-text-neutral-200">{{ prevRange + 1 }} - {{ (currentPage == pageCount ?  allItems.length : nextRange) }} of {{  allItems.length }} items </div>
            <div>
            <v-btn @click="currentPage = n" :ripple="false" variant="flat" class="mr-1" icon rounded="lg" :color="n == currentPage ? 'primary' : 'grey'" density="comfortable"  v-for="n in pageCount" :key="n">
                <span class="tw-text-white">{{ n }}</span>
            </v-btn>
            </div>
        </div>
    </div>
    <!-- /Pagination -->
  </div>
</template>

<script>
export default {
    props: ['allItems'],


    data() {
        return {
            allowedLimit: [5, 10, 20, 50, 100],
            currentPage: 1,
            paginationLimit: 10,
            filters: false,

            columns: [ 'product', 'price','quantity', 'total'],
            // allItems: tableProducts
        }
    },

    computed: {
        prevRange() {
            return (this.currentPage - 1) * this.paginationLimit
        },

        nextRange() {
            return (this.currentPage) * this.paginationLimit
        },
        pageCount() {
            return Math.ceil(this.allItems.length / this.paginationLimit)
        },
        items() {
            return this.allItems.slice(this.prevRange, this.nextRange)
        },
    },

    methods: {
        calculQty(variants) {
            let total = 0;
            variants.forEach(item => {
                total += item.quantity
            });

            return total
        },

        primaryImage(images) {
            let img = false
            images.forEach(image => {
                if(image.order == 1) {
                    console.log(image);
                    img = image
                }
            })

            return img
        }
    }
}
</script>

<style>

</style>