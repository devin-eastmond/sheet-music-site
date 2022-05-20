<template>
<div id="app">
  <div id="nav">
    <header>
      <div class="row">
        <div class="col-md-5 col-lg-4">
          <router-link to="/">
            <img src="images/logo2.png" style="width: 300px; margin-bottom: 10px;"/>
          </router-link>
          <!-- <h1>
            <router-link to="/">Eastmond Music</router-link>
          </h1> -->
        </div>
        <div class="col-md-6 col-lg-5">
          <form id="searchBar" class="form-inline my-2 my-lg-0" @submit="searchSubmit" style="display: inline">
            <input class="form-control mr-sm-2" id="searchInput" type="search" placeholder="Search" aria-label="Search" v-model="searchInput" style="display: inline-block">
            <button class="btn btn-dark my-2 my-sm-0" id="submitSearch" type="submit" style="display: inline-block">Search</button>
          </form>
        </div>
        <div class="col-md-3">
        </div>
      </div>
    </header>

    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg" style="padding-left: 10px;">
      <div class="navbar-dark">
        <router-link to="/" class="navbar-brand" id="homeIcon">
          <img src="images/AltoClef.png" style="height: 30px;" id="iconWithBars">
          <img src="images/AltoClefNoBar.png" style="height: 30px;" id="iconNoBars">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!-- <li class="nav-item" id="homeIcon">
            <router-link to="/" class="nav-link">
              <img src="images/AltoClef.png" style="height: 30px;" id="iconWithBars">
              <img src="images/AltoClefNoBar.png" style="height: 30px;" id="iconNoBars">
            </router-link>
          </li> -->
          <li class="nav-item" v-bind:class="isActiveLink('/compositions')">
            <router-link to="/compositions" class="nav-link">Compositions</router-link>
          </li>
          <li class="nav-item" v-bind:class="isActiveLink('/browse')">
            <router-link to="/browse" class="nav-link">Sheet Music</router-link>
          </li>
          <li class="nav-item dropdown" @mouseover="hover1 = true" @mouseleave="hover1 = false" id="dropdown1">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Genres
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/browse?genre=movie-music" class="dropdown-item">Movie Music</router-link>
              <router-link to="/browse?genre=video-game-soundtracks" class="dropdown-item">Video Game Soundtracks</router-link>
              <router-link to="/browse?genre=religious-music" class="dropdown-item">Religious Music</router-link>
            </div>
          </li>
          <li class="nav-item dropdown" @mouseover="hover2 = true" @mouseleave="hover2 = false" id="dropdown2">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Difficulty Levels
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/browse?difficulty=easy" class="dropdown-item">Easy</router-link>
              <router-link to="/browse?difficulty=intermediate" class="dropdown-item">Intermediate</router-link>
              <router-link to="/browse?difficulty=advanced" class="dropdown-item">Advanced</router-link>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav navbar-right">
          <li class="nav-item" v-bind:class="isActiveLink('/about')">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item" v-bind:class="isActiveLink('/contact')">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- NAVBAR END -->
  </div>
  <router-view />
</div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      searchInput: '',
      hover1: false,
      hover2: false
    }
  },
  watch: {
    hover1(newValue) {
      if (newValue) {
        document.getElementById("dropdown1").classList.add("show");
      } else {
        document.getElementById("dropdown1").classList.remove("show");
      }
    },
    hover2(newValue) {
      if (newValue) {
        document.getElementById("dropdown2").classList.add("show");
      } else {
        document.getElementById("dropdown2").classList.remove("show");
      }
    }
  },
  methods: {
    isActiveLink(activeLink) {
      if (this.$router.currentRoute.path == activeLink)
        return "activeLink";
      else {
        return ""
      }
    },
    searchSubmit(event) {
      event.preventDefault();
      console.log(this.searchInput);
      let route = "browse?search=" + this.searchInput;
      this.$router.replace(route);
    }
  }
}
</script>


