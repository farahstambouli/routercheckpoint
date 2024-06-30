import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Harry Potter and the Philosophers Stone',
      description: 'what a start...',
      posterURL: 'https://musicart.xboxlive.com/7/92e05000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      rating: 8,
      trailerLink: 'https://youtu.be/VyHV0BRtdxo?si=gOgA0kx54tgqgII3'
    },
    {
      id: 2,
      title: 'Harry Potter and the Chamber of Secrets',
      description: 'it gets better and more dangerous',
      posterURL: 'https://images.moviesanywhere.com/51d05e3bd56acb23ba41a4db49633d98/743b4280-5ea4-4468-8d63-d565d480bee2.jpg',
      rating: 7,
      trailerLink: 'https://www.youtube.com/embed/trailer1'
    },
    {
      id: 3,
      title: 'Harry Potter and the Prisoner of Azkaban',
      description: 'oh boy thats my favorite so far',
      posterURL: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQACTYV6e87GkU_p1_yJmgVRIVD16WhPXGYfxGZJ-crbXS4FDFPQuzvlA13fENrH0VZbbEcUnCZo9PQvI6b9Nc91-Q3uM0OsSxfLoRp2N0',
      rating: 9,
      trailerLink: 'https://www.youtube.com/embed/trailer1'
    },
    {
      id: 4,
      title: 'Harry Potter and the Goblet of Fire',
      description: 'danger danger',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7X1aalxrBgvNZpZgAWz7OhH38dRke34Zm7TJvm73wK-AspbMztBijtcgb3Mb3M1eGXnM&usqp=CAU',
      rating: 9,
      trailerLink: 'https://www.youtube.com/embed/trailer1'
    },
    {
      id: 5,
      title: 'Harry Potter and the Order of the Phoenix',
      description: 'alliances are begginig to form',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-R5Qnd9msPD4dT04oCi09Dk7KzgG1xfAxGqiYPisXo057ss0XaMebe4I1-K1ECKzXLgE&usqp=CAU',
      rating: 9,
      trailerLink: 'https://www.youtube.com/embed/trailer1'
    }
    ,
    {
      id: 6,
      title: 'Harry Potter and the Half-Blood Prince',
      description: 'the prince is WHO??',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfBTeqMsc0zZVzypdxJfE3X2sUF3qnw1Lfx7Tk8ba_WH9B3MGmggE2yoALCnl7hhdWyM&usqp=CAU',
      rating: 9,
      trailerLink: 'https://www.youtube.com/embed/trailer1'
    } ,
    {
      id: 7,
      title: 'Harry Potter and the Deathly Hallows - Part 1',
      description: 'goodby my friend....',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_.jpg',
      rating: 9,
      trailerLink: 'https://www.youtube.com/embed/trailer1'
    } ,
    {
      id: 8,
      title: 'Harry Potter and the Deathly Hallows - Part 2',
      description: 'to be or not to be ...?',
      posterURL: 'https://musicart.xboxlive.com/7/3de15000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      rating: 9,
      trailerLink: 'https://www.youtube.com/embed/trailer1'
    }
  ]);

  return (
    <Router>
      <div className="App">
        <h1>Movie App</h1>
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

