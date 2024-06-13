<script setup lang="ts">
import itemCard from '../itemCard/itemCard.vue'

const props = defineProps({
  items: Array
})
</script>

<template>
  <section v-for="item in props.items" :key="item.id" class="list">
    <itemCard :item="item" />
  </section>
</template>

<style scoped>
.list {
  display: flex;
}
</style>
