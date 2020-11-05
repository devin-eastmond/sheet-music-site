<template>
<div id="app">
  <div id="nav">
    <header>
      <h1>
        <router-link to="/">Eastmond Music</router-link>
      </h1>
    </header>

    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="index.html"><img src="images/pianoIcon.png" class="logo"></a>
      <div class="navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-bind:class="isActiveLink('/')">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item" v-bind:class="isActiveLink('/browse')">
            <router-link to="/browse" class="nav-link">Browse Music</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Genres
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/browse?genre=movie-music" class="dropdown-item">Movie Music</router-link>
              <router-link to="/browse?genre=video-game-soundtracks" class="dropdown-item">Video Game Soundtracks</router-link>
              <router-link to="/browse?genre=religious-music" class="dropdown-item">Religious Music</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Difficulty Levels
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/browse?difficulty=easy" class="dropdown-item">Easy</router-link>
              <router-link to="/browse?difficulty=intermediate" class="dropdown-item">Intermediate</router-link>
              <router-link to="/browse?difficulty=advanced" class="dropdown-item">Advanced</router-link>
            </div>
          </li>
          <li class="nav-item" v-bind:class="isActiveLink('/about')">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" id="searchInput" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" id="submitSearch" type="submit">Search</button>
        </form>
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
  methods: {
    isActiveLink(activeLink) {
      if (this.$router.currentRoute.path == activeLink)
        return "active";
      else {
        return ""
      }
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  height: 75px;
  background-color: rgb(0, 111, 139);
  justify-content: center;
  display: table;
  width: 100%;
  padding: 20px;
}

header h1 a {
  color: white;
  display: table-cell;
  vertical-align: middle;
}

header h1 a:hover {
  color: white;
  text-decoration: none;
}


/******** Navbar Styling ********/
.navbar {
  height: 100%;
  margin: 0px;
  padding: 0px 10px;
  background-color: rgb(255, 255, 255);
}

.navbar-brand {
  padding: 12px 7px;
}

.nav-item {
  padding: 7px 7px;
}

.active {
  background-color: rgb(0, 139, 137);
}

.navbar a {
  color: rgb(0, 111, 139);
}

.active a {
  color: white;
}

.dropdown-menu {
  border-radius: 0px;
  border: none;
  padding: 0px;
  margin: 0px;
  background-color: white;
}

.nav-item:hover {
  background-color: rgb(177, 216, 226);
}

.active:hover {
  background-color: rgb(0, 139, 137);
}

.dropdown-divider {
  margin: 0px;
}

a#navbarDropdown.nav-link.dropdown-toggle:active,
a#navbarDropdown.nav-link.dropdown-toggle:focus {
  outline: 0;
}

.dropdown-item {
  margin: 0px;
  padding: 8px 10px;
}

.dropdown-item:hover {
  background-color: rgb(177, 216, 226);
  color: rgb(0, 111, 139);
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
</style>
