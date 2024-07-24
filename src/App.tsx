import {ThemeProvider} from 'styled-components';

import {GlobalStyle} from '@/styles/global';
import theme from '@/styles/themes';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <p>teste</p>
    </ThemeProvider>
  );
}
