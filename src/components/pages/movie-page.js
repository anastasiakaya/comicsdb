import React from 'react';
import MovieItem from '../movie-item';

const MoviePage = ({itemId}) => {
  return (
    <MovieItem itemId={itemId} /> 
  );
};

export default MoviePage;
