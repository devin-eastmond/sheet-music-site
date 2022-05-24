<template>
  <div class="songs-holder">
    <!-- <Carousel/> -->
    <div id="songs">
      <!-- <div id="songsList"> -->
        <a class="song">
          <router-link :to="getSongLink()">
            <SheetInfo style="zoom: 0.9;" name="Dragonborn1" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
          </router-link>
        </a>
        <a class="song">
          <router-link :to="getSongLink()">
            <SheetInfo style="zoom: 0.9;" name="Dragonborn2" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
          </router-link>
        </a>
        <a class="song">
          <router-link :to="getSongLink()">
            <SheetInfo style="zoom: 0.9;" name="Dragonborn3" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
          </router-link>
        </a>
        <a class="song">
          <router-link :to="getSongLink()">
            <SheetInfo style="zoom: 0.9;" name="Dragonborn4" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
          </router-link>
        </a>
        <a class="song">
          <router-link :to="getSongLink()">
            <SheetInfo style="zoom: 0.9;" name="Dragonborn5" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
          </router-link>
        </a>
      <!-- </div> -->
    </div>
    <div id="left-arrow" v-on:click="previousSong">
      <div class="fade-effect">
        <b>➜</b>
        <!-- <i class='fas fa-arrow-left'></i> -->
      </div>
    </div>
    <div id="right-arrow" v-on:click="nextSong">
      <div class="fade-effect">
        <b>➜</b>
        <!-- <i class='fas fa-arrow-right'></i> -->
      </div>
    </div>
  </div>
</template>

<script>
// import bootstrap from 'bootstrap'
import SheetInfo from '@/components/SheetInfo.vue'
export default {
  name: 'Carousel',
  data() {
    return {
      firstSongPosition: -159,
      currentSongPosition: -159,
      currentSong: 1,
      numSongs: 5,
      songLength: 330,
      isAnimating: false
    }
  },
  components: {
    SheetInfo
  },
  mounted () {
    const $ = require('jquery');
    // We declare it globally
    window.$ = $;

    const node = document.getElementById("songs");
    for (let i = 0; i < this.numSongs; i++) {
      const clone = node.childNodes[i].cloneNode(true);
      document.getElementById("songs").appendChild(clone);
    }
    for (let i = 0; i < this.numSongs; i++) {
      const clone = node.childNodes[i].cloneNode(true);
      document.getElementById("songs").appendChild(clone);
    }

    document.getElementById("songs").style.width = this.songLength * this.numSongs * 3 + "px";
    this.currentSongPosition = this.firstSongPosition - this.numSongs * this.songLength;
    document.getElementById("songs").style.transform = "translateX(" + this.currentSongPosition + "px)";

    // You can use it now
  },
  methods: {
    nextSong() {
      if (!this.isAnimating) {
        this.isAnimating = true;
        if (this.currentSong == this.numSongs) {
          this.rewind();
          this.currentSong = 1;
        } else {
          this.currentSong++;
        }
        this.currentSongPosition -= 330;
        document.getElementById("songs").style.transform = 'translateX(' + this.currentSongPosition + 'px)';
        setTimeout(() => { this.isAnimating = false; }, 300);
      }

    },
    rewind() {
      document.getElementById("songs").classList.add("notransition");
      this.currentSongPosition = this.firstSongPosition - (this.numSongs - 1) * this.songLength;
      document.getElementById("songs").style.transform = 'translateX(' + this.currentSongPosition + 'px)';
      document.getElementById("songs").offsetHeight;
      document.getElementById("songs").classList.remove("notransition");
    },
    fastFoward() {
      document.getElementById("songs").classList.add("notransition");
      this.currentSongPosition = this.firstSongPosition - this.numSongs * this.songLength * 2;
      document.getElementById("songs").style.transform = 'translateX(' + this.currentSongPosition + 'px)';
      document.getElementById("songs").offsetHeight;
      document.getElementById("songs").classList.remove("notransition");
    },
    goToSong(songNum) {
      console.log(songNum);
      document.getElementById("songs").classList.add("notransition");
      this.currentSongPosition = this.firstSongPosition - (songNum - 1) * this.songLength - this.numSongs * this.songLength;
      document.getElementById("songs").style.transform = 'translateX(' + this.currentSongPosition + 'px)';
      document.getElementById("songs").offsetHeight;
      document.getElementById("songs").classList.remove("notransition");
    },
    previousSong() {
      if (!this.isAnimating) {
        this.isAnimating = true;
        if (this.currentSong == 1) {
          this.currentSong = this.numSongs;
          this.fastFoward();
        } else {
          this.currentSong--;
        }
        this.currentSongPosition += 330;
        document.getElementById("songs").style.transform = 'translateX(' + this.currentSongPosition + 'px)';
        setTimeout(() => { this.isAnimating = false; }, 300);
      }
    },
    getSongLink() {
      return "/viewSong?song=2";
    }
  }
}
</script>

<style>
#left-arrow,
#right-arrow {
  position: absolute;
  bottom: 25px;
  font-size: 33px;
  color: rgba(255, 255, 255, 0.55);
  background-color: rgba(255, 100, 100, 0.0);
  box-shadow: 0 0 10px 10px rgba(255, 100, 100, 0.0);
  border-radius: 50%;
  transition: 0.1s;
  width: 150px;
  height: 320px;
  /* overflow: hidden; */
}

#left-arrow:hover,
#right-arrow:hover {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.95);
  /* background-color: rgba(255, 100, 100, 0.4);
  box-shadow: 0 0 10px 10px rgba(255, 100, 100, 0.4); */
}

.songs-holder b {
  border-radius: 50%;
  /* background-color: rgba(255, 255, 255, 0.5); */
  background-color: rgba(100, 100, 100, 0.8);
  /* border: 2px solid rgba(255, 255, 255, 0.5); */
  width: 50px;
  height: 50px;
  transition: right 0.2s, background-color 0.2s, left 0.2s, border-color 0.2s;
  /* padding-bottom: 2.5px; */
  padding-top: 0px!important;
  zoom: 1.1;
}

#left-arrow b {
  right: 0px;
  bottom: 140px;
  position: absolute;
  transform: rotate(180deg);

}

#right-arrow b {
  left: 0px;
  bottom: 140px;
  position: absolute;
}

#left-arrow:hover b {
  right: 15px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

#right-arrow:hover b {
  left: 15px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

#left-arrow {
  left: -75px;
}

#right-arrow {
  right: -75px;
}

.fade-effect {
  transition: 0.4s;
  border-radius: 50%;
  height: 80%;
  background-color: rgba(255, 35, 51, 0.0);
  box-shadow: 0 0 50px 50px rgba(255, 35, 51, 0.0);
  width: 80%;
}

#left-arrow:hover .fade-effect,
#right-arrow:hover .fade-effect {
  background-color: rgba(255, 35, 51, 0.5);
  box-shadow: 0 0 50px 50px rgba(255, 35, 51, 0.5);

}

.songs-holder {
  overflow-x: hidden;
  overflow-y: visible;
  width: 100%;
  position: relative;
  margin-left: 0px!important;
}

#songs {
  /* width: 4950px; */
  margin-left: 50%!important;
  transform: translateX(-159px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  transition: transform 0.6s;
}

/* #songs:hover {
  transform: translateX(-1152px);
} */

.song {
  margin-left: 20px!important;
  margin-right: 20px!important;
}

.notransition {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  transition: none !important;
}
</style>
