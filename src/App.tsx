import {Helmet, HelmetProvider} from 'react-helmet-async';
import {ThemeProvider} from 'styled-components';

import {GlobalStyle} from '@/styles/global';
import theme from '@/styles/themes';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet titleTemplate="%s | Ecommerce" />
        <p>Ecomerce</p>
        <GlobalStyle />
      </HelmetProvider>
    </ThemeProvider>
  );
}
