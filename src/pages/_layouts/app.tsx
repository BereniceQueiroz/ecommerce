import {Outlet} from 'react-router-dom';

import {Header} from '@/components/Header/header';

export function AppLayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
