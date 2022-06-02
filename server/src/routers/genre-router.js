const express = require('express');
const { getGenres, createGenre, getGenre } = require('../controllers/genre-controller');

const router = express.Router();

router.get('/', getGenres);

router.post('/', createGenre);

router.get('/:id', getGenre);

module.exports = router;
