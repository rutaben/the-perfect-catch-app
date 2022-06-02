const GenreViewModel = require('../view-models/genre-view-model');
const UserViewModel = require('../view-models/user-view-model');

class MovieViewModel {
  constructor({ _id, title, genres, user, createdAt, updatedAt }) {
    this.id = _id;
    this.title = title;
    if (genres) {
      this.genres = genres.map((genre) => new GenreViewModel(genre));
    }
    if (user) {
      this.user = new UserViewModel(user);
    }
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = MovieViewModel;
