import {createBrowserRouter} from 'react-router-dom';

import {Cart} from '@/pages/app/Cart/cart';
import {Home} from '@/pages/app/Home/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/',
    element: <Cart />,
  },
]);
