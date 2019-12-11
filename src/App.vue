<template>
  <div id="app">
    <div class="row-1">
      <SideNavigation id="side-nav"/>
      <router-view id="router-view" :songs="songs"/>
    </div>
    <div class="row-2">
      <MediaPlayer id="media-player"/>
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
