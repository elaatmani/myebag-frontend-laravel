<template>
  <div class="tw-min-h-screen tw-max-h-[1000px]">
    <div class="my-5">
      <h1
        class="tw-text-neutral-600 dark:tw-text-neutral-200 md:tw-text-xl tw-text-lg tw-font-medium"
      >
        Orders
      </h1>
      <p class="tw-text-neutral-500 dark:tw-text-neutral-400 tw-text-sm">
        Check your past orders.
      </p>
    </div>
    <div v-if="false" class="tw-my-3 tw-flex tw-items-center tw-gap-3">
      <div
        @click="handleChange(s)"
        v-for="s in statuses"
        :key="s.id"
        :style="{
          color:
            selected == s.id
              ? s.text_color
              : 'dark:tw-text-neutral-100 tw-text-neutral-700',
          background:
            selected == s.id ? s.background_color : 'tw-bg-transparent',
          borderColor: selected == s.id ? s.background_color : 'transparent',
        }"
        class="tw-flex tw-items-center tw-gap-2 tw-duration-300 tw-cursor-pointer tw-py-1 tw-px-2 tw-rounded-full tw-border tw-border-solid"
      >
        <!-- <icon icon="ph:spinner-gap" /> -->
        <span class="tw-text-sm tw-capitalize">{{
          s.name.toLocaleLowerCase()
        }}</span>
      </div>
      <!-- <div @click="selected = 1" :class="[selected == 1 && '!tw-text-neutral-900 dark:tw-bg-blue-400 tw-bg-blue-300']" class="tw-flex tw-items-center tw-gap-2 tw-duration-300 tw-cursor-pointer tw-py-1 tw-px-2 tw-rounded-full tw-border tw-border-solid tw-border-blue-400 tw-text-blue-500 dark:tw-text-blue-400">
            <icon icon="ph:spinner-gap" />
            <span class="tw-text-sm">In Progress</span>
        </div>
        <div @click="selected = 2" :class="[selected == 2 && '!tw-text-neutral-900 dark:tw-bg-gray-400 tw-bg-gray-300']" class="tw-flex tw-items-center tw-gap-2 tw-duration-300 tw-cursor-pointer tw-py-1 tw-px-2 tw-rounded-full tw-border tw-border-solid tw-border-gray-400 tw-text-gray-500 dark:tw-text-gray-400">
            <icon icon="ph:truck" />
            <span class="tw-text-sm">Shipping now</span>
        </div>
        <div @click="selected = 3" :class="[selected == 3 && '!tw-text-neutral-900 dark:tw-bg-green-400 tw-bg-green-300']" class="tw-flex tw-items-center tw-gap-2 tw-duration-300 tw-cursor-pointer tw-py-1 tw-px-2 tw-rounded-full tw-border tw-border-solid tw-border-green-400 tw-text-green-500 dark:tw-text-green-400">
            <icon icon="ph:check-circle" />
            <span class="tw-text-sm">Completed</span>
        </div> -->
    </div>

    <div>
      <table
        v-if="isLoaded"
        class="tw-w-full tw-relative tw-text-sm tw-text-left !tw-rounded-lg tw-text-gray-500 dark:tw-text-neutral-200"
      >
        <thead
          class="tw-text-xs tw-w-full tw-text-gray-700 dark:tw-text-gray-300 tw-uppercase tw-bg-gray-50 dark:tw-bg-neutral-900"
        >
          <tr>
            <th
              v-for="column in columns"
              :key="column"
              :class="''"
              scope="col"
              class="tw-px-6 tw-py-3 text-truncate"
            >
              <div class="tw-w-fit tw-flex tw-whitespace-nowrap">
                {{ column }}
              </div>
            </th>
          </tr>
        </thead>
        <tbody v-if="items.length > 0">
          <tr
            v-for="item in items"
            :key="item.id"
            :class="[items[items.length - 1].id == item.id && '!tw-border-b-0']"
            class="tw-bg-white dark:tw-bg-neutral-800 tw-border-b dark:tw-border-b-neutral-700 tw-whitespace-nowrap hover:tw-bg-gray-50 dark:hover:tw-bg-black/30"
          >
            <td class="tw-px-6 tw-py-2 tw-w-[20px]">#{{ item.id }}</td>
            <td class="tw-px-6 tw-py-2 tw-w-[20px]">
              <div class="tw-text-xs">
                <p>{{ formatDate(item.created_at).date }}</p>
                <!-- <p class="tw-text-xs">{{ formatDate(item.created_at).time }}</p> -->
              </div>
            </td>
            <th scope="row" class="tw-px-6 tw-py-2 tw-font-light">
              {{ item.user.firstname + " " + item.user.lastname }}
            </th>
            <td class="tw-px-6 tw-py-2">
              <div
                class="tw-flex tw-items-center tw-gap-2 tw-px-2 tw-py-1 tw-rounded tw-w-full tw-max-w-[100px] tw-justify-between dark:tw-text-emerald-300 tw-text-emerald-600"
              >
                <p class="tw-text-sm">$ {{ item.payment_detail?.amount }}</p>
                <!-- <icon class="tw-text-xl" :icon="getProviderIcon(item.payment_detail?.provider)" /> -->
              </div>
            </td>
            <td class="tw-px-6 tw-py-2 tw-space-x-3">
              <!-- <div :class="[getStatus(item.status).text, getStatus(item.status).bg]" class="tw-flex tw-items-center tw-gap-2 tw-w-fit tw-px-2 tw-py-1 tw-rounded">
                            <icon :icon="getStatus(item.status).icon" />
                            <p>{{ getStatus(item.status).name }}</p>
                        </div> -->
              <div
                :style="{
                  color: item.order_status_user.text_color,
                  background: item.order_status_user.background_color,
                }"
                class="tw-flex tw-w-fit tw-text-xs tw-font-medium tw-h-[25px] tw-min-w-[20px] tw-items-center tw-rounded tw-px-2 tw-py-1"
              >
                {{ item.order_status_user.name }}
              </div>
            </td>
            <td class="tw-px-6 tw-py-2 tw-space-x-3">
              <div>
                <button
                @click="showItems(item)"
                  class="tw-text-blue-500 dark:tw-text-blue-400 tw-underline"
                >
                  See Details
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td :colspan="columns.length">
              <div
                class="tw-flex tw-flex-col tw-items-center tw-gap-2 tw-p-5 tw-min-h-[150px] tw-justify-center"
              >
                <!-- <h1 class="tw-text-sm tw-font-medium">Category list is empty!</h1> -->
                <img
                  class="tw-w-[200px]"
                  :src="$frontend('assets/images/illustrations/not-found.svg')"
                  alt=""
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <OrderDetails />
  </div>
