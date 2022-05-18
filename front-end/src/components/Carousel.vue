<template>
  <div id="carouselExampleControls" class="carousel" data-bs-ride="carousel">
      <div class="carousel-inner">
          <div class="carousel-item active">
            <router-link :to="getSongLink()">
              <SheetInfo style="zoom: 0.9;" name="Dragonborn" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
            </router-link>
          </div>
          <div class="carousel-item">
            <router-link :to="getSongLink()">
              <SheetInfo style="zoom: 0.9;" name="Dragonborn" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
            </router-link>          </div>
          <div class="carousel-item">
            <router-link :to="getSongLink()">
              <SheetInfo style="zoom: 0.9;" name="Dragonborn" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
            </router-link>          </div>
          <div class="carousel-item">
            <router-link :to="getSongLink()">
              <SheetInfo style="zoom: 0.9;" name="Dragonborn" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
            </router-link>          </div>
          <div class="carousel-item">
            <router-link :to="getSongLink()">
              <SheetInfo style="zoom: 0.9;" name="Dragonborn" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
            </router-link>          </div>
          <div class="carousel-item">
            <router-link :to="getSongLink()">
              <SheetInfo style="zoom: 0.9;" name="Dragonborn" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
            </router-link>          </div>
          <div class="carousel-item">
            <router-link :to="getSongLink()">
              <SheetInfo style="zoom: 0.9;" name="Dragonborn" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
            </router-link>          </div>
          <div class="carousel-item">
            <router-link :to="getSongLink()">
              <SheetInfo style="zoom: 0.9;" name="Dragonborn" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
            </router-link>          </div>
          <div class="carousel-item">
            <router-link :to="getSongLink()">
              <SheetInfo style="zoom: 0.9;" name="Dragonborn" filter="video-game-soundtracks" difficulty="Advanced" composer="Jeremy Soule" routeToImage="images/displaySheets/Dragonborn.jpg" />
            </router-link>          </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <!-- <span class="visually-hidden">Previous</span> -->
          <i class='fas fa-arrow-circle-left' style='font-size:48px;'></i>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <!-- <span class="visually-hidden">Next</span> -->
          <i class='fas fa-arrow-circle-right' style='font-size:48px;'></i>
      </button>
  </div>
</template>

<script>
// import bootstrap from 'bootstrap'
import SheetInfo from '@/components/SheetInfo.vue'
export default {
  name: 'Carousel',
  components: {
    SheetInfo
  },
  mounted () {
    const $ = require('jquery');
// We declare it globally
window.$ = $;

// You can use it now
// $('body').css('background-color', 'orange');
    var multipleCardCarousel = document.querySelector(
      "#carouselExampleControls"
    );
    if (window.matchMedia("(min-width: 768px)").matches) {
      // var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      //   interval: false,
      // });
      // console.log(carousel);
      var carouselWidth = $(".carousel-inner")[0].scrollWidth;
      var cardWidth = $(".carousel-item").width();
      var scrollPosition = 0;
      $("#carouselExampleControls .carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
          );
        }
      });
      $("#carouselExampleControls .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
          );
        }
      });
    } else {
      $(multipleCardCarousel).addClass("slide");
    }
  },
  methods: {
    getSongLink() {
      return "/viewSong?song=2";
    }
  }
}
</script>

<style>
  /* .carousel-inner {
    padding: 1em;
  } */
  .carousel-control-prev,
  .carousel-control-next {
    /* background-color: #e1e1e1; */
    width: 6vh;
    height: 6vh;
    border-radius: 50%!important;
    top: 50%;
    transform: translateY(-50%);
    color: rgb(50, 50, 50);
    transition: 0.2s;
  }

  .carousel-control-prev:hover,
  .carousel-control-next:hover,
  .carousel-control-prev:focus,
  .carousel-control-next:focus {
    color: rgb(90, 90, 90);
  }

  @media (max-width: 767px){
    .carousel-item {
      margin-right: 0;
      flex: 0 0 100%;
      /* justify-content: center; */
      display: block;
      /* margin-left: 20px!important;
      margin-right: 20px!important; */
    }
    .carousel-inner {
      display: flex;
      /* overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    }
  }
  @media (min-width: 768px) and (max-width: 900px){
    .carousel-item {
      margin-right: 0;
      flex: 0 0 50%;
      /* justify-content: center; */
      display: block;
      /* margin-left: 20px!important;
      margin-right: 20px!important; */
    }
    .carousel-inner {
      display: flex;
      /* overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    }
  }
  @media (min-width: 901px) and (max-width: 1200px){
    .carousel-item {
      margin-right: 0;
      flex: 0 0 33.333333%;
      /* justify-content: center; */
      display: block;
      /* margin-left: 20px!important;
      margin-right: 20px!important; */
    }
    .carousel-inner {
      display: flex;
      /* overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    }
  }
  @media (min-width: 1201px){
    .carousel-item {
      margin-right: 0;
      flex: 0 0 25%;
      /* justify-content: center; */
      display: block;
      /* margin-left: 20px!important;
      margin-right: 20px!important; */
    }
    .carousel-inner {
      display: flex;
      /* overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    }
  }
</style>
