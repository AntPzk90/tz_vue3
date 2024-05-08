<template>
  <form
    :class="{ 'filter--hide': isFilterVisible }"
    @change="formChangeHandler"
    class="filter px-5"
  >
    <span @click="toggleFilter" class="filter-toggle-button" type="button">
      <svg
        class="w-6 h-6 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        v-if="isFilterVisible"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
      <svg
        class="text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        v-else
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </span>
    <fieldset class="filter__fieldset">
      <div class="filter__sub-title">Rate</div>
      <div
        class="flex items-center filter__wrapper"
        v-for="rateItem in rate"
        :key="rateItem"
      >
        <input
          type="radio"
          :id="rateItem"
          class="form-checkbox h-5 w-5 text-indigo-600 filter__input"
          :value="rateItem"
          name="rate"
          v-model="checkedItemsRate['rate']"
        />
        <label :for="rateItem" class="ml-2 filter__label">{{ rateItem }}</label>
      </div>
    </fieldset>
    <fieldset class="filter__fieldset">
      <div class="filter__sub-title">Category</div>
      <div
        class="flex items-center filter__wrapper"
        v-for="categoryItem in categories"
        :key="categoryItem"
      >
        <input
          type="checkbox"
          :id="categoryItem"
          class="form-checkbox h-5 w-5 text-indigo-600 filter-input"
          :value="categoryItem"
          name="category"
          v-model="checkedItemsCategory"
        />
        <label :for="categoryItem" class="ml-2 filter__label">{{
          categoryItem
        }}</label>
      </div>
    </fieldset>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCatalogStore } from '../../store/catalogStore.js'
import { FILTER_LIST } from '../../constants/constants.js'
const { rate, categories } = FILTER_LIST

const router = useRouter()
const store = useCatalogStore()

const checkedItemsRate = ref({ rate: 5 })
const checkedItemsCategory = ref([])
const isFilterVisible = ref(true)

const toggleFilter = () => {
  isFilterVisible.value = !isFilterVisible.value
  console.log(document.body, isFilterVisible.value)
  if (!isFilterVisible.value) document.body.style.overflow = 'hidden'
  if (isFilterVisible.value) document.body.style = null
}

const formChangeHandler = (event) => {
  event.preventDefault()
  const routerQuery = router.currentRoute.value.query

  const categoriesValues = {
    categories: Array.from(checkedItemsCategory.value)
  }

  router.push({
    query: {
      ...routerQuery,
      ...checkedItemsRate.value,
      ...categoriesValues
    }
  })

  store.setFilters({ ...checkedItemsRate.value, ...categoriesValues })
}
</script>

<style scoped>
.filter__wrapper {
  margin-bottom: 15px;
}

.filter__fieldset {
  margin-bottom: 34px;
}

.filter__sub-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 15px;
}

.filter__label {
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
}

.filter__label:first-letter {
  text-transform: uppercase;
}

.filter-toggle-button {
  display: none;
}

@media (max-width: 767px) {
  .filter-toggle-button {
    position: absolute;
    right: 20px;
    top: 5px;
    display: block;
    width: 24px;
    height: 24px;
  }

  .filter {
    position: fixed;
    z-index: 3;
    height: 100vh;
    width: 100vw;
    background-color: #eee;
    margin-top: -20px;
    transition: transform ease 0.2s;
  }

  .filter--hide {
    transform: translateX(-75%);
  }
}
</style>
