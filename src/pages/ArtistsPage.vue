<template>
  <div class="streamy-page">
    <div class="page-title-container">
      <h1 class="title-name">Artists</h1>
      <div class="search-container">
        <Searchbar/>
      </div>
    </div>
    <div class="results-container">
      <ArtistIcon :key="artist" v-for="artist in artists" :artist="artist" :path="artist" class="song-container"/>
    </div>
  </div>
</template>


<script>
import Searchbar from '@/components/Searchbar.vue'
import ArtistIcon from '@/components/ArtistIcon.vue'

export default {
  name: 'ArtistsPage',
  components: {
    Searchbar,
    ArtistIcon
  },
  props: {
    songs: Array
  },
  data() {
    return {
      artists: [...new Set(this.songs.map(song => song.speaker))]
    }
  }
}
</script>

<style scoped>

</style>
