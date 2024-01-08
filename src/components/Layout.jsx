import styled from 'styled-components';
import { Navigation } from './Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const Container = styled.div`
  display: flex flex;
  flex-firection: column;
  gap: ${p => p.theme.spacing(6)};
  padding: ${p => p.theme.spacing(4)};
  max-width: 1200px;
  margin: 0 auto;
`;

export const Layout = () => {
  return (
    <Container>
      <header>
        <Navigation />
      </header>

      <Suspense fallback={`Loading page...`}>
        <Outlet />
      </Suspense>

      <Toaster position="top-right" />
    </Container>
  );
};
