import React from 'react';
import PropTypes from 'prop-types';

const PosterImage = ({ baseUrl, size, path, alt }) => <img src={`${baseUrl}${size}${path}`} alt={alt} />;

PosterImage.defaultProps = {
  baseUrl: '//image.tmdb.org/t/p/',
  size: 'w92',
  alt: 'Movie poster image',
};

PosterImage.propTypes = {
  baseUrl: PropTypes.oneOf([
    '//image.tmdb.org/t/p/',
    'https://image.tmdb.org/t/p/',
    'http://image.tmdb.org/t/p/',
  ]),
  size: PropTypes.oneOf(['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original']),
  alt: PropTypes.string,
  path: PropTypes.string.isRequired,
};

export default PosterImage;
