<template>
  <div class="home" style="background-size: 600px;">
    <div class="hero-image" style="background-image: url('images/pianoSheetMusic3.jpg');"><h1>Piano sheet music &amp;</h1><h1>Original compositions</h1></div>

    <div class="rectangle rectangle-white">
      <h2>Download free music audio files to incorporate in your projects</h2>
      <!-- <img src="images/sheetMusic.png" id="sheetMusicImage"> -->
      <div>
        <button type="button" class="btn btn-danger btn-lg" v-on:click="goToRoute('/compositions')">Browse Compositions</button>
      </div>
    </div>

    <div class="rectangle rectangle-blue" style="background-image: url('images/pattern3.png');">
      <h2>Browse our collection of piano sheet music</h2>
      <!-- <img src="images/piano.png" id="pianoImage"> -->
      <Carousel/>
      <!-- <div class="songs-holder">
        <div class="songs">
          <a class="song">
            <SheetInfo style="zoom: 0.9;" name="Dragonborn" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
          </a>
          <a class="song">
            <SheetInfo style="zoom: 0.9;" name="Dragonborn" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
          </a>
          <a class="song">
            <SheetInfo style="zoom: 0.9;" name="Dragonborn" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
          </a>
          <a class="song">
            <SheetInfo style="zoom: 0.9;" name="Dragonborn" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
          </a>
          <a class="song">
            <SheetInfo style="zoom: 0.9;" name="Dragonborn" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
          </a>
        </div>
      </div> -->
      <button type="button" class="btn btn-outline-danger btn-lg" v-on:click="goToRoute('/browse')">Browse Sheet Music</button>
    </div>

    <div class="rectangle rectangle-white">
      <h2>Choose your genre and difficulty level</h2>
      <form @submit="applyFilters" id="filters">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-3">
            <div class="form-group">
              <label for="genreFilter">Genre</label>
              <select class="form-control" id="genreFilter" v-model="genre">
                <option value="">All</option>
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
                <option value="">All</option>
                <option value="easy">Easy</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <button type="submit" id="submitFilters" class="btn btn-danger">Browse</button>
          </div>
        </div>
      </form>
      <!-- <hr>
      <h3>Genres</h3>
      <div>
        <button type="button" class="btn btn-danger btn-lg" v-on:click="goToRoute('/browse?genre=movie-music')">Movie Music</button>
        <button type="button" class="btn btn-danger btn-lg" v-on:click="goToRoute('/browse?genre=video-game-soundtracks')">Video Game Soundtracks</button>
        <button type="button" class="btn btn-danger btn-lg" v-on:click="goToRoute('/browse?genre=religious-music')">Religious Music</button>
      </div>
      <hr>
      <br>
      <h3>Difficulty Levels</h3>
      <div>
        <button type="button" class="btn btn-danger btn-lg" v-on:click="goToRoute('/browse?difficulty=easy')">Easy</button>
        <button type="button" class="btn btn-danger btn-lg" v-on:click="goToRoute('/browse?difficulty=intermediate')">Intermediate</button>
        <button type="button" class="btn btn-danger btn-lg" v-on:click="goToRoute('/browse?difficulty=advanced')">Advanced</button>
      </div> -->
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
// import SheetInfo from '@/components/SheetInfo.vue'
import Carousel from '@/components/Carousel.vue'
export default {
  name: 'Home',
  components: {
    Footer,
    // SheetInfo,
    Carousel
  },
  data() {
    return {
      genre: '',
      difficulty: ''
    }
  },
  created() {
    window.scrollTo(0, 0);
  },
  methods: {
    goToRoute(route) {
      this.$router.push(route);
    },
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
    }
  }
}
</script>

<style>
button {
  border-radius: 0px!important;
}

/* .songs-holder {
  overflow: hidden;
  width: 100%;

}

.songs {
  width: 1650px;
  margin-left: 50%!important;
  transform: translateX(-819px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  transition: transform 0.6s;
}

.songs:hover {
  transform: translateX(-1152px);
}

.song {
  margin-left: 20px!important;
  margin-right: 20px!important;
} */

.hero-image {
  width: 100%;
  height: 400px;
  border-color: white;
  color: white;
  padding: 75px;
  background-size: cover;
  background-position: left bottom; /*Positioning*/
  background-repeat: no-repeat; /*Prevent showing multiple background images*/
}

.hero-image h1 {
  font-size: 60px;
  font-style: bold;
  text-shadow: 2px 2px 8px #55555566;
}

.rectangle {
  margin: auto;
  width: 100%;
  padding: 75px 5px;
  text-align: center;
  position: relative;
}

.rectangle h2 {
  padding-top: 30px;
  padding-bottom: 30px;
}

.rectangle h3 {
  padding-top: 20px;
  padding-bottom: 20px;
}

.rectangle div {
  margin: 20px 5px;
}

.rectangle button {
  margin: 20px 5px;
}

#pianoImage {
  width: 300px;
  background-color: transparent;
  position: absolute;
  left: 5px;
  top: -45px;
  opacity: 0;
}

#sheetMusicImage {
  width: 300px;
  background-color: transparent;
  position: absolute;
  right: 5px;
  top: -45px;
  opacity: 0;
}

@media (max-width: 100px){

    /* Set the height of an element */
    .rectangle button {
      margin: 20px 5px;
    }

    #pianoImage{
        opacity: 0;
    }

    #sheetMusicImage{
        opacity: 0;
    }

}
@media (min-width: 500px) {
  .rectangle button {
    margin: 20px 50px;
  }
}

/* If the browser width is 1300px or more, */
@media (min-width: 1300px){

    /* Set the height of an element */
    #pianoImage{
        opacity: 1;
    }

    #sheetMusicImage{
        opacity: 1;
    }

}

.rectangle-white h2, .rectangle-white h3, .rectangle-white h4 {
  /* color: rgb(0, 111, 139); */
  color: rgb(80, 80, 80);
}

/* body {
  background-color: grey;
} */

.rectangle-blue {
  /* background-color: rgb(0, 139, 137); */
  background-color: rgb(60, 60, 60);
  border-width: 15px;
  /* border-color: rgb(0, 107, 106); */
  border-color: #c82333;
  border-style: solid none;
}

.rectangle-blue h2, .rectangle-blue h3, .rectangle-blue h4 {
  color: white;
}

.rectangle-blue img {
  margin-bottom: 20px;
  border-radius: 50%;
}

.rectangle-blue .sample-image {
  border-radius: 0%;
  background-color: white;
}

.rectangle-blue p {
  color: white;
}

.album {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}

.album:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

/* .btn-danger {
  background-color: rgb(179, 0, 0)
} */

h2 {
  font-size: 45px;
}

#filters {
  text-align: left;
}

#filters #submitFilters {
  margin-top: 50px;
}

#filters label {
  font-size: 20px;
}

/* .rectangle-blue button {
  background-color: white;
  color: rgb(0, 139, 137);
}

.rectangle-blue .btn-danger {
  background-color: #d9534f;
  color: white;
}

.rectangle-blue button:hover {
  background-color: rgb(212, 249, 255);
  color: rgb(0, 139, 137);
}

.rectangle-blue .btn-danger:hover {
  background-color: #d04a36;
  color: white;
} */
</style>
