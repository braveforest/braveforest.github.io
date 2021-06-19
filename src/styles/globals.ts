import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    letter-spacing: -0.1rem;
    background: #485563;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #29323c, #485563);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  
  h1, h2, h3, h4, h5, h6 {
   margin: 0 0 .5rem 0;
  }
  
  a {
    text-decoration: none;
    color: white;
  }
`;

export const Container = styled.div`
  color: ${props => props.theme.colors.white};
  display: grid;
  height: 100vh; 
  grid-template-rows: 80px 80px auto 50px;
  grid-template-areas:
    "header"
    "nav"
    "content"
    "footer";

  /* @media ${props => props.theme.breakpoints.xs}{
    grid-template-columns: 0.5fr 2.5fr;
    grid-template-rows: 50px auto 50px;
    grid-template-areas:
      "header header"
      "nav content"
      "footer footer";
  } */

`;
export default GlobalStyles;