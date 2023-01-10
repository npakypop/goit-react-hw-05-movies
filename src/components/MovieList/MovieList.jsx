import { Link } from 'react-router-dom';
import { List, MovieItem, WrapInfo, Button } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(
        ({ title, id, release_date, name, first_air_date, poster_path }) => (
          <MovieItem key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width={300}
            />
            <WrapInfo>
              <h4>{title ? title : name}</h4>
              
              <Link to={`/movies/${id}`}>
                <Button>More Info</Button>
              </Link>
            </WrapInfo>
          </MovieItem>
        )
      )}
    </List>
  );
};
