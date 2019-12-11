<template>
  <div class="media-player">
    <div class="child-container">
      <div class="song-container">
        <img src="../assets/song-art.svg" alt="artwork">
        <div class="song-info">
          <p class="name">Song Name</p>
          <p class="artist">Artist Name</p>
        </div>
      </div>
      <div class="player-container">
        <div class="buttons-container">
          <img src="../assets/previous.svg" alt="previous">
          <img class="main" src="../assets/play.svg" alt="play">
          <!-- <img src="../assets/pause.svg" alt="pause"> -->
          <img src="../assets/next.svg" alt="next">
        </div>
        <div class="progress-bar">
          <hr/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MediaPlayer',
  // components: {
  //   CategoryList
  // },
  // props: {
  //   categories: Array
  // }
}
</script>

<style scoped lang="scss">
.media-player {
  .child-container {
    display: flex;
    .song-container {
      flex: 0 0 auto;
      width: 315px;
      margin-right: 10px;
      display: flex;
      align-items: center;
      img {
        width: px;
        flex: 0 0 auto;
        margin-right: 15px;
      }
      .song-info {
        flex: 1 1 auto;
        .name {
          color: white;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 3px;
          text-overflow: ellipsis;
        }
        .artist {
          color: #E6E6E6;
          font-size: 12px;
          font-weight: 300;
        }
      }
    }
    .player-container {
      flex: 1 1 auto;
      margin: 0 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .buttons-container {
        flex: 1 1 auto;
        display: flex;
        justify-content: center;
        max-width: 250px;
        margin-bottom: 12px;
        img {
          width: 13px;
          margin: 0 25px;
          cursor: pointer;
          &.main {
            width: 28px;
          }
        }
      }
      .progress-bar {
        flex: 1 1 auto;
        hr {
          width: 100%;
          max-width: 500px;
          min-width: 400px;
          height: 2px;
          background: white;
          border-radius: 5px;
        }
      }
    }
  }
}

</style>
