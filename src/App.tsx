import {Helmet, HelmetProvider} from 'react-helmet-async';
import {RouterProvider} from 'react-router-dom';

import {router} from '@/routes/index';
import {GlobalStyle} from '@/styles/global';
import theme from '@/styles/themes';
import {ThemeProvider} from 'styled-components';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet titleTemplate="%s | Ecommerce" />
        <RouterProvider router={router} />
        <GlobalStyle />
      </HelmetProvider>
    </ThemeProvider>
  );
}
