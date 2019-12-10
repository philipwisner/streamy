<template>
  <div id="app">
    <SideNavigation id="side-nav"/>
    <router-view id="router-view"/>
    <MediaPlayer id="media-player"/>
  </div>
</template>

<script>
import SideNavigation from '@/components/SideNavigation.vue'
import MediaPlayer from '@/components/MediaPlayer.vue'

export default {
  name: 'App',
  components: {
    SideNavigation,
    MediaPlayer
  },
  // data () {
  //   return {
  //     categories: appData.categories,
  //     reasons: appData.reasons,
  //     members: appData.members,
  //     images: appData.imageSets,
  //   }
  // }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  height: 100vh;
  display: flex;
}
#side-nav {
  background: #1B2028;
  flex: 0 0 auto;
  width: 280px;
  height: calc(100vh - 100px);
}
#router-view {
  background: #222831;
  flex: 1 1 auto;
  min-width: 700px;
  height: calc(100vh - 100px);
}
#media-player {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: #393E46;
}

</style>
