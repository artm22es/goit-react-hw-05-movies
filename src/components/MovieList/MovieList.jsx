import { useLocation } from 'react-router-dom';
import {
  MovieImg,
  MovieItem,
  MovieLink,
  MovieListStyled,
  MovieName,
} from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  return (
    <MovieListStyled>
      {movies.map(({ id, title, name, poster_path }) => {
        return (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <MovieImg
                src={poster_path ? `${imgBaseUrl}/${poster_path}` : defaultImg}
                alt="poster"
              />
              <MovieName>{title ?? name}</MovieName>
            </MovieLink>
          </MovieItem>
        );
      })}
    </MovieListStyled>
  );
};
