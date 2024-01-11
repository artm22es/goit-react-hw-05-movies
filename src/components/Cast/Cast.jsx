import { fetchMovieCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const data = await fetchMovieCast(movieId);
      data.cast && setCast(data.cast);
    };
    getCast();
  }, [movieId]);

  const defaultImg = 'https://picsum.photos/300/200';

  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ profile_path, name, character, id }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : defaultImg
                  }
                  alt="actor"
                />
                <h3>{name}</h3>
                <p>Role: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There is nothing to show</p>
      )}
    </div>
  );
};
