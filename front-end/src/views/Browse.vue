<template>
  <div class="browse">
    <Header pageName="Browse Music"/>
    <div class="rectangle-white form-block">
      <h2>Filters</h2>
      <form @submit="applyFilters">
        <div class="row">
          <div class="col-md-3">
            <div class="form-group">
              <label for="genreFilter">Genre</label>
              <select class="form-control" id="genreFilter" v-model="genre">
                <option></option>
                <option>Movie Music</option>
                <option>Video Game Soundtracks</option>
                <option>Religious Music</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label for="difficultyFilter">Difficulty</label>
              <select class="form-control" id="difficultyFilter" v-model="difficulty">
                <option></option>
                <option>Easy</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <button type="submit" id="submitFilters" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
      <hr>
    </div>

    <h1 class="page-header" id="filterTitle">{{ pageTitle }}</h1>
    <div v-if="numSongs == 0">
      <div class="rectangle rectangle-white" id="noContent">
        <h4>No results matching your search criteria...</h4>
      </div>
    </div>

    <SongsList :songs="songs"/>

    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import SongsList from '@/components/SongsList.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios';
export default {
  name: 'Browse',
  data() {
    return {
      pageTitle: 'Sheet Music',
      genre: '',
      difficulty: '',
      search: '',
      songsList: [],
    }
  },
  created() {
    this.getSongs();
  },
  components: {
    Header,
    SongsList,
    Footer
  },
  computed: {
    songs() {
      let filteredSongs = this.songsList;
      let difficultyFilter = this.$route.query.difficulty;
      let genreFilter = this.$route.query.genre;
      let searchFilter = this.$route.query.search;

      if (difficultyFilter != null) {
        filteredSongs = filteredSongs.filter(song => song.difficulty === difficultyFilter);
      }
      if (genreFilter != null) {
        filteredSongs = filteredSongs.filter(song => song.genre === genreFilter);
      }
      if (searchFilter != null) {
        filteredSongs = filteredSongs.filter(song => (song.name.includes(searchFilter) || song.composer.includes(searchFilter)));
      }
      return filteredSongs;
    },
    numSongs() {
      let filteredSongs = this.songsList;
      let difficultyFilter = this.$route.query.difficulty;
      if (difficultyFilter != null) {
        filteredSongs = filteredSongs.filter(song => song.difficulty === difficultyFilter);
      }
      let genreFilter = this.$route.query.genre;
      if (genreFilter != null) {
        filteredSongs = filteredSongs.filter(song => song.genre === genreFilter);
      }

      return filteredSongs.length;
    }
  },
  methods: {
    applyFilters(event) {
      event.preventDefault();
      console.log(this.genre.replaceAll(' ', '-').toLowerCase());
      console.log(this.difficulty.replaceAll(' ', '-').toLowerCase());
      let route = "/browse?";
      if (this.genre != '' && this.difficulty != '') {
        route += "genre=" + this.genre.replaceAll(' ', '-').toLowerCase();
        route += "&difficulty=" + this.difficulty.replaceAll(' ', '-').toLowerCase();
      } else if (this.genre != '') {
        route += "genre=" + this.genre.replaceAll(' ', '-').toLowerCase();
      } else if (this.difficulty != '') {
        route += "difficulty=" + this.difficulty.replaceAll(' ', '-').toLowerCase();
      }
      console.log(route);
      this.$router.replace(route);
    },
    formattedFilterString(str) {
      return str.replace(' ', '-').toLowerCase();
    },
    async getSongs() {
      try {
        let response = await axios.get("/api/songs");
        this.songsList = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style>
.page-header {
  color: rgb(0, 111, 139);
  margin: 40px;
}

.form-block {
  padding: 0px 40px;
}

.form-block select {
  margin-top: 5px;
  margin-bottom: 30px;
  max-width: 250px;
}

.form-block h2 {
  margin-bottom: 30px;
}

.form-block button {
  margin: 35px 0;
}

.form-block label {
  color: rgb(0, 111, 139);
}

.rectangle-white h2, .rectangle-white h3, .rectangle-white h4 {
  color: rgb(0, 111, 139);
}
</style>
