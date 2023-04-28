<template>
  <div class="tw-px-3">
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
            :class="[
              column == 'actions' && '!tw-w-[100px]',
              column == 'name' && 'tw-w-[150px]',
            ]"
            scope="col"
            class="tw-px-6 tw-py-3 text-truncate"
          >
            <div class="tw-w-fit tw-flex tw-whitespace-nowrap">
              {{ column }}
            </div>
          </th>
        </tr>
      </thead>
      <tbody v-if="orders.length > 0">
        <tr
          v-for="item in orders"
          :key="item.id"
          :class="[orders[orders.length - 1].id == item.id && '!tw-border-b-0']"
          class="tw-bg-white dark:tw-bg-neutral-800 tw-border-b dark:tw-border-b-neutral-700 tw-whitespace-nowrap hover:tw-bg-gray-50 dark:hover:tw-bg-black/30"
        >
          <td class="tw-px-6 tw-py-4 tw-w-[20px]">
            {{ item.id }}
          </td>
          <th
            scope="row"
            class="tw-px-6 tw-py-2 tw-font-medium tw-w-[36px] tw-h-[36px] tw-whitespace-nowrap"
          >
            {{ item.date }}
          </th>
          <td class="tw-px-6 tw-py-4 tw-max-w-[200px] tw-truncate">
            {{ item.product }}
          </td>
          <td class="tw-px-6 tw-py-4 tw-max-w-[300px] tw-truncate">
            {{ item.name }}
          </td>
          <td class=" tw-px-6 tw-py-4 tw-space-x-3">
            {{ item.quantity }}
          </td>
          <td class=" tw-px-6 tw-py-4 tw-space-x-3">
            {{ item.price }} DH
          </td>
          <td class=" tw-px-6 tw-py-4 tw-space-x-3">
            <div v-if="item.status == 'process'" class="tw-text-blue-500 tw-flex tw-items-center tw-gap-2 tw-text-sm tw-w-fit tw-bg-blue-500/10 tw-rounded-lg tw-px-2 tw-py-1">
                <v-icon size="x-small">mdi-autorenew</v-icon>
                <span>
                    {{ item.status }}
                </span>
            </div>
            <div v-if="item.status == 'completed'" class="tw-text-green-500 tw-flex tw-items-center tw-gap-2 tw-text-sm tw-w-fit tw-bg-green-500/10 tw-rounded-lg tw-px-2 tw-py-1">
                <v-icon size="x-small">mdi-check</v-icon>
                <span>
                    {{ item.status }}
                </span>
            </div>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="5">
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
</template>

<script>
export default {
    props: ['isLoaded'],
    data() {
        return {
            columns: [ 'id', 'date', 'product','name', 'quantity', 'price', 'status' ],
            orders: [
                {
                    id: 1,
                    date: '2023-04-12',
                    product: 'Air Jordan 4 Blue',
                    name: 'Ahmed Karim',
                    quantity: 1,
                    price: 250,
                    status: 'process',
                    
                },
                {
                    id: 2,
                    date: '2023-04-12',
                    product: 'Air Jordan 4 Red',
                    name: 'Karim Ahmed',
                    quantity: 2,
                    price: 500,
                    status: 'process',
                    
                },
                {
                    id: 2,
                    date: '2023-04-12',
                    product: 'Air Jordan 4 Purple',
                    name: 'Aamri Abderrahman',
                    quantity: 1,
                    price: 270,
                    status: 'completed',
                    
                }
            ]
        }
    }
};
</script>

<style>
</style>