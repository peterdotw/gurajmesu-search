import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import theme from "../utils/theme";
import SEO from "../components/SEO";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  overflow: auto;
}

body {
  font-family: ${({ theme }) => theme.font.primary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: black;

  ::before {
    content: "";
    position: fixed;
    left: 0;
    top: 0;
    display: block;
    z-index: -10;
    background-image: url(${({ theme }) => theme.images.bg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
    width: 100%;
    height: 100%;
    filter: blur(4px) brightness(75%);
  }
}

.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
}

.ReactModal__Overlay--after-open {
    opacity: 1;
}

.ReactModal__Overlay--before-close {
    opacity: 0;
}

::-webkit-scrollbar {
  width: 0 !important;
  display: none;
  overflow: hidden;
}

::selection {
  background: #ff8ce8;
}

::-moz-selection {
  background: #ff8ce8;
}
`;

const Layout = ({ children }) => (
  <>
    <SEO />
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  </>
);

export default Layout;
