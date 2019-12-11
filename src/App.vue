<template>
  <div id="app">
    <div class="row-1">
      <SideNavigation id="side-nav"/>
      <router-view id="router-view" :songs="songs" @play-audio="playAudio" @pause-audio="pauseAudio" :playing="playing" :error="error"/>
    </div>
    <div class="row-2">
      <MediaPlayer id="media-player" :song="song" @close-error="closeError" :error="error" :playing="playing" @play-audio="playAudio" @pause-audio="pauseAudio"/>
    </div>
  </div>
</template>

<script>
import SideNavigation from '@/components/SideNavigation.vue'
import MediaPlayer from '@/components/MediaPlayer.vue'
import appData from './audio_files.json'

export default {
  name: 'App',
  components: {
    SideNavigation,
    MediaPlayer
  },
  data () {
    return {
      songs: appData,
      song: null,
      error: null,
      playing: false,
      newPlay: true,
      audio: null,
    }
  },
  methods: {
    async playAudio(e) {
      if (!this.song) {
        this.song = e;
      }
      if (!this.newPlay) {
        this.audio.play();
        this.playing = true;
        return;
      }
      this.audio = new Audio(this.song.url);
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
      this.error = false;
    },
    closeError() {
      this.error = null;
    }
  }
}

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-width: 800px;
  .row-1 {
    flex: 1 1 auto;
    display: flex;
    #side-nav {
      background: #1B2028;
      flex: 0 0 auto;
      width: 265px;
    }
    #router-view {
      background: #222831;
      flex: 1 1 auto;
      overflow-y: auto;
      height: calc(100vh - 100px);
    }
  }
  .row-2 {
    flex: 0 0 auto;
    height: 80px;
    background: #393E46;
    padding: 10px;
  }
}


</style>
