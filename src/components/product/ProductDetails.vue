<template>
  <div>
    <ul class="tw-hidden tw-text-sm lg:tw-flex tw-items-center tw-gap-1 tw-mb-5 dark:tw-text-neutral-300 tw-text-neutral-500">
        <li>
          Shop
        </li>
        <li class="tw-text-secondary">
          <v-icon>mdi-chevron-right</v-icon>
        </li>
        <li>
          Shoes
        </li>
    </ul>

    <h1 class="lg:tw-text-3xl tw-text-2xl tw-font-bold tw-mt-5">
        Air Jordan 4 - Dark Blue
    </h1>
    <div class="tw-flex tw-items-center tw-gap-2 tw-mt-2">
        <v-rating v-model="rating" readonly density="compact" size="small" color="yellow"></v-rating>
        <span class="tw-text-sm tw-flex tw-items-center">4.5</span>
    </div>

    <div class="tw-mt-3">
        <div>
            <h2>Select Size</h2>
            <div class="tw-mt-2 tw-flex tw-gap-2 tw-flex-wrap">

                <div class="
                dark:hover:tw-bg-neutral-700
                dark:tw-text-neutral-300
                dark:tw-border-neutral-500
                tw-text-sm 
                tw-cursor-pointer 
                hover:tw-bg-neutral-200 
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
                    XS
                </div>

                <div class="
                dark:hover:tw-bg-neutral-700
                dark:tw-text-neutral-300
                dark:tw-border-neutral-500
                tw-text-sm 
                tw-cursor-pointer 
                hover:tw-bg-neutral-200 
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
                    S
                </div>

                <div class="
                dark:hover:tw-bg-neutral-700
                dark:tw-text-neutral-300
                dark:tw-border-neutral-500
                tw-text-sm 
                tw-cursor-pointer 
                hover:tw-bg-neutral-200 
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
                    M
                </div>

                <div class="
                tw-text-sm 
                tw-cursor-pointer 
                tw-duration-300 tw-font-bold 
                tw-text-white 
                tw-bg-neutral-700 
                tw-w-[35px] 
                tw-h-[35px] 
                tw-px-1 
                tw-flex 
                tw-items-center 
                tw-justify-center 
                tw-border 
                tw-border-solid 
                tw-border-neutral-700 
                dark:tw-border-neutral-300
                dark:tw-bg-neutral-300
                dark:tw-text-neutral-800
                tw-rounded-lg">
                    L
                </div>

                <div class="
                dark:hover:tw-bg-neutral-700
                dark:tw-text-neutral-300
                dark:tw-border-neutral-500
                tw-text-sm 
                tw-cursor-pointer 
                hover:tw-bg-neutral-200 
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
                    XL
                </div>
            </div>
        </div>

        <div class="mt-3">
            <h2 class="tw-flex tw-items-center tw-gap-1">
                Quantity
                <!-- <span class="tw-text-xs tw-text-secondary">( 5 items left )</span> -->
                <span class="tw-text-xs tw-text-green-500">( In stock )</span>
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
                    class="
                    tw-w-full
                    tw-py-2 tw-px-5
                    tw-rounded-full
                    tw-flex
                    tw-items-center
                    tw-justify-center
                    tw-bg-primary
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
                <div class="tw-col-span-5">
                    <div 
                    class="
                    tw-py-2 tw-px-5
                    tw-rounded-full
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
                        $100.00
                    </div>
                </div>
            </div>
        </div>


    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            rating: 5,
            quantity: 1
        }
    },

    methods: {
        incrementQty() {
            if(this.quantity >= 10) return false;
            this.quantity += 1
        },
        decrementQty() {
            if(this.quantity <= 1) return false;
            this.quantity -= 1
        }
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