<template>
  <div class="container mx-auto py-5 flex">
    <div class="w-1/4">
      <Filter></Filter>
    </div>
    <div class="w-3/4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import Filter from '../components/filter/Filter.vue'
</script>

<style scoped></style>
