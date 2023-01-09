import { SearchForm } from '../components/SearchForm/SearchForm';
import { MovieList } from '../components/MovieList/MovieList';
import { getMovieByQuery } from 'services/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

    
  useEffect(() => {
    if (!query) return;
    getMovieByQuery(query).then(({ results }) => {
      setMovies(results);
    }).catch(error => console.log(error));
  }, [query]);


  const onSearchSubmit = resp => {
    setQuery(resp);
    setSearchParams({ query });
  };

  return (
    <>
      <SearchForm onSearchSubmit={ onSearchSubmit } />
      <MovieList movies={movies} />
    </>
  );
};
