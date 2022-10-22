import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  .container {
    max-width: 112rem;
  }

  body {
    font-size: 1.6rem;
    
    -webkit-font-smoothing: antialized;
    scroll-behavior: smooth;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    outline: none;
    border: none;
  }
`;