import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
  }
  body {
    background: ${props => props.theme.COLORS.WHITE};
    color: ${props => props.theme.COLORS.BLACK};
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }
  body, input, textarea, button {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    border: 0 none;
    outline: 0;
    box-shadow: 0 0 0 0;
  }
  input:focus,
  textarea:focus,
  button:focus,
  button:active,
  input:active,
  textarea:active {
    outline: none;
    box-shadow: none;
  }
`;
