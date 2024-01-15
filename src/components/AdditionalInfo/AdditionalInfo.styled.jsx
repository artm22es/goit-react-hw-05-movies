import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AddInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const AddInfoTitle = styled.h3`
  padding-right: 215px;
  font-size: 20px;
`;

export const AddInfoList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const AddInfoLink = styled(NavLink)`
  font-size: 20px;
  text-transform: uppercase;
  transition: color 200ms linear;

  &:hover {
    color: ${p => p.theme.colors.focusColor};
  }

  &.active {
    color: ${p => p.theme.colors.focusColor};
  }
`;
