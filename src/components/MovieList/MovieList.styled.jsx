import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(10)};
`;

export const MovieLink = styled(Link)`
  display: inline-block;
  width: 100%;
  max-width: 200px;
  transition: transform 200ms linear;

   &:hover {
    transform: scale(105%);
    h3 {
      color: ${p => p.theme.colors.focusColor};
    }  
`;

export const MovieTitle = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
