<template>
  <div>
    <div class="tw-h-[500px] tw-w-full tw-p-5 tw-rounded tw-flex tw-flex-col">
        <router-link v-for="l in links" :key="l.id" to="/" class="tw-w-full">
            <div class="">
                {{ l.name }}
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { id: 1, name: 'All Categories' },
                { id: 2, name: 'Shoes' },
                { id: 3, name: 'Hoodies' },
                { id: 4, name: 'Watches' },
            ]
        }
    }
}
</script>

<style>

</style>