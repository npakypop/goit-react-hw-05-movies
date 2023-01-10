import { SearchForm } from '../components/SearchForm/SearchForm';
import { MovieList } from '../components/MovieList/MovieList';
import { getMovieByQuery } from 'services/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) return;

    getMovieByQuery(movieName)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => console.log(error));
  }, [movieName]);

  const onSearchSubmit = resp => {
    setSearchParams(resp !== '' ? { query: resp } : {});
  };

  return (
    <>
      <SearchForm onSearchSubmit={onSearchSubmit} value={movieName} />
      <MovieList movies={movies} />
    </>
  );
};
export default Movies;
