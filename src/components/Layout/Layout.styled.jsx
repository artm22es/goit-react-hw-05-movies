import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 30px 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  transition: color 200ms linear, text-decoration 200ms linear;

  &:hover {
    color: ${p => p.theme.colors.focusColor};
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  &.active {
    color: ${p => p.theme.colors.focusColor};
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;
