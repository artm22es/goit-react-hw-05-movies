import { useSearchParams } from 'react-router-dom';
import { SearchBtn, StyledForm, StyledInput } from './MovieInput.styled';

export const MovieInput = () => {
  const [, setParams] = useSearchParams();

  const submitForm = evt => {
    evt.preventDefault();
    const query = evt.target.elements.movie.value;
    const nextParams = query ? { query } : {};
    setParams(nextParams);
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <StyledInput name="movie" placeholder="Find your movie" />
      <SearchBtn type="submit">Search</SearchBtn>
    </StyledForm>
  );
};
