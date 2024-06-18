<script setup lang="ts">
const props = defineProps({
  width: Number,
  height: Number
})
const url = `https://picsum.photos/${props.width}/${props.height}/?random`
</script>

<template>
  <picture>
    <img :src="url" alt="Imagen aleatoria" />
  </picture>
</template>

<style scoped lang="scss"></style>
