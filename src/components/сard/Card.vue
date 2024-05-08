<template>
  <div class="w-full">
    <article class="card">
      <div class="card__img-wrapper">
        <img
          :src="card.image"
          :alt="card.title"
          width="100"
          height="100"
          class="card__image"
        />
      </div>
      <div class="card__title">{{ card.title }}</div>
      <div class="card__description">
        {{ card.description.slice(0, 60) + '...' }}
      </div>
      <div class="card__price">&#36; {{ card.price }}</div>
    </article>
  </div>
</template>

<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
    default: () => {}
  }
})
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  padding-bottom: 16px;
  box-shadow: 0 2px 2px 0 #00000040;
  border: 1px solid #00000040;
  height: 100%;
}

.card__img-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 250px;
  margin-bottom: 7px;
}

.card__image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 80%;
  height: auto;
  max-height: 200px;
  object-fit: contain;
}

.card__title {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  padding: 0 12px;
  margin-bottom: 2px;
}

.card__description {
  box-sizing: border-box;
  font-weight: 300;
  padding: 0 12px;
  margin-bottom: 9px;
}

.card__price {
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  box-sizing: border-box;
  padding: 0 12px;
  margin-top: auto;
}
</style>
