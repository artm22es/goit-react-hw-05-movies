import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.spacing(5)};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${p => p.theme.colors.textColor};
  font-weight: 600;
  font-size: 30px;
`;
