import { fetchMovieDetails } from 'api';
import { ErrorMessage } from 'components/ErrorMessage';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(false);

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

  const { poster_path, vote_average, overview, genres, title } = movieDetails;
  const defaultImg = 'https://picsum.photos/300/200';

  return (
    <>
      {error && <ErrorMessage />}
      {movieDetails && (
        <div>
          {' '}
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w400/${poster_path}`
                : defaultImg
            }
            alt="character"
          />
          <h1>{title}</h1>
          {vote_average && <p>{vote_average.toFixed(1)}/10</p>}
          <h2>Overview: </h2>
          <p>{overview}</p>
          <ul>
            <h3>Genres: </h3>
            {genres?.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
}
