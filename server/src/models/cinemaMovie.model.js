const mongoose = require("mongoose");
const CinemaMoviesScheme = require("../schemes/cinemaMovie.scheme");

const CinemaMoviesModel = mongoose.model("CinemaMovies", CinemaMoviesScheme);

module.exports = CinemaMoviesModel;
