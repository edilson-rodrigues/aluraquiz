import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import IndexPage from '../src/components/Head';
import 'tailwindcss/tailwind.css';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    /* new styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    //Deixa em branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height:100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* head init */}
      <IndexPage />
      {/* head end */}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
