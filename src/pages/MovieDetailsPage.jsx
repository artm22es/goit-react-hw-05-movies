import { fetchMovieDetails } from 'api';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getDetails() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovieDetails(params.movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    get();
  }, [params.movieId]);

  return <div>Movie details page</div>;
}
