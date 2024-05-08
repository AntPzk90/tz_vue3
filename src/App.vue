<template>
  <Layout>
    <Home>
      <template v-slot:default>
        <Catalog></Catalog>
      </template>
    </Home>
  </Layout>
</template>

<script setup>
import { onMounted } from 'vue'

import { useCatalogStore } from './store/catalogStore.js'

import Home from './views/Home.vue'
import Layout from './views/Layout.vue'

import Catalog from './components/catalog/Catalog.vue'

const store = useCatalogStore()

onMounted(() => {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((res) => store.setProductsOnMounted(res))
    .catch((e) => {
      throw new Error(e)
    })
})
</script>
