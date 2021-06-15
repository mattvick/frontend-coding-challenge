import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.ACCESS_TOKEN}`;

const searchMovies = (query, token) => axios
  .get('/search/movie', {
    cancelToken: token,
    params: { query },
  })
  .then(({ data: { results } }) => results.map(({ id, title, release_date: releaseDate }) => ({ id, title, releaseDate })));

const getMovie = (id, token) => axios
  .get(`/movie/${id}`, {
    cancelToken: token,
  })
  .then(({ data: { id, title, overview, release_date: releaseDate } }) => ({ id, title, overview, releaseDate }));

export {
  searchMovies,
  getMovie,
};
