import { useLocation } from 'react-router-dom';
import { MovieLink, MovieListStyled, MovieTitle } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  const defaultImg = 'https://picsum.photos/200/300';

  return (
    <MovieListStyled>
      {movies.map(({ id, title, name, poster_path }) => {
        return (
          <li key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={poster_path ? `${imgBaseUrl}/${poster_path}` : defaultImg}
                alt="poster"
                width={200}
              />
              <MovieTitle>{title ?? name}</MovieTitle>
            </MovieLink>
          </li>
        );
      })}
    </MovieListStyled>
  );
};
