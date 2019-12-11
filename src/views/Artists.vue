<template>
  <div class="artists">
    <ArtistsPage :songs="songs"/>
  </div>
</template>

<script>
import ArtistsPage from '@/pages/ArtistsPage.vue'

export default {
  name: 'Arists',
  components: {
    ArtistsPage
  },
  props: {
    songs: Array
  }
}
</script>