<style>
#app {
  font-family: "Quicksand";
  /* font-family: "Palatino", Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* color: #2c3e50; */
}

h1, h2 {
  font-family: "Koulen", sans-serif;
}

header {

  /* height: 75px; */
  /* background-color: rgb(0, 111, 139); */
  background-color: rgb(139, 0, 0);
  /* justify-content: center; */
  /* display: table; */
  width: 100%;
  padding: 20px;
  padding-bottom: 15px;
}

header h1 a {
  color: white;
  /* display: table-cell; */
  /* vertical-align: middle; */
}

header h1 a:hover {
  color: white;
  text-decoration: none;
}

#searchInput,
#submitSearch {
  margin-top: 4px!important;
  border: none;
  border-radius: 0px;
}

#submitSearch {
  height: 40px;
}

#searchInput {
  width: 70%;
}

/******** Navbar Styling ********/
.navbar {
  height: 100%;
  margin: 0px;
  padding: 0px;
  padding-right: 10px;
  /* background-color: rgb(0, 111, 139); */
  background-color: rgb(139, 0, 0);
  border-top: 1px solid #9c0000 !important;
  border-bottom: 2px solid #9c0000;
}

.navbar-brand {
  padding: 12px 7px;
}

.nav-item {
  padding: 7px 7px;
  transition: 0.2s;
}

.nav-link {
  color: white;
  transition: 0.2s;
}

.activeLink {
  /* background-color: rgb(0, 139, 137); */
  background-color: #9c0000;
}

.navbar a {
  /* color: rgb(0, 111, 139); */
  color: white;
}

.nav-item:hover a {
  /* color: rgb(0, 111, 139); */
}

.activeLink a {
  color: white;
}

#homeIcon {
  background-color: inherit!important;
  width: 30px;
  height: 48px;
}

#homeIcon img {
  transition: 0.5s;

  position: absolute;
  left: 20px;
  top: 15px;
}

#homeIcon:hover img {
  transform: rotate(180deg);
}

#iconWithBars,
#iconNoBars {
  margin-top: -2px;
}

#homeIcon #iconWithBars {
  opacity: 1;
}

#homeIcon:hover #iconWithBars {
  opacity: 0;
}

.dropdown-menu {
  border-radius: 0px;
  border: none;
  padding: 0px;
  margin: 0px;
  margin-top: 2px;
  background-color: white;
}

.nav-item:hover {
  /* background-color: rgb(177, 216, 226); */
  background-color: #9c0000;
}

/* .active:hover {
  background-color: rgb(0, 139, 137);
} */

.dropdown-divider {
  margin: 0px;
}

a#navbarDropdown.nav-link.dropdown-toggle:active,
a#navbarDropdown.nav-link.dropdown-toggle:focus {
  outline: 0;
}

.dropdown-item {
  margin: 0px;
  padding: 15px;
  color: white;
  background-color: rgb(80, 80, 80);
  transition: 0.2s;
}

.dropdown-item:hover,
.dropdown-item:focus {
  /* background-color: rgb(177, 216, 226); */
  /* color: rgb(0, 111, 139); */
  background-color: rgb(90, 90, 90);
  /* background-color: #9c0000; */
  color: white;
}

.show > .dropdown-menu {
  max-height: 170px;
  /* visibility: visible; */
}

.dropdown-menu {
  display: block;
  max-height: 0;
  /* visibility: hidden; */
  transition: all 0.15s;
  overflow: hidden;
}

.navbar-toggler {
  position: absolute;
  right: 10px;
  top: 7px;
  outline: none!important;
  box-shadow: none!important;
}

/******** End Navbar Styling ********/

.page-header {
  color: rgb(0, 111, 139);
  margin: 40px;
}

.logo {
  width: 26px;
  height: 26px;
}

@media all and (max-width: 630px) {
  .hero-image h1 {
    font-size: 40px!important;
    margin-left: -40px!important;
  }


  #filters {
    margin-top: -50px!important;
  }
  h2 {
    font-size: 33px!important;
  }
}
</style>
