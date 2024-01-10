import { useLocation } from 'react-router-dom';
import { StyledItem, StyledLink, StyledList } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <StyledList>
      {movies.map(({ title, name, id, poster_path, vote_average }) => {
        return (
          <StyledItem key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="poster"
              />
              <div>
                <h3>{title || name}</h3>
                <p>{vote_average.toFixed(1)}/10</p>
              </div>
            </StyledLink>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};
