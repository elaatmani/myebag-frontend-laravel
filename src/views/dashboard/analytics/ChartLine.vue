<template>
  <div class="!dark:tw-text-white tw-w-full">
    <Line
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
    />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend } from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend)

export default {
  name: 'ChartLine',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March', 'Avril' ],
        datasets: [ 
            { 
                label: 'Orders',
                // backgroundColor: ['#6354a4'],
                backgroundColor: ['#34d399'],
                data: [40, 20, 12, 30] 
            },
            { 
                label: 'Customers',
                backgroundColor: ['#6354a4'],
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