import { StyledLink } from './BackLink.styled';

export const BackLink = ({ backLink }) => {
  return <StyledLink to={backLink.current}>← Go back</StyledLink>;
};
