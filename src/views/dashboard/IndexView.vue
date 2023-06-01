<template>
  <div>
    <h2 class="tw-mb-3 tw-text-lg">Dashboard</h2>
    <div class="tw-w-full dark:tw-bg-neutral-800 tw-rounded-lg tw-bg-white">
      
      <div class="tw-grid tw-grid-cols-12 tw-p-3 tw-gap-2">
        <div class="tw-col-span-12 tw-grid tw-grid-cols-12 tw-max-h-0 tw-overflow-hidden tw-duration-500" :class="[filters && '!tw-max-h-[500px] !tw-overflow-visible']">
            <div class="tw-w-full tw-h-fit tw-flex tw-items-center tw-pt-2 tw-col-span-12 md:tw-col-span-6 tw-gap-2">
                <!-- Date filter -->
                <vue-date-picker :dark="dark" v-model="date" @cleared="cleared" @update:model-value="onDateRangePicked" :format="dateFilterFormat" range :preset-ranges="presetRanges">
                    <template #yearly="{ label, range, presetDateRange }">
                        <span @click="presetDateRange(range)">{{ label }}</span>
                    </template>
                </vue-date-picker>
                <!-- <vue-date-picker class="tw-flex-1" :dark="dark" v-model="fromDate"></vue-date-picker>
                <p class="tw-text-xs">To</p>
                <vue-date-picker class="tw-flex-1" :dark="dark" v-model="toDate"></vue-date-picker> -->
            </div>
        </div>
        <div class="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3 tw-h-[100px] tw-overflow-hidden dark:tw-bg-blue-600 tw-rounded-md tw-bg-blue-400">
          <div class="tw-p-5 tw-relative tw-text-white">
            <h1 class="tw-text-sm tw-font-medium">Orders</h1>
            <div class="tw-text-whit tw-text-xl tw-font-bold">
              <number :from="0" :to="orders.length" :duration="2" easing="Power1.Expo" />
            </div>
            <div class="tw-absolute tw-text-white tw-top-1/2 -tw-translate-y-1/2 tw-right-0 tw-text-[80px] tw-opacity-30">
              <icon icon="ph:package" />
            </div>
          </div>
        </div>
        <div class="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3 tw-overflow-hidden tw-h-[100px] dark:tw-bg-green-600 tw-rounded-md tw-bg-green-400">
          <div class="tw-p-5 tw-relative  tw-text-white">
            <h1 class="tw-text-sm tw-font-medium">Total earnings</h1>
            <div class="tw-text-whit tw-text-xl tw-font-bold">
              $<number :from="0" :to="earnings" :duration="2" easing="Power1.Expo" />
            </div>
            <div class="tw-absolute tw-text-white tw-top-1/2 -tw-translate-y-1/2 tw-right-0 tw-text-[80px] tw-opacity-30">
              <icon icon="ph:currency-circle-dollar" />
            </div>
          </div>
        </div>
        <div class="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3 tw-h-[100px] tw-overflow-hidden dark:tw-bg-red-600 tw-rounded-md tw-bg-red-400">
          <div class="tw-p-5 tw-relative tw-text-white">
            <h1 class="tw-text-sm tw-font-medium">Profit</h1>
            <div class="tw-text-whit tw-text-xl tw-font-bold">
              $<number :from="0" :to="profit" :duration="2" easing="Power1.Expo" />
            </div>
            <div class="tw-absolute tw-text-white tw-top-1/2 -tw-translate-y-1/2 tw-right-0 tw-text-[80px] tw-opacity-30">
              <icon icon="ph:currency-circle-dollar" />
            </div>
          </div>
        </div>
        <div class="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3 tw-h-[100px] tw-overflow-hidden dark:tw-bg-orange-600 tw-rounded-md tw-bg-orange-400">
          <div class="tw-p-5 tw-relative tw-text-white">
            <h1 class="tw-text-sm tw-font-medium">Customers</h1>
            <div class="tw-text-whit tw-text-xl tw-font-bold">
              <number :from="0" :to="users.length" :duration="2" easing="Power1.Expo" />
            </div>
            <div class="tw-absolute tw-text-white tw-top-1/2 -tw-translate-y-1/2 tw-right-0 tw-text-[80px] tw-opacity-30">
              <icon icon="ph:user" />
            </div>
          </div>
        </div>
      </div>

      <div class="tw-grid tw-grid-cols-12 tw-p-3">
        <div class="md:tw-col-span-6 tw-col-span-12">
          <ChartBar />
        </div>
        <div class="md:tw-col-span-6 tw-col-span-12">
          <ChartLine />
        </div>
      </div>

      <LatestOrders v-if="false" />

    </div>

  </div>
