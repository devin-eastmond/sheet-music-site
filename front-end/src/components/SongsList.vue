<template>
<div class="container">
  <div class="row">
    <figure class="col-md-4" v-for="song in songs" :key="song.id">
      <div class="song">
        <SheetInfo :name="song.name" :filter="song.name" :difficulty="song.difficulty" :composer="song.composer" :routeToImage="song.thumbnailPath" />
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
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
