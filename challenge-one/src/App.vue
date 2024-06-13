<script setup lang="ts">
import items from './data/items.json'
import arrayItems from './components/arrayItems/arrayItems.vue'
</script>

<template>
  <section class="home">
    <arrayItems :items="items" />
  </section>
</template>

<style scoped></style>
