import { createGlobalStyle } from 'styled-components';

import { colors } from '../shared/colors';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.background};
  }

  button {
    border: none;
  }

  body, input, button, a {
    font: 16px 'Readex Pro', sans-serif;
  }
  #root {
    margin: 0 auto;
  }

  button{
    cursor: pointer
  }
`;
