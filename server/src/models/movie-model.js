const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {
      type: 'string',
      required: true
    },
    genres: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Genre'
      }
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

const MovieModel = Mongoose.model('Movies', movieSchema);

module.exports = MovieModel;
