<script setup lang="ts">
import itemCard from '../itemCard/itemCard.vue'

const props = defineProps({
  items: Array
})
</script>

<template>
  <section class="list">
    <template v-for="item in props.items" :key="item.id">
      <itemCard :item="item" />
    </template>
  </section>
</template>

<style scoped lang="scss">
.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 532px) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
