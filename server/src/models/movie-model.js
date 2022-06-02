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
    ]
  },
  {
    timestamps: true
  }
);

const MovieModel = Mongoose.model('Product', movieSchema);

module.exports = MovieModel;
