import { fetchMovieByName } from 'api';
import { ErrorMessage } from 'components/ErrorMessage';
import { Loader } from 'components/Loader/Loader';
import { MovieInput } from 'components/MovieInput/MovieInput';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [params] = useSearchParams();
  const query = params.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    async function getMovieByName() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieByName(query);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieByName();
  }, [query]);

  return (
    <div>
      <MovieInput />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <MovieList movies={movies} />
    </div>
  );
}
