import { Link, useLocation } from 'react-router-dom';
import defImg from 'img/defImg.png';

export const MovieItem = ({ movie }) => {
  const location = useLocation();

  const getUrlPath = () =>
    location.pathname.includes('movies') ? `${movie.id}` : `movies/${movie.id}`;

  return (
    <Link to={getUrlPath()} state={{ from: location }}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : defImg
        }
        alt="poster"
      />
      <h2>{movie.original_title ?? movie.original_name}</h2>
    </Link>
  );
};
