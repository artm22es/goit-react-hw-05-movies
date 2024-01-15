import {
  Container,
  DetailsBox,
  GenresBox,
  GenresList,
  Text,
  Title,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const { poster_path, original_title, overview, vote_average, release_date } =
    movie;
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w400';
  const defaultImg = 'https://picsum.photos/400/600';

  return (
    <Container>
      <img
        src={poster_path ? `${imgBaseUrl}/${poster_path}` : defaultImg}
        width={400}
        alt={original_title}
      />
      <DetailsBox>
        <Title>{original_title}</Title>
        <Text>{overview}</Text>
        <Text>Rating: {vote_average.toFixed(1)}/10</Text>
        <Text>Release Date: {new Date(release_date).toLocaleDateString()}</Text>

        <GenresBox>
          <p>Genre:</p>
          <GenresList>
            {movie.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </GenresList>
        </GenresBox>
      </DetailsBox>
    </Container>
  );
};
