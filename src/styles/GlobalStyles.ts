import { createGlobalStyle } from "styled-components";
import media from "./media";

const GlobalStyle = createGlobalStyle`

  :root{
    --col-dark-violet: hsl(256, 26%, 20%);
    --col-dark: hsl(270, 9%, 17%);
    --col-text: hsl(216, 30%, 68%) ;
    --col-gray:hsl(273, 4%, 51%);
    --col-light: hsl(0, 0%, 98%);

    --font-primary: 'Karla', sans-serif;
    --font-secondary: 'DM Serif Display', sans-serif;

    --height-header: 8rem;
  }

  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  ::-webkit-scrollbar{
    width: 1.8rem;
  }

  ::-webkit-scrollbar-track{
    background-color: var(--col-dark);
  }

  ::-webkit-scrollbar-thumb{
    background-color: var(--col-gray);
    border-radius: 10rem;
  
  }

  body{
    min-height: 100vh;
    font: 18px;
    font-family: var(--font-primary);
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    font-family: var(--font-secondary);
  font-weight: 500;
  font-size: 1.8rem;
  }

  h1,h2,h3{
    font-family: var(--font-secondary);
    color: var(--col-dark);
  }


  p{
    font-size: 1.6rem;
    color: var(--col-text);
    line-height: 1.7;

    ${media.laptop}{
      line-height: 1.4;

    }
  }

`;

export default GlobalStyle;
