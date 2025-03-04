import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={`${movie.title} Poster`} />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
