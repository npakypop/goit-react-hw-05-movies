import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getMovieById } from 'services/Api';
import { Outlet,Link } from 'react-router-dom';

export const MovieCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  
  useEffect(() => {
    getMovieById(movieId).then(setMovie)
  }, [movieId]);
  
  if (!movie) {
    return null;
  };

  const { poster_path, title, name, release_date, first_air_date } = movie;
  
  return (
    <div>
      <h4>{title ? title : name}</h4>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width={200}
      />
      <p>{release_date ? release_date : first_air_date}</p>
      <Link to="cast" >Cast</Link>
      <Link to="reviews" >Reviews</Link>
      <Outlet />
    </div>
  );

};