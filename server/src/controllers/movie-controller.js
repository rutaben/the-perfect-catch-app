const MovieModel = require('../models/movie-model');
const MovieViewModel = require('../view-models/movie-view-model');

const getMovies = async (req, res) => {
  const movieDocs = await MovieModel.find().populate('genres');
  const movies = movieDocs.map((movie) => new MovieViewModel(movie));
  res.status(200).json({
    movies
  });
};

const createMovie = async (req, res) => {
  console.log(req.body);
  const { title, genres } = req.body;
  const movieDoc = await MovieModel({
    title,
    genres
  });

  try {
    await movieDoc.save();
    const movie = new MovieViewModel(movieDoc);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({
      message: `This movie already exists`
    });
  }
};

const getMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movieDoc = await MovieModel.findById(id).populate('genres');
    const movie = new MovieViewModel(movieDoc);
    res.status(200).json(movie);
  } catch (error) {
    res.status(404).json({
      message: `Element with id: ${id} is not found'`
    });
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movieDoc = await MovieModel.findByIdAndDelete(id);
    const movie = new MovieViewModel(movieDoc);
    res.status(200).json(movie);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      message: 'Could not find the movie'
    });
  }
};

module.exports = {
  getMovies,
  createMovie,
  getMovie,
  deleteMovie
};
