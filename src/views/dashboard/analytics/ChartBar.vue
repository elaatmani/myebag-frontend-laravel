<template>
  <div class="!dark:tw-text-white tw-w-full">
    <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
    />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Colors, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title,Colors, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'ChartBar',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March', 'Avril' ],
        datasets: [ 
            { 
                label: 'Orders',
                // backgroundColor: ['#6354a4'],
                backgroundColor: [this.$primaryRaw.value.main],
                data: [40, 20, 12, 30] 
            },
            { 
                label: 'Customers',
                backgroundColor: [this.$secondaryRaw.value.main],
                data: [10, 15, 4, 40] 
            } 
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style>

</style>