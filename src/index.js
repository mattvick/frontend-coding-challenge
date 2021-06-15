import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import useDebounce from './useDebounce';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.ACCESS_TOKEN}`;

const initialQuery = '';

const getMovies = (query, token) => axios
  .get('/search/movie', {
    cancelToken: token,
    params: { query },
  })
  .then(({ data: { results } }) => {
    return results.map(({ id, title }) => ({ id, title }));
  });

const App = () => {
  const [query, setQuery] = React.useState(initialQuery);
  const [movies, setMovies] = React.useState([]);
  const debouncedQuery = useDebounce(query, 500);

  React.useEffect(() => {
    const source = axios.CancelToken.source();
    if (debouncedQuery) {
      getMovies(debouncedQuery, source.token)
        .then(setMovies)
        .catch(() => {
          if (axios.isCancel(source)) {
            return;
          }
          setMovies([]);
        });
    } else {
      setMovies([]);
    }

    return () => {
      source.cancel('Request canceled');
    };
  }, [debouncedQuery]);

  return (
    <>
      <h1>Frontend Coding Challenge</h1>
      <input
        defaultValue={initialQuery}
        onChange={(e) => setQuery(e.target.value)}
      />
      {movies && movies.length ? (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      ) : (
        <p>No movies</p>
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
