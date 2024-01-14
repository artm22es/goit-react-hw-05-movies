import { useSearchParams } from 'react-router-dom';

export const MovieInput = () => {
  const [, setParams] = useSearchParams();

  const submitForm = evt => {
    evt.preventDefault();
    const query = evt.target.elements.movie.value;
    const nextParams = query ? { query } : {};
    setParams(nextParams);
  };

  return (
    <form onSubmit={submitForm}>
      <input name="movie" placeholder="Find your movie" />
      <button type="submit">Search</button>
    </form>
  );
};
