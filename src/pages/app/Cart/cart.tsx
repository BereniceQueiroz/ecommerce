import {Helmet} from 'react-helmet-async';

import {Breadcrumb} from '@/components/Breadcrumb/breadcrumb';
// import {useCart} from '@/context/cart-context';

import {breadcrumbItems} from './data';
import {Wrapper} from './styles';

export function Cart() {
  // const {items} = useCart();
  return (
    <Wrapper>
      <Helmet title="Carrinho" />
      <Breadcrumb items={breadcrumbItems} />
    </Wrapper>
  );
}
