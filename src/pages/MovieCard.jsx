import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/Api';
import { Outlet } from 'react-router-dom';
import {
  Title,
  Poster,
  InfoLink,
  CardWrapper,
  Info,
  Buttons,
  GoBack,
} from './MovieCard.styled';

const MovieCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log('location', location);

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, name, release_date, first_air_date, overview } =
    movie;

  return (
    <>
      <GoBack to={backLinkHref}>Back to movies</GoBack>
      <CardWrapper>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={200}
        />
        <Info>
          <Title>{title ? title : name}</Title>
          <p>Release date: {release_date ? release_date : first_air_date}</p>
          <p>{overview}</p>
          <Buttons>
            <li>
              <InfoLink to="cast">Cast</InfoLink>
            </li>
            <li>
              <InfoLink to="reviews">Reviews</InfoLink>
            </li>
          </Buttons>
          <Outlet />
        </Info>
      </CardWrapper>
    </>
  );
};
export default MovieCard;
