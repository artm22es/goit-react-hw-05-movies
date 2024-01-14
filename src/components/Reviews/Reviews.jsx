import { fetchMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There is nothing to show</p>
      )}
    </div>
  );
}
