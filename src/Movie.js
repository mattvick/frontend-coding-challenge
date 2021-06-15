import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { getMovie } from './http';

const Movie = () => {
  const [movie, setMovie] = React.useState();
  let { id } = useParams();

  React.useEffect(() => {
    const source = axios.CancelToken.source();
    getMovie(id, source.token)
      .then(setMovie)
      .catch(() => {
        if (axios.isCancel(source)) {
          return;
        }
        setMovie(null);
      });

    return () => {
      source.cancel('Request canceled');
    };
  }, [id]);

  if (!movie) {
    return (
      <>
        <h2>404</h2>
        <p>Page not found.</p>
      </>
    );
  }

  return (
    <>
      <h2>{movie.title} ({movie.releaseDate && movie.releaseDate.substring(0,4)})</h2>
      <p>{movie.overview}</p>
    </>
  );
};

export default Movie;
