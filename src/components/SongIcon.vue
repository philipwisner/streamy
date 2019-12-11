<template>
  <div class="song-container" @click="updateRoute(song.id)">
    <img src="../assets/song-box.svg" alt="cover">
    <div class="song-info">
      <p class="name">{{song.label}}</p>
      <p class="artist">{{song.speaker}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SongIcon',
  props: {
    song: Object,
  },
  methods: {
    updateRoute(route) {
      if (this.$route.path !== route) {
        this.$router.push({name: 'library', params: {id: route}});
        this.$router.push(`library/${route}`);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.song-container {
  width: 180px;
  margin: 10px;
  cursor: pointer;
}
.song-info {
  .name {
    font-weight: 700;
    color: white;
    font-size: 15px;
    margin: 5px 0;
  }
  .artist {
    font-weight: 100;
    color: #C2C2C2;
    font-size: 14px;
  }
}

</style>
