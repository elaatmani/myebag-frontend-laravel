<template>
  <div class="tw-pb-3">
    
    <div class="tw-grid tw-grid-cols-12 tw-gap-2 mb-4 mt-3 tw-p-2 tw-rounded-md tw-bg-neutral-400/10">
        <div class="tw-flex tw-items-center tw-gap-2 tw-justify-between tw-col-span-12">
            <div class="tw-relative tw-w-full tw-max-w-[550pxd] tw-flex-grow-1">
                <icon icon="ph:magnifying-glass" class="tw-text-xl tw-text-neutral-400 tw-absolute tw-top-1/2 tw-left-3 -tw-translate-y-1/2" />
                <input class="tw-outline-none tw-h-[38px] tw-rounded-lg tw-text-sm tw-text-neutral-500 dark:tw-text-neutral-300 tw-bg-white dark:tw-bg-neutral-800 tw-duration-300 focus:tw-border-[rgb(var(--primary))] hover:tw-border-[rgba(var(--primary),.4)] dark:hover:tw-border-[rgba(var(--primary),.4)] dark:focus:tw-border-[rgb(var(--primary))] tw-border-neutral-200 dark:tw-border-neutral-600 tw-border-solid tw-border tw-py-2 tw-px-3 tw-pl-10 tw-w-full" type="text" placeholder="Search for ID, Name, SKU..." />
            </div>
            <div class="tw-flex md:tw-justify-end tw-justify-center tw-gap-2 tw-items-center">
                <button @click="filters = !filters" class="tw-p-2 tw-h-[38px] tw-rounded-lg dark:tw-text-neutral-300 tw-bg-white dark:tw-bg-neutral-800 tw-border tw-border-solid tw-border-neutral-200 dark:tw-border-neutral-600 tw-flex tw-items-center tw-justify-center tw-gap-2">
                    <icon class="tw-text-lg" :icon="filters ? 'material-symbols:filter-list-off-rounded' : 'material-symbols:filter-list-rounded'" />
                    <span class="tw-hidden md:tw-block tw-text-sm">Filters</span>
                </button>
                <button class="tw-p-2 tw-h-[38px] tw-w-fit tw-whitespace-nowrap tw-rounded-lg dark:tw-text-neutral-300 tw-text-white tw-bg-[rgb(var(--primary))] dark:tw-bg-[rgb(var(--primary))] tw-border tw-border-solid tw-border-neutral-200 dark:tw-border-neutral-600 tw-flex tw-items-center tw-justify-center tw-gap-2">
                    <icon class="tw-text-lg" icon="mdi:plus" />
                    <span class="tw-hidden md:tw-block tw-text-sm">Create</span>
                </button>
            </div>
        </div>
        <!-- <div class="tw-col-span-12 tw-max-h-0 tw-duration-500 tw-ease-in-out tw-overflow-hidden" :class="[filters && '!tw-max-h-[300px]']">
            <div class="tw-h-[150px]"></div>
        </div> -->
    </div>
    <div class="tw-relative tw-min-h-fit dark:tw-border-neutral-700 tw-border !tw-rounded-lg tw-border-neutral-200/80 tw-max-h-[625px] tw-overflow-x-auto  sm:tw-rounded-lg">
        <div v-if="!isLoaded" class="tw-min-h-[150px] tw-flex tw-items-center tw-justify-center">
            <loading-dash class="tw-scale-50"></loading-dash>
        </div>
        <table v-else class="tw-w-full  tw-relative tw-text-sm tw-text-left !tw-rounded-lg tw-text-gray-500 dark:tw-text-neutral-200">
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
                    
                    <td class="tw-px-6 tw-py-2 tw-w-[20px]">
                        {{ item.id }}
                    </td>
                    <th scope="row" class="tw-px-6 tw-py-2 tw-font-medium tw-w-[36px] tw-h-[36px]  tw-whitespace-nowrap ">
                        <div class="tw-w-[35px] tw-flex tw-items-center tw-h-[35px] tw-bg-primary/20 tw-overflow-hidden tw-rounded-lg">
                            <img class="tw-w-full tw-object-cover" :src="$backend(primaryImage(item.images)?.path)" alt="">
                        </div>
                    </th>
                    <td class="tw-px-6 tw-py-2 tw-max-w-[200px] tw-truncate">
                        {{ item.name }}
                    </td>
                    <td class="tw-px-6 tw-py-2 tw-max-w-[120px] tw-truncate">
                        {{ item.sku }}
                    </td>
                    <td class="tw-px-6 tw-py-2">
                        {{ item.category?.name }}
                    </td>
                    <td class="tw-px-6 tw-py-2 tw-text-center">
                        <div v-if="item.is_discount_active" class="tw-p-1 tw-text-emerald-500 tw-rounded tw-bg-emerald-500/10">
                            {{ item.discount_percentage }}% OFF
                        </div>
                        <div v-else>
                            -
                        </div>
                    </td>
                    <td class="tw-px-5 tw-py-2">
                        <div :class="[item.quantity_total < item.stock_alert ? 'tw-text-red-500 ' : 'tw-text-emerald-500']" class="tw-w-full tw-p-1 tw-rounded-md">
                            {{ item.quantity_total }}
                        </div>
                    </td>
                    <td class="tw-px-6 tw-py-2 tw-space-x-3">
                        <ProductActions :product="item" />
                    </td>
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
            <select v-model="paginationLimit"  class="tw-py-1 tw-outline-none  focus:tw-border-[rgb(var(--primary))] tw-text-sm tw-px-2 tw-w-[60px] tw-border tw-rounded-lg tw-border-solid tw-border-neutral-500">
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
            <v-btn @click="currentPage = n" :ripple="false" variant="flat" class="mr-1" icon rounded="lg" :color="n == currentPage ? $primaryRaw.value.main : 'grey'" density="comfortable"  v-for="n in pageCount" :key="n">
                <span class="tw-text-white">{{ n }}</span>
            </v-btn>
            </div>
        </div>
    </div>
    <!-- /Pagination -->
    
  </div>
</template>

<script>
// import { tableProducts } from '@/helpers/data'
import ProductActions from '@/components/dashboard/product/ProductActions'

export default {
    props: ['allItems', 'isLoaded'],

    components: { ProductActions },

    data() {
        return {
            allowedLimit: [5, 10, 20, 50, 100],
            currentPage: 1,
            paginationLimit: 10,
            filters: false,

            columns: [ 'id', 'image','name', 'sku',  'category', 'discount', 'quantity', 'actions' ],
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