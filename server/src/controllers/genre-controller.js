const GenreModel = require('../models/genre-model');
const GenreViewModel = require('../view-models/genre-view-model');

const getGenres = async (req, res) => {
  const genreDocs = await GenreModel.find();
  const genres = genreDocs.map((genre) => new GenreViewModel(genre));
  res.status(200).json({ genre: genres });
};

const createGenre = async (req, res) => {
  const genreDoc = await GenreModel(req.body);
  try {
    await genreDoc.save();
    const genre = new GenreViewModel(genreDoc);
    res.status(201).json(genre);
  } catch (error) {
    res.status(400).json({
      message: `This genre already exists`
    });
  }
};

const getGenre = async (req, res) => {
  const { id } = req.params;
  try {
    const genreDoc = await GenreModel.findById(id);
    const genre = new GenreViewModel(genreDoc);
    res.status(200).json(genre);
  } catch (error) {
    res.status(404).json({
      message: `Element with id: ${id} is not found`
    });
  }
};

module.exports = {
  getGenres,
  createGenre,
  getGenre
};
