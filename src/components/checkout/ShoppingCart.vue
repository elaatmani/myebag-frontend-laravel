<template>
  <div>
    <div class="tw-relative tw-min-h-fit dark:tw-border-neutral-700 tw-border !tw-rounded tw-border-neutral-200/80 tw-max-h-[625px] tw-overflow-x-auto  sm:tw-rounded-lg">
        
        <table class="tw-w-full  tw-relative tw-text-sm tw-text-left !tw-rounded-lg tw-text-gray-500 dark:tw-text-neutral-200">
            <thead class="tw-text-xs  tw-w-full tw-text-gray-700 dark:tw-text-gray-300 tw-uppercase tw-bg-gray-50 dark:tw-bg-neutral-900">
                <tr>
                    
                    <th v-for="column in columns" :key="column" :class="[column == 'actions' && '!tw-w-[100px]', column == '' && '!tw-w-[30px]' ]" scope="col" class="tw-px-6 tw-py-3 text-truncate">
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
                                <div class="tw-w-[70px] tw-flex tw-items-center tw-h-[70px] tw-bg-[rgba(var(--primary),.2)] tw-overflow-hidden tw-rounded">
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
                        <div class="tw-flex tw-items-center tw-gap-3">
                            <button @click="increment(item)" class="tw-p-1 tw-rounded tw-border tw-border-solid tw-border-[rgb(var(--primary))]">
                                <icon class="tw-text-[rgb(var(--primary))]" icon="mdi:plus"/>
                            </button>
                            <span>
                            {{ item.quantity }}
                            </span>
                            <button @click="decrement(item)" class="tw-p-1 tw-rounded tw-border tw-border-solid tw-border-[rgb(var(--primary))]">
                                <icon class="tw-text-[rgb(var(--primary))]" icon="mdi:minus"/>
                            </button>
                        </div>
                    </td>
                    <td class="tw-px-6 tw-py-2 tw-max-w-[120px] tw-truncate">
                        ${{ item?.variation.price * item.quantity }}
                    </td>
                    <td class="tw-px-6 tw-py-2 tw-max-w-[120px] tw-truncate">
                        <div>
                            <button
                                @click="deleteItem(item)"
                                class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-red-500/20 hover:tw-bg-red-500/10 hover:tw-border-red-500/70 tw-duration-300 tw-text-red-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center"
                                >
                                <v-icon size="x-small">mdi-delete-outline</v-icon>
                            </button>
                        </div>
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
            <v-btn @click="currentPage = n" :ripple="false" variant="flat" class="mr-1" icon rounded="lg" :color="n == currentPage ? primary.main : 'grey'" density="comfortable"  v-for="n in pageCount" :key="n">
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

            columns: [ 'product', 'price','quantity', 'total', ''],
            // allItems: tableProducts
        }
    },

    computed: {
        prevRange() {
            return (this.currentPage - 1) * this.paginationLimit
        },

        primary() {
        return this.$store.getters['app/primaryRaw'];
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

        increment(item) {
            if(item.quantity >= 10 ) {
                this.$alert({
                    type: 'warning',
                    body: 'Max quantity reached'
                })
                return false;
            }

            this.$store.dispatch('cart/updateItem', {...item, quantity: item.quantity + 1});
        },

        decrement(item) {
            if(item.quantity <= 1 ) {
                this.$alert({
                    type: 'warning',
                    body: 'Min quantity reached'
                })
                return false;
            }

            this.$store.dispatch('cart/updateItem', {...item, quantity: item.quantity - 1});
        },

        deleteItem(item) {
            this.$store.dispatch('cart/removeItem', item.id);
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