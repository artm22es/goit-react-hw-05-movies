import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieListStyled = styled.ul`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(5)};
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 100px) / 5);
  max-height: 100%;
  min-height: 390px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.background};
  box-shadow: ${p => p.theme.shadows.mainShadow};
`;

export const MovieLink = styled(Link)`
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover img {
    filter: grayscale(0);
  }

  &:hover p {
    color: ${p => p.theme.colors.accent};
  }
`;

export const MovieImg = styled.img`
  margin-bottom: 5px;
  filter: grayscale(0.4);

  transition: all 200ms ease-in-out;
`;

export const MovieName = styled.p`
  height: 100%;
  padding: 10px 8px;
  font-weight: 500;
  font-size: 18px;
  transition: all 200ms ease-in-out;
`;
