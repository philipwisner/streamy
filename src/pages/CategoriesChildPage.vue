<template>
  <div class="streamy-child-page">
    <div class="child-title-container">
      <div class="search-container">
        <Searchbar/>
      </div>
    </div>
    <div class="category-title-container">
      <img v-if="categoryName == 'breathing'" src="../assets/breathing.svg" alt="Breathing">
      <img v-if="categoryName == 'relaxation'" src="../assets/relaxation.svg" alt="Relaxation">
      <img v-if="categoryName == 'meditation'" src="../assets/meditation.svg" alt="Meditation">
      <div class="info-content">
        <h1>{{categoryName}}</h1>
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
  name: 'CategoriesChildPage',
  components: {
    Searchbar,
    SongIcon
  },
  props: {
    songs: Array,
  },
  data() {
    return {
      categoryName: this.$route.params.id,
      songsList: this.songs.filter(song => {
        return song.category.toLowerCase() == this.$route.params.id;
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