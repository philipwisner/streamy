<template>
  <div class="library">
    <LibraryPage :songs="songs"/>
  </div>
</template>

<script>
import LibraryPage from '@/pages/LibraryPage.vue'

export default {
  name: 'library',
  components: {
    LibraryPage
  },
  props: {
    songs: Array
  }
}
</script>
