<template>
  <div class="browse" style="background-image: url('images/pattern2.png'); background-size: 600px;">
    <Header pageName="Browse Music" style="margin: 0px"/>
    <div class="rectangle-white form-block" style="background-color: white; padding-top: 20px;">
      <h2>Filters</h2>
      <form @submit="applyFilters">
        <div class="row">
          <div class="col-md-3">
            <div class="form-group">
              <label for="genreFilter">Genre</label>
              <select class="form-control" id="genreFilter" v-model="genre">
                <option></option>
                <option value="movie-music">Movie Music</option>
                <option value="video-game-soundtracks">Video Game Soundtracks</option>
                <option value="religious-music">Religious Music</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label for="difficultyFilter">Difficulty</label>
              <select class="form-control" id="difficultyFilter" v-model="difficulty">
                <option></option>
                <option value="easy">Easy</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <button type="submit" id="submitFilters" class="btn btn-danger">Submit</button>
          </div>
        </div>
      </form>
      <hr>
    </div>
    <LoadingPage v-if="isLoading"/>
    <div class="Content" v-else>

      <h1 class="page-header" id="filterTitle">{{ pageTitle }}</h1>
      <div v-if="numSongs == 0">
        <div class="rectangle rectangle-white" id="noContent">
          <h4>No results matching your search criteria...</h4>
        </div>
      </div>

      <SongsList :songs="songs"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import SongsList from '@/components/SongsList.vue'
import Footer from '@/components/Footer.vue'
import LoadingPage from '@/components/LoadingPage.vue'
//import axios from 'axios';
export default {
  name: 'Browse',
  data() {
    return {
      genre: '',
      difficulty: '',
      search: '',
      songsList: [],
      isLoading: true,
    }
  },
  created() {
    //this.songsList = this.$root.$data.songs;
    this.getSongs();
    if (typeof this.$route.query.genre == 'undefined') {
      this.genre = '';
    } else {
    this.genre = this.$route.query.genre;
    }
    if (typeof this.$route.query.difficulty == 'undefined') {
      this.difficulty = '';
    } else {
      this.difficulty = this.$route.query.difficulty;
    }
  },
  components: {
    Header,
    SongsList,
    Footer,
    LoadingPage
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
    },
    pageTitle() {
      let genre = this.$route.query.genre;
      let difficulty = this.$route.query.difficulty;
      if (typeof genre == 'undefined' && typeof difficulty == 'undefined') {
        return 'All Sheet Music';
      } else if (typeof genre == 'undefined') {
        return difficulty.charAt(0).toUpperCase() + difficulty.slice(1) + ' Piano';
      } else if (typeof difficulty == 'undefined') {
        const words = genre.split("-");

        for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        return words.join(" ");
      } else {
        return 'Filter results:';
      }
    }
  },
  methods: {
    applyFilters(event) {
      event.preventDefault();
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
    getSongs() {
      this.songsList = this.$root.$data.songs;
      this.isLoading = false;
    },
    // async getSongs() {
    //   try {
    //     let response = await axios.get("/api/songs");
    //     this.songsList = response.data;
    //     this.isLoading = false;
    //     return true;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
  watch: {
    songs: function() {
      if (typeof this.$route.query.genre == 'undefined') {
        this.genre = '';
      } else {
      this.genre = this.$route.query.genre;
      }
      if (typeof this.$route.query.difficulty == 'undefined') {
        this.difficulty = '';
      } else {
        this.difficulty = this.$route.query.difficulty;
      }
      this.isLoading = false;
    },
  }
}
</script>

<style>
.page-header {
  /* color: rgb(0, 111, 139); */
  /* color: rgb(80, 80, 80); */
  color: rgb(179, 0, 0);
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
  /* color: rgb(0, 111, 139); */
  color: rgb(80, 80, 80);
}

.rectangle-white h2, .rectangle-white h3, .rectangle-white h4 {
  /* color: rgb(0, 111, 139); */
  color: rgb(80, 80, 80)
}
</style>
