import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  padding: 20px;
  font-size: 14px;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.focusColor};
`;
