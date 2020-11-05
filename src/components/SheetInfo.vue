<template>
  <div class="SheetInfo">
    <a :href="filteredLink">
      <div class="sheet-info">
        <img alt="picture" :src="routeToImage" class="img-thumbnail">
        <h5 class="song-name">{{ name }}</h5>
        <p>{{ difficultyLabel }}</p>
        <p class="composer-name">Composed by {{ composer }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SheetInfo',
  props: {
    name: String,
    filter: String,
    difficulty: String,
    composer: String,
    routeToImage: String
  },
  computed: {
    difficultyLabel() {
      return this.difficulty.charAt(0).toUpperCase() + this.difficulty.slice(1) + " Piano";
    },
    filteredLink() {
      return "/viewSong?song=" + this.filter;
    }
  }
}
</script>

<style>
.img-thumbnail {
  width: 300px;
  height: auto;
}

.sheet-info {
  color: white;
  background-color: rgb(0, 111, 139);
  text-decoration: none;
  width: 90%;
  padding: 10px;
  border-radius: 10px;
}

.sheet-info img {
  border-radius: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.sheet-info h5 {
  margin-top: 5px;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>
