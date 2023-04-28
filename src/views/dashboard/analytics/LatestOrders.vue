<template>
  <div>
    <div class="tw-flex tw-justify-between tw-items-center tw-p-3">
        <h1>Latest orders</h1>
        <v-hover v-slot="{isHovering, props}">
            <router-link v-bind="props" to="/dashboard/orders" class="tw-text-sm">
                <span>See all</span>
                <v-icon :class="isHovering ? 'tw-translate-x-1' : 'tw-translate-x-0'" class="tw-ml-1 tw-duration-300" size="small" >mdi-arrow-right</v-icon>
            </router-link>
        </v-hover>
    </div>

    <LatestOrdersTable :isLoaded="true" />
  </div>
</template>

<script>
import LatestOrdersTable from '@/views/dashboard/analytics/LatestOrdersTable'
export default {
    components: { LatestOrdersTable }
}
</script>

<style>

</style>