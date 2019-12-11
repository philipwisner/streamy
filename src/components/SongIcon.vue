<template>
  <div class="song-container">
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
  // components: {
  //   CategoryList
  // },
  props: {
    song: Object
  }
}
</script>

<style scoped lang="scss">
.song-container {
  width: 180px;
  margin: 10px;
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
