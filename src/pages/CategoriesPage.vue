<template>
  <div class="streamy-page">
    <div class="page-title-container">
      <h1 class="title-name">Categories</h1>
      <div class="search-container">
        <Searchbar/>
      </div>
    </div>
    <div class="results-container">
      <CategoryIcon :key="category" v-for="category in categories" :category="category" :path="category" class="category-icon"/>
    </div>
  </div>
</template>


<script>
import Searchbar from '@/components/Searchbar.vue'
import CategoryIcon from '@/components/CategoryIcon.vue'

export default {
  name: 'CategoriesPage',
  components: {
    Searchbar,
    CategoryIcon
  },
  props: {
    songs: Array
  },
  data() {
    return {
      categories: [...new Set(this.songs.map(song => song.category))]
    }
  }
}
</script>

<style scoped style="scss">
.category-icon {
  cursor: pointer;
}
</style>
