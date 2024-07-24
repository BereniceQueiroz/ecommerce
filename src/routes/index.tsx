import {createBrowserRouter} from 'react-router-dom';

import {AppLayout} from '@/pages/_layouts/app';
import {NotFound} from '@/pages/404/404';
import {Cart} from '@/pages/app/Cart/cart';
import {Home} from '@/pages/app/Home/home';
import {Error} from '@/pages/error/error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
