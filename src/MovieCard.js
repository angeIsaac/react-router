// src/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={movie.posterURL} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">Rating: {movie.rating}</p>
        <Link to={`/movies/${movie.id}`} className="btn btn-primary">Voir les détails</Link>
      </div>
    </div>
  );
}

export default MovieCard;
