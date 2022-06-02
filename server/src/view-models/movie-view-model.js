const GenreViewModel = require('../view-models/genre-view-model');

class ProductViewModel {
  constructor({ _id, title, genres, createdAt, updatedAt }) {
    this.id = _id;
    this.title = title;
    if (genres) {
      this.genres = genres.map((genre) => new GenreViewModel(genre));
    }
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = ProductViewModel;
