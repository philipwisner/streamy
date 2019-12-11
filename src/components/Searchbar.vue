<template>
  <div class="searchbar">
    <span>Search</span>
    <img src="../assets/search.svg" alt="search">
  </div>
</template>

<script>

export default {
  name: 'Searchbar',
  // components: {
  //   CategoryList
  // },
  // props: {
  //   categories: Array
  // }
}
</script>

<style scoped lang="scss">
.searchbar {
  display: flex;
  align-items: center;
  align-content: flex-end;
  justify-content: flex-end;
  span {
    margin-right: 15px;
    font-weight: 100;
  }
  img {
    width: 18px;
  }
}

</style>
