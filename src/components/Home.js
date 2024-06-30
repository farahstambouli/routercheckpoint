import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const Home = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Link to={`/movie/${index}`} key={index} style={{ textDecoration: 'none' }}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
