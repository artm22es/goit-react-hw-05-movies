import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html,body {
    scroll-behavior: smooth;
  }

  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }


  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  img {
    display: block;
    max-width: 100%;
  }

ul,
p,
h1,
h2 {
  margin: 0;
  padding: 0;
  list-style: none;
}

  a, a:visited {
    text-decoration: none;
    color:inherit;
  }`;
