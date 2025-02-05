const express = require("express");
const cinemaMoviesController = require("../controllers/cinemaMovies.controller");

const cinemaMovies = express.Router();

cinemaMovies.get("/", cinemaMoviesController.getAllCinemaMovies);
cinemaMovies.post("/", cinemaMoviesController.createCinemaMovies);
cinemaMovies.patch("/:id", cinemaMoviesController.updateCinemaMovies);
cinemaMovies.delete("/:id", cinemaMoviesController.deleteCinemaMovies);

module.exports = cinemaMovies;
