import {Outlet} from 'react-router-dom';

import {Header} from '@/components/Header/header';
import {useCart} from '@/context/cart-context';

export function AppLayout() {
  const {items} = useCart();

  return (
    <div>
      <Header productCount={items?.length ?? 0} />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
