import SessionService from './session-service';
import { axiosInstance } from './helpers/axios-instance';

const getGenres = async () => {
  try {
    const response = await axiosInstance.get('/genres');

    return response.data;
  } catch (error) {
    return error;
  }
};

const getMovies = async () => {
  try {
    const userId = SessionService.get('auth').user.id;
    const movies = await axiosInstance.get('/movies');
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
    const movie = await axiosInstance.get(`/movies/${id}`);

    return movie.data;
  } catch (error) {
    return error;
  }
};

const createMovie = async (movieData) => {
  try {
    const movie = await axiosInstance.post('/movies', movieData);

    return movie.data;
  } catch (error) {
    return error.message;
  }
};

const deleteMovie = async (id) => {
  try {
    const movie = await axiosInstance.delete(`movies/${id}`);

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
