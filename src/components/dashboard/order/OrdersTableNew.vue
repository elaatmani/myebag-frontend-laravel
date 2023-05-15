<template>
  <div class="tw-pb-3">
    
        <div class="tw-mt-">
            <OrdersTableTabs />
        </div>
    <div class="tw-grid tw-grid-cols-12 mb-4 tw-duration-300 tw-p-2 tw-rounded-b-md tw-bg-neutral-400/10">
        <div class="tw-flex tw-items-center tw-gap-2 tw-justify-between tw-col-span-12 tw-max-h-fit" >
            <div class="tw-relative tw-w-full tw-max-w-[550pxd] tw-flex-grow-1">
                <icon icon="ph:magnifying-glass" class="tw-text-xl tw-text-neutral-400 tw-absolute tw-top-1/2 tw-left-3 -tw-translate-y-1/2" />
                <input class="tw-outline-none tw-h-[38px] tw-rounded-lg tw-text-sm tw-text-neutral-500 dark:tw-text-neutral-300 tw-bg-white dark:tw-bg-neutral-800 tw-duration-300 focus:tw-border-primary hover:tw-border-primary/40 dark:hover:tw-border-purple-500/40 dark:focus:tw-border-purple-500 tw-border-neutral-200 dark:tw-border-neutral-600 tw-border-solid tw-border tw-py-2 tw-px-3 tw-pl-10 tw-w-full" type="text" placeholder="Search for ID, Client, Status..." />
            </div>
            <div class="tw-flex md:tw-justify-end tw-justify-center tw-items-center tw-gap-2">
                <button @click="filters = !filters" class="tw-p-2 tw-h-[38px] tw-rounded-lg dark:tw-text-neutral-300 tw-bg-white dark:tw-bg-neutral-800 tw-border tw-border-solid tw-border-neutral-200 dark:tw-border-neutral-600 tw-flex tw-items-center tw-justify-center tw-gap-2">
                    <icon class="tw-text-lg" :icon="filters ? 'material-symbols:filter-list-off-rounded' : 'material-symbols:filter-list-rounded'" />
                    <span class="tw-hidden md:tw-block tw-text-sm">Filters</span>
                </button>
            </div>
        </div>

    <div class="tw-col-span-12 tw-grid tw-grid-cols-12 tw-max-h-0 tw-overflow-hidden tw-duration-500" :class="[filters && '!tw-max-h-[500px] tw-pt-2 !tw-overflow-visible']">
        <div class="tw-w-full tw-h-fit tw-flex tw-items-center tw-pt-2 tw-col-span-12 md:tw-col-span-6 tw-gap-2">
            <!-- Date filter -->
            <vue-date-picker class="tw-flex-1" :dark="dark" v-model="fromDate"></vue-date-picker>
            <p class="tw-text-xs">To</p>
            <vue-date-picker class="tw-flex-1" :dark="dark" v-model="toDate"></vue-date-picker>
        </div>
    </div>
    </div>
    <div class="tw-relative tw-min-h-fit dark:tw-border-neutral-700 tw-border !tw-rounded-lg tw-border-neutral-200/80 tw-max-h-[600px]   sm:tw-rounded-lg">
        
        <div v-if="!isLoaded" class="tw-min-h-[150px] tw-flex tw-items-center tw-justify-center">
            <loading-dash class="tw-scale-50"></loading-dash>
        </div>

        <div>
            <OrderCard />
        </div>
        
        <table v-if="isLoaded && false" class="tw-w-full  tw-relative tw-text-sm tw-text-left !tw-rounded-lg tw-text-gray-500 dark:tw-text-neutral-200">
            <thead class="tw-text-xs  tw-w-full tw-text-gray-700 dark:tw-text-gray-300 tw-uppercase tw-bg-gray-50 dark:tw-bg-neutral-900">
                <tr>
                    
                    <th v-for="column in columns" :key="column" :class="''" scope="col" class="tw-px-6 tw-py-3 text-truncate">
                        <div class="tw-w-fit tw-flex tw-whitespace-nowrap">
                            {{ column }}
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody v-if="items.length > 0">
                <tr v-for="item in items" :key="item.id" :class="[items[items.length - 1].id == item.id && '!tw-border-b-0']" class="tw-bg-white dark:tw-bg-neutral-800 tw-border-b dark:tw-border-b-neutral-700 tw-whitespace-nowrap hover:tw-bg-gray-50 dark:hover:tw-bg-black/30">
                    
                    <td class="tw-px-6 tw-py-2 tw-w-[20px]">
                        #{{ item.id }}
                    </td>
                    <td class="tw-px-6 tw-py-2 tw-w-[20px]">
                        <div class="tw-text-xs">
                            <p>{{ formatDate(item.created_at).date }}</p>
                            <!-- <p class="tw-text-xs">{{ formatDate(item.created_at).time }}</p> -->
                        </div>
                    </td>
                    <th scope="row" class="tw-px-6 tw-py-2 tw-font-light">
                        {{ item.user.firstname + ' ' + item.user.lastname }}
                    </th>
                    <td class="tw-px-6 tw-py-2">
                        <div :class="[item.payment_detail?.provider == 'cod' && 'dark:tw-text-yellow-300 dark:tw-bg-yellow-300/10 tw-text-yellow-600 tw-bg-yellow-600/10']" class="tw-flex tw-items-center tw-gap-2 tw-px-2 tw-py-1 tw-rounded tw-w-full tw-max-w-[100px] tw-justify-between dark:tw-text-emerald-300 dark:tw-bg-emerald-300/10 tw-text-emerald-600 tw-bg-emerald-600/10">
                            <p class="tw-text-sm">$ {{ item.payment_detail?.amount }}</p>
                            <icon class="tw-text-xl" :icon="getProviderIcon(item.payment_detail?.provider)" />
                        </div>
                    </td>
                    <td class="tw-px-6 tw-py-2 tw-space-x-3">
                        <!-- <div :class="[getStatus(item.status).text, getStatus(item.status).bg]" class="tw-flex tw-items-center tw-gap-2 tw-w-fit tw-px-2 tw-py-1 tw-rounded">
                            <icon :icon="getStatus(item.status).icon" />
                            <p>{{ getStatus(item.status).name }}</p>
                        </div> -->
                        <div :style="{color: item.order_status.text_color, background: item.order_status.background_color}" class="tw-flex tw-w-fit tw-text-xs tw-font-medium tw-h-[25px] tw-min-w-[20px] tw-items-center tw-rounded tw-px-2 tw-py-1">
                            {{ item.order_status.name }}
                        </div>
                    </td>
                    <td class="tw-px-6 tw-py-2 tw-space-x-3">
                        <OrderTableActions :key="item.id" :order="item" />
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
            <select v-model="paginationLimit"  class="tw-py-1 tw-outline-none  focus:tw-border-primary tw-text-sm tw-px-2 tw-w-[60px] tw-border tw-rounded-lg tw-border-solid tw-border-neutral-500">
                <option v-for="o in allowedLimit" :key="o" :value="o" class="dark:tw-text-black">
                    {{ o }}
                </option>
            </select>
            <v-icon size="x-small" class="tw-absolute tw-pointer-events-none tw-top-1/2 -tw-translate-y-1/2 tw-right-1">mdi-chevron-down</v-icon>
        </div>
        <div class="d-flex align-center">
            <div class="text-caption tw-h-fit mr-2 font-weight-bold tw-text-zinc-700 dark:tw-text-neutral-200">{{ prevRange + 1 }} - {{ (currentPage == pageCount ?  allItems.length : nextRange) }} of {{  allItems.length }} items </div>
            <div>
            <v-btn @click="currentPage = n" :ripple="false" variant="flat" class="mr-1" icon rounded="lg" :color="n == currentPage ? 'primary' : 'grey'" density="comfortable"  v-for="n in pageCount" :key="n">
                <span class="tw-text-white">{{ n }}</span>
            </v-btn>
            </div>
        </div>
    </div>
    <!-- /Pagination -->
    
  </div>
