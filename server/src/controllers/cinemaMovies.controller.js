const CinemaMoviesModel = require("../models/cinemaMovie.model");

const cinemaMoviesController = {};

cinemaMoviesController.getAllCinemaMovies = async (req, res) => {
  try {
    const allCinemaMoviesModel = await CinemaMoviesModel.find();
    return res.json(allCinemaMoviesModel);
  } catch (error) {
    return res.json({ error: "Error reading database" + error });
  }
};

cinemaMoviesController.getMovieById = async (req, res) => {
  const { id } = req.params;

  try {
    const CinemaMovie = await CinemaMoviesModel.find(id);
    return res.json(CinemaMovie);
  } catch (error) {
    return res.json({ error: "Error reading database" + error });
  }
};

cinemaMoviesController.createCinemaMovies = async (req, res) => {
  const cinemaMoviesInfo = req.body;
  const newCinemaMovies = new CinemaMoviesModel({ ...cinemaMoviesInfo });
  try {
    await newCinemaMovies.save();
    const allCinemaMoviesModel = await CinemaMoviesModel.find();
    return res.json(allCinemaMoviesModel);
  } catch (error) {
    return res.json({ error: "Error reading database" + error });
  }
};

cinemaMoviesController.updateCinemaMovies = async (req, res) => {
  const { id } = req.params;
  const newInfoCinemaMovies = req.body;

  try {
    const cinemaMoviesToUpdate = await CinemaMoviesModel.findById(id);
    if (!cinemaMoviesToUpdate) {
      return res.json({ error: "Movie not found" });
    }
    await CinemaMoviesModel.updateOne(
      { _id: id },
      { $set: { ...newInfoCinemaMovies } }
    );
    const allCinemaMoviesModel = await CinemaMoviesModel.find();
    return res.json(allCinemaMoviesModel);
  } catch (error) {
    return res.json({ error: "Error reading database" + error });
  }
};

cinemaMoviesController.deleteCinemaMovies = async (req, res) => {
  const { id } = req.params;

  try {
    const cinemaMoviesToDelete = await CinemaMoviesModel.findById(id);
    if (!cinemaMoviesToDelete) {
      return res.json({ error: "Movie not found" });
    }
    await CinemaMoviesModel.deleteOne({ _id: id });
    const allCinemaMoviesModel = await CinemaMoviesModel.find();
    return res.json(allCinemaMoviesModel);
  } catch (error) {
    return res.json({ error: "Error reading database" + error });
  }
};

module.exports = cinemaMoviesController;
