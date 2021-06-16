import axios from 'axios';

import { getMovie, searchMovies } from './http';

jest.mock('axios');

const token = 'abc123';
const id = 680;
const title = 'Pulp Fiction';
const releaseDate = '1994-09-10';

it('should fetch a movie', () => {  
  const posterPath = '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg';

  const movie = {
    id,
    title,
    overview: 'About a burger-loving hit man.',
  };

  const response = {
    data: {
      ...movie,
      release_date: releaseDate,
      poster_path: posterPath,
    },
  };

  axios.get.mockResolvedValue(response);

  return getMovie(id, token).then(data => expect(data).toEqual({
    ...movie,
    releaseDate,
    posterPath,
  }));
});

it('should search movies', () => {
  const query = 'pulp';

  const movie = { id, title };

  const response = {
    data: {
      results: [{
        ...movie,
        release_date: releaseDate,
      }],
    },
  };

  axios.get.mockResolvedValue(response);

  return searchMovies(query, token).then(data => expect(data).toEqual([{
    ...movie,
    releaseDate,
  }]));
});
