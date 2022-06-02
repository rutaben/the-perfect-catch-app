const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const genreSchema = new Schema(
  {
    title: {
      type: 'string'
    }
  },
  {
    timestamps: true
  }
);

const GenreModel = Mongoose.model('Genre', genreSchema);

module.exports = GenreModel;
