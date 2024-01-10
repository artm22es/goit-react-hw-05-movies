import { fetchTrends } from 'api';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrends() {
      try {
        setLoading(true);
        setError(false);
        const trends = await fetchTrends();
        setMovies(trends.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTrends();
  }, []);

  return (
    <>
      {error && <p>Ooops, something went wrong...</p>}
      {loading && <p>Loading page...</p>}
      <MovieList movies={movies} />
    </>
  );
}
