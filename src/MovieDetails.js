import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-4" onClick={() => navigate('/')}>Retour à l'accueil</button>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <div className="embed-responsive embed-responsive-16by9 mb-4">
            <iframe className="embed-responsive-item" src={movie.trailerURL} allowFullScreen></iframe>
          </div>
        </div>
      ) : (
        <p>Film non trouvé</p>
      )}
    </div>
  );
}

export default MovieDetails;
