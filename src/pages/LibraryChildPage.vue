<template>
  <div class="streamy-child-page">
    <div class="child-title-container">
      <div class="search-container">
        <Searchbar/>
      </div>
    </div>
    <div class="song-title-container">
      <div class="play-container">
        <img src="../assets/song-box.svg" alt="Song">
        <button class="play-button" v-if="!playing" @click="playAudio()"><img src="../assets/play.svg"></button>
        <button class="play-button" v-if="playing" @click="pauseAudio()"><img src="../assets/pause.svg"></button>
      </div>
      <div class="info-content">
        <h1>{{song[0].label}}</h1>
        <p class="artist">{{song[0].speaker}}</p>
        <p>{{song[0].category}}</p>
      </div>
    </div>
    <h2 class="results-title">DESCRIPTION</h2>
    <p class="description">{{song[0].description}}</p>
    <p class="error" v-if="error">Unable to play, source file was not found.</p>
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
      }),
      error: null,
      playing: false,
      newPlay: true,
      audio: null,
    }
  },
  methods: {
    async playAudio() {
      if (!this.newPlay) {
        this.audio.play();
        this.playing = true;
        return;
      }
      this.audio = new Audio(this.song[0].url);
      this.audio.type = 'audio/wav';
      try {
        if (!this.playing) {
          await this.audio.play();
          this.playing = true;
          this.newPlay = false;
        }
      } catch (err) {
        this.error = err;
      }
    },
    pauseAudio() {
      this.audio.pause();
      this.playing = false;
    }
  }
}
</script>

<style lang="scss">
.song-title-container {
  padding: 15px 40px;
  display: flex;
  align-items: center;
  .play-container {
    position: relative;
  }
  img {
    width: 180px;
    flex: 0 0 auto;
  }
  .play-button {
    position: absolute;
    right: 15px;
    bottom: 18px;
    background: none;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    img {
      width: 25px;
    }
  }
  .info-content {
    margin-left: 25px;
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
.error {
  padding: 0 50px;
  margin-top: 20px;
  font-weight: 100;
  color: #FF4C4C;
}
</style>