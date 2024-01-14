export const MovieCard = ({ movie }) => {
  const {
    backdrop_path,
    poster_path,
    original_title,
    overview,
    vote_average,
    release_date,
  } = movie;
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w400';
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  return (
    <div>
      <img
        src={backdrop_path ? `${imgBaseUrl}/${poster_path}` : defaultImg}
        width={400}
        alt={original_title}
      />
      <div>
        <h3>{original_title}</h3>
        <p>{overview}</p>
        <p>Rating: {Math.round(vote_average * 10, 2)}%</p>
        <p>Release Date: {new Date(release_date).toLocaleDateString()}</p>

        <div>
          <p>Genre:</p>
          <ul>
            {movie.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
