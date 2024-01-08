import { MovieItem } from 'components/MovieItem/MovieItem';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <MovieItem movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};
