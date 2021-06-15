import React from 'react';
import axios from 'axios';

import useDebounce from './useDebounce';
import { searchMovies } from './http';

const initialQuery = '';

const Search = () => {
  const [query, setQuery] = React.useState(initialQuery);
  const [movies, setMovies] = React.useState([]);
  const debouncedQuery = useDebounce(query, 500);

  React.useEffect(() => {
    const source = axios.CancelToken.source();
    if (debouncedQuery) {
      searchMovies(debouncedQuery, source.token)
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
      ) : null}
    </>
  );
};

export default Search;
