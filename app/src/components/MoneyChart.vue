<template>
  <div>
    <canvas id="myChart" style="position: relative; height: 70vh; width: 35vw"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import Chart from 'chart.js/auto'

const { schools } = defineProps(['schools'])

let lessOneMil = ref(0),
  oneToTwoMil = ref(0),
  twoToThreeMil = ref(0),
  threeToFourMil = ref(0),
  fourToFiveMil = ref(0),
  moreThanFiveMil = ref(0)

onMounted(() => {
  lessOneMil.value = 0
  oneToTwoMil.value = 0
  twoToThreeMil.value = 0
  threeToFourMil.value = 0
  fourToFiveMil.value = 0
  moreThanFiveMil.value = 0
  watch(
    () => schools,
    () => {
      if (schools.length === 0) return
      for (let i = 0; i < schools.length; i++) {
        const value = schools[i].s1_label_b_fsf_tl_09_c4e_ctt
        if (value < 1000000) lessOneMil.value++
        else if (value < 2000000) oneToTwoMil.value++
        else if (value < 3000000) twoToThreeMil.value++
        else if (value < 4000000) threeToFourMil.value++
        else if (value < 5000000) fourToFiveMil.value++
        else moreThanFiveMil.value++
      }

      const myChart = document.getElementById('myChart')

      new Chart(myChart, {
        type: 'pie',
        data: {
          labels: [
            '<$1,000,000',
            '$1-$2,000,000',
            '$2-$3,000,000',
            '$3-$4,000,000',
            '$4-$5,000,000',
            '>$5,000,000',
          ],
          datasets: [
            {
              label: 'School Funding',
              data: [
                lessOneMil.value,
                oneToTwoMil.value,
                twoToThreeMil.value,
                threeToFourMil.value,
                fourToFiveMil.value,
                moreThanFiveMil.value,
              ],
              backgroundColor: [
                'rgb(255, 0, 0)',
                'rgb(255, 165, 0)',
                'rgb(255, 255, 0)',
                'rgb(0, 128, 0)',
                'rgb(0, 0, 255)',
                'rgb(128, 0, 128)',
              ],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              labels: {
                color: [
                  'rgb(255, 0, 0)',
                  'rgb(255, 165, 0)',
                  'rgb(255, 255, 0)',
                  'rgb(0, 128, 0)',
                  'rgb(0, 0, 255)',
                  'rgb(128, 0, 128)',
                ],
                font: {
                  size: 14,
                },
              },
            },
          },
          aspectRatio: 1,
        },
      })
    },
    { immediate: true },
  )
})
</script>

<style scoped></style>
