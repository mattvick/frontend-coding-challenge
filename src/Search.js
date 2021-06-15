import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <label htmlFor="search">Movie search</label>
      <input
        id="search"
        type="search"
        autoComplete="off"
        placeholder="Type a movie title here, e.g Fight Club"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {movies && movies.length ? (
        <ul className="dropdown">
          {movies.map(({ id, title, releaseDate }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movie/${id}`,
                }}
                onClick={() => {
                  setQuery(initialQuery);
                  setMovies([]);
                }}
              >
                {title} ({ releaseDate && releaseDate.substring(0,4) })
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Search;
