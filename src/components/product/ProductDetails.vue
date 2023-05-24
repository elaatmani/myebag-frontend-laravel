<template>
  <div>
    <!-- <ul class="tw-hidden tw-text-sm lg:tw-flex tw-items-center tw-gap-1 tw-mb-5 dark:tw-text-neutral-300 tw-text-neutral-500">
        <li>
          Shop
        </li>
        <li class="tw-text-secondary">
          <v-icon>mdi-chevron-right</v-icon>
        </li>
        <li>
          {{ product.category.name }}
        </li>
    </ul> -->

    <h1 class="lg:tw-text-3xl tw-text-2xl tw-font-bold">
        {{ product.name }}
    </h1>
    <div class="tw-flex tw-items-end tw-gap-2">
        <div class="tw-flex tw-items-center">
            <v-rating v-model="rating" readonly density="compact" size="small" color="yellow"></v-rating>
        </div>
        <div class="tw-text-sm">(0 reviews)</div>
    </div>

    <div class="tw-flex tw-gap-2 tw-items-end tw-mt-4"> 

        <!-- <div class="tw-text-2xl dark:tw-text-secondary tw-text-primary tw-font-bold tw-mt-4">
            $40.00
        </div> -->
        <p class="tw-text-2xl" :class="{'tw-text-emerald-500 tw-bg-emerald-500/10 tw-rounded tw-rounded-bl-none tw-px-1': price.discount, '': !price.discount}">${{ price.current }}</p>
        <p v-if="price.discount" class="tw-line-through tw-text-sm tw-text-red-400 tw-bg-red-400/10 tw-rounded-l tw-px-1">
            ${{ price.old }}
        </p>
    </div>


    <div class="tw-mt-3">

        <!-- old size select -->
        <div v-if="availableSizes.length > 0 && false">
            <h2>Size</h2>
            <div class="tw-mt-2 tw-flex tw-gap-2 tw-flex-wrap">

                <button v-for="s in availableSizes" :key="s.id"
                @click="size = s.id"
                :class="[
                    s.id == size && `
                    dark:tw-bg-neutral-300 
                    dark:tw-text-neutral-800 
                    tw-text-white 
                    tw-bg-neutral-700 
                    `,

                    s.id != size && `
                    hover:tw-bg-neutral-200 
                    dark:hover:tw-text-neutral-700
                    `
                ]"
                class="
                
                dark:tw-text-neutral-300
                dark:tw-border-neutral-500
                tw-text-sm 
                tw-cursor-pointer 
                
                tw-duration-300 
                tw-font-bold 
                tw-text-neutral-600 
                tw-w-[35px] 
                tw-h-[35px] 
                tw-px-1 
                tw-flex 
                tw-items-center 
                tw-justify-center 
                tw-border 
                tw-border-solid 
                tw-border-neutral-500 
                tw-rounded-lg
                ">
                    {{ s.value }}
                </button>

                
            </div>
        </div>

        <!-- new size select -->
        <div>
            <label for="sizes" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-neutral-900 dark:tw-text-white">Select a size</label>
            <select v-model="size" id="sizes" class="tw-bg-gray-50 tw-border tw-border-solid tw-outline-none tw-border-neutral-300 tw-text-neutral-700 tw-text-sm tw-rounded-lg focus:tw-ring-violet-500 focus:tw-border-violet-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-neutral-900 dark:tw-border-neutral-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-violet-500 dark:focus:tw-border-violet-500">
                <option disabled value="0">Choose a size</option>
                <option v-for="s in availableSizes" :key="s.id" :value="s.id">{{s.value}}</option>
            </select>
        </div>


        <div v-if="product.has_colors" class="mt-3">
            <h2>Color</h2>
            <div class="tw-mt-2 tw-flex tw-gap-2 tw-flex-wrap">
                <!--  dark:tw-ring-secondary tw-ring-primary -->
                <button v-for="c in colors" :key="c.id" @click="color = c.id" :class="[ c.id == color && 'tw-ring-2 tw-ring-[var(--primary)]']" class="
                tw-bg-[rgb(var(--primary))]
                tw-rounded-lg
                tw-w-[30px]
                tw-h-[30px]
                tw-border tw-border-solid
                dark:tw-border-neutral-700
                tw-border-neutral-300
                ">
                </button>
            </div>
        </div>

        <div class="mt-3">
            <h2 class="tw-flex tw-items-center tw-gap-1">
                Quantity
                <!-- <span class="tw-text-xs tw-text-secondary">( 5 items left )</span> -->
                <span v-if="selectedVariation?.quantity > 10" class="tw-text-xs tw-text-green-500">( +10 items left )</span>
                <span v-else-if="selectedVariation?.quantity > 0" class="tw-text-xs tw-text-green-500">( {{ selectedVariation?.quantity == 1 ? 'Only one item': selectedVariation?.quantity + ' items ' }} left )</span>
                <span v-else-if="size == 0" class="tw-text-xs tw-text-green-500">( In Stock )</span>
                <span v-else class="tw-text-xs tw-text-red-400">(Out of stock)</span>
            </h2>
            <div class="tw-flex tw-items-center tw-mt-2">
                <button 
                @click="decrementQty"
                class="
                dark:hover:tw-bg-neutral-700
                dark:tw-text-neutral-300
                dark:tw-border-neutral-500
                tw-text-md
                tw-cursor-pointer 
                hover:tw-bg-neutral-200 
                tw-duration-300 
                tw-font-bold 
                tw-text-neutral-600 
                tw-w-[42px] 
                tw-h-[42px] 
                tw-px-1 
                tw-flex 
                tw-items-center 
                tw-justify-center 
                tw-border 
                tw-border-solid 
                tw-border-neutral-300 
                tw-rounded-l-lg
                tw-border-r-0
                ">
                    <v-icon size="small">mdi-minus</v-icon>
                </button>
                <input v-model="quantity" type="number" min="1" max="10" class="tw-w-[50px] tw-text-center tw-py-2 tw-px-3 tw-h-[42px] tw-outline-none tw-border tw-border-solid tw-duration-300 tw-border-neutral-300 dark:tw-border-neutral-500 dark:hover:tw-border-neutral-500 hover:tw-border-neutral-500 dark:focus:tw-border-purple-500 focus:tw-border-purple-500" />
                <button
                @click="incrementQty"
                class="
                dark:hover:tw-bg-neutral-700
                dark:tw-text-neutral-300
                dark:tw-border-neutral-500
                tw-text-md
                tw-cursor-pointer 
                hover:tw-bg-neutral-200 
                tw-duration-300 
                tw-font-bold 
                tw-text-neutral-600 
                tw-w-[42px] 
                tw-h-[42px] 
                tw-px-1 
                tw-flex 
                tw-items-center 
                tw-justify-center 
                tw-border 
                tw-border-solid 
                tw-border-neutral-300 
                tw-rounded-r-lg
                tw-border-l-0
                ">
                    <v-icon size="small">mdi-plus</v-icon>
                </button>
            </div>
        </div>

        <div class="mt-10">
            <div class="tw-grid tw-grid-cols-12 tw-gap-2">
                <div class="tw-col-span-7">
                    <button
                    @click="addToCart"
                    class="
                    tw-bg-[rgb(var(--primary))]
                    tw-w-full
                    tw-py-2 tw-px-5
                    tw-rounded-lg
                    tw-flex
                    tw-items-center
                    tw-justify-center
                    tw-gap-2
                    tw-text-white
                    tw-text-md
                    tw-h-[45px]
                    "
                    >
                        <icon icon="majesticons:shopping-cart" />
                        <span>
                            Add to cart
                        </span>
                    </button>
                </div>
                <div v-if="false" class="tw-col-span-5">
                    <div 
                    class="
                    tw-py-2 tw-px-5
                    tw-rounded-lg
                    tw-border-solid
                    tw-border
                    tw-border-neutral-200
                    dark:tw-border-neutral-600
                    tw-flex tw-items-center tw-justify-center
                    tw-font-bold
                    tw-text-lg
                    tw-text-neutral-700
                    dark:tw-text-neutral-200
                    tw-h-[45px]

                    "
                    >
                        <p :class="{'tw-text-emerald-500 tw-bg-emerald-500/10 tw-rounded tw-rounded-bl-none tw-px-1': price.discount, '': !price.discount}">${{ price.current }}</p>
                    
                    </div>
                </div>
            </div>
        </div>

    </div>
    
  </div>
