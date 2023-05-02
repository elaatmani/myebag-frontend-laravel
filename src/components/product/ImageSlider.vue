<template>
  <div  class="tw-w-full">
    <div class="md:tw-flex tw-block">
        <div class="tw-w-[75px] md:tw-flex tw-hidden tw-flex-col tw-gap-2">
            <div v-for="image in images" :key="image.id" @click="active = image" :class="[{'tw-border-2 tw-border-primary': active == 0}, {'tw-border tw-border-neutral-500/10': active != 0}]" class="tw-h-[75px] tw-w-[75px] tw-p-1 tw-rounded-lg tw-overflow-hidden tw-flex tw-items-center tw-justify-center mini-img-container hover:tw-border-primary tw-duration-300 tw-transition-[border-color] tw-cursor-pointer tw-relative tw-shadow-lg tw-shadow-neutral-700/10 tw-border-solid">
                <img :src="$backend(image.path)" class="tw-rounded tw-w-full tw-object-cover tw-h-full tw-duration-300">
            </div>
        </div>

        <div class="tw-w-full md:tw-px-5" >
            <div class="tw-border tw-w-full tw-py-3 tw-relative tw-h-[250px] md:tw-h-[300px] lg:tw-h-[380px] tw-border-solid tw-rounded-lg tw-border-neutral-200 dark:tw-border-neutral-600 tw-overflow-hidden">
                <img :src="$backend(active?.path)" class="tw-absolute tw-blur-lg tw-opacity-30 tw-top-0 tw-left-0 tw-object-cover tw-w-full tw-h-full">
                <img :src="$backend(active?.path)" class="hover:tw-scale-105 tw-duration-300 tw-relative tw-z-10 tw-object-contain tw-w-full tw-h-full ">
            </div>
        </div>

        <div class="tw-w-full tw-mt-5 tw-flex md:tw-hidden tw-flex-row tw-flex-wrap tw-gap-2">
            <div v-for="image in images" :key="image.id" @click="active = image" :class="[{'tw-border-2 tw-border-primary': active == 0}, {'tw-border tw-border-neutral-500/10': active != 0}]" class="tw-h-[75px] tw-w-[75px] tw-p-1 tw-rounded-lg tw-overflow-hidden tw-flex tw-items-center tw-justify-center mini-img-container hover:tw-border-primary tw-duration-300 tw-transition-[border-color] tw-cursor-pointer tw-relative tw-shadow-lg tw-shadow-neutral-700/10 tw-border-solid">
                <img :src="$backend(image.path)" class="tw-rounded tw-w-full tw-object-cover tw-h-full tw-duration-300">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['images'],

    data() {
        return {

            active: null,
        }
    },

    computed: {
        activeImage() {
            return this.images.filter(img => img.id == this.active)[0]
        }
    },

    mounted() {
        this.active = this.images.find(i => i.order == 1) || this.images[0];
        console.log(this.images);
    }
}
</script>

<style scoped>

.mini-img-container:hover img {
    transform: scale(1.05);
}

</style>