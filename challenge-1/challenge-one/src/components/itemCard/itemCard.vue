<script setup lang="ts">
const props = defineProps({
  item: Object
})
</script>

<template>
  <article class="card">
    <router-link :to="{ name: 'ItemDetail', params: { id: item.id } }">
      <h2>{{ item.name }}</h2>
      <p>{{ item.shortDescription }}</p>
    </router-link>
  </article>
</template>

<style scoped lang="scss">
.card {
  min-width: 10rem;
  max-width: 15rem;
  box-sizing: border-box;
  padding: 0.5rem;
  border: 0.1rem solid transparent;
  border-radius: 0.5rem;
  transition: border-color 0.15s;
}
.card:hover {
  padding: 0;
  padding: 0.5rem;
  border: 0.1rem solid #3dd68c;
}
</style>
