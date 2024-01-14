import { fetchMovieDetails } from 'api';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { BackLink } from 'components/BackLink/BackLink';
import { ErrorMessage } from 'components/ErrorMessage';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setError(false);
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(true);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <BackLink backLink={backLink} />
      {error && <ErrorMessage />}
      {movieDetails && (
        <div>
          <MovieCard movie={movieDetails} />
          <AdditionalInfo />

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
}
