<template>
  <div class="library">
    <LibraryPage :songs="songs" @play-audio="playAudio"/>
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
  },
  methods: {
    playAudio(song) {
      window.alert('play', song[0].label);
    }
  }
}
</script>
