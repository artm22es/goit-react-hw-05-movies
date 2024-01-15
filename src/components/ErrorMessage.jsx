import styled from 'styled-components';

const ErrorStyled = styled.p`
  padding: 20px;
  color: ${p => p.theme.colors.focusColor};
  font-size: 20px;
`;

export const ErrorMessage = () => {
  return <ErrorStyled>Something went wrong...</ErrorStyled>;
};
