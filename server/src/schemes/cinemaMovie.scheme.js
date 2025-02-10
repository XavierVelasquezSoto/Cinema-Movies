const mongoose = require("mongoose");

const CinemaMoviesScheme = mongoose.Schema(
  {
    title: String,
    synopsis: String,
    duration: String,
    cast: String,
    director: String,
    genre: String,
    mpaa: String,
    hours: [[String]],
    date: [String],
    images: String,
    releaseDate: String,
    hall: [String]
  },
  {
    collection: "cinema"
  }
);

module.exports = CinemaMoviesScheme;
