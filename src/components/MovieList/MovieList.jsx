import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  return (
    <ul>
      {movies.map(({ id, title, name, poster_path }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={poster_path ? `${imgBaseUrl}/${poster_path}` : defaultImg}
                alt="poster"
              />
              <p>{title ?? name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
