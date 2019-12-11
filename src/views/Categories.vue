<template>
  <div class="categories">
    <CategoriesPage :songs="songs"/>
  </div>
</template>

<script>
import CategoriesPage from '@/pages/CategoriesPage.vue'


export default {
  name: 'categories',
  components: {
    CategoriesPage
  },
  props: {
    songs: Array
  }
}
</script>
