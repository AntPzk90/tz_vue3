<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 md:gap-12 gap-22 px-5"
  >
    <Loader v-if="store.products.length === 0" />
    <Card
      v-for="card in store.filteredProducts"
      :key="card.id"
      :card="card"
      v-else
    />
  </div>
</template>

<script setup>
import { useCatalogStore } from '../../store/catalogStore.js'

import Card from '../сard/Card.vue'
import Loader from '../loader/Loader.vue'

const store = useCatalogStore()
</script>

<style scoped>
@media (max-width: 640px) {
  .grid {
    gap: 20px;
  }
}
</style>
