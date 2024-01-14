import { Link } from 'react-router-dom';

export const AdditionalInfo = () => {
  return (
    <>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </>
  );
};
