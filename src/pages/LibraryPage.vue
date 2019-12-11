<template>
  <div class="streamy-page">
    <div class="page-title-container">
      <h1 class="title-name">Library</h1>
      <div class="search-container">
        <Searchbar/>
      </div>
    </div>
    <div class="results-container">
      <SongIcon :key="song.index" v-for="song in songs" :song="song" class="song-container"/>
    </div>
  </div>
</template>


<script>
import Searchbar from '@/components/Searchbar.vue'
import SongIcon from '@/components/SongIcon.vue'

export default {
  name: 'LibraryPage',
  components: {
    Searchbar,
    SongIcon
  },
  props: {
    songs: Array
  }
}
</script>

<style lang="scss">
.streamy-page {
  padding: 30px;
  color: white;
  padding-bottom: 50px;
}
.page-title-container {
  display: flex;
  align-items: center;
  margin: 10px 0 40px 10px;
  .title-name {
    flex: 0 0 auto;
  }
  .search-container {
    flex: 1 1 auto;
    text-align: right;
  }
}
.results-container {
  display: flex;
  flex-wrap: wrap;
}

</style>
