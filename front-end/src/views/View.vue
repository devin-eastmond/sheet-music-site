<template>
  <div class="view">
    <Header pageName="View Song" hasBackButton="true" style="margin: 0px"/>
    <div class="rectangle-white" style="padding-top:40px;">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <!-- <a href="#" onclick="history.go(-1); window.scrollTo(0, 0); return false;">⬅</a>
            <a href="/browse">⬅ Browse Music</a> -->
            <a class="song-link" :href="routeToPDF">
              <!-- <i style='font-size:24px' class='fas'>&#xf104;</i>
              <i style='font-size:24px' class='fas'>&#xf105;</i> -->
              <span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
              <img :src="thumbnailPath">
            </a>
            <div>
              <button class="btn btn-danger btn-lg" style="margin-top: 0px" id="btn-download">Download PDF
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                  <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
                </svg>
              </button>
            </div>
            <div class="buttons">
              <button type="button" class="btn btn-danger" style="margin-top: -40px; margin-right: 20px;">
                <i class="left arrow"></i>
              </button>
              <button type="button" class="btn btn-danger" style="margin-top: -40px; margin-left: 20px">
                <i class="right arrow"></i>
              </button>
            </div>
          </div>
          <div class="col-md-7">
            <h2 class="red-header" style="margin-bottom: 0px;">{{ name }}</h2>
            <h5>Composed by {{ composer }}</h5>
            <hr>
            <div class="row">
              <div class="col-lg-4 col-md-6"><h4 style="padding-top: 20px;"><b>Difficulty: </b></h4><h5>{{ difficulty }} Piano</h5></div>
              <div class="col-lg-6 col-md-6"><h4 style="padding-top: 20px;"><b>Genre: </b></h4><h5>{{ genre }}</h5></div>
            </div>
            <!-- <div>
              <button class="btn btn-danger btn-lg test">Play Song
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-headphones" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 3a5 5 0 0 0-5 5v4.5H2V8a6 6 0 1 1 12 0v4.5h-1V8a5 5 0 0 0-5-5z"></path>
                  <path d="M11 10a1 1 0 0 1 1-1h2v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3zm-6 0a1 1 0 0 0-1-1H2v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3z"></path>
                </svg>
              </button>
            </div> -->

            <div class="container2">
              <iframe class="responsive-iframe" src="https://www.youtube.com/embed/rnh8N79Ljms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
//import axios from 'axios';
export default {
  name: 'ViewSong',
  data() {
    return {
      pageTitle: 'Sheet Music',
    }
  },
  components: {
    Header,
    Footer,
  },
  created() {
    window.scrollTo(0, 0);
    history.scrollRestoration = "manual";
  },
  computed: {
    thumbnailPath() {
      return this.getSong().thumbnailPath;
    },
    name() {
      return this.getSong().name;
    },
    composer() {
      return this.getSong().composer;
    },
    difficulty() {
      let difficulty = this.getSong().difficulty;
      return difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
    },
    genre() {
      let genre = this.getSong().genre;
      const words = genre.split("-");

      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }

      return words.join(" ");
    },
    routeToPDF() {
      return this.getSong().routeToPDF;
    }
  },
  methods: {
    getSong() {
      return this.$root.$data.songs[this.$route.query.song - 1];
    }
  }
}
</script>

<style>

.container2 {
  position: relative;
  overflow: hidden;
  width: 100%;
  /*padding-top: 56.25%;  16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  padding-bottom: 56.25%;
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  /* top: 0; */
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.test {
  margin-bottom: 0px;
}
.buttons {
  display: flex;
  justify-content: center;
  display: none;
}

.page-header {
  /* color: rgb(0, 111, 139); */
  /* color: rgb(80, 80, 80);
  margin: 40px; */
}

/* .form-block label {
  color: #c82333;
} */

.rectangle-white h2, .rectangle-white h3, .rectangle-white h4 {
  /* color: rgb(0, 111, 139); */
  /* color: rgb(80, 80, 80); */
}

iframe {
  margin-top: 21px;
  width: 560px;
  height: 315px;
}

.song-link img {
  width: 95%;
  height: auto;
  margin-bottom: 50px;
  padding-bottom: 0px;
  border: 10px solid #c82333;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important;
  transition: 0.3s;
}

.song-link img:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5), 0 12px 40px 0 rgba(0, 0, 0, 0.19)!important;
  transform: scale(1.025);
  /* transform: translateY(-3px); */
}

#btn-download {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  margin-bottom: 40px;
}

.arrow {
  border: solid;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  margin-left: -2px;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  margin-right: -2px;
}

.red-header {
  color: #c82333!important;
}
</style>
