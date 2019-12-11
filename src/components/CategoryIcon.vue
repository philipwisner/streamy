<template>
  <div class="category-container">
    <img v-if="category == 'Relaxation'" src="../assets/relaxation.svg" alt="category">
    <img v-if="category == 'Meditation'" src="../assets/meditation.svg" alt="category">
    <img v-if="category == 'Breathing'" src="../assets/breathing.svg" alt="category">
    <div class="category-info">
      <p class="name">{{category}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CategoryIcon',
  // components: {
  //   CategoryList
  // },
  props: {
    category: String
  }
}
</script>

<style scoped lang="scss">
.category-container {
  width: 170px;
  margin: 15px;
  img {
    width: 170px;
  }
}
.category-info {
  .name {
    font-weight: 700;
    color: white;
    font-size: 16px;
    margin: 5px 0;
    text-align: center;
  }
}
</style>