</template>

<script>
import LatestOrders from '@/views/dashboard/analytics/LatestOrders'
import ChartBar from '@/views/dashboard/analytics/ChartBar'
import ChartLine from '@/views/dashboard/analytics/ChartLine'
import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths, subDays } from 'date-fns'
export default {
  components: { LatestOrders, ChartBar, ChartLine },

  data() {
    return {
      filters: true,
      fromDate: new Date(),
      toDate: new Date(),
      date: ['', ''],

      dateFilterFormat: 'yyyy-MM-dd',
      formattedStartDate: '',
      formattedEndDate: '',
      presetRanges: [
              { label: 'Today', range: [new Date(), new Date()] },
              { label: 'Yesterday', range: [subDays(new Date(), 1), subDays(new Date(), 1)] },
              { label: 'This month', range: [startOfMonth(new Date()), endOfMonth(new Date())] },
              {
                  label: 'Last month',
                  range: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
              },
              { label: 'This year', range: [startOfYear(new Date()), endOfYear(new Date())] },
          ]
    }
  },

  computed: {
    dark() {
            return this.$store.getters['theme/isDarkMode']
        },

      filterStartDate() {
        return this.date[0]
      },

      filterEndDate() {
        return this.date[1]
      },

      profit() {
        return this.orders.reduce((s, o) => {
          o.order_items.forEach(
            i => {
              if(o.order_status.mark_as_paid) {
                s += (i.product_variation.price - i.product_variation.buying_price) * i.quantity
              }
            }
          )
          return s
        } ,0);
      },

    orders() {
      return this.$store.getters['order/orders']
      .filter(o => {
        const createdAt = new Date(o.created_at);
        /* eslint-disable */
        const createdAtDay = createdAt.getDate();
        const createdAtMonth = createdAt.getMonth();
        const createdAtYear = createdAt.getFullYear();

        if (!!this.filterStartDate) {
            const startDay = this.filterStartDate.getDate();
            const startMonth = this.filterStartDate.getMonth();
            const startYear = this.filterStartDate.getFullYear();

            if (
                createdAtYear < startYear ||
                (createdAtYear === startYear && createdAtMonth < startMonth) ||
                (createdAtYear === startYear && createdAtMonth === startMonth && createdAtDay < startDay)
            ) {
                return false;
            }
        }


        if (!!this.filterEndDate) {
            const endDay = this.filterEndDate.getDate();
            const endMonth = this.filterEndDate.getMonth();
            const endYear = this.filterEndDate.getFullYear();

            if (
                createdAtYear > endYear ||
                (createdAtYear === endYear && createdAtMonth > endMonth) ||
                (createdAtYear === endYear && createdAtMonth === endMonth && createdAtDay > endDay)
            ) {
                return false;
            }
        }
        return true;
      })
    },

    users() {
      return this.$store.getters['user/users']
      .filter(o => {

        if(o.is_admin != 0) {
          return false;
        }

        const createdAt = new Date(o.created_at);
        /* eslint-disable */
        const createdAtDay = createdAt.getDate();
        const createdAtMonth = createdAt.getMonth();
        const createdAtYear = createdAt.getFullYear();

        if (!!this.filterStartDate) {
            const startDay = this.filterStartDate.getDate();
            const startMonth = this.filterStartDate.getMonth();
            const startYear = this.filterStartDate.getFullYear();

            if (
                createdAtYear < startYear ||
                (createdAtYear === startYear && createdAtMonth < startMonth) ||
                (createdAtYear === startYear && createdAtMonth === startMonth && createdAtDay < startDay)
            ) {
                return false;
            }
        }


        if (!!this.filterEndDate) {
            const endDay = this.filterEndDate.getDate();
            const endMonth = this.filterEndDate.getMonth();
            const endYear = this.filterEndDate.getFullYear();

            if (
                createdAtYear > endYear ||
                (createdAtYear === endYear && createdAtMonth > endMonth) ||
                (createdAtYear === endYear && createdAtMonth === endMonth && createdAtDay > endDay)
            ) {
                return false;
            }
        }

        return true;
      })
    },

    products() {
      return this.$store.getters['product/products']
      
    },

    earnings() {
      let total = 0;
      this.orders.forEach(o => {
        if(o.order_status.mark_as_paid) {
          total += o.total
        }
      });
      return total
    }
  },

  methods: {
    onDateRangePicked(range) {
        if(range) {
            this.formattedStartDate = range[0];
            this.formattedEndDate = range[1];
        } else {
            this.formattedStartDate = null;
            this.formattedEndDate = null;
        }
    },
    cleared() {
        this.date = ['', '']
    }
  }

}
</script>

<style>

</style>