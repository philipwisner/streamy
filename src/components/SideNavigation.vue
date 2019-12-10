<template>
  <div class="nav-panel">
    <h1 class="logo-container">
      <img class="logo-image" src="../assets/logo_name.svg" alt="Streamy">
    </h1>
    <div class="user-container">
      <img class="user-icon" src="../assets/user-icon.svg" alt="user">
      <span>Philip Wisner</span>
    </div>
    <div class="options-container">
      <ul class="options-list">
        <router-link to="/library">
          <li class="options-item">
            <img src="../assets/library.svg" alt="library" :class="[{'hidden': $route.path.includes('library')}, ]">
            <img src="../assets/library-active.svg" alt="library" class="hidden" :class="[{'display': $route.path.includes('library')}]">
            <span>Library</span>
          </li>
        </router-link>
        <router-link to="/categories">
          <li class="options-item">
            <img src="../assets/categories.svg" alt="categories" :class="[{'hidden': $route.path.includes('categories')}]">
            <img src="../assets/categories-active.svg" alt="categories" class="hidden" :class="[{'display': $route.path.includes('categories')}]">
            <span>Categories</span>
          </li>
        </router-link>
        <router-link to="/artists">
          <li class="options-item">
            <img src="../assets/artists.svg" alt="artists" :class="[{'hidden': $route.path.includes('artists')}]">
            <img src="../assets/artists-active.svg" alt="artists" class="hidden" :class="[{'display': $route.path.includes('artists')}]">
            <span>Artists</span>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="playlists-container">
      <h2 class="subheader">Playlists</h2>
      <ul class="playlists">
        <li>Sample Playlist</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SideNavigation',
  // components: {
  //   CategoryList
  // },
  // props: {
  //   categories: Array
  // }
}
</script>

<style scoped lang="scss">
ul {
  list-style: none;
}
.nav-panel {
  padding: 25px;
  overflow-y: auto;
  color: #E6E6E6;
}
a {
  color: #E6E6E6;
  text-decoration: none;
}
.hidden {
  display: none;
  &.display {
    display: inline;
  }
}
.logo-container {
  max-width: 230px;
}
.logo-image {
  width: 100%;
}
.user-container {
  margin: 0px 0 35px 0;
  font-weight: 800;
  color: white;
}
.user-icon {
  margin-right: 10px;
  width: 15px;
}
.options-container {
  margin-bottom: 60px;
  .options-list {
  font-size: 18px;
  }
  .options-item {
    margin: 18px 0;
    display: flex;
    img {
      width: 25px;
      margin-right: 15px;
      flex: 0 0 auto;
    }
    span {
      flex: 1 1 auto;
    }
  }
}
.router-link-active {
  color:#29A19C;
}
.subheader {
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1.5px;
  font-weight: 800;
  color: white;
  margin-bottom: 15px;
}
.playlists {
  font-size: 14px;
}
</style>