</template>

<script>
// import { sizes } from '@/helpers/data'
import { getAvailableColors, getAvailableSizes } from '@/helpers/methods'

export default {
    props: {
        product: {
            required: true,
        }
    },
    data() {
        return {

            rating: 0,
            quantity: 1,
            color: 0,
            size: 0
        }
    },

    computed: {
        colors() {
            return this.$store.getters['app/colors']
        },
        sizes() {
            return this.$store.getters['app/sizes']
        },
        cart() {
            return this.$store.getters['cart/cart']
        },

        price() {
            let price = this.product.variations[0].price;
            if(this.product.is_discount_active && this.product.discount_percentage != 0) {
                price = price - (price * (this.product.discount_percentage/100))
            }
            let result = {
                discount: this.product.is_discount_active,
                current: price,
                old: this.product.variations[0].price
            }

            return result;
        },

        selectedVariation() {
            return this.product.variations.find(v => v.size.id == this.size)
        },

        availableSizes() {
            return getAvailableSizes(this.product)
        },

        availableColors() {
            return getAvailableColors(this.product)
        },
    },

    methods: {
        incrementQty() {
            if(this.quantity >= 10) return false;
            this.quantity += 1
        },
        decrementQty() {
            if(this.quantity <= 1) return false;
            this.quantity -= 1
        },

        addToCart() {

            if(this.size == 0) {
                this.$alert({
                    type: 'info',
                    body: 'Please select a size'
                })
                return false;
            }

            const id = this.cart.map(i => i.id).sort().slice(-1)[0] || 1;

            const item = {
                id: id + 1,
                product_id: this.product.id,
                product: this.product,
                quantity: this.quantity,
                size_id: this.size,
                size: this.availableSizes.find(i => i.id == this.size),
                variation: this.selectedVariation
            }

            this.$store.dispatch('cart/addItem', item);

            this.quantity = 1;
            this.$alert({
                type: 'success',
                body: 'Item added to cart'
            })
        },

    },

    updated() {
        console.log(this.selectedVariation);
    }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>