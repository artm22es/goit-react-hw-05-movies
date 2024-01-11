import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${p => p.theme.colors.background};
  box-shadow: ${p => p.theme.shadows.mainShadow};
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
`;

export const Nav = styled.nav`
  margin-bottom: 20px;
  padding: 30px 0;
  max-width: 100%;
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  padding: 8px 14px;

  font-weight: 700;
  font-size: 22px;

  border-radius: 4px;

  transition: all 200ms ease-in-out;

  &.active {
    color: ${p => p.theme.colors.background};
    background-color: ${p => p.theme.colors.accent};
    box-shadow: ${p => p.theme.shadows.mainShadow};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }

  :focus {
    outline: 3px solid ${p => p.theme.colors.background};
    box-shadow: 0px 0px 0px 6px ${p => p.theme.colors.accent};
  }
`;
