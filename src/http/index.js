import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.ACCESS_TOKEN}`;

const searchMovies = (query, token) => axios
  .get('/search/movie', {
    cancelToken: token,
    params: { query },
  })
  .then(({ data: { results } }) => {
    return results.map(({ id, title }) => ({ id, title }));
  });

export {
  searchMovies,
};
