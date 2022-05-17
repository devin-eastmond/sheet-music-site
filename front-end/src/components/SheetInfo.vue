<template>
    <div class="SheetInfo" :style="style(routeToImage)">
      <div>
        <div class="sheet-info">
          <div>
            <h5 class="song-name">{{ name }}</h5>
            <p class="composer-name">Composed by {{ composer }}</p>
          </div>
          <div class="text-bottom">
            <p>{{ difficultyLabel }}</p>
          </div>
        </div>
      </div>
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
  methods: {
    style (route) {
      return 'background-image: url(' + route + ')';
    }
  },
  computed: {
    difficultyLabel() {
      return this.difficulty.charAt(0).toUpperCase() + this.difficulty.slice(1) + " Piano";
    },
    filteredLink() {
      return "/viewSong?song=" + this.filter;
    },
  }
}
</script>

<style>
.SheetInfo {
  width: 300px;
  height: 400px;
  background-size: 300px auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.sheet-info {
  /* color: white; */
  /* background-color: rgb(0, 111, 139); */
  color: white;
  background-color: rgb(171 16 31);
  text-decoration: none;
  padding: 15px;
  margin: auto 0;
  width: 330px;
  height: 175px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
}
.sheet-info h5 {
  margin-top: 5px;
  margin-bottom: 5px;
}

.text-bottom {
  position:absolute;
  bottom:0;
  right: 15px;
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

/*.img-thumbnail {
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
}*/
</style>
