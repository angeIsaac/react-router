// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', description: 'A mind-bending thriller', posterURL:    'https://static.hitek.fr/img/actualite/2015/06/fb_9389e514fca06a37ba2cba3493be1fbc-large.jpeg', rating: 5, trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0' },
    { id: 2, title: 'Interstellar', description: 'A journey through space', posterURL: 'https://www.picclickimg.com/0soAAOSwnnBmGFIj/Film-Interstellaire-2014-Affiche-Poster-45X32Cm-Christopher-Nolan.webp', rating: 4, trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E' },
    { id: 3, title: 'House of Dragon', description: 'Fire and blood', posterURL:       'https://thumb.canalplus.pro/http/unsafe/%7BresolutionXY%7D/smart/creativemedia-image.canalplus.pro/content/0001/55/95de83fd995d2497b1d5c206e12efa1c25f67d32.jpeg', rating: 3, trailerURL: 'https://www.youtube.com/watch?v=EHTT6ufccx8'},
  ]);

  return (
    <Router>
      <div className="App container">
        <h1 className="my-4">Movie App</h1>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
