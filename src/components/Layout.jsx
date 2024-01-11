import { Toaster } from 'react-hot-toast';
import { Navigation } from './Navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Toaster position="top-right" />
    </>
  );
};
