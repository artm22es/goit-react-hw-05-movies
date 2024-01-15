import { fetchMovieCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastContainer, CastItem, CastList, ErrorInfo } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const data = await fetchMovieCast(movieId);
      setCast(data);
    };
    getCast();
  }, [movieId]);

  const defaultImg = 'https://picsum.photos/150/225';
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <CastContainer>
      {cast.length > 0 ? (
        <CastList>
          {cast.map(({ profile_path, name, character, id }) => {
            return (
              <CastItem key={id}>
                <img
                  src={
                    profile_path ? `${imgBaseUrl}/${profile_path}` : defaultImg
                  }
                  alt="actor"
                />
                <h3>{name}</h3>
                <p>Role: {character}</p>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <ErrorInfo>
          Sorry, we didn't find any information for this movie
        </ErrorInfo>
      )}
    </CastContainer>
  );
}
