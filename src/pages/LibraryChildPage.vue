<template>
  <div class="streamy-child-page">
    <div class="child-title-container">
      <div class="search-container">
        <Searchbar/>
      </div>
    </div>
    <div class="song-title-container">
      <img src="../assets/song-box.svg" alt="Song">
      <div class="info-content">
        <h1>{{song[0].label}}</h1>
        <p class="artist">{{song[0].speaker}}</p>
        <p>{{song[0].category}}</p>
      </div>
    </div>
    <h2 class="results-title">DESCRIPTION</h2>
    <p class="description">{{song[0].description}}</p>
  </div>
</template>

<script>
import Searchbar from '@/components/Searchbar.vue'

export default {
  name: 'LibraryChildPage',
  components: {
    Searchbar,
  },
  props: {
    songs: Array,
  },
  data() {
    return {
      song: this.songs.filter(song => {
        return song.id == this.$route.params.id;
      })
    }
  },
}
</script>

<style lang="scss">
.song-title-container {
  padding: 15px 40px;
  display: flex;
  align-items: center;
  img {
    width: 180px;
    margin-right: 25px;
    flex: 0 0 auto;
  }
  .info-content {
    h1 {
      text-transform: capitalize;
      font-size: 28px;
      flex: 1 1 auto;
    }
    p {
      font-size: 17px;
      color: #C2C2C2;
      margin: 6px 0;
      color: white;
      &.artist {
        font-size: 22px;
      }
    }
  }
}
.child-results-container {
  padding: 10px 40px;
  display: flex;
  flex-wrap: wrap;
}
.results-title {
  padding: 0 50px;
  font-size: 16px;
  letter-spacing: 1.5px;
  margin-top: 30px;
  font-weight: 700;
}
.description {
  padding: 0 50px;
  margin-top: 20px;
  font-weight: 100;
}
</style>