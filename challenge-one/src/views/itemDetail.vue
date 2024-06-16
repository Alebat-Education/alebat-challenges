<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import bannerTop from '../components/bannerTop/bannerTop.vue'

const route = useRoute()
const id = route.params.id
console.log('id:')
console.log(id)

const itemDetails = ref()

const fetchItemDetails = async (id) => {
  try {
    const response = await fetch('/data/items.json')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data.find((item) => item.id == id)
  } catch (error) {
    console.error('Error fetching items:', error)
    throw error
  }
}

onMounted(async () => {
  itemDetails.value = await fetchItemDetails(id)
  console.log('itemDetails.value:')
  console.log(itemDetails.value)
})
</script>

<template>
  <section class="item" v-if="itemDetails">
    <bannerTop :width="1920" :height="300" />
    <article class="item__content">
      <h2>{{ itemDetails.name }}</h2>
      <p>{{ itemDetails.longDescription }}</p>
    </article>
  </section>
</template>

<style scoped lang="scss">
.item {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 25%;
  }
}
</style>
