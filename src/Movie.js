import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { getMovie } from './http';
import PosterImage from './PosterImage';

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
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>{movie.title} ({movie.releaseDate && movie.releaseDate.substring(0,4)})</h2>
      <div className="row">
        <div>
          <PosterImage path={movie.posterPath} alt={`${movie.title} movie poster`} />
        </div>
        <p>{movie.overview}</p>
      </div>
    </>
  );
};

export default Movie;