</template>

<script>
import order_status from '@/config/order_status'
import OrderTableActions from '@/components/dashboard/order/OrderTableActions'
import OrdersTableTabs from '@/components/dashboard/order/OrdersTableTabs'
import OrderCard from '@/components/dashboard/order/OrderCard'

export default {
    props: ['allItems', 'isLoaded'],

    components: {OrderTableActions, OrdersTableTabs, OrderCard},

    data() {
        return {
            order_status,
            allowedLimit: [5, 10, 20, 50, 100],
            currentPage: 1,
            paginationLimit: 10,

            filters: false,
            fromDatePopup: false,
            fromDate: new Date(),

            toDate: new Date(),

            columns: [ 'id', 'date', 'name', 'payment', 'status', 'actions' ],
        }
    },

    watch: {
        isLoaded() {
            if(this.items.length == 0) {
                this.$alert({
                    type: 'info',
                    body: 'Orders list is empty!'
                })
            }
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

        dark() {
            return this.$store.getters['theme/isDarkMode']
        }
    },

    methods: {
        getStatus(status) {
            status = ['process', 'shipped', 'completed'].includes(status) ? status : 'process';
            return this.order_status.find(i => i.value == status)
        },

        getProviderIcon(provider) {
            switch (provider) {
                case 'paypal':
                    return 'ph:paypal-logo';

                case 'stripe':
                    return 'ph:credit-card';

                case 'cod':
                    return 'fluent:money-hand-20-regular';

                default:
                    return 'ph:currency-circle-dollar';
            }
        },

        formatDate(d) {
            let date = d.split('T')[0]
            let time = d.split('T')[1].split('.')[0]

            // const months = ['']

            date = date.split('-').reverse().join('.')
            time = time.split(':')

            return  {date: date, time: `${time[0]}:${time[1]}`}
        }
    }
}
</script>

<style>

</style>