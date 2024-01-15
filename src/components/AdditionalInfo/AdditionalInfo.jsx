import {
  AddInfoContainer,
  AddInfoLink,
  AddInfoList,
  AddInfoTitle,
} from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  return (
    <AddInfoContainer>
      <AddInfoTitle>Additional information :</AddInfoTitle>
      <AddInfoList>
        <li>
          <AddInfoLink to="cast">Cast</AddInfoLink>
        </li>
        <li>
          <AddInfoLink to="reviews">Reviews</AddInfoLink>
        </li>
      </AddInfoList>
    </AddInfoContainer>
  );
};
