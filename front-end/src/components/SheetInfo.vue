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
  width: 300px!important;
  height: 400px!important;
  background-size: 300px auto!important;
  margin-bottom: 20px!important;
  display: flex!important;
  align-items: center!important;
  justify-content: center!important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important;
}
.sheet-info {
  /* color: white; */
  /* background-color: rgb(0, 111, 139); */
  color: white!important;
  background-color: #c82333!important;
  text-decoration: none!important;
  padding: 15px!important;
  margin: auto 0;
  width: 330px!important;
  height: 175px!important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important;
  position: relative;
  text-align: left;
}
.sheet-info h5 {
  margin-top: 5px!important;
  margin-bottom: 5px!important;
}

.text-bottom {
  position:absolute!important;
  bottom:0!important;
  right: 15px!important;
}

a:link {
  text-decoration: none!important;
}

a:visited {
  text-decoration: none!important;
}

a:hover {
  text-decoration: none!important;
}

a:active {
  text-decoration: none!important;
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
