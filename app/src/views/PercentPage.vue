<template>
  <main>
    <FrontHeader />
    <InteractHeader>
      <RouterLink
        to="/"
        class="m-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
      >
        <button>Back</button>
      </RouterLink>
      <RouterLink
        to="/money"
        class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
      >
        <button>Money</button>
      </RouterLink>
    </InteractHeader>
    <div class="bg-red-700 flex flex-wrap justify-center"><PercentChart :schools="schools" /></div>
  </main>
</template>

<script setup>
import FrontHeader from '@/components/FrontHeader.vue'
import InteractHeader from '@/components/InteractHeader.vue'
import PercentChart from '@/components/PercentChart.vue'
import { onMounted, ref } from 'vue'
let schools = ref([])
async function getSchools() {
  try {
    let res = await fetch('https://data.cityofnewyork.us/resource/ven4-h25u.json?$limit=1577')
    let data = await res.json()
    schools.value = data
  } catch (error) {
    alert('Failed to fetch schools data.')
  }
}
onMounted(() => {
  getSchools()
})
</script>

<style scoped></style>
