<template>
  <div>
    <canvas id="myChart" style="position: relative; height: 70vh; width: 80vw"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import Chart from 'chart.js/auto'

const { schools } = defineProps(['schools'])

let percents = ref([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

onMounted(() => {
  percents.value = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  watch(
    () => schools,
    () => {
      if (schools.length === 0) return
      for (let i = 0; i < schools.length; i++) {
        const value = schools[i].s3_label_j_fsf_final
        if (value < 0.85) percents.value[0]++
        else if (value < 0.9) percents.value[1]++
        else if (value < 0.95) percents.value[2]++
        else if (value < 1) percents.value[3]++
        else if (value < 1.05) percents.value[4]++
        else if (value < 1.1) percents.value[5]++
        else if (value < 1.15) percents.value[6]++
        else if (value < 1.2) percents.value[7]++
        else if (value < 1.25) percents.value[8]++
        else percents.value[9]++
      }
      const myChart = document.getElementById('myChart')
      console.log(percents.value)
      new Chart(myChart, {
        type: 'bar',
        data: {
          labels: [
            '80-85%',
            '85-90%',
            '90-95%',
            '95-100%',
            '100-105%',
            '105-110%',
            '110-115%',
            '115-120%',
            '120-125%',
            '125%+',
          ],
          datasets: [
            {
              label: 'Number of Schools',
              data: percents.value,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(255, 69, 0)',
                'rgb(139, 0, 139)',
                'rgb(0, 128, 0)',
              ],
              borderColor: 'rgb(0, 0, 0)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                color: 'rgb(255, 165, 0)', // X-axis label color
                font: {
                  size: 17,
                  weight: 'bold',
                  family: 'Arial', // Custom font family
                },
              },
            },
            y: {
              ticks: {
                color: 'rgb(0, 100, 255)', // Y-axis label color
                font: {
                  size: 17,
                  weight: 'bold',
                  family: 'Arial', // Custom font family
                },
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: 'Number of Schools and the Percent of Funding Received that they Deserved',
              font: {
                size: 20,
                weight: 'bold',
                family: 'Arial', // Title font family
              },
              color: 'rgb(0, 250, 0)', // Title text color
            },
            legend: {
              labels: {
                color: 'rgb(255, 150, 200)', // Legend label color
                font: {
                  size: 16,
                  weight: 'bold',
                  family: 'Arial', // Legend font family
                },
              },
            },
          },
          elements: {
            title: {
              display: true,
              text: 'Number of Schools', // Chart label text
              font: {
                size: 18, // Custom font size for dataset label
                weight: 'bold',
                family: 'Arial', // Font family for dataset label
              },
              color: 'rgb(0, 255, 0)', // Custom color for dataset label
            },
          },
        },
      })
    },
    { immediate: true },
  )
})
</script>

<style scoped></style>
