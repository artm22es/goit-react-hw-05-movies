import { Suspense } from 'react';
import { Header, Nav, NavLinkStyled } from './Navigation.styled';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const Navigation = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavLinkStyled to="/">Home page</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies page</NavLinkStyled>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
