const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const uploadImage = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});
const uploadAudio = multer({
  dest: '../front-end/public/audio/',
  limits: {
    fileSize: 100000000000
  }
});

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/music', {
  useNewUrlParser: true
});


const songSchema = new mongoose.Schema({
  title: String,
  difficulty: String,
  genre: String,
  composer: String,
  thumbnailPath: String,
  pdfPath: String,
  audioPath: String,
});


const Song = mongoose.model('Song', songSchema);


// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', uploadImage.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});


app.post('/api/audio', uploadAudio.single('audio'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/audio/" + req.file.filename
  });
});


app.post('/api/songs', async (req, res) => {
  const song = new Song({
    title: req.body.title,
    difficulty: req.body.difficulty,
    genre: req.body.genre,
    composer: req.body.composer,
    thumbnailPath: req.body.thumbnailPath,
    pdfPath: req.body.pdfPath,
    audioPath: req.body.audioPath,
  });
  try {
    await song.save();
    res.send(song);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3000, () => console.log('Server listening on port 3000!'));
