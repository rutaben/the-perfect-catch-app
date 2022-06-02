const express = require('express');
const {
  getMovies,
  createMovie,
  getMovie,
  deleteMovie
} = require('../controllers/movie-controller');

const router = express.Router();

router.get('/', getMovies);

router.post('/', createMovie);

router.get('/:id', getMovie);

router.delete('/:id', deleteMovie);

module.exports = router;
