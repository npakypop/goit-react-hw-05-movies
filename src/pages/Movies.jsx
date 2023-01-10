import { SearchForm } from '../components/SearchForm/SearchForm';
import { MovieList } from '../components/MovieList/MovieList';
import { getMovieByQuery } from 'services/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("searchParams", searchParams)
  const movieName = searchParams.get("query") ?? "";
  // console.log('query', a);

    
  useEffect(() => {
    if (!query) return;
    getMovieByQuery(query).then(({ results }) => {
      setMovies(results);
    }).catch(error => console.log(error));
  }, [query]);


  const onSearchSubmit = resp => {
    console.log(resp);
    setQuery(resp);
    setSearchParams(resp !== "" ? { query: resp } : {});
  };

  return (
    <>
      <SearchForm onSearchSubmit={onSearchSubmit} value={movieName} />
      <MovieList movies={movies} />
    </>
  );
};
