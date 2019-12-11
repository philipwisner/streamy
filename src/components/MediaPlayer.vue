<template>
<div class="media-container">
  <div class="error" v-if="error">
    <span>Unable to play, source file was not found.</span>
    <img src="../assets/close.svg" @click="$emit('close-error')">
    </div>
  <div class="media-player">
    <div class="child-container">
      <div class="song-container">
        <img src="../assets/song-art.svg" alt="artwork">
        <div class="song-info">
          <p class="name" v-if="song == null">Song Name</p>
          <p class="artist" v-if="song == null">Artist Name</p>
          <p class="name" v-if="song">{{song.label}}</p>
          <p class="artist" v-if="song">{{song.speaker}}</p>
        </div>
      </div>
      <div class="player-container">
        <div class="buttons-container">
          <img src="../assets/previous.svg" alt="previous">
          <img v-if="!playing" class="main" src="../assets/play.svg" alt="play" @click="$emit('play-audio')">
          <img v-if="playing" class="main pause" src="../assets/pause.svg" alt="pause" @click="$emit('pause-audio')">
          <img src="../assets/next.svg" alt="next">
        </div>
        <div class="progress-bar">
          <hr/>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>

export default {
  name: 'MediaPlayer',
  props: {
    error: Boolean,
    playing: Boolean,
    song: Object,
  }
}
</script>

<style scoped lang="scss">
.media-container {
  position: relative;
  display: flex;
  flex-direction: column;
  .error {
    position: absolute;
    z-index: 5;
    top: -60px;
    left: -9px;
    background: #FF4C4C;
    flex: 0 0 auto;
    height: 20px;
    padding: 5px 15px;
    color: white;
    font-size: 14px;
    border-radius: 2px;
    width: calc(100% - 10px);
    display: flex;
    span {
      flex: 1 1 auto;
    }
    img {
      flex: 0 0 auto;
      width: 15px;
      cursor: pointer;
    }
  }
}
.media-player {
  flex: 1 1 auto;
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
          color: #C2C2C2;
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
            &.pause {
              width: 23px;
            }
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
