import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  return (
    <div className="row">
      {movies.map(movie => (
        <div key={movie.id} className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src={movie.posterURL} className="card-img-top" alt={movie.title} />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.description}</p>
              <Link to={`/movies/${movie.id}`} className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
