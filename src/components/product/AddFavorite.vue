<template>
  <div>
    <button
        @click="addToFavorite"
        class="
        tw-text-pink-500
        tw-bg-pink-500/10
        tw-w-full
        tw-py-2 tw-px-5
        tw-rounded-lg
        tw-flex
        tw-items-center
        tw-justify-center
        tw-gap-2
        
        tw-text-md
        tw-h-[45px]
        "
        >
            <icon :icon="favorite ? 'majesticons:heart' : 'majesticons:heart-line'" />
            <span>
                Add to Favorite
            </span>
    </button>
  </div>
</template>

<script>
import Product from '@/api/Product'
export default {
    props: [ 'product' ],

    data() {
        return  {
            favorite: this.product.favorite
        }
    },

    computed: {
        isLoggedIn() {
            return this.$store.getters['user/isLoggedIn']
        }
    },

    methods: {
        addToFavorite() {
            Product.favorite(this.product.id, !this.favorite)
            .then(res => {
                console.log(res);
                if(res.data.code == 'SUCCESS') {
                    this.favorite = res.data.data.favorite;
                }
            }, this.$handleApiError)


            if(!this.isLoggedIn) {
                this.$router.push({
                    name: 'login'
                })
                return false;
            }

            this.favorite = !this.favorite;
        }
    }
}
</script>

<style>

</style>