<template>
  <div class="artist-container">
    <img src="../assets/artist-box.svg" alt="cover">
    <div class="artist-info">
      <p class="name">{{artist}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ArtistIcon',
  // components: {
  //   CategoryList
  // },
  props: {
    artist: String
  }
}
</script>

<style scoped lang="scss">
.artist-container {
  width: 170px;
  margin: 10px;
  img {
    width: 170px;
  }
}
.artist-info {
  .name {
    font-weight: 700;
    color: white;
    font-size: 16px;
    margin: 5px 0;
    text-align: center;
  }
}


</style>
