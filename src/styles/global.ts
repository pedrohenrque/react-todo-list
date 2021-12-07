import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    -webkit-font-smoothing: antialiased;
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
