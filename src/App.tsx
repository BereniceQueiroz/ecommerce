import {Helmet, HelmetProvider} from 'react-helmet-async';
import {RouterProvider} from 'react-router-dom';

import {router} from '@/routes/index';
import {GlobalStyle} from '@/styles/global';
import theme from '@/styles/themes';
import {QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'styled-components';

import {CartProvider} from './context/cart-context';
import {queryClient} from './lib/react-query';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet titleTemplate="%s | Ecommerce" />
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </QueryClientProvider>
        <GlobalStyle />
      </HelmetProvider>
    </ThemeProvider>
  );
}
