import { Route, Routes } from 'react-router-dom';
// import { Home } from '../pages/Home';
// import { Movies } from '../pages/Movies';
// import { MovieCard } from '../pages/MovieCard';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const MovieCard = lazy(() => import('../pages/MovieCard'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieCard />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
