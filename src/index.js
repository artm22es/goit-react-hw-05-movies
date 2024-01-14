import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    textColor: '#F8F8FF',
  },

  shadows: {
    mainShadow: '-2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1)',
    insetShadow:
      'inset -2px -2px 5px #ffffff, inset 3px 3px 5px rgba(0, 0, 0, 0.1)',
  },

  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
