import axios from 'axios';

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
    const movies = await instance.get('/movies');

    return movies.data;
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

const API = {
  getMovies,
  getMovie,
  getGenres
};

export default API;
