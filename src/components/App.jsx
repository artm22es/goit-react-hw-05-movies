import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/movies" element={<div>Movies</div>} />
      <Route path="/movies/:movieId" element={<div>MovieDetails</div>}>
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
      </Route>
    </Routes>
  );
};
