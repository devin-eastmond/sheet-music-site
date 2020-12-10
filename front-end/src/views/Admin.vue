<template>
  <div class="admin">
    <Header pageName="Admin"/>
    <div class="rectangle-white form-block">
      <h2>Add a Song</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="form-block">
            <input v-model="title" placeholder="Title">
            <p></p>
            <label for="difficulty" class="form-label">Difficulty: </label>
            <select v-model="difficulty" name="difficulty" id="difficulty">
              <option value="easy">Easy</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <br>
            <label for="genre" class="form-label">Genre: </label>
            <select v-model="genre" name="genre" id="genre">
              <option value="movie-music">Movie Music</option>
              <option value="video-game-soundtracks">Video Game Soundtrack</option>
              <option value="religious-music">Religious Music</option>
            </select>
            <br>
            <input v-model="composer" placeholder="Composer">
            <p></p>
            <label for="thumbnail-upload" class="btn btn-info button-label">
              Upload thumbnail
              <input id="thumbnail-upload" type="file" name="thumbnail" @change="thumbnailChanged">
            </label>
            <p></p>
            <label for="pdf-upload" class="btn btn-info button-label">
              Upload pdf
              <input id="pdf-upload" type="file" name="pdf" @change="pdfChanged">
            </label>
            <p></p>
            <button class="btn btn-dark" @click="upload">Add song</button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="display">
            <div class="upload" v-if="thumbnail">
              <h5>Thumbnail: {{ thumbnail.name }}</h5>
              <img :src="thumbnailTempPath" class="sample-image"/>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="display">
            <div class="upload" v-if="pdf">
              <h5>PDF: {{ pdf.name }}</h5>
              <img :src="pdfTempPath" class="sample-image"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rectangle-blue form-block">
      <h2>Delete/edit a Song</h2>
      <div class="row">
        <div class="col-md-3">
          <div class="form-block">

            <div class="edit">
              <div class="form">
                <input v-model="findTitle" placeholder="Search">
                <div class="suggestions" v-if="suggestions.length > 0">
                  <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectSong(s)">{{s.title}}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-3">
          <div class="form-block" v-if="findSong">

            <input v-model="findSong.title" placeholder="Title">
            <p></p>
            <label for="difficulty" class="form-label">Difficulty: </label>
            <select v-model="findSong.difficulty" name="difficulty" id="difficulty">
              <option value="easy">Easy</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <br>
            <label for="genre" class="form-label">Genre: </label>
            <select v-model="findSong.genre" name="genre" id="genre">
              <option value="movie-music">Movie Music</option>
              <option value="video-game-soundtracks">Video Game Soundtrack</option>
              <option value="religious-music">Religious Music</option>
            </select>
            <br>
            <input v-model="findSong.composer" placeholder="Composer">
            <p></p>
            <button class="btn btn-submit" @click="editSong(findSong)">Edit song</button>
            <button class="btn btn-danger" @click="deleteSong(findSong)">Delete song</button>
          </div>
        </div>
        <div class="col-md-3">
          <div class="display">
            <div class="upload" v-if="findSong">
              <h5>Thumbnail</h5>
              <img :src="findSong.thumbnailPath" class="sample-image"/>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="display">
            <div class="upload" v-if="findSong">
              <h5>PDF</h5>
              <img :src="findSong.pdfPath" class="sample-image"/>
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
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
      title: "",
      difficulty: "",
      genre: "",
      composer: "",
      thumbnail: null,
      thumbnailTempPath: "",
      pdf: null,
      pdfTempPath: "",
      songs: [],
      findTitle: "",
      findSong: null,
    }
  },
  components: {
    Header,
    Footer
  },
  created() {
    this.getSongs();
  },
  computed: {
    suggestions() {
      let songs = this.songs.filter(song => song.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      return songs.sort((a, b) => a.title > b.title);
    }
  },
  methods: {
    async upload() {
      try {
        const thumbnailData = new FormData();
        thumbnailData.append('photo', this.thumbnail, this.thumbnail.name)
        let r1 = await axios.post('/api/photos', thumbnailData);

        const pdfData = new FormData();
        pdfData.append('photo', this.pdf, this.pdf.name)
        let r2 = await axios.post('/api/photos', pdfData);

        await axios.post('/api/songs', {
          title: this.title,
          difficulty: this.difficulty,
          genre: this.genre,
          composer: this.composer,
          thumbnailPath: r1.data.path,
          pdfPath: r2.data.path,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getSongs() {
      try {
        let response = await axios.get("/api/songs");
        this.songs = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteSong(song) {
      try {
        await axios.delete("/api/songs/" + song._id);
        this.findSong = null;
        this.getSongs();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editSong(song) {
      try {
        await axios.put("/api/songs/" + song._id, {
          title: this.findSong.title,
          difficulty: this.findSong.difficulty,
          genre: this.findSong.genre,
          composer: this.findSong.composer
        });
        this.findSong = null;
        this.getSongs();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    thumbnailChanged(event) {
      this.thumbnail = event.target.files[0]
      this.thumbnailTempPath = URL.createObjectURL(this.thumbnail);
    },
    pdfChanged(event) {
      this.pdf = event.target.files[0]
      this.pdfTempPath = URL.createObjectURL(this.pdf);
    },
    selectSong(song) {
      this.findTitle = "";
      this.findSong = song;
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

.form-block input {
  width: 90%;
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
  margin: 5px 5px;
}

.rectangle-white .form-label {
  color: rgb(0, 111, 139);
  padding-right: 10px;
}

.rectangle-blue .form-label {
  color: white;
  padding-right: 10px;
}

.rectangle-white, .rectangle-blue {
  padding: 40px;
}

.rectangle-white {
  padding-top: 0px;
}

.rectangle-white h2, .rectangle-white p, .rectangle-white h5 {
  color: rgb(0, 111, 139);
}

input[type="file"] {
    display: none;
}

.sample-image {
  max-height: 400px;
}

.display {
  align-content: center;
  margin: auto;
  text-align: center;
}

.suggestions {
  width: 200px;
  border: 1px solid #ccc;
  background-color: white;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}

</style>
