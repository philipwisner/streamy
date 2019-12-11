<template>
  <div class="streamy-child-page">
    <div class="child-title-container">
      <div class="search-container">
        <Searchbar/>
      </div>
    </div>
    <div class="category-title-container">
      <img src="../assets/artist-box.svg" alt="Artist">
      <div class="info-content">
        <h1>{{artistName}}</h1>
        <p>{{songsList.length}} Tracks</p>
      </div>
    </div>
    <h2 class="results-title">SONGS</h2>
    <div class="child-results-container">
      <SongIcon :key="song.index" v-for="song in songsList" :song="song" class="song-container"/>
    </div>
  </div>
</template>

<script>
import Searchbar from '@/components/Searchbar.vue'
import SongIcon from '@/components/SongIcon.vue'

export default {
  name: 'ArtistsChildPage',
  components: {
    Searchbar,
    SongIcon
  },
  props: {
    songs: Array,
  },
  data() {
    return {
      artistName: this.$route.params.id.match(/[A-Z][a-z]+|[0-9]+/g).join(" "),
      songsList: this.songs.filter(song => {
        return song.speaker.replace(/\s/g, '') == this.$route.params.id.replace(/\s/g, '');
      })
    }
  },
}
</script>

<style lang="scss">
.streamy-child-page {
  color: white;
}
.child-title-container {
  display: flex;
  padding: 50px 30px 30px 30px;
  align-items: center;
  .title-name {
    flex: 0 0 auto;
  }
  .search-container {
    flex: 1 1 auto;
    text-align: right;
  }
}
.category-title-container {
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
      font-size: 18px;
      color: #C2C2C2;
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
  font-weight: 500;
}
</style>