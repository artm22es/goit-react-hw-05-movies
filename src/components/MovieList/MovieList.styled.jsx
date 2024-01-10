import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;
`;

export const StyledItem = styled.li`
  width: calc((100% - 60px) / 4);
  height: 200px;
`;

export const StyledLink = styled(Link)`
  object-fit: contain;
  position: relative;

  & > img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
