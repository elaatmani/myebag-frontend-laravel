<template>
  <div>
    <div class="">
        <h1 class="tw-px-3 tw-py-2 tw-border-b dark:tw-border-neutral-700 tw-border-neutral-200">Order Details</h1>
        <div class="tw-px-3 tw-mt-3">
            <div class="tw-relative tw-min-h-fit dark:tw-border-neutral-700 tw-border !tw-rounded tw-border-neutral-200/80 tw-max-h-[625px] tw-overflow-x-auto sm:tw-rounded-lg">
        
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
            <tbody v-if="items.length > 0 ">
                <tr v-for="item in items" :key="item.id" :class="[items[items.length - 1].id == item.id && '!tw-border-b-0']" class="tw-bg-white dark:tw-bg-neutral-800 tw-border-b dark:tw-border-b-neutral-700 tw-whitespace-nowrap hover:tw-bg-gray-50 dark:hover:tw-bg-black/30">
                    
                    <td class="tw-px-3 tw-py-2 tw-w-[20px]">
                        <div class="tw-flex tw-gap-2">
                            <div>
                                <div class="tw-w-[70px] tw-flex tw-items-center tw-h-[70px] tw-bg-primary/20 tw-overflow-hidden tw-rounded">
                                    <img class="tw-w-full tw-object-cover" :title="item?.product_variation.product?.name" :src="$backend(primaryImage(item?.product_variation.product.images)?.path)" alt="">
                                </div>
                            </div>
                            <div class="tw-max-w-[200px]  tw-flex tw-gap-2 tw-justify-center tw-flex-col">
                                <router-link :title="item?.product_variation.product?.name" :to="'/products/' + item?.product_variation.product?.id" class="tw-truncate tw-underline tw-w-full">{{ item?.product_variation.product?.name }}</router-link>
                                <div>
                                    <p class="tw-text-xs">Color: {{ item?.product_variation?.color?.name }}</p>
                                    <p class="tw-text-xs">Size: {{ item?.product_variation.size?.value }}</p>
                                </div>
                            </div>
                        </div>
                    </td>
                    <th scope="row" class="tw-px-6 tw-py-2 tw-font-medium tw-w-[36px] tw-h-[36px]  tw-whitespace-nowrap ">
                        ${{ item?.product_variation.price }}
                    </th>
                    <td class="tw-px-6 tw-py-2 tw-max-w-[200px] tw-truncate">
                        {{ item.quantity }}
                    </td>
                    <td class="tw-px-6 tw-py-2 tw-max-w-[120px] tw-truncate">
                        ${{ item?.product_variation.price * item.quantity }}
                    </td>
                </tr>
                
            </tbody>
        </table>
        </div>
        <div class="tw-border-t tw-border-neutral-400/20 tw-mt-3">
            <div :class="['tw-py-3']" class="md:tw-w-1/2 tw-ml-auto tw-flex tw-flex-col tw-gap-3 tw-border-neutral-400/20 tw-border-solid">
                    <div class="tw-flex tw-items-center tw-justify-between tw-text-sm">
                        <span class="dark:tw-text-neutral-400 tw-text-neutral-600">Subtotal</span>
                        <span>${{ total }}</span>
                    </div>
                    <div class="tw-flex tw-items-center tw-justify-between tw-text-sm">
                        <span class="dark:tw-text-neutral-400 tw-text-neutral-600">Shipping</span>
                        <span>$5</span>
                    </div>
                    <div class="tw-flex tw-items-center tw-justify-between tw-text-md tw-mt-3">
                        <span class="dark:tw-text-neutral-200 tw-text-neutral-800 tw-font-bold">Total</span>
                        <span class="tw-text-violet-500 tw-font-black">${{total + 5}}</span>
                    </div>
                </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['order'],
    
    data() {
        return {
            columns: [ 'product', 'price','quantity', 'total'],
        }
    },

    computed: {
        items() {
            return this.order.order_items
        },
        total() {
            let total = 0;
            this.order.order_items.forEach(element => {
                total += element.product_variation.price * element.quantity
            });
            return total
        }
    },

    methods: {
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
    },

    mounted() {
        console.log(this.order);
    }
}
</script>

<style>

</style>