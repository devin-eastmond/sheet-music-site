<template>
  <div class="home" style="background-image: url('images/pattern2.png'); background-size: 600px;">
    <div class="hero-image" style="background-image: url('images/pianoSheetMusic.png');"></div>

    <div class="rectangle rectangle-white">
      <h2>10+ free piano arrangements in the genre of your choice</h2>
      <div>
        <button type="button" class="btn btn-info btn-lg" v-on:click="goToRoute('/browse?genre=movie-music')">Movie Music</button>
        <button type="button" class="btn btn-info btn-lg" v-on:click="goToRoute('/browse?genre=video-game-soundtracks')">Video Game Soundtracks</button>
        <button type="button" class="btn btn-info btn-lg" v-on:click="goToRoute('/browse?genre=religious-music')">Religious Music</button>
      </div>
    </div>

    <div class="rectangle rectangle-blue" style="background-image: url('images/pattern.png');">
      <h2>Play according to your difficulty level</h2>
      <img src="images/piano.png" id="pianoImage">
      <div>
        <button type="button" class="btn btn-outline-info btn-lg" v-on:click="goToRoute('/browse?difficulty=easy')">Easy</button>
        <button type="button" class="btn btn-outline-info btn-lg" v-on:click="goToRoute('/browse?difficulty=intermediate')">Intermediate</button>
        <button type="button" class="btn btn-outline-info btn-lg" v-on:click="goToRoute('/browse?difficulty=advanced')">Advanced</button>
      </div>
    </div>

    <div class="rectangle rectangle-white">
      <h2>Easily download and print your sheet music, <br>or pull it up on your iPad or tablet and <br>play it from there</h2>
      <img src="images/sheetMusic.png" id="sheetMusicImage">
      <div>
        <button type="button" class="btn btn-info btn-lg" v-on:click="goToRoute('/browse')">Download Sheet Music</button>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Footer
  },
  methods: {
    goToRoute(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style>
.hero-image {
  width: 100%;
  height: 400px;
  border-color: white;
  background-size: cover;
  background-position: left bottom; /*Positioning*/
   background-repeat: no-repeat; /*Prevent showing multiple background images*/
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
  color: rgb(0, 111, 139);
}

.rectangle-blue {
  background-color: rgb(0, 139, 137);
  border-width: 5px;
  border-color: rgb(0, 107, 106);;
  border-style: double none;
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

.rectangle-blue button {
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
}
</style>
