<template>
  <div class="artist-container" @click="updateRoute(path)">
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
    artist: String,
    path: String,
  },
  methods: {
    updateRoute(route) {
      if (this.$route.path !== route) {
        route = route.replace(/\s/g, '');
        this.$router.push(`artists/${route}`);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.artist-container {
  width: 170px;
  margin: 10px;
  cursor: pointer;
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
