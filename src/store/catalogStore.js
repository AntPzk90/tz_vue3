import { defineStore } from 'pinia'

export const useCatalogStore = defineStore('catalogStore', {
  state: () => ({
    products: [],
    filters: {}
  }),
  getters: {
    filteredProducts() {
      if (Object.keys(this.filters).length === 0) {
        return this.products
      }

      const filteredForRating = this.products.filter((product) => {
        return product.rating.rate <= parseInt(this.filters.rate)
      })

      function filterProductsByCategories(products, categories) {
        if (!categories || categories.length === 0) return products

        return products.filter((product) => {
          return categories.includes(product.category)
        })
      }

      const filteredProducts = filterProductsByCategories(
        filteredForRating,
        this.filters.categories
      )

      return filteredProducts
    }
  },
  actions: {
    setFilters(params) {
      this.filters = { ...params }
    },
    setProductsOnMounted(products) {
      this.products = products
    }
  }
})