</template>

<script>
import User from "@/api/User";
import OrderDetails from '@/components/dashboard/order/OrderDetails'
// import Order from '@/api/Order'

export default {
  components: {OrderDetails},

  data() {
    return {
      selected: 1,
      isLoaded: false,
      orders: [],

      columns: ["id", "date", "name", "total amount", "status", "actions"],
      items: [],
    };
  },

  computed: {
    statuses() {
      return this.$store.getters["app/orderStatuses"];
    },
  },

  methods: {
    getOrders() {
      this.isLoaded = false;
      User.orders()
        .then((res) => {
          if (res.data.code == "SUCCESS") {
            this.orders = res.data.data.orders;
            this.items = this.orders;
          }
        }, this.$handleApiError)
        .finally(() => {
          this.isLoaded = true;
        });
    },
    handleChange(status) {
      console.log(status);
      this.selected = status.id;
    },
    showItems(order) {
      this.$store.dispatch("order/setOrderDetails", order);
      this.$store.dispatch("order/setIsOrderDetailsActive", true);
    },
    primaryImage(images) {
      let img = false;
      images.forEach((image) => {
        if (image.order == 1) {
          console.log(image);
          img = image;
        }
      });

      return img;
    },
    formatDate(d) {
      let date = d.split("T")[0];
      let time = d.split("T")[1].split(".")[0];

      // const months = ['']

      date = date.split("-").reverse().join(".");
      time = time.split(":");

      return { date: date, time: `${time[0]}:${time[1]}` };
    },
  },

  mounted() {
    this.getOrders();
    console.log(this.statuses);
  },
};
</script>

<style>
</style>