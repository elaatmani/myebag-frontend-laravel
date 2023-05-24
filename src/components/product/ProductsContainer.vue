<template>
  <div>
    <div class="tw-py- tw-my-1">
        <div class="tw-flex tw-justify-between">
            <div class="tw-text-xl tw-capitalize">
                {{ title }}
            </div>
            <div v-if="!!showMore">
                <v-hover v-slot="{isHovering, props}">
                    <router-link v-bind="props" :to="showMore"  class="tw-text-sm tw-text-[rgb(var(--primary))]">
                        <span>See More</span>
                        <v-icon :class="isHovering ? 'tw-translate-x-1' : 'tw-translate-x-0'" class="tw-ml-1 tw-duration-300" size="small" >mdi-arrow-right</v-icon>
                    </router-link>
                </v-hover>
            </div>
        </div>
        <div class="tw-mt-5 tw-grid tw-grid-cols-12 tw-gap-5">
            <div v-for="product in products" :key="product.id" class="tw-col-span-12 sm:tw-col-span-6 lg:tw-col-span-3">
                <ProductCard :product="product"  />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/product/ProductCard'

export default {
    props: {
        title: {
            required: false,
            default: 'Featured'
        },
        products: {
            required: false,
            default: []
        },
        showMore: {
            required: false,
            default: false
        },
        category: {
            required: false,
            default: null
        }
    },
    components: { ProductCard },

    data() {
        return {}   
    }
}
</script>

<style>

</style>