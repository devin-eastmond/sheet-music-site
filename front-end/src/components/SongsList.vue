<template>
<div class="container">
  <div class="row">
    <figure class="col-lg-3 col-md-4 col-sm-6" v-for="song in songs" :key="song.id">
      <div class="wrapper">
        <router-link :to="getSongLink(song)">
          <SheetInfo :name="song.title" :filter="song.title" :difficulty="song.difficulty" :composer="song.composer" :routeToImage="song.thumbnailPath" />
        </router-link>
      </div>
    </figure>
  </div>
</div>
</template>

<script>
import SheetInfo from '@/components/SheetInfo.vue'
export default {
  name: 'SongsList',
  props: {
    songs: Array
  },
  components: {
    SheetInfo
  },
  methods: {
    getSongLink(song) {
      return "/viewSong?song=" + song._id;
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  zoom: 0.70;
  -moz-transform: scale(0.70);
}

@media only screen and (max-width: 575px) {
  .wrapper {
    zoom: 0.9;
    -moz-transform: scale(0.9);
  }
}

SheetInfo {

}
</style>
