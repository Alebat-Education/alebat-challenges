<script setup lang="ts">
const props = defineProps({
  item: Object
})
</script>

<template>
  <a href="/" class="home__a">
    <article class="home__article">
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
    </article>
  </a>
</template>

<style scoped>
.home {
  display: flex;
}
</style>
