import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
  }
  body {
    background: ${props => props.theme.COLORS.WHITE};
    color: ${props => props.theme.COLORS.BLACK};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
  }
`;
