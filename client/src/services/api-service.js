import axios from 'axios';
import SessionService from './session-service';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

const getGenres = async () => {
  try {
    const response = await instance.get('/genres');

    return response.data;
  } catch (error) {
    return error;
  }
};

const getMovies = async () => {
  try {
    const userId = SessionService.get('auth').user.id;
    const movies = await instance.get('/movies');
    const moviesFiltered = Object.values(movies.data)
      .flat()
      .filter((movie) => movie.user.id === userId);

    return moviesFiltered;
  } catch (error) {
    return error;
  }
};

const getMovie = async (id) => {
  try {
    const movie = await instance.get(`/movies/${id}`);

    return movie.data;
  } catch (error) {
    return error;
  }
};

const createMovie = async (movieData) => {
  try {
    const movie = await instance.post('/movies', movieData);

    return movie.data;
  } catch (error) {
    return error.message;
  }
};

const deleteMovie = async (id) => {
  try {
    const movie = await instance.delete(`movies/${id}`);

    return movie.data;
  } catch (error) {
    return error.message;
  }
};

const ApiService = {
  getGenres,
  getMovies,
  getMovie,
  createMovie,
  deleteMovie
};

export default ApiService;
