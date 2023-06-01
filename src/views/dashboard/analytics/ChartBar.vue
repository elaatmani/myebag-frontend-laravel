<template>
  <div class="!dark:tw-text-white tw-w-full">
    <Bar id="my-chart-id" :options="chartData.chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Colors,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Colors,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "ChartBar",
  components: { Bar },
  data() {
    return {
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]
    };
  },

  computed: {
    orders() {
      return this.$store.getters["order/orders"];
    },
    users() {
      return this.$store.getters['user/users']
      .filter(o => {

        if(o.is_admin != 0) {
          return false;
        }
        return true;
      })
    },

    chartData() {
      return {
        labels: this.labels,
        datasets: this.datasets,
        chartOptions: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                // forces step size to be 50 units
                stepSize: 1
              }
            },
          },
        },
      };
    },

    labels() {
      return this.getMonthlyOrders().labels;
    },
    datasets() {
      return [
        {
          label: "Orders",
          data: this.getMonthlyOrders().values,
          backgroundColor: [this.$primaryRaw.value.main],
          borderWidth: 1,
        },
        {
          label: "Users",
          data: this.getMonthlyUsers().values,
          backgroundColor: [this.$secondaryRaw.value.main],
          borderWidth: 1,
        },
      ];
    },
  },

  methods: {
    getMonthlyOrders() {
      
      const monthlyOrders = new Array(12).fill(0);

      this.orders.forEach((order) => {
        const month = new Date(order.created_at).getMonth();
        monthlyOrders[month] += 1;
      });

      const labels = this.months.map((month) => month.substring(0, 3));
      const values = monthlyOrders;

      return { labels, values };
    },
    getMonthlyUsers() {
      const monthlyUsers = new Array(12).fill(0);

      this.users.forEach((user) => {
        const month = new Date(user.created_at).getMonth();
        monthlyUsers[month] += 1;
      });

      const labels = this.months.map((month) => month.substring(0, 3));
      const values = monthlyUsers;

      return { labels, values };
    },
  },
};
</script>

<style>
</style>