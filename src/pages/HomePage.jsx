import { fetchTrends } from 'api';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { ErrorMessage } from 'components/ErrorMessage';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrends() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchTrends();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getTrends();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <MovieList movies={movies} />
    </>
  );
}
