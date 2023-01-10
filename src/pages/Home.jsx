// import { TrendMovies } from '../components/TrendMovies/TrendMovies'
import { MovieList } from '../components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};
export default Home;
